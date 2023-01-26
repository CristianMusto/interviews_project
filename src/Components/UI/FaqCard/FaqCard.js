import styles from "./FaqCard.module.scss"
import { useState } from "react"

const FaqCard = props => {

    const [expand, setExpand] = useState(false);

    const expandCardHandler = () => {
        if (expand === false) {
            setExpand(true)
        } else {
            setExpand(false)
        }
    }

    return (
        <div className={`${styles.card} ${props.className} ${expand ? styles.expanded : ""}`} onClick={expandCardHandler}>
            <div className={styles.align}>
                <span className={styles.red}></span>
                <span className={styles.yellow}></span>
                <span className={styles.green}></span>
            </div>

            <h1>{props.title}</h1>
            <p>
                {props.description}
            </p>
        </div>
    )
}

export default FaqCard