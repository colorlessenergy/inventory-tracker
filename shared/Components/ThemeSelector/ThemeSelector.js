import { useState } from "react";

export default function ThemeSelector () {
    const [ theme, setTheme ] = useState('light');

    return (
        <div>
            { theme === 'light' ? ('🌙') : ('☀️') }
        </div>
    );
}