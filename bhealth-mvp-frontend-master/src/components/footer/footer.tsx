import React from 'react';
import styles from './footer.module.scss';
import logo from './images/logo.svg';
import { Link } from "react-router-dom";

interface Props {
}

const Footer: React.FC<Props> = (props) => {
    return <footer className={styles.footer}>
        <div className={styles.logoContainer}>
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.separator} />
        <div className={styles.itemsContainer}>
            <Link to="/" className={styles.item}>
                Home
            </Link>
            <Link to="/about" className={styles.item}>
                About Us
            </Link>
            <Link to="/agency-services" className={styles.item}>
                Agency Services
            </Link>
            <Link to="/staff-services" className={styles.item}>
                Staff Services
            </Link>
        </div>
    </footer>
}

export default Footer;