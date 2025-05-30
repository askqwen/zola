import { dashscopeModels } from "./data/dashscope"
import type { ModelConfig } from "./types"

// Static models (tylko DashScope)
export const STATIC_MODELS: ModelConfig[] = [
  ...dashscopeModels,
]

// Dynamic models cache (niepotrzebne — DashScope nie wymaga dynamicznego wykrywania, ale zostawiamy strukturę na przyszłość)
let dynamicModelsCache: ModelConfig[] | null = null
let lastFetchTime = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minut

// Funkcja do pobierania wszystkich modeli (tu zawsze to samo)
export async function getAllModels(): Promise<ModelConfig[]> {
  // Używamy tylko statycznych modeli DashScope
  return STATIC_MODELS
}

// Funkcja do pobierania info o modelu po ID
export function getModelInfo(modelId: string): ModelConfig | undefined {
  return STATIC_MODELS.find(model => model.id === modelId)
}

// Dla zgodności — lista modeli
export const MODELS: ModelConfig[] = STATIC_MODELS

// Funkcja do „odświeżenia” cache — nie jest potrzebna, ale zostawiamy dla spójności
export function refreshModelsCache(): void {
  dynamicModelsCache = null
  lastFetchTime = 0
}
