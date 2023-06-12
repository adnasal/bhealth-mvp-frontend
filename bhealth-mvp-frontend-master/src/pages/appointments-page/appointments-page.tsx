import React, { useEffect, useState } from 'react';
import styles from './appointments-page.module.scss';
import { Table } from '../../components/table';
import { rowsAppointment, columnsAppointment } from '../../moc-data/dataProfile';
import { TABLE } from '../../components/types';

interface Props {
}

const AppointmentsPage: React.FC<Props> = (props) => {
    useEffect(() => {
        // request for all appointments
    }, [])

    return <div className={styles.appointmentsPage}>
        <Table
            type={TABLE.PROFILE_APPOINTMENT}
            columnTitles={columnsAppointment}
            rows={rowsAppointment}
        />
    </div>
}

export default AppointmentsPage; 