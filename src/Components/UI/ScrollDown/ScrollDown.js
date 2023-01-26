import { Link } from "react-scroll";
import styles from "./ScrollDown.module.scss";
import { useState, useEffect } from "react";

const ScrollDown = props => {

    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        setInterval(() => {
          setIsDisplayed(true);
        }, 8000);
    }, [])


    return (
        <>
            {isDisplayed && 
                <Link 
                    className={`${styles.scrolldown} ${props.className}`}
                    to="Whoarewe"
                    activeClass={styles.active}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={props.onActiveWho}
                    onSetInactive={props.onInactiveWho}    
                >
                    <div className={styles.chevrons}>
                        <div className={styles.chevrondown}></div>
                        <div className={styles.chevrondown}></div>
                    </div>
                </Link>
            }
        </>
    )
}

export default ScrollDown