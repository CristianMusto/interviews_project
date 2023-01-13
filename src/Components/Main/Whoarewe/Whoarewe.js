import Finder from "../../UI/Finder/Finder"
import styles from "./Whoarewe.module.scss"

const Whoarewe = props => {

    return (
        <div className={styles.whoarewe} id="Whoarewe">
            <Finder view={props.inView}/>
        </div>
    )
}

export default Whoarewe