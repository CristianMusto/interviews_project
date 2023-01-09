import styles from "./MenuBar.module.scss"
import { useState, useEffect } from 'react';

const MenuBar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const options = { hour: '2-digit', minute: '2-digit' };
    const timeString = time.toLocaleTimeString('it-IT', options);

    const CurrentDate = () => {
        const date = new Date();
        return date.toLocaleDateString('it-IT', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
        });
    }

    

    return (
        <div className={styles.menubar}>
            <ul className={styles.listMenuSx}>
                <li>🍎</li>
                <li><b>Terminale</b></li>
                <li>Shell</li>
                <li>Modifica</li>
                <li>Vista</li>
                <li>Finestra</li>
                <li>Aiuto</li>
            </ul>
            <ul className={styles.listMenuDx}>
                <li>✨</li>
                <li>{CurrentDate()}</li>
                <li>{timeString}</li>
            </ul>
        </div>
    )
}

export default MenuBar