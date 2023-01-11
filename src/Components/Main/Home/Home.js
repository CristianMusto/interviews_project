import TerminalComp from "../../UI/Terminal/Terminal"
import styles from "./Home.module.scss"

const Home = props => {
    return (
        <div className={styles.home} id="Home">
            <TerminalComp />
        </div>
    )
}


export default Home