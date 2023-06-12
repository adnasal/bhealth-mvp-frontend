import React, { useEffect, useState } from 'react';
import styles from './dashboard-side-panel.module.scss';
import logoIcon from '../images/logo.svg';
import { Navigation } from '../navigation';
import profileIcon from '../images/profile.svg';
import logIcon from '../images/log.svg';
import classNames from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';

interface Props {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    panel?:string;
}

const DashboardSidePanel: React.FC<Props> = ({ menuOpen, setMenuOpen, panel }) => {

    return <div className={classNames(styles.dashboardSidePanel, { [styles.open]: menuOpen })}>
        <div className={styles.backdrop}>
            <OutsideClickHandler onOutsideClick={() => { setMenuOpen(false) }}>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.logo}>
                            <img src={logoIcon} alt="logo" />
                        </div>
                        <Navigation panel={panel ?? ''}/>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.item}>
                            <div className={styles.itemImage}>
                                <img src={profileIcon} alt="Account" />
                            </div>
                            <div className={styles.itemText}>Account</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemImage}>
                                <img src={logIcon} alt="Logout" />
                            </div>
                            <div className={styles.itemText}>Logout</div>
                        </div>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    </div>
}

export default DashboardSidePanel;