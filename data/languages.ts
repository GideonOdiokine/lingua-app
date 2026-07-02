import type { SupportedLanguage } from "@/types/learning";

export const languages: SupportedLanguage[] = [
  {
    id: "es",
    name: "Spanish",
    nativeName: "Espanol",
    flagCode: "ES",
    learnersCount: "28.4M learners",
    learnerDescription:
      "A popular beginner language with practical travel use.",
    sampleGreeting: "Hola",
    difficultyNote:
      "Great for first-time learners because spelling is consistent.",
    defaultLevel: "beginner",
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Francais",
    flagCode: "FR",
    learnersCount: "19.4M learners",
    learnerDescription:
      "A friendly choice for greetings, food, and everyday chat.",
    sampleGreeting: "Bonjour",
    difficultyNote:
      "Pronunciation takes practice, but beginner phrases are very useful.",
    defaultLevel: "beginner",
  },
  {
    id: "ja",
    name: "Japanese",
    nativeName: "Nihongo",
    flagCode: "JP",
    learnersCount: "12.7M learners",
    learnerDescription:
      "A fun option for polite conversation and common travel phrases.",
    sampleGreeting: "Konnichiwa",
    difficultyNote:
      "Sentence structure feels new at first, so short guided lessons help.",
    defaultLevel: "beginner",
  },
  // {
  //   id: "ko",
  //   name: "Korean",
  //   nativeName: "Hangug-eo",
  //   flagCode: "KR",
  //   learnersCount: "9.3M learners",
  //   learnerDescription: "Useful for travel, pop culture, and polite everyday phrases.",
  //   sampleGreeting: "Annyeonghaseyo",
  //   difficultyNote: "Honorifics take practice, but common greetings are approachable.",
  //   defaultLevel: "beginner",
  // },
  {
    id: "de",
    name: "German",
    nativeName: "Deutsch",
    flagCode: "DE",
    learnersCount: "8.1M learners",
    learnerDescription:
      "A strong choice for travel, study, and clear everyday conversation.",
    sampleGreeting: "Hallo",
    difficultyNote:
      "Word order shifts a bit, but many beginner words feel familiar.",
    defaultLevel: "beginner",
  },
  // {
  //   id: "zh",
  //   name: "Chinese",
  //   nativeName: "Zhongwen",
  //   flagCode: "CN",
  //   learnersCount: "7.4M learners",
  //   learnerDescription: "Great for foundational phrases, tones, and practical greetings.",
  //   sampleGreeting: "Ni hao",
  //   difficultyNote: "Tones take focused listening, so short daily practice helps a lot.",
  //   defaultLevel: "beginner",
  // },
];

export const languageMap = Object.fromEntries(
  languages.map((language) => [language.id, language]),
) as Record<SupportedLanguage["id"], SupportedLanguage>;
