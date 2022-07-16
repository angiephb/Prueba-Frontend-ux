// import React from 'react';
import styles from './menu.module.css'

const MenuHome = () => {
    return (
        <section className={styles.container}>
            <section className={styles.select}>
                <select>
                    <option selected className={styles.seleted}>en</option>
                    <option value='russian'>RU - Russian</option>
                    <option value='german'>DE - German</option>
                    <option value='french'>FR - French</option>
                </select>
            </section>
            <nav className={styles.container_menu}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Destinations</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </section>

    )
}

export default MenuHome;
