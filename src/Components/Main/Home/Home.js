import MenuBar from "../../UI/MenuBar/MenuBar"
import TerminalComp from "../../UI/Terminal/Terminal"
import styles from "./Home.module.scss"

const Home = props => {
    return (
        <div className={styles.home}>
            <MenuBar />
            <TerminalComp />
        </div>
    )
}


export default Home