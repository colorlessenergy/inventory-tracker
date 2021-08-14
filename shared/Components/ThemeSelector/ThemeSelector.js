import { useState } from "react";

export default function ThemeSelector () {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme = () => {
        setTheme((previousTheme) => {
            if (previousTheme === 'light') {
                document.body.classList.add('dark');
                return 'dark';
            }

            document.body.classList.remove('dark');
            return 'light';
        });
    }

    return (
        <div onClick={ toggleTheme }>
            { theme === 'light' ? ('🌙') : ('☀️') }
        </div>
    );
}