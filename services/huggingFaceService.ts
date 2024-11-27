import { axiosClassic } from '@/api/axios'
import { parseProsConsText } from '@/helpers'
import { Item } from '@/types/item'

interface GenerateProsConsResponse {
  data: { generated_text: string }[]
}

// TODO: Запрос и ответ не только на английском, но и на русском

class HuggingFaceService {
  async generateProsCons(idea: string): Promise<Item[]> {
    const systemMessage =
      'You are Qwen, created by Alibaba Cloud. You are a helpful assistant.'
    const userMessage = `Please generate a list of pros and cons for the idea '${idea}'. 
			The response should be structured as a list of objects, each containing two keys:
			- 'name': a description of the pro or con
			- 'type': either 'pros' or 'cons'`
    const combinedInput = `${systemMessage}\n${userMessage}`

    try {
      const response = await axiosClassic.post<GenerateProsConsResponse>(
        'Qwen/Qwen2.5-Coder-32B-Instruct',
        {
          inputs: combinedInput,
          parameters: {
            max_length: 1500, // Ограничиваем длину ответа
            max_new_tokens: 1000, // Устанавливаем максимальное количество новых токенов
            temperature: 0.7, // Степень креативности
          },
        },
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
