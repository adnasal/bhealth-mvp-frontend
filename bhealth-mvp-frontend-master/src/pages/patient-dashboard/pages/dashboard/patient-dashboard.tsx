import React, { useEffect, useState } from 'react';
import styles from '../../patient-dashboard.module.scss';
import { CreateAppointment, DashboardSidePanel } from '../../../../components/dashboard';
import { Table } from '../../../../components/table';
import { TABLE } from '../../../../components/types';
import { columnsAppointment, rowsAppointment } from '../../../../moc-data/dataDashboard';
import { useLocation } from 'react-router-dom';

interface Props {
}

const PatientDashboard: React.FC<Props> = () => {

    return (<>
        <Table
            type={TABLE.DASHBOARD_ADMIN}
            columnTitles={columnsAppointment}
            rows={rowsAppointment}
            heading='All Appointments'
        />
    </>)
}

export default PatientDashboard;