import React, { useEffect, useState } from 'react';
import styles from './requests-page.module.scss';
import { Table } from '../../../../components/table';
// import { rowsAppointment, columnsAppointment } from '../../../../moc-data/dataDashboard';
import { TABLE } from '../../../../components/types';
import { useGetUpcomingAppointmentsUserQuery } from '../../../../services/appointmentService';

interface Props {
}
interface accessDataType {
    "User Type": string
    "User Id": string
    access: string
    refresh: string
}


const AppointmentsPage: React.FC<Props> = (props) => {

    //States
    const [patientId, setPatientId] = useState<any>()
    const { data: upcommingAppointmentData } = useGetUpcomingAppointmentsUserQuery(patientId)
    const [tableData, setTableData] = useState([])

    //Column
    const columnsAppointment = ['Doctor’s Name', 'Date', 'TEST NAME', 'FEES', 'Status', 'Meeting Status'];

    //Effects

    useEffect(() => {
        let accessData: accessDataType | null = localStorage.getItem("accessData") ? JSON.parse(localStorage.getItem("accessData") ?? '') : null
        setPatientId(accessData?.["User Id"])       
    }, [])

    useEffect(() => {
        const data = upcommingAppointmentData?.map((item: any, index: string) => {
            return {
                date: (item.date)?.split('T')[0],
                fees: item?.fee,
                doctor:item?.doctor,
                id: index,
                name: item.service_appointment?.name,
                photo: item.patient?.profile_picture,
                status: item.status === 1 ? "Scheduled" : item.status === 0 ? "Request" : 'Cancel'
            }
        }
        )
        setTableData(data)
    }, [upcommingAppointmentData])

    return <>
        <Table
            page='APPOINMENTS'
            type={TABLE.DASHBOARD_PATIENT}
            columnTitles={columnsAppointment}
            rows={tableData}
            heading='All Appointments'
        />
    </>
}

export default AppointmentsPage; 