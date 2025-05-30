import type { LanguageModelV1 } from "ai"

// Konfiguracja pojedynczego modelu DashScope
export type ModelConfig = {
  id: string // "dashscope-qwen-turbo"
  name: string // "Qwen Turbo"
  provider: string // "dashscope"
  providerId: string // "dashscope"
  modelFamily?: string // "Qwen"

  description?: string // Krótki opis modelu
  tags?: string[] // ["fast", "cheap", "OSS"]

  contextWindow?: number // Liczba tokenów
  inputCost?: number // USD za 1M tokenów wejścia
  outputCost?: number // USD za 1M tokenów wyjścia
  priceUnit?: string // np. "per 1M tokens"

  vision?: boolean
  tools?: boolean
  audio?: boolean
  reasoning?: boolean
  openSource?: boolean

  speed?: "Fast" | "Medium" | "Slow"
  intelligence?: "Low" | "Medium" | "High"

  website?: string // Strona producenta
  apiDocs?: string // Dokumentacja API
  modelPage?: string // Strona produktu
  releasedAt?: string // Data wydania

  apiSdk?: () => LanguageModelV1
}
