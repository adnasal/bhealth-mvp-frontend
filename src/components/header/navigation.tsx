import React from 'react';
import styles from './header.module.scss';
import { NavLink } from "react-router-dom";
import { SignedBlock } from '../signed-block';

interface Props {
    isSigned: boolean;
}

export const Navigaion: React.FC<Props> = ({ isSigned }) => {
    return <nav className={styles.navigation}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activePage : styles.page}>
            Home
        </NavLink>
        <NavLink to="/labs" className={({ isActive }) => isActive ? styles.activePage : styles.page}>
            Labs
        </NavLink>
        {
            isSigned ? <SignedBlock />
                : <div className={styles.signedContainer}>
                    <NavLink to="/login" className={({ isActive }) => isActive ? styles.activePage : styles.page}>
                        Login
                    </NavLink>
                    <NavLink to="/signup#personal" className={({ isActive }) => isActive ? styles.activePage : styles.page}>
                        Sign up
                    </NavLink>
                </div>
        }
    </nav>
};