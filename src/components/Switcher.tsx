import changeTheme from "../hooks/ChangeTheme.tsx";
import {useState} from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";

function Switcher() {

    const [colorTheme, setTheme] = changeTheme()
    const [darkTheme, setDarkTheme] = useState<boolean>(
        colorTheme === 'light'
    )

    const toggleDarkTheme = (checked: boolean) => {
        setTheme(colorTheme)
        setDarkTheme(checked)
    }

    return (
        <>
            <DarkModeSwitch onChange={toggleDarkTheme}
                            checked={darkTheme}
                            size={30}
                            className="float-right m-5 relative"
            />
        </>
    )
}

export default Switcher