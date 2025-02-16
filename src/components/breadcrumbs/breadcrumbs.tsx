import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import styles from "./breadcrumbs.module.scss";
import classNames from 'classnames';
import { PREV_PATH } from '../../constants';

interface Props {
}


const Breadcrumbs: React.FC<Props> = () => {
    const location = useLocation();

    const [previousPath, setPreviousPath] = useState('Home');

    useEffect(() => {
        const item = localStorage.getItem(PREV_PATH);
        item && setPreviousPath(item);
    }, []);

    return (
        <nav className={styles.breadCrumbs}>
            <Link to={previousPath === 'Home' ? '/' : `/${previousPath}`}
                className={classNames(styles.breadcrumb, { [styles.active]: location.pathname === "/" })}
            >
                {previousPath}
            </Link>
            <span className={styles.arrow}>&gt;</span>
            <div
                className={classNames(styles.breadcrumb, { [styles.active]: location.pathname.startsWith("/") })}
            >
                Lab
            </div>
        </nav>
    );
}

export default Breadcrumbs;