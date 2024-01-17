import {useState, useEffect} from 'react';

const useTheme = (): [string, (() => void), (() => void)] => {
    const [theme, setThemeState] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };


    const setTheme = () => localStorage.setItem("theme", localStorage.getItem("theme") || "dark");
    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setThemeState(localTheme);
            document.documentElement.classList.toggle('dark', localTheme === 'dark');
        }
    }, []);

    return [theme, toggleTheme,setTheme];
};

export default useTheme;
