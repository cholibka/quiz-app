import Button from "./Button.tsx";
import {gradientValues} from "../constants/buttonGradient.tsx";
import {Categories, Difficulties, UserOptions} from "../constants/options.tsx";
import {Quiz} from "../utils/Quiz.ts";

interface IOptions {
    name: string
}

export default function Options({name} : IOptions) {
    const quizOptions = Quiz.getInstance()

    const setDifficulty = (difficulty: Difficulties) => {
        quizOptions.difficulty = difficulty
    }

    const setCategory = (category: Categories) => {
        quizOptions.category = category
    }

    return (
        <div className="grid items-center place-items-center place-content-center">
            {name == UserOptions.Category &&
                <>
                    <h1 className="text-5xl font-medium text-center text-black dark:text-slate-300">
                            Choose category
                    </h1>
                    <div className="m-20 grid grid-cols-3 justify-items-center gap-4">
                        {Object.keys(Categories).filter((key) => isNaN(Number(key)))
                            .map((key, index) => (
                                <div onClick={() => setCategory(Categories[key as keyof typeof Categories])} key={key}>
                                    <Button name={key} transition={gradientValues[index as keyof typeof gradientValues]} key={index} link={`/${UserOptions.Difficulty.toLowerCase()}`}/>
                                </div>
                            )
                        )}
                    </div>
                </>
            }
            {name == UserOptions.Difficulty &&
                <>
                    <h1 className="text-5xl font-medium text-center text-black dark:text-slate-300">
                        Choose difficulty
                    </h1>
                    <div className="m-20 grid grid-cols-3 justify-items-center gap-4">
                        {Object.keys(Difficulties).filter((key) => isNaN(Number(key)))
                            .map((key, index) => (
                                <div onClick={() => setDifficulty(Difficulties[key as keyof typeof Difficulties])} key={key}>
                                    <Button name={key} transition={gradientValues[index as keyof typeof gradientValues]} key={index} link={"/quiz"}/>
                                </div>
                                )
                            )}
                    </div>
                </>
            }
        </div>
    )
}