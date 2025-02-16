import React, { useEffect, useState } from 'react';
import styles from './requests-page.module.scss';
import { Table } from '../../../../components/table';
// import { rowsAppointment, columnsAppointment } from '../../../../moc-data/dataDashboard';
import { TABLE } from '../../../../components/types';
import { useGetUpcomingAppointmentsLabsQuery } from '../../../../services/appointmentService';

interface Props {
}
interface accessDataType {
    "User Type": string
    "User Id": string
    access: string
    refresh: string
}


const AppointmentsPageAdmin: React.FC<Props> = (props) => {

    //States
    const [labId, setLabId] = useState<any>()

    const { data: upcommingAppointmentDataLab } = useGetUpcomingAppointmentsLabsQuery(labId)
    const [tableData, setTableData] = useState([])

    //Column
    const columnsAppointment = ['Patient', 'Date', 'TEST NAME', 'FEES', 'Status', 'Meeting Status'];

    //Effects

    useEffect(() => {
        let accessData: accessDataType | null = localStorage.getItem("accessData") ? JSON.parse(localStorage.getItem("accessData") ?? '') : null
        setLabId(accessData?.["User Id"])       
    }, [])

    useEffect(() => {
        const data = upcommingAppointmentDataLab?.results?.map((item: any, index: string) => {
            return {
                date: (item.date)?.split('T')[0],
                time:(item.date)?.match(/\d\d:\d\d:\d\d/)[0],
                fees: item?.fee,
                photo: item?.patient?.profile_picture,
                patient:item?.patient?.username,
                id: index,
                name:item?.service_appointment,
                status: item.status === 1 ? "Scheduled" : item.status === 0 ? "Request" : 'Cancel'
            }
        }
        )
        setTableData(data)
    }, [upcommingAppointmentDataLab])

    return <>
        <Table
            page='APPOINMENTS'
            type={TABLE.DASHBOARD_ADMIN}
            columnTitles={columnsAppointment}
            rows={tableData}
            heading='All Appointments'
        />
    </>
}

export default AppointmentsPageAdmin; 