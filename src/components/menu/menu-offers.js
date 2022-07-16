import styles from './menu.module.css';

const MenuOffers = () => {
    return (
        <section className={styles.container_MenuOffers}>
            <h2> Menu </h2>
            <section className={styles.container_options}>
                <ul>
                    <li /* className={styles.list} */>Check-in</li>
                    <hr></hr>
                    
                    <li /* className={styles.list} */>Manage My Booking</li>
                    <hr></hr>
                    
                    <li /* className={styles.list} */>Search</li>
                    <hr></hr>
                    
                    <li /* className={styles.list} */>Destinations</li>
                    <hr></hr>
                    
                    <li>Members</li>
                </ul>

            </section>
        </section>
    )
}

export default MenuOffers
