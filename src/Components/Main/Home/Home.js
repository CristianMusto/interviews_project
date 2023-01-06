import TerminalComp from "../../UI/Terminal"
import styles from "./Home.module.scss"

const Home = props => {
    return (
        <div className={styles.home}>
            <TerminalComp />
        </div>
    )
}

export default Home