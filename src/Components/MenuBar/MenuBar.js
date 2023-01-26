import styles from "./MenuBar.module.scss"
import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import Logo from "../../Images/Logo.png";

const MenuBar = (props) => {
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
                <li className={styles.logo}><img src={Logo} alt="logo"/></li>
                <li>
                    <Link 
                    to="Home"
                    activeClass={styles.active}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    >Home</Link></li>
                <li><Link 
                    to="Whoarewe"
                    activeClass={styles.active}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    onSetActive={props.onActiveWho}
                    onSetInactive={props.onInactiveWho}
                    >Chi siamo</Link></li>
                <li><Link 
                    to="Course"
                    activeClass={styles.active}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    onSetActive={props.onActiveCourse}
                    onSetInactive={props.onInactiveCourse}
                    >Corso</Link></li>
                <li><Link 
                    to="Faq"
                    activeClass={styles.active}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                    delay={250}
                    >Domande frequenti</Link></li>
                <li><Link 
                    to="Contacts"
                    activeClass={styles.active}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                    delay={250}
                    >Contatti</Link></li>
            </ul>
            <ul className={styles.listMenuDx}>
                <li>{CurrentDate()}</li>
                <li>{timeString}</li>
            </ul>
        </div>
    )
}

export default MenuBar