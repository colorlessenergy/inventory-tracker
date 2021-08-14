import { useState } from "react";

export default function ThemeSelector () {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme = () => {
        setTheme((previousTheme) => {
            if (previousTheme === 'light') {
                return 'dark';
            }

            return 'light';
        });
    }

    return (
        <div onClick={ toggleTheme }>
            { theme === 'light' ? ('🌙') : ('☀️') }
        </div>
    );
}