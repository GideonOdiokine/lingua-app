export type LanguageCode = "es" | "fr" | "ja" | "ko" | "de" | "zh";

export type ProficiencyLevel = "beginner";

export type LessonActivityType =
  | "vocabulary"
  | "phrase-practice"
  | "multiple-choice"
  | "speaking";

export type LessonGoalType =
  | "vocabulary"
  | "phrase"
  | "listening"
  | "speaking";

export interface SupportedLanguage {
  id: LanguageCode;
  name: string;
  nativeName: string;
  flagCode: string;
  learnersCount: string;
  learnerDescription: string;
  sampleGreeting: string;
  difficultyNote: string;
  defaultLevel: ProficiencyLevel;
}

export interface VocabularyItem {
  id: string;
  target: string;
  translation: string;
  pronunciation: string;
  example: string;
}

export interface PhraseItem {
  id: string;
  target: string;
  translation: string;
  pronunciation: string;
  usageNote: string;
}

export interface LessonGoal {
  id: string;
  type: LessonGoalType;
  description: string;
  completionHint: string;
}

export interface MultipleChoiceQuestion {
  id: string;
  prompt: string;
  correctAnswer: string;
  options: string[];
  explanation: string;
}

interface BaseLessonActivity {
  id: string;
  type: LessonActivityType;
  title: string;
  instructions: string;
}

export interface VocabularyActivity extends BaseLessonActivity {
  type: "vocabulary";
  items: VocabularyItem[];
}

export interface PhrasePracticeActivity extends BaseLessonActivity {
  type: "phrase-practice";
  items: PhraseItem[];
}

export interface MultipleChoiceActivity extends BaseLessonActivity {
  type: "multiple-choice";
  questions: MultipleChoiceQuestion[];
}

export interface SpeakingActivity extends BaseLessonActivity {
  type: "speaking";
  linesToPractice: string[];
  coachTip: string;
}

export type LessonActivity =
  | VocabularyActivity
  | PhrasePracticeActivity
  | MultipleChoiceActivity
  | SpeakingActivity;

export interface AITeacherPrompt {
  voice: "friendly-coach";
  lessonFocus: string;
  systemPrompt: string;
  openingLine: string;
  listeningFocus: string;
  speakingFocus: string;
  suggestedFollowUpQuestions: string[];
}

export interface Lesson {
  id: string;
  languageId: LanguageCode;
  unitId: string;
  title: string;
  description: string;
  level: ProficiencyLevel;
  xpReward: number;
  estimatedMinutes: number;
  goals: LessonGoal[];
  vocabulary: VocabularyItem[];
  phrases: PhraseItem[];
  activities: LessonActivity[];
  aiTeacherPrompt: AITeacherPrompt;
}

export interface Unit {
  id: string;
  languageId: LanguageCode;
  title: string;
  description: string;
  level: ProficiencyLevel;
  order: number;
  lessonIds: string[];
}
