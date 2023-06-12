import React, { useEffect, useState } from 'react';
import styles from './admin-dashboard.module.scss';
import { CreateAppointment, DashboardSidePanel } from '../../components/dashboard';
import { rowsAppointment } from '../../moc-data/dataProfile';
// import { IndicationCard } from '../../components/dashboard/indication-card';
// import { INDICATION_IMAGE } from '../../components/dashboard/types';
// import greenIcon from './images/greenIcon.svg';
// import lightGreenIcon from './images/lightGreenIcon.svg';
// import orangeIcon from './images/orangeIcon.svg';
// import redIcon from './images/redIcon.svg';
// import avatar from './images/avatar.png';
// import { AppointmentCard } from '../../components/dashboard/appointment-card';
// import { Table } from '../../components/table';
// import { TABLE } from '../../components/types';
// import { columnsAppointment, rowsAppointment } from '../../moc-data/dataDashboard';


interface Props {
    children: JSX.Element
}

const Layout: React.FC<Props> = ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [rows, setRows] = useState(rowsAppointment);

    useEffect(() => {
        // const response = await request to server to fetch rows
        // setRows(response);
    }, []);


    const handleSideMenu = (state: boolean) => setMenuOpen(state);

    return <div className={styles.adminDashboard}>
        <DashboardSidePanel menuOpen={menuOpen} setMenuOpen={setMenuOpen} panel='ADMIN' />
        <div className={styles.content}>
            <CreateAppointment handleSideMenu={handleSideMenu} />
            <section className={styles.dataSection}>
                {children}
            </section>
        </div >
    </div >
}

export default Layout;