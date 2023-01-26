import ScrollDown from "../../UI/ScrollDown/ScrollDown"
import TerminalComp from "../../UI/Terminal/Terminal"
import styles from "./Home.module.scss"

const Home = props => {
    return (
        <div className={styles.home} id="Home">
            <TerminalComp />
            <ScrollDown className={styles.scrolldown}/>
        </div>
    )
}


export default Home