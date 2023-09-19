import {UserOptions} from "../constants/options.tsx";
import Button from "./Button.tsx";
import {gradientValues} from "../constants/buttonGradient.tsx";

function Home() {
    return (
        <div className="grid items-center place-items-center place-content-center">
                {/*<p className="animate-waving-hand text-9xl m-5">👋🏻</p>*/}
                <h1 className="text-5xl font-medium text-black dark:text-slate-300 text-center">
                    Hi! Ready to test your knowledge?
                </h1>
                <div className="m-20">
                    <Button name={"Get Started"} transition={gradientValues[1]} link={`/${UserOptions.Category.toLowerCase()}`}/>
                </div>
        </div>
    )
}

export default Home
