import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames';
import { Navigaion } from './navigation';
import { useLocation } from 'react-router-dom';

interface Props {
    setSidePanel: React.Dispatch<React.SetStateAction<boolean>>;
    isSigned: boolean;
}

export const SidePanel: React.FC<Props> = ({ setSidePanel, isSigned }) => {
    const [isOpen, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(true);
    }, []);

    useEffect(() => {
        isOpen && closeSidePanel()
    }, [location.pathname])

    function closeSidePanel() {
        setOpen(false);
        setTimeout(() => setSidePanel(false), 300);
    }

    return <div className={styles.sidePanel}>
        <div className={styles.backdrop} onClick={closeSidePanel} />
        <div className={classNames(styles.contentWrapper, { [styles.open]: isOpen })}>
            <Navigaion isSigned={isSigned} />
        </div>
    </div>
}
