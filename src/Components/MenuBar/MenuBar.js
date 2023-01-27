import styles from "./MenuBar.module.scss"
import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import Logo from "../../Images/Logo.png";

const MenuBar = (props) => {
    const [time, setTime] = useState(new Date());
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState();

    const menuOpen = () => {
        if (isOpen) {
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
      };
    
      const closeMenu = () => {
        setIsOpen(false);
      };

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        if (window.innerWidth <= 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }

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
        <>
            {isMobile 
                ? 
                <>
                    <div className={styles.menubarMobile}>
                        <div className={`${styles.hambMenu} ${
                                isOpen ? styles.active : styles.notActive
                                }`}
                                onClick={menuOpen}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className={styles.listMenuDxMobile}>
                            <li>{CurrentDate()}</li>
                            <li>{timeString}</li>
                        </ul>
                    </div> 
                    <div className= {`${styles.menuVoices} ${
                        isOpen ? styles.active : styles.notActive
                    }`}>
                        <ul className={styles.listMenuSxMobile}>
                            <li>
                                <Link 
                                to="Home"
                                activeClass={styles.active}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                onClick={closeMenu}
                                >Home</Link></li>
                            <li><Link 
                                to="Whoarewe"
                                activeClass={styles.active}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onSetActive={props.onActiveWho}
                                onSetInactive={props.onInactiveWho}
                                onClick={closeMenu}
                                >Chi siamo</Link></li>
                            <li><Link 
                                to="Course"
                                activeClass={styles.active}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onSetActive={props.onActiveCourse}
                                onSetInactive={props.onInactiveCourse}
                                onClick={closeMenu}
                                >Corso</Link></li>
                            <li><Link 
                                to="Faq"
                                activeClass={styles.active}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={1000}
                                onClick={closeMenu}
                                >Domande frequenti</Link></li>
                            <li><Link 
                                to="Contacts"
                                activeClass={styles.active}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={1000}
                                onClick={closeMenu}
                                >Contatti</Link></li>
                        </ul>
                    </div>
                </>
                : 
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
            }
        </>
        
    )
}

export default MenuBar