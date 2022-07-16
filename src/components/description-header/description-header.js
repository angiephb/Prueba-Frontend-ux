import styles from './description-header.module.css';

const Description = () => {
    return (
        <section className={styles.description}>
            <span>Visit Canada with prices from $800</span>
            <p>Prepare your bags and forget your worries <br></br>to start enjoying your holidays in this fantastic country</p>

            <button className={styles.button_description}>BUY NOW</button>
        </section>
    )

}

export default Description
