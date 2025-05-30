import type { LanguageModelV1 } from "@ai-sdk/provider"

export type ModelConfig = {
  id: string
  name: string
  modelIdentifier: string
  apiEndpoint: string
  supportsImages: boolean
  supportsSystemInstruction: boolean
  temperature: number
  topP: number
  apiKey?: string
}

// Klucz API do DashScope
const API_KEY = "sk-cdd0b77aaed04d68b9f84408dd6e9348"

// Pełna lista modeli DashScope
export const AVAILABLE_MODELS: ModelConfig[] = [
  {
    id: 'dashscope-qwen-turbo',
    name: 'Qwen Turbo',
    modelIdentifier: 'qwen-turbo-latest',
    apiEndpoint: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions',
    supportsImages: false,
    supportsSystemInstruction: true,
    temperature: 0.0,
    topP: 0.0,
    apiKey: API_KEY
  },
  {
    id: 'dashscope-qwen-plus-latest',
    name: 'Qwen Plus',
    modelIdentifier: 'qwen-plus-latest',
    apiEndpoint: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions',
    supportsImages: false, 
    supportsSystemInstruction: true, 
    temperature: 0.2, 
    topP: 0.0, 
    apiKey: API_KEY
  },
  {
    id: 'dashscope-qwen3-30b-a3b',
    name: 'Qwen3-30B-A3B',
    modelIdentifier: 'qwen3-30b-a3b',
    apiEndpoint: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions',
    supportsImages: false,
    supportsSystemInstruction: true,
    temperature: 0.2,
    topP: 0.0,
    apiKey: API_KEY
  },
  {
    id: 'dashscope-qwq-plus',
    name: 'QWQ Plus',
    modelIdentifier: 'qwq-plus',
    apiEndpoint: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions',
    supportsImages: false,
    supportsSystemInstruction: true,
    temperature: 0.2,
    topP: 0.0,
    apiKey: API_KEY
  },
  {
    id: 'dashscope-qwen3-32b',
    name: 'Qwen-3-32B',
    modelIdentifier: 'qwen3-32b',
    apiEndpoint: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions',
    supportsImages: false,
    supportsSystemInstruction: true,
    temperature: 0.2,
    topP: 0.0,
    apiKey: API_KEY
  }
]

// Funkcja wywołująca model DashScope
export async function dashscope(
  modelId: string,
  messages: any[],
  extraOptions?: Partial<Pick<ModelConfig, "temperature" | "topP">>
): Promise<any> {
  const model = AVAILABLE_MODELS.find((m) => m.id === modelId)
  if (!model) throw new Error(`Model ${modelId} not found in AVAILABLE_MODELS`)
  const { apiEndpoint, modelIdentifier, temperature, topP, apiKey } = model
  const usedTemp = extraOptions?.temperature ?? temperature
  const usedTopP = extraOptions?.topP ?? topP

  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: modelIdentifier,
      messages,
      temperature: usedTemp,
      top_p: usedTopP,
    }),
  })

  if (!response.ok) {
    throw new Error(`DashScope API error: ${response.statusText}`)
  }

  return await response.json()
}
