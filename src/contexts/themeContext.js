import {createContext, useState} from 'react';

export const themeContext = createContext('default');

export default function ThemeProvider({children}) {

    const theme = useTheme();

    return (
        <themeContext.Provider value={theme}>
            {children}
        </themeContext.Provider>
    );
}

export function useTheme() {

    const [themeState, setThemeState] = useState('default');

    function changeTheme(e) {
        let themeName = e.target.value;
        setThemeState(themeName);
    }

    return {
        handleSwitch: changeTheme,
        switchedValue: themeState
    }
}