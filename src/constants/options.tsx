export enum Categories {
    Animals ,
    Film,
    Computers,
}

export enum Difficulties {
    Easy,
    Medium,
    Hard,
}


export const enum UserOptions {
    Category = "Category",
    Difficulty = "Difficulty"
}

export enum QuizAPI {
    AnimalsEasy = "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple",
    AnimalsMedium = "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple",
    AnimalsHard = "https://opentdb.com/api.php?amount=10&category=27&difficulty=hard&type=multiple",
    FilmEasy = "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple",
    FilmMedium = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple",
    FilmHard = "https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple",
    ComputersEasy = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple",
    ComputersMedium = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple",
    ComputersHard = "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple"
}