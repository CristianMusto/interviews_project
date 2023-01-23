import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import styles from "./Whoarewe.module.scss"
import { useState, useEffect } from "react";

const Whoarewe = props => {

    const [isMin, setIsMin] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const minHandle = () => {
        setIsMin(true);
    }

    const expandHandle = () => {
        setIsMin(false);
    }

    const closeHandle = () => {
        setIsClose(true);
    }

    const openHandler = () => {
        if (isClose === true) {
            setIsClose(false)
        }

        if (isMin === true) {
            setIsMin(false)
        }
    }

    useEffect(() => {
        if (props.isInView === true) {
            setIsInView(true);
        } else {
            setIsInView(false);
        }
    }, [props]);

    return (
        <div className={styles.whoarewe} id="Whoarewe">

            <div className={`${isMin ? styles.isMin : ""} ${isClose ? styles.isClose : ""} ${isInView ? styles.active : ""} ${styles.txt}`} onClick={openHandler}>
                <ul className={styles.dots}>
                    <li className={styles.close} onClick={closeHandle}><p>x</p></li>
                    <li className={styles.min} onClick={minHandle}><p>-</p></li>
                    <li className={styles.expand} onClick={expandHandle}><p>+</p></li>
                </ul>

                <div className={styles.content}>
                    <h2>
                        Chi siamo?
                    </h2>

                    <p>
                        Nulla nulla ex qui et irure ex irure cillum nostrud. Officia Lorem mollit dolor qui ullamco deserunt nulla esse aliqua sit. Ipsum velit magna est magna dolore reprehenderit qui et minim consequat. Eiusmod ex Lorem sit eiusmod. Ex qui cupidatat ea anim sunt Lorem. Aute et enim qui eu enim et nulla sit pariatur anim dolor non enim.

Reprehenderit quis fugiat est dolore fugiat non esse est voluptate aute mollit quis enim. Qui occaecat eu quis dolore sit. Qui in aliquip pariatur eu veniam Lorem. Esse sint ut laborum sunt qui.

Ipsum nostrud veniam dolore magna consequat anim. Reprehenderit pariatur proident aliqua duis non qui sunt nisi. Sit pariatur ex do officia incididunt ullamco magna ipsum veniam excepteur consequat laboris ut. Nostrud aute sunt laborum in duis aute qui veniam labore eiusmod. Et excepteur ad non duis duis sit. Aliquip laborum sit commodo labore consectetur reprehenderit Lorem id aliqua commodo ex excepteur. Ad duis Lorem eiusmod consequat qui ullamco tempor enim id ex irure sunt.
                    </p>
                </div>
            </div>

            <div className={`${isMin ? styles.isMin : ""} ${isClose ? styles.isClose : ""} ${isInView ? styles.active : ""} ${styles.docent}`} onClick={openHandler}>
                <ul className={styles.dots}>
                    <li className={styles.close} onClick={closeHandle}><p>x</p></li>
                    <li className={styles.min} onClick={minHandle}><p>-</p></li>
                    <li className={styles.expand} onClick={expandHandle}><p>+</p></li>
                </ul>

                <div className={styles.content}>
                    <h2>
                        Il nostro docente 
                    </h2>

                    <p>
                        Nulla nulla ex qui et irure ex irure cillum nostrud. Officia Lorem mollit dolor qui ullamco deserunt nulla esse aliqua sit. Ipsum velit magna est magna dolore reprehenderit qui et minim consequat. Eiusmod ex Lorem sit eiusmod. Ex qui cupidatat ea anim sunt Lorem. Aute et enim qui eu enim et nulla sit pariatur anim dolor non enim.

Reprehenderit quis fugiat est dolore fugiat non esse est voluptate aute mollit quis enim. Qui occaecat eu quis dolore sit. Qui in aliquip pariatur eu veniam Lorem. Esse sint ut laborum sunt qui.

Ipsum nostrud veniam dolore magna consequat anim. Reprehenderit pariatur proident aliqua duis non qui sunt nisi. Sit pariatur ex do officia incididunt ullamco magna ipsum veniam excepteur consequat laboris ut. Nostrud aute sunt laborum in duis aute qui veniam labore eiusmod. Et excepteur ad non duis duis sit. Aliquip laborum sit commodo labore consectetur reprehenderit Lorem id aliqua commodo ex excepteur. Ad duis Lorem eiusmod consequat qui ullamco tempor enim id ex irure sunt.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Whoarewe