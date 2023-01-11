import Home from "./Home/Home"
import styles from "./Main.module.scss"

const Main = props => {

    return (
        <div className={styles.main}>
            <Home />
        </div>
    )
}

export default Main