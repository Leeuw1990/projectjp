import React from 'react';
import { NavLink} from "react-router-dom";
import styles from './NavBar.module.css'
import Button from "../Button/Button";
import jazz from '../../assets/jazzpartition.jpg';
import jazz2 from '../../assets/jazzpartition2.jpg';
import TrumpetButton from "../TrumpetButton/TrumpetButton";

function NavBar() {
    return(

        <nav className={styles.navBar}>
                <ul className={styles.list}>
                    <li>
                        <NavLink to="/" exact activeClassName={styles.activeLink}><TrumpetButton text='Home'/></NavLink>
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
            <TrumpetButton/>
        </nav>
    );
}

export default NavBar;