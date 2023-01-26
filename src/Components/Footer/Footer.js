import styles from "./Footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faU } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <div className={styles.footer} id="Contacts">
            <div className={styles.newsContainer}>

                <div className={styles.title}>
                    <h2>Iscriviti alla nostra newsletter</h2>
                    <p>Per ricevere uno sconto incredibile sul nostro corso.</p>
                </div>

                <div className={styles.newsletter}>
                    <div className={`${styles.form__group} ${styles.field} ${styles.name}`}>
                        <input required="" placeholder="Name" className={styles.form__field} type="input" />
                        <label className={styles.form__label} htmlFor="name">Nome</label>
                    </div>
                    <div className={`${styles.form__group} ${styles.field} ${styles.surname}`}>
                        <input required="" placeholder="Name" className={styles.form__field} type="input" />
                        <label className={styles.form__label} htmlFor="name">Cognome</label>
                    </div>
                    <div className={`${styles.form__group} ${styles.field} ${styles.email}`}>
                        <input required="" placeholder="Name" className={styles.form__field} type="input" />
                        <label className={styles.form__label} htmlFor="name">Email</label>
                    </div>
                    <div className={styles.submitBtn}>
                        <button className={styles.btn}>
                            <span className={styles.btnSpan}>
                                Invia
                            </span>
                        </button>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.infoContainer}>
                        <div className={styles.instaContacts}>
                            <button className={styles.btnContacts}>
                                <FontAwesomeIcon icon={faInstagram} className={styles.insta}/>
                            </button>
                        </div>
                        <div className={styles.linkedinContacts}>
                            <button className={styles.btnContacts}>
                                <FontAwesomeIcon icon={faLinkedin} className={styles.linkedin}/>
                            </button>
                        </div>
                        <div className={styles.mailContacts}>
                            <button className={styles.btnContacts}>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.mail}/>
                            </button>
                        </div>
                        <div className={styles.udemyContacts}>
                            <button className={styles.btnContacts}>
                                <FontAwesomeIcon icon={faU} className={styles.udemy}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer