import styles from "./MenuBar.module.scss"

const MenuBar = props => {
    return (
        <div styles={`${styles.menubar} ${props.className}`}>
            
        </div>
    )
}

export default MenuBar