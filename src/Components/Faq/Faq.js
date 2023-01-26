import FaqCard from "../UI/FaqCard/FaqCard";
import styles from "./Faq.module.scss";

const Faq = props => {

    const questions = [
        {
            "index": "1",
            "title": "Domanda 1",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },

        {
            "index": "2",
            "title": "Domanda 2",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },

        {
            "index": "3",
            "title": "Domanda 3",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },

        {
            "index": "4",
            "title": "Domanda 4",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },

        {
            "index": "5",
            "title": "Domanda 5",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },

        {
            "index": "6",
            "title": "Domanda 6",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },

        {
            "index": "7",
            "title": "Domanda 7",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },

        {
            "index": "8",
            "title": "Domanda 8",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },

        {
            "index": "9",
            "title": "Domanda 9",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },

        {
            "index": "10",
            "title": "Domanda 10",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },

        {
            "index": "11",
            "title": "Domanda 11",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },

        {
            "index": "12",
            "title": "Domanda 12",
            "description": "Exercitation minim nostrud proident nisi Lorem duis do nostrud incididunt nisi mollit excepteur aute id."
        },
    ]

    return (
        <div className={styles.faq} id="Faq">
            <h2>Domande frequenti</h2>
            {
                questions.map(el => (
                    <FaqCard className={styles.card} title={el.title} description={el.description} key={el.index}/>
                ))
            }
            <p className={styles.parag}>Se hai altre domande contattaci pure!</p>
        </div>
    )
}

export default Faq