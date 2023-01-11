import Home from "./Home/Home"
import styles from "./Main.module.scss"
import Whoarewe from "./Whoarewe/Whoarewe"

const Main = props => {

    return (
        <div className={styles.main}>
            <Home />
            <Whoarewe />
        </div>
    )
}

export default Main