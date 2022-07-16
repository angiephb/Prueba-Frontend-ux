import styles from './places.module.css'
import img from '../../assets/img.js'
import MenuOffers from '../menu/menu-offers.js'


const Places = () => {
    return (
        <section className={styles.container}>
            <section className={styles.container_places}> 
            <figure className={styles.container_img}>
                <img src={img.moscow} className={styles.places} alt='moscow' />
                <figcaption className={styles.container_text}>
                    <p className={styles.text_places}>Trip to Moscow</p>
                    <p className={styles.price_places}> Price $600,86 </p>
                </figcaption>
            </figure>
            <figure className={styles.container_img}>
                <img src={img.puertorico} className={styles.places} alt='puerto-rico' />
                <figcaption className={styles.container_text}>
                    <p className={styles.text_places}>Trip to Puerto Rico</p>
                    <p className={styles.price_places}> Price $600,86 </p>
                </figcaption>
            </figure>
            <figure className={styles.container_img}>
                <img src={img.honduras} className={styles.places} alt='honduras' />
                <figcaption className={styles.container_text}>
                    <p className={styles.text_places}>Trip to Honduras</p>
                    <p className={styles.price_places}> Price $600,86 </p>
                </figcaption>
            </figure>
            <section className={styles.container_choose}>
                <hr className={styles.line_choose}></hr>
                <h3 className={styles.tittle_choose}>
                    Chosen Destination
                </h3>
            </section>
            </section>
            <section>
                <MenuOffers />
            </section>
        </section>


    )

}
export default Places
