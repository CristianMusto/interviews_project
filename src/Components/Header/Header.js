import styles from "./Header.module.scss"

const Header = props => {
    return (
        <aside className={`${styles.sidebar} ${props.className}`}>
            <ul className={styles.voicesList}>
               <li className={styles.logo}>LOGO</li>
               <li className={styles.whoarewe}>CHI SIAMO</li> 
               <li className={styles.course}>CORSI</li>
               <li className={styles.faq}>DOMANDE FREQUENTI</li>
               <li className={styles.contacts}>CONTATTI</li>
            </ul>
        </aside>
    )
}

export default Header