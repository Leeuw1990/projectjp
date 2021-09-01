import React from 'react';
import { NavLink} from "react-router-dom";
import styles from './NavBar.module.css'
import Button from "../Button/Button";
import jazz from '../../assets/jazzpartition.jpg';
import jazz2 from '../../assets/jazzpartition2.jpg';
import Trumpet from "../Trumpet/Trumpet";

function NavBar() {
    return(

        <nav className={styles.navBar}>
            <Trumpet/>
                <ul className={styles.list}>
                    <li>
                        <NavLink to="/" activeClassName={styles.activeLink}><Button type='button' text='Home'/></NavLink>
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
            <Trumpet/>
        </nav>
    );
}

export default NavBar;