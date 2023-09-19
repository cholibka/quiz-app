import {useLocation} from "react-router-dom";
import Button from "./Button.tsx";
import {gradientValues} from "../constants/buttonGradient.tsx";
import {UserOptions} from "../constants/options.tsx";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import {useCallback} from "react";
import {Engine, Container} from "tsparticles-engine";

export default function Score() {
    const score = useLocation().state.correctAnswers as number

    const particlesInit = useCallback(async (engine: Engine)  => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return(
       score > 6 ?
           <>
               <div className="grid items-center place-items-center place-content-center">
                   <h1 className="text-5xl font-medium text-center text-black dark:text-slate-300">
                       Congratulations! You've got
                   </h1>
                   <h1 className="text-9xl font-medium text-center text-black dark:text-slate-300">
                       {score}/10
                   </h1>
               </div>
               <div className="absolute bottom-0 right-0 m-10">
                   <Button name={"Try again!"} transition={gradientValues[3]} link={`/${UserOptions.Category.toLowerCase()}`}/>
               </div>

           </>
           :
           <>
               <Particles
                   id="tsparticles"
                   init={particlesInit}
                   loaded={particlesLoaded}
                   options={{
                       fpsLimit: 60,
                       particles: {
                           number: {
                               value: 100,
                           },
                           color: {
                               value: "#f00",
                           },
                           shape: {
                               type: ["circle", "square", "polygon"],
                               options: {
                                   polygon: {
                                       sides: 6,
                                   },
                               },
                           },
                           opacity: {
                               value: {
                                   min: 0,
                                   max: 1,
                               },
                               animation: {
                                   enable: true,
                                   speed: 1,
                                   startValue: "max",
                                   destroy: "min",
                               },
                           },
                           size: {
                               value: {
                                   min: 3,
                                   max: 7,
                               },
                           },
                           life: {
                               duration: {
                                   sync: true,
                                   value: 70,
                               },
                               count: 1,
                           },
                           move: {
                               enable: true,
                               gravity: {
                                   enable: true,
                               },
                               drift: {
                                   min: -2,
                                   max: 2,
                               },
                               speed: {
                                   min: 30,
                                   max: 100,
                               },
                               decay: 0.1,
                               direction: "none",
                               random: false,
                               straight: false,
                               outModes: {
                                   default: "destroy",
                                   top: "none",
                               },
                           },
                           rotate: {
                               value: {
                                   min: 0,
                                   max: 360,
                               },
                               direction: "random",
                               move: true,
                               animation: {
                                   enable: true,
                                   speed: 100,
                               },
                           },
                           tilt: {
                               direction: "random",
                               enable: true,
                               move: true,
                               value: {
                                   min: 0,
                                   max: 360,
                               },
                               animation: {
                                   enable: true,
                                   speed: 100,
                               },
                           },
                           roll: {
                               darken: {
                                   enable: true,
                                   value: 25,
                               },
                               enable: true,
                               speed: {
                                   min: 15,
                                   max: 25,
                               },
                           },
                           wobble: {
                               distance: 30,
                               enable: true,
                               move: true,
                               speed: {
                                   min: -15,
                                   max: 15,
                               },
                           },
                       },
                       detectRetina: true,
                   }}
               />
               <div className="grid items-center place-items-center place-content-center">
                   <h1 className="text-5xl font-medium text-black text-center dark:text-slate-300">
                       Better luck next time! You've got
                   </h1>
                   <h1 className="text-9xl font-medium text-center text-black dark:text-slate-300">
                       {score}/10
                   </h1>
               </div>
               <div className="absolute bottom-0 right-0 m-10">
                   <Button name={"Try again!"} transition={gradientValues[3]} link={`/${UserOptions.Category.toLowerCase()}`}/>
               </div>

           </>
    )
}