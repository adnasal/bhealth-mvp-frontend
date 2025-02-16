import React, { useEffect, useState } from 'react';
import styles from './requests-page.module.scss';
import { Table } from '../../../../components/table';
// import { rowsAppointment, columnsAppointment } from '../../../../moc-data/dataDashboard';
import { TABLE } from '../../../../components/types';
import { useGetUpcomingAppointmentsLabsQuery } from '../../../../services/appointmentService';

interface Props {
}

const HistoryPage: React.FC<Props> = (props) => {

    //States
    // const { data: upcommingAppointmentDataLab } = useGetUpcomingAppointmentsLabsQuery({})
    const [tableData, setTableData] = useState([])

    //Column
    const columnsAppointment = ['Doctor’s Name', 'Date', 'TEST NAME', 'FEES', 'Status', 'Meeting Status'];

    //Effects
    // useEffect(() => {
    //     const data = upcommingAppointmentData?.map((item: any, index: string) => {
    //         return {
    //             date: (item.date)?.split('T')[0],
    //             fees: item?.fee,
    //             firstName: item?.doctor,
    //             id: index,
    //             lastName: '',
    //             name: item.service_appointment?.name,
    //             photo: item.patient?.profile_picture,
    //             status: item.status === 1 ? "Scheduled" : item.status === 0 ? "Request" : 'Cancel'
    //         }
    //     }
    //     )
    //     setTableData(data)
    // }, [upcommingAppointmentData])

    return <>
        <Table
            page='APPOINMENTS'
            type={TABLE.DASHBOARD_ADMIN}
            columnTitles={columnsAppointment}
            rows={tableData}
            heading='History'
        />
    </>
}

export default HistoryPage; 