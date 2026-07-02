import type { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  {
    id: "es-hello",
    languageId: "es",
    unitId: "es-unit-1",
    title: "Say Hello",
    description: "Learn your first Spanish greeting and a few easy words.",
    level: "beginner",
    xpReward: 10,
    estimatedMinutes: 4,
    goals: [
      {
        id: "es-hello-goal-1",
        type: "vocabulary",
        description: "Recognize three beginner Spanish words.",
        completionHint: "Match each Spanish word to its English meaning.",
      },
      {
        id: "es-hello-goal-2",
        type: "speaking",
        description: "Say a simple hello out loud.",
        completionHint: "Repeat each line slowly and clearly.",
      },
    ],
    vocabulary: [
      {
        id: "es-hola",
        target: "hola",
        translation: "hello",
        pronunciation: "OH-lah",
        example: "Hola, Ana.",
      },
      {
        id: "es-si",
        target: "si",
        translation: "yes",
        pronunciation: "see",
        example: "Si, gracias.",
      },
      {
        id: "es-no",
        target: "no",
        translation: "no",
        pronunciation: "noh",
        example: "No, gracias.",
      },
    ],
    phrases: [
      {
        id: "es-buenos-dias",
        target: "Buenos dias",
        translation: "Good morning",
        pronunciation: "BWEH-nohs DEE-ahs",
        usageNote: "Use this greeting earlier in the day.",
      },
      {
        id: "es-mucho-gusto",
        target: "Mucho gusto",
        translation: "Nice to meet you",
        pronunciation: "MOO-choh GOOS-toh",
        usageNote: "A friendly phrase after meeting someone new.",
      },
    ],
    activities: [
      {
        id: "es-hello-vocab",
        type: "vocabulary",
        title: "Word Warm-Up",
        instructions: "Read the Spanish word, then say the meaning in English.",
        items: [
          {
            id: "es-hola",
            target: "hola",
            translation: "hello",
            pronunciation: "OH-lah",
            example: "Hola, Ana.",
          },
          {
            id: "es-si",
            target: "si",
            translation: "yes",
            pronunciation: "see",
            example: "Si, gracias.",
          },
          {
            id: "es-no",
            target: "no",
            translation: "no",
            pronunciation: "noh",
            example: "No, gracias.",
          },
        ],
      },
      {
        id: "es-hello-quiz",
        type: "multiple-choice",
        title: "Quick Check",
        instructions: "Pick the best English meaning for each word.",
        questions: [
          {
            id: "es-hello-quiz-1",
            prompt: "What does hola mean?",
            correctAnswer: "hello",
            options: ["goodbye", "hello", "please"],
            explanation: "Hola is the most common casual way to say hello.",
          },
          {
            id: "es-hello-quiz-2",
            prompt: "What does si mean?",
            correctAnswer: "yes",
            options: ["yes", "no", "thanks"],
            explanation: "Si is used to answer yes.",
          },
        ],
      },
      {
        id: "es-hello-speak",
        type: "speaking",
        title: "Say It Out Loud",
        instructions: "Repeat each line like you are greeting someone new.",
        linesToPractice: ["Hola", "Buenos dias", "Mucho gusto"],
        coachTip: "Smile while speaking to keep the tone warm and natural.",
      },
    ],
    aiTeacherPrompt: {
      voice: "friendly-coach",
      lessonFocus: "Beginner Spanish greetings",
      systemPrompt:
        "You are a warm Spanish teacher for absolute beginners. Keep every response short, clear, and easy to repeat. Focus on greetings, confidence, and gentle correction.",
      openingLine:
        "Hola. Today we will practice hello, good morning, and nice to meet you.",
      listeningFocus: "Help the learner notice the difference between hola and buenos dias.",
      speakingFocus:
        "Encourage slow repetition and praise clear pronunciation before correcting small mistakes.",
      suggestedFollowUpQuestions: [
        "Can you say hola one more time?",
        "How would you greet someone in the morning?",
        "Can you say mucho gusto after me?",
      ],
    },
  },
  {
    id: "es-introductions",
    languageId: "es",
    unitId: "es-unit-1",
    title: "Introduce Yourself",
    description: "Share your name and ask someone else theirs.",
    level: "beginner",
    xpReward: 12,
    estimatedMinutes: 5,
    goals: [
      {
        id: "es-intro-goal-1",
        type: "phrase",
        description: "Use two short introduction phrases.",
        completionHint: "Practice both phrases in order like a mini dialogue.",
      },
      {
        id: "es-intro-goal-2",
        type: "listening",
        description: "Identify a question about someone's name.",
        completionHint: "Listen for the phrase como te llamas.",
      },
    ],
    vocabulary: [
      {
        id: "es-me-llamo",
        target: "me llamo",
        translation: "my name is",
        pronunciation: "meh YAH-moh",
        example: "Me llamo Leo.",
      },
      {
        id: "es-amigo",
        target: "amigo",
        translation: "friend",
        pronunciation: "ah-MEE-goh",
        example: "Mi amigo es amable.",
      },
    ],
    phrases: [
      {
        id: "es-como-te-llamas",
        target: "Como te llamas?",
        translation: "What is your name?",
        pronunciation: "KOH-moh teh YAH-mahs",
        usageNote: "Use it when meeting someone for the first time.",
      },
      {
        id: "es-me-llamo-ana",
        target: "Me llamo Ana.",
        translation: "My name is Ana.",
        pronunciation: "meh YAH-moh AH-nah",
        usageNote: "Swap Ana with your own name.",
      },
    ],
    activities: [
      {
        id: "es-intro-phrases",
        type: "phrase-practice",
        title: "Dialogue Builder",
        instructions: "Read each phrase and imagine a short introduction.",
        items: [
          {
            id: "es-como-te-llamas",
            target: "Como te llamas?",
            translation: "What is your name?",
            pronunciation: "KOH-moh teh YAH-mahs",
            usageNote: "Use it when meeting someone for the first time.",
          },
          {
            id: "es-me-llamo-ana",
            target: "Me llamo Ana.",
            translation: "My name is Ana.",
            pronunciation: "meh YAH-moh AH-nah",
            usageNote: "Swap Ana with your own name.",
          },
        ],
      },
      {
        id: "es-intro-quiz",
        type: "multiple-choice",
        title: "Meaning Check",
        instructions: "Choose the phrase that matches the English sentence.",
        questions: [
          {
            id: "es-intro-quiz-1",
            prompt: "Which phrase means 'My name is Ana'?",
            correctAnswer: "Me llamo Ana.",
            options: ["Hola", "Me llamo Ana.", "Como te llamas?"],
            explanation: "Me llamo introduces your name.",
          },
        ],
      },
      {
        id: "es-intro-speak",
        type: "speaking",
        title: "Roleplay",
        instructions: "Pretend the teacher asks your name and answer clearly.",
        linesToPractice: ["Como te llamas?", "Me llamo Ana."],
        coachTip: "Pause between the question and answer to sound natural.",
      },
    ],
    aiTeacherPrompt: {
      voice: "friendly-coach",
      lessonFocus: "Spanish beginner introductions",
      systemPrompt:
        "You are a patient Spanish audio coach helping a beginner practice introductions. Use tiny dialogue turns, repeat key phrases, and keep the learner relaxed.",
      openingLine:
        "Vamos a presentarnos. First, ask a name. Then, answer with me llamo.",
      listeningFocus:
        "Help the learner hear when a sentence is a question versus an answer.",
      speakingFocus:
        "Encourage the learner to replace Ana with their own name during practice.",
      suggestedFollowUpQuestions: [
        "Can you ask me my name in Spanish?",
        "Now answer with me llamo and your name.",
        "Can you repeat the full two-line dialogue?",
      ],
    },
  },
  {
    id: "fr-hello",
    languageId: "fr",
    unitId: "fr-unit-1",
    title: "Say Bonjour",
    description: "Start French with a greeting and two simple response words.",
    level: "beginner",
    xpReward: 10,
    estimatedMinutes: 4,
    goals: [
      {
        id: "fr-hello-goal-1",
        type: "vocabulary",
        description: "Recognize beginner French greeting words.",
        completionHint: "Practice bonjour, oui, and non together.",
      },
      {
        id: "fr-hello-goal-2",
        type: "speaking",
        description: "Say bonjour with clear pronunciation.",
        completionHint: "Keep the final sound soft and smooth.",
      },
    ],
    vocabulary: [
      {
        id: "fr-bonjour",
        target: "bonjour",
        translation: "hello",
        pronunciation: "bohn-ZHOOR",
        example: "Bonjour, Marie.",
      },
      {
        id: "fr-oui",
        target: "oui",
        translation: "yes",
        pronunciation: "wee",
        example: "Oui, merci.",
      },
      {
        id: "fr-non",
        target: "non",
        translation: "no",
        pronunciation: "noh",
        example: "Non, merci.",
      },
    ],
    phrases: [
      {
        id: "fr-bonsoir",
        target: "Bonsoir",
        translation: "Good evening",
        pronunciation: "bohn-SWAHR",
        usageNote: "Use this later in the day.",
      },
      {
        id: "fr-enchante",
        target: "Enchante",
        translation: "Nice to meet you",
        pronunciation: "ahn-shahn-TAY",
        usageNote: "A polite phrase after introductions.",
      },
    ],
    activities: [
      {
        id: "fr-hello-vocab",
        type: "vocabulary",
        title: "Word Warm-Up",
        instructions: "Say the French word, then say the English meaning.",
        items: [
          {
            id: "fr-bonjour",
            target: "bonjour",
            translation: "hello",
            pronunciation: "bohn-ZHOOR",
            example: "Bonjour, Marie.",
          },
          {
            id: "fr-oui",
            target: "oui",
            translation: "yes",
            pronunciation: "wee",
            example: "Oui, merci.",
          },
          {
            id: "fr-non",
            target: "non",
            translation: "no",
            pronunciation: "noh",
            example: "Non, merci.",
          },
        ],
      },
      {
        id: "fr-hello-quiz",
        type: "multiple-choice",
        title: "Quick Check",
        instructions: "Choose the meaning of each French word.",
        questions: [
          {
            id: "fr-hello-quiz-1",
            prompt: "What does bonjour mean?",
            correctAnswer: "hello",
            options: ["hello", "good night", "please"],
            explanation: "Bonjour is a common daytime greeting.",
          },
        ],
      },
      {
        id: "fr-hello-speak",
        type: "speaking",
        title: "Speak With Confidence",
        instructions: "Repeat these lines slowly and clearly.",
        linesToPractice: ["Bonjour", "Bonsoir", "Enchante"],
        coachTip: "Focus on rhythm first, then refine the accent later.",
      },
    ],
    aiTeacherPrompt: {
      voice: "friendly-coach",
      lessonFocus: "French greetings for beginners",
      systemPrompt:
        "You are a kind French teacher for absolute beginners. Keep phrases short, repeat often, and guide the learner through simple greetings.",
      openingLine:
        "Bonjour. We will practice hello, good evening, and nice to meet you.",
      listeningFocus:
        "Help the learner hear the difference between bonjour and bonsoir.",
      speakingFocus:
        "Coach the learner to speak slowly and keep the sounds connected.",
      suggestedFollowUpQuestions: [
        "Can you say bonjour after me?",
        "Which phrase would you use in the evening?",
        "Can you say enchante one more time?",
      ],
    },
  },
  {
    id: "fr-polite-phrases",
    languageId: "fr",
    unitId: "fr-unit-1",
    title: "Be Polite",
    description: "Practice basic French manners for short conversations.",
    level: "beginner",
    xpReward: 12,
    estimatedMinutes: 5,
    goals: [
      {
        id: "fr-polite-goal-1",
        type: "phrase",
        description: "Use thank you and please in context.",
        completionHint: "Say both phrases out loud in a mini dialogue.",
      },
      {
        id: "fr-polite-goal-2",
        type: "listening",
        description: "Recognize a polite response phrase.",
        completionHint: "Listen for de rien after merci.",
      },
    ],
    vocabulary: [
      {
        id: "fr-merci",
        target: "merci",
        translation: "thank you",
        pronunciation: "mehr-SEE",
        example: "Merci beaucoup.",
      },
      {
        id: "fr-sil-vous-plait",
        target: "s'il vous plait",
        translation: "please",
        pronunciation: "seel voo PLEH",
        example: "Un cafe, s'il vous plait.",
      },
    ],
    phrases: [
      {
        id: "fr-de-rien",
        target: "De rien",
        translation: "You're welcome",
        pronunciation: "duh ree-AHN",
        usageNote: "A friendly reply after merci.",
      },
      {
        id: "fr-merci-beaucoup",
        target: "Merci beaucoup",
        translation: "Thank you very much",
        pronunciation: "mehr-SEE boh-KOO",
        usageNote: "Use it when you want to sound extra grateful.",
      },
    ],
    activities: [
      {
        id: "fr-polite-phrases",
        type: "phrase-practice",
        title: "Polite Phrases",
        instructions: "Read each phrase and imagine using it in a cafe.",
        items: [
          {
            id: "fr-de-rien",
            target: "De rien",
            translation: "You're welcome",
            pronunciation: "duh ree-AHN",
            usageNote: "A friendly reply after merci.",
          },
          {
            id: "fr-merci-beaucoup",
            target: "Merci beaucoup",
            translation: "Thank you very much",
            pronunciation: "mehr-SEE boh-KOO",
            usageNote: "Use it when you want to sound extra grateful.",
          },
        ],
      },
      {
        id: "fr-polite-quiz",
        type: "multiple-choice",
        title: "Meaning Check",
        instructions: "Choose the best French phrase for each situation.",
        questions: [
          {
            id: "fr-polite-quiz-1",
            prompt: "How do you say 'You're welcome'?",
            correctAnswer: "De rien",
            options: ["Bonjour", "De rien", "Merci"],
            explanation: "De rien is a common reply after someone thanks you.",
          },
        ],
      },
      {
        id: "fr-polite-speak",
        type: "speaking",
        title: "Mini Roleplay",
        instructions: "Pretend you are ordering politely and thanking someone.",
        linesToPractice: ["S'il vous plait", "Merci beaucoup", "De rien"],
        coachTip: "Use a gentle tone to match the polite meaning.",
      },
    ],
    aiTeacherPrompt: {
      voice: "friendly-coach",
      lessonFocus: "French polite phrases",
      systemPrompt:
        "You are a supportive French speaking coach. Help the learner practice thank you, please, and you're welcome with clear examples and short repetition.",
      openingLine:
        "Let's practice polite French for everyday situations like a cafe or shop.",
      listeningFocus:
        "Help the learner notice the response flow: merci, then de rien.",
      speakingFocus:
        "Prompt the learner to keep a soft, polite tone when repeating phrases.",
      suggestedFollowUpQuestions: [
        "Can you say thank you very much in French?",
        "How would you politely say please?",
        "What could someone reply after merci?",
      ],
    },
  },
  {
    id: "ja-hello",
    languageId: "ja",
    unitId: "ja-unit-1",
    title: "Say Konnichiwa",
    description: "Meet a few polite Japanese greetings for daily use.",
    level: "beginner",
    xpReward: 10,
    estimatedMinutes: 4,
    goals: [
      {
        id: "ja-hello-goal-1",
        type: "vocabulary",
        description: "Recognize three high-frequency Japanese words.",
        completionHint: "Review konnichiwa, hai, and iie together.",
      },
      {
        id: "ja-hello-goal-2",
        type: "speaking",
        description: "Say a polite greeting with steady pacing.",
        completionHint: "Break the greeting into simple syllables.",
      },
    ],
    vocabulary: [
      {
        id: "ja-konnichiwa",
        target: "konnichiwa",
        translation: "hello",
        pronunciation: "kohn-nee-chee-wah",
        example: "Konnichiwa, Yuki.",
      },
      {
        id: "ja-hai",
        target: "hai",
        translation: "yes",
        pronunciation: "high",
        example: "Hai, wakarimashita.",
      },
      {
        id: "ja-iie",
        target: "iie",
        translation: "no",
        pronunciation: "ee-eh",
        example: "Iie, daijobu desu.",
      },
    ],
    phrases: [
      {
        id: "ja-ohayo",
        target: "ohayo gozaimasu",
        translation: "good morning",
        pronunciation: "oh-hah-yoh goh-zah-ee-mahs",
        usageNote: "A polite morning greeting.",
      },
      {
        id: "ja-hajimemashite",
        target: "hajimemashite",
        translation: "nice to meet you",
        pronunciation: "hah-jee-meh-mahsh-teh",
        usageNote: "Use it when meeting someone for the first time.",
      },
    ],
    activities: [
      {
        id: "ja-hello-vocab",
        type: "vocabulary",
        title: "Word Warm-Up",
        instructions: "Read the romaji and say the meaning in English.",
        items: [
          {
            id: "ja-konnichiwa",
            target: "konnichiwa",
            translation: "hello",
            pronunciation: "kohn-nee-chee-wah",
            example: "Konnichiwa, Yuki.",
          },
          {
            id: "ja-hai",
            target: "hai",
            translation: "yes",
            pronunciation: "high",
            example: "Hai, wakarimashita.",
          },
          {
            id: "ja-iie",
            target: "iie",
            translation: "no",
            pronunciation: "ee-eh",
            example: "Iie, daijobu desu.",
          },
        ],
      },
      {
        id: "ja-hello-quiz",
        type: "multiple-choice",
        title: "Quick Check",
        instructions: "Choose the best English meaning for each word.",
        questions: [
          {
            id: "ja-hello-quiz-1",
            prompt: "What does konnichiwa mean?",
            correctAnswer: "hello",
            options: ["hello", "thank you", "goodbye"],
            explanation: "Konnichiwa is a common daytime greeting.",
          },
        ],
      },
      {
        id: "ja-hello-speak",
        type: "speaking",
        title: "Polite Speaking",
        instructions: "Repeat these greetings with calm, even pacing.",
        linesToPractice: ["Konnichiwa", "Ohayo gozaimasu", "Hajimemashite"],
        coachTip: "Keep each syllable crisp instead of rushing the whole word.",
      },
    ],
    aiTeacherPrompt: {
      voice: "friendly-coach",
      lessonFocus: "Japanese greetings in romaji",
      systemPrompt:
        "You are a gentle Japanese speaking coach for beginners. Use romaji only, keep examples short, and help the learner practice polite greetings with confidence.",
      openingLine:
        "Konnichiwa. Today we will practice hello, good morning, and nice to meet you.",
      listeningFocus:
        "Guide the learner to hear each syllable clearly in konnichiwa and hajimemashite.",
      speakingFocus:
        "Coach the learner to slow down and repeat each line in a calm, polite tone.",
      suggestedFollowUpQuestions: [
        "Can you say konnichiwa after me?",
        "Which phrase means good morning?",
        "Can you repeat hajimemashite one more time?",
      ],
    },
  },
  {
    id: "ja-introductions",
    languageId: "ja",
    unitId: "ja-unit-1",
    title: "Simple Introductions",
    description: "Share your name politely in beginner Japanese.",
    level: "beginner",
    xpReward: 12,
    estimatedMinutes: 5,
    goals: [
      {
        id: "ja-intro-goal-1",
        type: "phrase",
        description: "Say a short self-introduction politely.",
        completionHint: "Practice your name sentence and hajimemashite together.",
      },
      {
        id: "ja-intro-goal-2",
        type: "listening",
        description: "Recognize the pattern for saying your name.",
        completionHint: "Listen for namae wa and desu.",
      },
    ],
    vocabulary: [
      {
        id: "ja-namae",
        target: "namae",
        translation: "name",
        pronunciation: "nah-mah-eh",
        example: "Namae wa Mika desu.",
      },
      {
        id: "ja-watashi",
        target: "watashi",
        translation: "I / me",
        pronunciation: "wah-tah-shee",
        example: "Watashi wa Ken desu.",
      },
    ],
    phrases: [
      {
        id: "ja-watashi-wa-ken",
        target: "watashi wa Ken desu",
        translation: "I am Ken",
        pronunciation: "wah-tah-shee wah Ken dehs",
        usageNote: "Replace Ken with your own name.",
      },
      {
        id: "ja-yoroshiku",
        target: "yoroshiku onegaishimasu",
        translation: "Please treat me kindly",
        pronunciation: "yoh-roh-shee-koo oh-neh-guy-shee-mahs",
        usageNote: "A polite closing phrase after introducing yourself.",
      },
    ],
    activities: [
      {
        id: "ja-intro-phrases",
        type: "phrase-practice",
        title: "Introduction Phrases",
        instructions: "Read each phrase and imagine saying it to a new classmate.",
        items: [
          {
            id: "ja-watashi-wa-ken",
            target: "watashi wa Ken desu",
            translation: "I am Ken",
            pronunciation: "wah-tah-shee wah Ken dehs",
            usageNote: "Replace Ken with your own name.",
          },
          {
            id: "ja-yoroshiku",
            target: "yoroshiku onegaishimasu",
            translation: "Please treat me kindly",
            pronunciation: "yoh-roh-shee-koo oh-neh-guy-shee-mahs",
            usageNote: "A polite closing phrase after introducing yourself.",
          },
        ],
      },
      {
        id: "ja-intro-quiz",
        type: "multiple-choice",
        title: "Meaning Check",
        instructions: "Choose the phrase that matches the English sentence.",
        questions: [
          {
            id: "ja-intro-quiz-1",
            prompt: "Which phrase means 'I am Ken'?",
            correctAnswer: "watashi wa Ken desu",
            options: [
              "konnichiwa",
              "watashi wa Ken desu",
              "yoroshiku onegaishimasu",
            ],
            explanation: "Watashi wa ... desu is a common beginner pattern for self-introduction.",
          },
        ],
      },
      {
        id: "ja-intro-speak",
        type: "speaking",
        title: "Roleplay",
        instructions: "Pretend you are meeting someone and introduce yourself.",
        linesToPractice: ["Hajimemashite", "Watashi wa Ken desu", "Yoroshiku onegaishimasu"],
        coachTip: "Leave a small pause between each phrase to sound more natural.",
      },
    ],
    aiTeacherPrompt: {
      voice: "friendly-coach",
      lessonFocus: "Japanese self-introductions in romaji",
      systemPrompt:
        "You are a patient Japanese audio teacher for beginners. Use romaji, short repetition, and supportive praise while teaching self-introductions.",
      openingLine:
        "Let's introduce ourselves in Japanese with hajimemashite and watashi wa ... desu.",
      listeningFocus:
        "Help the learner hear the repeating sentence pattern in a simple self-introduction.",
      speakingFocus:
        "Encourage the learner to insert their own name and say the full introduction slowly.",
      suggestedFollowUpQuestions: [
        "Can you say hajimemashite first?",
        "Now say watashi wa and your name.",
        "Can you finish with yoroshiku onegaishimasu?",
      ],
    },
  },
];

export const lessonsByLanguage = lessons.reduce<Record<string, Lesson[]>>(
  (result, lesson) => {
    result[lesson.languageId] ??= [];
    result[lesson.languageId].push(lesson);
    return result;
  },
  {},
);

export const lessonsByUnit = lessons.reduce<Record<string, Lesson[]>>(
  (result, lesson) => {
    result[lesson.unitId] ??= [];
    result[lesson.unitId].push(lesson);
    return result;
  },
  {},
);
