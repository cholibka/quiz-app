import Switcher from "./components/Switcher.tsx";
import Options from "./components/Options.tsx";
import {UserOptions} from "./constants/options.tsx";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./components/Home.tsx";
import Question from "./components/Question.tsx";
import Score from "./components/Score.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home />}/>
            <Route path="category" element={<Options name={UserOptions.Category}/>} />
            <Route path="difficulty" element={<Options name={UserOptions.Difficulty}/>} />
            <Route path="quiz" element={<Question/>} />
            <Route path="score" element={<Score/>} />
        </Route>
    )
)
function App() {

  return (
      <>
        <div className="bg-white dark:bg-slate-900 w-screen h-screen content-center grid absolute">
            <RouterProvider router={router}/>
        </div>
        <div className="relative inset-x-0 top-0-0">
            <Switcher/>
        </div>

      </>
  )
}

export default App
