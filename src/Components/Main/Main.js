import Background from "../UI/Background/Background"
import Notify from "../UI/Notify/Notify"
import Course from "./Course/Course"
import Home from "./Home/Home"
import styles from "./Main.module.scss"
import Whoarewe from "./Whoarewe/Whoarewe"

const Main = props => {

    return (
        <div className={styles.main} speed={-5}>
            <Background />
            <Notify className={styles.notify}/>
            <Home />
            <Whoarewe isInViewWho={props.isInViewWho}/>
            <Course isInViewCourse={props.isInViewCourse}/>
        </div>
    )
}

export default Main