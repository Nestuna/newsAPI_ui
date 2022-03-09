import React, { createContext, useState } from 'react';

const DarkModeContext = createContext<any>({});

const DarkModeProvider = (props :any) => {
    const [darkMode, setDarkMode] = useState(true)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div>
            <DarkModeContext.Provider value={{ darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

export {DarkModeContext, DarkModeProvider}