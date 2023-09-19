import {useState} from "react";
interface IProgressBar {
    done: number
}


export default function ProgressBar({done} : IProgressBar) {
    const [style, setStyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 5);


    return (
        done ?
        <div className="progress">
            <div className="progress-done" style={style}>
                    {done}%
            </div>
        </div>
            :
        <div className="progress">
            <div className="progress-done" style={style}>
            </div>
        </div>
    )
}