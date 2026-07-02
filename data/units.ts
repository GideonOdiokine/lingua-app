import type { Unit } from "@/types/learning";

export const units: Unit[] = [
  {
    id: "es-unit-1",
    languageId: "es",
    title: "Spanish Basics",
    description: "Start with greetings, names, and a few everyday words.",
    level: "beginner",
    order: 1,
    lessonIds: ["es-hello", "es-introductions"],
  },
  {
    id: "fr-unit-1",
    languageId: "fr",
    title: "French First Steps",
    description: "Practice polite greetings and simple classroom phrases.",
    level: "beginner",
    order: 1,
    lessonIds: ["fr-hello", "fr-polite-phrases"],
  },
  {
    id: "ja-unit-1",
    languageId: "ja",
    title: "Japanese Starters",
    description: "Learn a few polite greetings and simple self-introductions.",
    level: "beginner",
    order: 1,
    lessonIds: ["ja-hello", "ja-introductions"],
  },
];

export const unitsByLanguage = units.reduce<Record<string, Unit[]>>(
  (result, unit) => {
    result[unit.languageId] ??= [];
    result[unit.languageId].push(unit);
    return result;
  },
  {},
);
