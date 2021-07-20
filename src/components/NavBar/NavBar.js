import React from 'react';
import { NavLink} from "react-router-dom";
import styles from './NavBar.module.css'
import Button from "../Button/Button";

function NavBar() {
    return(
        <nav className={styles.navBar}>
                <ul className={styles.list}>
                    <li>
                        <NavLink to="/" exact activeClassName={styles.activeLink}><Button type='button' text='Home'/></NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" activeClassName={styles.activeLink}><Button type='button' text='About'/></NavLink>
                    </li>

                    <li>
                        <NavLink to="/content" activeClassName={styles.activeLink}><Button type='button' text='Content'/></NavLink>
                    </li>

                    <li>
                        <NavLink to="/booking" activeClassName={styles.activeLink}><Button type='button' text='Booking'/></NavLink>
                    </li>
                </ul>
        </nav>
    );
}

export default NavBar;