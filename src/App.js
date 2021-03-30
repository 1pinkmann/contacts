import React from 'react';
import Contacts from './modules/Contacts/components/Contacts';
import ThemeProvider from "./contexts/themeContext";


export default function App() {

    return (
        <ThemeProvider>
            <>
                <Contacts/>
            </>
        </ThemeProvider>
    );
}