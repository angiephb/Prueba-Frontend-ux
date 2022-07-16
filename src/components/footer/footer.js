import styles from './footer.module.css'
import img from '../../assets/img.js'

const Footer = () => {
    return (
        <footer className={styles.container_footer}>
            <h2 className={styles.tittle_footer}>Follow us</h2>
            <section className={styles.container_social}>
                <img src={img.facebook} className={styles.social} alt='facebook' />
                <img src={img.instagram} className={styles.social} alt='instagram' />
                <img src={img.twitter} className={styles.social} alt='twitter' />
            </section>
            <section className={styles.container_contentFooter}>
                <section className={styles.container_column1}>
                    <h3>About Us</h3>
                    <p>we want to help passengers to reach their destinations</p>
                </section>
                <section className={styles.container_column2}>
                    <h3 className={styles.tittle_column}>Explore</h3>
                    <ul>
                        <li>Home</li>
                        <li>Destinations</li>
                        <li>About</li>
                    </ul>
                </section>
                <section className={styles.container_column3}>
                    <h3 className={styles.tittle_column}>Information</h3>
                    <ul>
                        <li>More search</li>
                        <li>Blog</li>
                        <li>Testimonials</li>
                    </ul>
                </section>
                <section className={styles.container_column4}>
                    <h3 className={styles.tittle_column}>Services</h3>
                    <ul>
                        <li>Manage My Bookings</li>
                        <li>Chekin</li>
                        <li>Hotel</li>
                        <li>Cars</li>
                    </ul>
                </section>

            </section>

        </footer>

    )
}

export default Footer