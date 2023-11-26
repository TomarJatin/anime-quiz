export interface QuizQuestionObj {
    id: number;
    quiz_img: string;
    question: string;
    options: string[];
    answer: string;
    anime: string;
    tag: string;
    difficulty: number;
  }

export  interface QuizAnswerInterface {
    id: number;
    isSkipped: boolean;
    isCorrect: boolean;
  }