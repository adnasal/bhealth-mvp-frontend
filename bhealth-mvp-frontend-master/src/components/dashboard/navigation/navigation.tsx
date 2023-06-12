import React, { useEffect, useState } from 'react';
import styles from './navigation.module.scss';
import homeIcon from '../images/home.svg';
import historyIcon from '../images/history.svg';
import messageIcon from '../images/message.svg';
import requestIcon from '../images/request.svg';
import { Link, useLocation } from "react-router-dom";
import classNames from 'classnames';

interface Props {
    panel?:string
}

const Navigation: React.FC<Props> = ({panel}) => {
    const location = useLocation();

    if(panel === 'PATIENT'){
        return <nav className={styles.tabsContainer}>
        {/* <Link
            to={`/patient-dashboard`}
            className={classNames(styles.tab, { [styles.active]: location.pathname === '/patient-dashboard' })}
        >
            <div className={styles.tabImage}>
                <img src={homeIcon} alt="Dashboard" />
            </div>
            <div className={styles.tabText}>Dashboard</div>
        </Link> */}
        <Link
            to={`/patient-dashboard/history`}
            className={classNames(styles.tab, { [styles.active]: location.pathname === '/patient-dashboard/history' })}
        >
            <div className={styles.tabImage}>
                <img src={historyIcon} alt="History" />
            </div>
            <div className={styles.tabText}>History</div>
        </Link>
        <Link
            to={`/patient-dashboard/appointments`}
            className={classNames(styles.tab, { [styles.active]: location.pathname === '/patient-dashboard/appointments' })}
        >
            <div className={styles.tabImage}>
                <img src={messageIcon} alt="Appointments" />
            </div>
            <div className={styles.appointments}>
                <div className={styles.appointmentsText}>Appointments</div>
                {/* <div className={styles.notifiactions}>6</div> */}
            </div>
        </Link>
       
    </nav>
    }

    if(panel === 'ADMIN'){
        return <nav className={styles.tabsContainer}>
        {/* <Link
            to={`/admin-dashboard`}
            className={classNames(styles.tab, { [styles.active]: location.pathname === '/admin-dashboard' })}
        >
            <div className={styles.tabImage}>
                <img src={homeIcon} alt="Dashboard" />
            </div>
            <div className={styles.tabText}>Dashboard</div>
        </Link> */}
        {/* <Link
            to={`/admin-dashboard/history`}
            className={classNames(styles.tab, { [styles.active]: location.pathname === '/admin-dashboard/history' })}
        >
            <div className={styles.tabImage}>
                <img src={historyIcon} alt="History" />
            </div>
            <div className={styles.tabText}>History</div>
        </Link> */}
        <Link
            to={`/admin-dashboard/appointments`}
            className={classNames(styles.tab, { [styles.active]: location.pathname === '/admin-dashboard/appointments' })}
        >
            <div className={styles.tabImage}>
                <img src={messageIcon} alt="Appointments" />
            </div>
            <div className={styles.appointments}>
                <div className={styles.appointmentsText}>Appointments</div>
                {/* <div className={styles.notifiactions}>6</div> */}
            </div>
        </Link>
        <Link
            to={`/admin-dashboard/requests`}
            className={classNames(styles.tab, { [styles.active]: location.pathname === '/admin-dashboard/requests' })}
        >
            <div className={styles.tabImage}>
                <img src={requestIcon} alt="Appointments" />
            </div>
            <div className={styles.appointments}>
                <div className={styles.appointmentsText}>Requests</div>
                {/* <div className={styles.notifiactions}>6</div> */}
            </div>
        </Link>
        <Link
            to={`/admin-dashboard/notifications`}
            className={classNames(styles.tab, { [styles.active]: location.pathname === '/admin-dashboard/notifications' })}
        >
            <div className={styles.tabImage}>
                <img src={requestIcon} alt="Notifications" />
            </div>
            <div className={styles.appointments}>
                <div className={styles.appointmentsText}>Notifications</div>
            </div>
        </Link>
    </nav>
    }

    return <nav className={styles.tabsContainer}>
        <Link
            to={`${location.pathname}#dashboard`}
            className={classNames(styles.tab, { [styles.active]: location.hash === '#dashboard' })}
        >
            <div className={styles.tabImage}>
                <img src={homeIcon} alt="Dashboard" />
            </div>
            <div className={styles.tabText}>Dashboard</div>
        </Link>
        <Link
            to={`${location.pathname}#history`}
            className={classNames(styles.tab, { [styles.active]: location.hash === '#history' })}
        >
            <div className={styles.tabImage}>
                <img src={historyIcon} alt="History" />
            </div>
            <div className={styles.tabText}>History</div>
        </Link>
        <Link
            to={`${location.pathname}#appointments`}
            className={classNames(styles.tab, { [styles.active]: location.hash === '#appointments' })}
        >
            <div className={styles.tabImage}>
                <img src={messageIcon} alt="Appointments" />
            </div>
            <div className={styles.appointments}>
                <div className={styles.appointmentsText}>Appointments</div>
                <div className={styles.notifiactions}>6</div>
            </div>
        </Link>
        <Link
            to={`/requests`}
            className={classNames(styles.tab, { [styles.active]: location.pathname === '/requests' })}
        >
            <div className={styles.tabImage}>
                <img src={requestIcon} alt="Appointments" />
            </div>
            <div className={styles.appointments}>
                <div className={styles.appointmentsText}>Requests</div>
                {/* <div className={styles.notifiactions}>6</div> */}
            </div>
        </Link>
    </nav>
}

export default Navigation;