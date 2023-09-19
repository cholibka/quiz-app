import {Categories, Difficulties, QuizAPI} from "../constants/options.tsx";


export class Quiz {
    private static instance: Quiz;
    private quizDifficulty: Difficulties = Difficulties.Easy
    private quizCategory: Categories = Categories.Animals

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {

    }

    public static getInstance(): Quiz {
        if(!Quiz.instance) {
            Quiz.instance = new Quiz()
        }

        return Quiz.instance;
    }

    public set difficulty(newDifficulty: Difficulties) {
        this.quizDifficulty = newDifficulty;
    }

    public get difficulty() : Difficulties {
        return this.quizDifficulty
    }

    public set category(newCategory: Categories) {
        this.quizCategory = newCategory;
    }

    public get category() : Categories {
        return this.quizCategory
    }

    public getFullQuiz(category: Categories, difficulty: Difficulties) {
        const key = `${Categories[category]}${Difficulties[difficulty]}`
        const indexOfKey = Object.keys(QuizAPI).indexOf(key);
        const url = Object.values(QuizAPI)[indexOfKey];
        return fetch(url)
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            .then(response => response.json()
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                .then(data => data.results as Promise<ApiQuestion[]>))
            .then(response =>
                 response.map(q => formatQuestion(q))
            )
    }
}

function formatQuestion(q: ApiQuestion) : QuizQuestion {
    return {
        question: q.question,
        correct: q.correct_answer,
        incorrect: q.incorrect_answers
    }
}

export interface QuizQuestion {
    question: string,
    correct: string,
    incorrect: string[]
}

interface ApiQuestion {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}