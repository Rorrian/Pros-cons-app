import { axiosClassic } from '@/shared/api/axios'
import { ProsConsItem } from '@/shared/types/item'

import { parseProsConsText } from '../helpers/utils'

// TODO: Запрос и ответ не только на английском, но и на русском

interface GenerateProsConsResponse {
  data: { generated_text: string }[]
}

const defaultParameters = {
  max_length: 1500, // Длина ответа
  max_new_tokens: 1000, // Максимальное количество новых токенов
  temperature: 0.7, // "Степень креативности"
}

const generateRequestText = (idea: string): string => {
  const systemMessage =
    'You are Qwen, created by Alibaba Cloud. You are a helpful assistant.'
  const userMessage = `Please generate a list of pros and cons for the idea '${idea}'. 
	The response should be structured as a list of objects, each containing two keys:
	- 'name': a description of the pro or con
	- 'type': either 'pros' or 'cons'`

  return `${systemMessage}\n${userMessage}`
}

class HuggingFaceService {
  async generateProsCons(idea: string): Promise<ProsConsItem[]> {
    try {
      const requestPayload = {
        inputs: generateRequestText(idea),
        parameters: defaultParameters,
      }

      const response = await axiosClassic.post<GenerateProsConsResponse>(
        '1Qwen/Qwen2.5-Coder-32B-Instruct',
        requestPayload,
      )

      if (!response?.data || !Array.isArray(response.data)) {
        throw new Error('Invalid data received from the API')
      }

      const { data, error } = parseProsConsText(response.data[0].generated_text)

      if (error) {
        throw new Error(error)
      }

      return data || []
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : 'Error during pros/cons generation: An unknown error occurred',
      )
    }
  }
}

export default new HuggingFaceService()
