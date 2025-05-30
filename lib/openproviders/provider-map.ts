import type { Provider, SupportedModel } from "./types"

// Mapa: każdy model przypisany do dostawcy ("dashscope")
const MODEL_PROVIDER_MAP: Record<string, Provider> = {
  "dashscope-qwen-turbo": "dashscope",
  "dashscope-qwen-plus-latest": "dashscope",
  "dashscope-qwen3-30b-a3b": "dashscope",
  "dashscope-qwq-plus": "dashscope",
  "dashscope-qwen3-32b": "dashscope",
}

// Funkcja do zwracania dostawcy modelu
export function getProviderForModel(model: SupportedModel): Provider {
  const provider = MODEL_PROVIDER_MAP[model]
  if (provider) return provider
  throw new Error(`Unknown provider for model: ${model}`)
}
