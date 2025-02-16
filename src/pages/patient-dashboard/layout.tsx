import React, { FC, useState, useEffect } from 'react'
import { CreateAppointment, DashboardSidePanel } from '../../components/dashboard'
import styles from './patient-dashboard.module.scss'
import { useLocation } from 'react-router-dom'

interface props {
    children: JSX.Element
}

const Layout: FC<props> = ({ children }) => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [pageTitle, setPageTitle] = useState('');

    const handleSideMenu = (state: boolean) => {
        setMenuOpen(state)
    }

    useEffect(() => {
        if (location.pathname === '/patient-dashboard' || location.pathname === '/patient-dashboard/')
            setPageTitle('Upcoming Appoitnments')

        if (location.pathname === '/patient-dashboard/history')
            setPageTitle('Past Appointments')

        if (location.pathname === '/patient-dashboard/appointments')
            setPageTitle('Your Appointments')

        if (location.pathname === '/patient-dashboard/requests')
            setPageTitle('Requests')
    }, [location])


    return (
        <>
            <div className={styles.adminDashboard}>
                <DashboardSidePanel menuOpen={menuOpen} setMenuOpen={setMenuOpen} panel='PATIENT' />
                <div className={styles.content}>
                    <CreateAppointment handleSideMenu={handleSideMenu} />
                    <section className={styles.dataSection}>
                        <div className={styles.row}>
                            <h2 className={styles.title}>{pageTitle}</h2>
                            <div className={styles.rowAction}>Show all</div>
                        </div>
                        {children}
                    </section>
                </div>
            </div>
        </>
    )
}

export { Layout }