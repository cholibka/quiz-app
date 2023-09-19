import {Quiz, QuizQuestion} from "../utils/Quiz.ts";
import {useEffect, useRef, useState} from "react";
import Button from "./Button.tsx";
import {gradientValues} from "../constants/buttonGradient.tsx";
import {useNavigate} from "react-router-dom";
import ProgressBar from "./ProgressBar.tsx";

export default function Question() {
    //REFS
    const questionContainerRef = useRef<HTMLDivElement>(null)
    const questionNumberRefs = useRef<HTMLDivElement[]>([]);
    const questionTextRef = useRef<HTMLHeadingElement>(null)
    const buttonTextRef = useRef<HTMLDivElement>(null)
    //NAVIGATION
    const navigate = useNavigate()
    //STATE
    const [questions, setQuestions] = useState<QuizQuestion[]>([])
    const [hasLoaded, setHasLoaded] = useState<boolean>(false)
    const [answers, setAnswers] = useState<string[]>([])
    const [questionId, setQuestionId] = useState<number>(0)
    const [angle, setAngle] = useState<number>(-36)

    const getQuestions = async () => {
        const quiz = Quiz.getInstance()
        await quiz.getFullQuiz(quiz.category, quiz.difficulty)
            .then(res => {
                setQuestions(res)
                setHasLoaded(true);

                console.log(res)
            })
    }

    useEffect(() => {
       getQuestions()
           .catch(console.error)
    }, [])


    const nextQuestion = (answer: string) => {
        if(questionId == 9) {
            let correct = 0;
            answers.push(answer)
            answers.forEach((val, index) => {
                if(val === questions[index].correct)
                    ++correct
            })

            navigate("/score", {
                state: {
                    correctAnswers: correct
                }
            })
        }
        else {
            setQuestionId(questionId + 1)
            setAnswers( [...answers, answer])
        }

        //ANIMATION
        const top = questionNumberRefs.current[questionId]
        const q = questionContainerRef.current

        top.classList.remove("qt")

        setAngle(angle - 36)
        if(q)
            q.style.transform = `rotateZ(${angle}deg)`

        for(let i = 0; i < 10; i++) {
            questionNumberRefs.current[i].style.transform = `rotateZ(${-angle}deg)`
        }

        const next = questionNumberRefs.current[questionId + 1]
        next.style.transform += " scale(1.7)"
        next.classList.add("qt")

        if(questionTextRef.current && buttonTextRef.current)
        {
            questionTextRef.current.animate(
                {
                    opacity: [0.25, 0.75, 1]
                },
                1000);

            buttonTextRef.current.animate(
                {
                    opacity: [0.25, 0.75, 1]
                },
                1000);

        }
    }

    const decodeHtmlCharCodes = (str : string) => {
        const decodedString = document.createElement("textarea");
        decodedString.innerHTML = str;
        return decodedString.value;
    }

    return (
        hasLoaded ?
            <div className="grid items-center place-items-center place-content-center content-center">
                <div className="container">
                    <div className="bottom">
                        <div className="question_number">
                            <div className="question_number_container" ref={questionContainerRef}>
                                <div className="question qt zero" ref={(el) => questionNumberRefs.current.push(el as HTMLDivElement)}>1</div>
                                <div className="question one" ref={(el) => questionNumberRefs.current.push(el as HTMLDivElement)}>2</div>
                                <div className="question two" ref={(el) => questionNumberRefs.current.push(el as HTMLDivElement)}>3</div>
                                <div className="question three" ref={(el) => questionNumberRefs.current.push(el as HTMLDivElement)}>4</div>
                                <div className="question four" ref={(el) => questionNumberRefs.current.push(el as HTMLDivElement)}>5</div>
                                <div className="question five" ref={(el) => questionNumberRefs.current.push(el as HTMLDivElement)}>6</div>
                                <div className="question six" ref={(el) => questionNumberRefs.current.push(el as HTMLDivElement)}>7</div>
                                <div className="question seven" ref={(el) => questionNumberRefs.current.push(el as HTMLDivElement)}>8</div>
                                <div className="question eight" ref={(el) => questionNumberRefs.current.push(el as HTMLDivElement)}>9</div>
                                <div className="question nine" ref={(el) => questionNumberRefs.current.push(el as HTMLDivElement)}>10</div>
                            </div>
                        </div>
                    </div>
                </div>
               <ProgressBar done={questionId/questions.length * 100}/>
                <h1 className="text-5xl font-medium text-black dark:text-slate-300 text-center" ref={questionTextRef}>
                    {decodeHtmlCharCodes(questions[questionId].question)}
                </h1>
                <div>
                    <div className="m-10 grid grid-cols-2 justify-items-center gap-4" ref={buttonTextRef}>
                        {questions[questionId].incorrect.concat(questions[questionId].correct).sort(() => 0.5 - Math.random())
                            .map((key, index) => (
                                    <div onClick={() => nextQuestion(key)} key={key}>
                                        <Button name={decodeHtmlCharCodes(key)} transition={gradientValues[index as keyof typeof gradientValues]} key={index} link={""}/>
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </div>
            :
            <div className="grid items-center place-items-center place-content-center">
                <div className="loader rounded-full border-8 border-t-8 border-t-yellow-200 dark:border-gray-800 dark:border-t-blue-900">

                </div>
            </div>
    )
}