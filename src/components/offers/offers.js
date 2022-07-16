import styles from './offers.module.css';
import Places from '../places/places.js'

const Offers = () => {
    return (
        <section className={styles.container_offers}>
            <section className={styles.container_tittle}>
                <h2 className={styles.tittle}>
                    Offers
                </h2>
                <hr></hr>
            </section>
            <section>
                <Places />
            </section>
            
            
        </section>
    )
}

export default Offers