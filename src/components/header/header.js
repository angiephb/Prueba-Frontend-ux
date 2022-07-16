import styles from './header.module.css';
import MenuHome from '../menu/menu-home.js';
import Description from '../description-header/description-header.js';

const Header = () => {
    return (
        <section className={styles.container_banner}>
            <section className={styles.banner}>
                <section>
                    <h2 className={styles.banner_tittle}>AIRLINE</h2>
                </section>
                <section>
                    <MenuHome />
                </section>
            </section>
            <section>
                <Description />
            </section>
        </section>
    )
}

export default Header
