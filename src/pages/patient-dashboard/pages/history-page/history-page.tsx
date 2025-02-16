import React, { useEffect, useState } from 'react';
import { Table } from '../../../../components/table';
import { TABLE } from '../../../../components/types';
// import { columnsAppointment, rowsAppointment } from '../../../../moc-data/dataDashboard';
import { useGetPastAppointmentsUserQuery } from '../../../../services/appointmentService';

interface Props {
}

interface accessDataType {
    "User Type": string
    "User Id": string
    access: string
    refresh: string
}

const HistoryPage: React.FC<Props> = (props) => {

    //States
    const [userId, setUserId] = useState<any>()
    const { data: pastAppointmentData } = useGetPastAppointmentsUserQuery(userId)
    const [tableData, setTableData] = useState([])

    //Column
    const columnsAppointment = ['Doctor’s Name', 'Date', 'TEST NAME', 'FEES', 'Status', 'Meeting Status'];

    //Effects

    useEffect(() => {
        let accessData: accessDataType | null = localStorage.getItem("accessData") ? JSON.parse(localStorage.getItem("accessData") ?? '') : null
        setUserId(accessData?.["User Id"])       
    }, [])

    useEffect(() => {
        const data = pastAppointmentData?.map((item: any, index: string) => {
            return {
                date: (item.date)?.split('T')[0],
                fees: item?.fee,
                //item.lab_appointment?.name
                firstName: item?.doctor,
                id: index,
                lastName: '',
                name: item.service_appointment?.name,
                photo: item.patient?.profile_picture,
                status: item.status === 1 ? "Scheduled" : item.status === 0 ? "Request" : 'Cancel'
            }
        })
        setTableData(data)
    }, [pastAppointmentData])

    return <>
        <Table
            page='HISTORY'
	    type={TABLE.DASHBOARD_PATIENT}
            columnTitles={columnsAppointment}
            // rows={rowsAppointment}
            rows={tableData}
            heading='All Appointments'
        />
    </>
}

export default HistoryPage; 
