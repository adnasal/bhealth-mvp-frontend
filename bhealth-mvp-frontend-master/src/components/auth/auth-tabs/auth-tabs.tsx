import React from 'react';
import styles from './auth-tabs.module.scss';
import classNames from 'classnames';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

interface Props {
    leftTab: string;
    rightTab: string;
}

const AuthTabs: React.FC<Props> = ({ leftTab, rightTab }) => {
    const location = useLocation();

    return <div className={styles.authTabs}>
        <Link
            to={"/signup#personal"}
            className={classNames(styles.tab, { [styles.active]: location.hash === '#personal' })}
        >
            {leftTab}
        </Link>
        <Link
            to={"/signup#institution"}
            className={classNames(styles.tab, { [styles.active]: location.hash === '#institution' })}
        >
            {rightTab}
        </Link>
    </div>
}

export default AuthTabs;