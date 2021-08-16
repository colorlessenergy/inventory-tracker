import { useEffect, useState } from "react";

import classes from './ThemeSelector.module.scss';

export default function ThemeSelector () {
    const [ theme, setTheme ] = useState('light');

    useEffect(() => {
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', 'light')
        }

        if (localStorage.getItem('theme') === 'dark') {
            setTheme('dark');
        }
    }, []);


    useEffect(() => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'light');
            return document.body.classList.remove('dark');
        }

        localStorage.setItem('theme', 'dark');
        return document.body.classList.add('dark');
    }, [ theme ]);

    const toggleTheme = () => {
        setTheme((previousTheme) => {
            if (previousTheme === 'light') {
                return 'dark';
            }

            return 'light';
        });
    }

    return (
        <div className="text-right mb-1">
            <div
                className={ classes["theme-selector"] }
                onClick={ toggleTheme }>
                { theme === 'light' ? ('🌙') : ('☀️') }
            </div>
        </div>
    );
}