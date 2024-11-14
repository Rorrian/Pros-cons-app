import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const HUGGINGFACE_API_URL = 'https://api-inference.huggingface.co/models/'

const axiosOptions: AxiosRequestConfig = {
  baseURL: HUGGINGFACE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY}`,
  },
}

export const axiosClassic = axios.create(axiosOptions)

axiosClassic.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    console.error('AxiosError:', error)

    throw error
  },
)
