import React from "react"

export type Provider = {
  id: string
  name: string
  available: boolean
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// Zamiast ikony ustawiamy pustą funkcję-komponent (nie wyświetli nic)
const EmptyIcon: React.FC<React.SVGProps<SVGSVGElement>> = () => null

export const PROVIDERS: Provider[] = [
  {
    id: "dashscope",
    name: "DashScope",
    available: true,
    icon: EmptyIcon,
  },
  // Jeśli chcesz osobno pokazać inne modele DashScope, dodaj je tutaj z tą samą pustą ikoną:
  {
    id: "dashscope-qwen-turbo",
    name: "Qwen Turbo",
    available: true,
    icon: EmptyIcon,
  },
  {
    id: "dashscope-qwen-plus-latest",
    name: "Qwen Plus",
    available: true,
    icon: EmptyIcon,
  },
  {
    id: "dashscope-qwen3-30b-a3b",
    name: "Qwen3-30B-A3B",
    available: true,
    icon: EmptyIcon,
  },
  {
    id: "dashscope-qwq-plus",
    name: "QWQ Plus",
    available: true,
    icon: EmptyIcon,
  },
  {
    id: "dashscope-qwen3-32b",
    name: "Qwen-3-32B",
    available: true,
    icon: EmptyIcon,
  },
]
