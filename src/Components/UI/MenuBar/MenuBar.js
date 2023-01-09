import styles from "./MenuBar.module.scss"

const MenuBar = () => {
    return (
        <div className={styles.menubar}>
            <ul className={styles.listMenuSx}>
                <li>🍎</li>
                <li><b>Terminale</b></li>
                <li>Shell</li>
                <li>Modifica</li>
                <li>Vista</li>
                <li>Finestra</li>
                <li>Aiuto</li>
            </ul>
            <ul className={styles.listMenuDx}>
                <li>🍎</li>
                <li><b>Terminale</b></li>
                <li>Shell</li>
            </ul>
        </div>
    )
}

export default MenuBar