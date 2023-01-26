import styles from "./Notify.module.scss"
import logo from "../../../Images/Logo.png"
import { useEffect, useState } from "react";

const Notify = props => {

    const [isDisplayed, setIsDisplayed] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const closeHandler = () => {
        setIsClosed(true);
    }

    useEffect(() => {
        setInterval(() => {
          setIsDisplayed(true);
        }, 10000);

        setInterval(() => {
            setIsClosed(true);
          }, 30000);
    }, [])

    return (
        <>
            {
            isDisplayed && 
                <div className={`${styles.card} ${props.className} ${isClosed ? styles.close : ""}`}>
                    <div className={styles.img}>
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div className={styles.textBox}>
                        <div className={styles.textContent}>
                            <p className={styles.h1}>Exploit Interviews</p>
                            <span className={styles.span}>Now</span>
                        </div>
                        <p className={styles.p}>Scorri per non perderti l'offerta</p>
                        <div>
                        </div>
                    </div>
                    <div className={styles.closeNotify} onClick={closeHandler}>
                        <p>x</p>
                    </div>
                </div>
            }
        </>
    )
}

export default Notify