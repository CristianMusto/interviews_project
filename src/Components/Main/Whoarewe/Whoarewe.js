import styles from "./Whoarewe.module.scss";
import Window from "../../UI/Window/Window";
import { useState, useEffect } from "react";

const Whoarewe = props => {

    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (props.isInViewWho === true) {
            setIsInView(true);
        } else {
            setIsInView(false);
        }
    }, [props]);

    return (
        <div className={styles.whoarewe} id="Whoarewe">

            <Window 
                className={`${isInView ? styles.active : ""} ${styles.txt}`} 
                classNameDots = {styles.dots}
                classNameDotsClose = {styles.close}
                classNameDotsMin = {styles.min}
                classNameDotsExpand = {styles.expand}
                classNameDotsContent = {styles.content}
                title="Chi siamo?"
                content="Nulla nulla ex qui et irure ex irure cillum nostrud. Officia Lorem mollit dolor qui ullamco deserunt nulla esse aliqua sit. Ipsum velit magna est magna dolore reprehenderit qui et minim consequat. Eiusmod ex Lorem sit eiusmod. Ex qui cupidatat ea anim sunt Lorem. Aute et enim qui eu enim et nulla sit pariatur anim dolor non enim.

                Reprehenderit quis fugiat est dolore fugiat non esse est voluptate aute mollit quis enim. Qui occaecat eu quis dolore sit. Qui in aliquip pariatur eu veniam Lorem. Esse sint ut laborum sunt qui.
                
                Ipsum nostrud veniam dolore magna consequat anim. Reprehenderit pariatur proident aliqua duis non qui sunt nisi. Sit pariatur ex do officia incididunt ullamco magna ipsum veniam excepteur consequat laboris ut. Nostrud aute sunt laborum in duis aute qui veniam labore eiusmod. Et excepteur ad non duis duis sit. Aliquip laborum sit commodo labore consectetur reprehenderit Lorem id aliqua commodo ex excepteur. Ad duis Lorem eiusmod consequat qui ullamco tempor enim id ex irure sunt."
            />

            <Window 
                className={`${isInView ? styles.active : ""} ${styles.docent}`} 
                classNameDots = {styles.dots}
                classNameDotsClose = {styles.close}
                classNameDotsMin = {styles.min}
                classNameDotsExpand = {styles.expand}
                classNameDotsContent = {styles.content}
                title="Il nostro docente"
                content="Nulla nulla ex qui et irure ex irure cillum nostrud. Officia Lorem mollit dolor qui ullamco deserunt nulla esse aliqua sit. Ipsum velit magna est magna dolore reprehenderit qui et minim consequat. Eiusmod ex Lorem sit eiusmod. Ex qui cupidatat ea anim sunt Lorem. Aute et enim qui eu enim et nulla sit pariatur anim dolor non enim.

                Reprehenderit quis fugiat est dolore fugiat non esse est voluptate aute mollit quis enim. Qui occaecat eu quis dolore sit. Qui in aliquip pariatur eu veniam Lorem. Esse sint ut laborum sunt qui.
                
                Ipsum nostrud veniam dolore magna consequat anim. Reprehenderit pariatur proident aliqua duis non qui sunt nisi. Sit pariatur ex do officia incididunt ullamco magna ipsum veniam excepteur consequat laboris ut. Nostrud aute sunt laborum in duis aute qui veniam labore eiusmod. Et excepteur ad non duis duis sit. Aliquip laborum sit commodo labore consectetur reprehenderit Lorem id aliqua commodo ex excepteur. Ad duis Lorem eiusmod consequat qui ullamco tempor enim id ex irure sunt."
            />

        </div>
    )
}

export default Whoarewe