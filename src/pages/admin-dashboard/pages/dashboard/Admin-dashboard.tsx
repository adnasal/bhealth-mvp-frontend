import React, { useEffect, useState } from 'react';
// import styles from './admin-dashboard.module.scss';
import styles from '../../admin-dashboard.module.scss'
import { columnsAppointment, rowsAppointment } from '../../../../moc-data/dataDashboard';
import { CreateAppointment, DashboardSidePanel } from '../../../../components/dashboard';
import { IndicationCard } from '../../../../components/dashboard/indication-card';
import { INDICATION_IMAGE } from '../../../../components/dashboard/types';
// import { CreateAppointment, DashboardSidePanel } from '../../components/dashboard';
// import { IndicationCard } from '../../components/dashboard/indication-card';
// import { INDICATION_IMAGE } from '../../components/dashboard/types';
import greenIcon from '../../images/greenIcon.svg';
import lightGreenIcon from '../../images/lightGreenIcon.svg';
import orangeIcon from '../../images/orangeIcon.svg';
import redIcon from '../../images/redIcon.svg';
import avatar from '../../images/avatar.png';
import { AppointmentCard } from '../../../../components/dashboard/appointment-card';
import { Table } from '../../../../components/table';
import { TABLE } from '../../../../components/types';
// import { AppointmentCard } from '../../components/dashboard/appointment-card';
// import { Table } from '../../components/table';
// import { TABLE } from '../../components/types';
// import { columnsAppointment, rowsAppointment } from '../../moc-data/dataDashboard';

interface Props {
}

const AdminDashboardPage: React.FC<Props> = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [rows, setRows] = useState(rowsAppointment);

    useEffect(() => {
        // const response = await request to server to fetch rows
        // setRows(response);
    }, []);

    const cancelAppointment = (id: string) => {
        //TODO lower lofic must be replaced with "post" or "delete" request 
        const filteredRows = rows.filter(row => row.id !== id);
        setRows(filteredRows);
    }

    const handleSideMenu = (state: boolean) => setMenuOpen(state);

    return <div className={styles.adminDashboard}>
        {/* <DashboardSidePanel menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <div >
            {/* <CreateAppointment handleSideMenu={handleSideMenu} /> */}
            <section className={styles.dataSection}>
                <div className={styles.indicationsContainer}>
                    <IndicationCard
                        type={INDICATION_IMAGE.APPOINTMENTS}
                        image={redIcon}
                        mainIndication='2.300'
                        secondaryIndicaiton='(+5%)'
                        title='Appointments'
                    />
                    <IndicationCard
                        type={INDICATION_IMAGE.NEW_APPOINTMENTS}
                        image={greenIcon}
                        mainIndication='12'
                        secondaryIndicaiton='(+20%)'
                        title='New Appointments'
                    />
                    <IndicationCard
                        type={INDICATION_IMAGE.GROWTH}
                        image={orangeIcon}
                        mainIndication='23%'
                        secondaryIndicaiton='(-15%)'
                        title='Growth'
                    />
                    <IndicationCard
                        type={INDICATION_IMAGE.STAFF}
                        image={lightGreenIcon}
                        mainIndication='57'
                        secondaryIndicaiton='(100%)'
                        title='Staff'
                    />
                </div>
                <div className={styles.row}>
                    <h2 className={styles.title}>Today’s Appoitnments</h2>
                    <div className={styles.rowAction}>Show all</div>
                </div>
                <div className={styles.appointmentsContainer}>
                    <AppointmentCard
                        avatar={avatar}
                        firstName='Marc'
                        lastName='Joseph'
                        subtitle='PCR Test'
                        date='Thu.24'
                        time='11:00-12:00'
                    />
                    <AppointmentCard
                        firstName='Kristin'
                        lastName='Watson'
                        subtitle='Antigen Test'
                        date='Thu.24'
                        time='11:00-12:00'
                    />
                    <AppointmentCard
                        avatar={avatar}
                        firstName='Darlene'
                        lastName='Robertson'
                        subtitle='Diopter check'
                        date='Thu.24'
                        time='11:00-12:00'
                    />
                    <AppointmentCard
                        firstName='Devon'
                        lastName='Lane'
                        subtitle='PCR Test'
                        date='Thu.24'
                        time='11:00-12:00'
                    />
                </div>
                <Table
                    type={TABLE.DASHBOARD_ADMIN}
                    columnTitles={columnsAppointment}
                    rows={rows}
                    heading='New Appointments'
                    cancelAppointment={cancelAppointment}
                />
            </section>
        </div >
    </div >
}

export default AdminDashboardPage;