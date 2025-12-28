import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        console.log('mudou o tema');

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <nav className={styles.menu}>
            <a href="#" className={styles.menuLink} aria-label='ir para a home' title='ir para a home'>
                <HouseIcon />
            </a>
            <a href="#" className={styles.menuLink} aria-label='ver histórico' title='ir para o histórico'>
                <HistoryIcon />
            </a>
            <a href="#" className={styles.menuLink} aria-label='ir para as configurações' title='ir para as configurações'>
                <SettingsIcon />
            </a>
            <a 
                href="#" className={styles.menuLink} 
                aria-label='mudar tema' 
                title='mudar tema'
                onClick={(e) => handleThemeChange(e)}>
                <SunIcon />
            </a>
        </nav>
    )
}