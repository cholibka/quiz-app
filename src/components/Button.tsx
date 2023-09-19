import {Link} from "react-router-dom";
import {UserOptions} from "../constants/options.tsx";

interface IButton {
    name: string
    transition: string[]
    link: string
}

export default function Button({name, transition, link}: IButton) {
    return (
        <div className="relative inline-flex group mx-4 my-4">
            <div
                className={`absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                ${transition[0]} ${transition[1]} ${transition[2]}
                rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt`}/>
            <Link to={link} className="relative inline-flex items-center justify-center px-20 py-6 text-xl font-bold text-center w-72 h-20
                dark:text-white transition-all duration-200 bg-white dark:bg-gray-800 rounded-2xl transition ease-in-out delay-150 hover:scale-105 duration-300"
               role="button">{name}
                {link === `/${UserOptions.Category.toLowerCase()}` &&
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                }
            </Link>
        </div>
    )
}
