import Background from "../UI/Background/Background"
import Home from "./Home/Home"
import styles from "./Main.module.scss"
import Whoarewe from "./Whoarewe/Whoarewe"

const Main = props => {

    return (
        <div className={styles.main} speed={-5}>
            <Background />
            <Home />
            <Whoarewe isInView={props.isInView}/>
        </div>
    )
}

export default Main