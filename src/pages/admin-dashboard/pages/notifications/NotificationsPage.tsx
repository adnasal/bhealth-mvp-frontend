import React, { useEffect, useState } from 'react';
import styles from './requests-page.module.scss';
import { Table } from '../../../../components/table';
// import { rowsAppointment, columnsAppointment } from '../../../../moc-data/dataDashboard';
import { TABLE } from '../../../../components/types';
import { useGetNotificationQuery } from '../../../../services/appointmentService';

interface Props {
}

interface accessDataType {
    "User Type": string
    "User Id": string
    access: string
    refresh: string
}

const NotificationsPage: React.FC<Props> = (props) => {

    const [labId, setLabId] = useState<any>()

    //States
    const { data: notificationData } = useGetNotificationQuery({ lab: labId })
    const [tableData, setTableData] = useState([])

    //Column
    const columnsAppointment = ['Patient’s Name','DATE', 'TEST NAME', 'STATUS'];
    
    //Effects

    useEffect(() => {
        let accessData: accessDataType | null = localStorage.getItem("accessData") ? JSON.parse(localStorage.getItem("accessData") ?? '') : null
        setLabId(accessData?.["User Id"])       
    }, [])

    useEffect(() => {
        const data = notificationData?.map((item: any, index: string) => {
            return {
                id: item?.id,
                name: item?.notification_appointment?.service_appointment?.name,
                date: (item.notification_date)?.split('T')[0],
                firstName: item?.notification_appointment?.patient?.first_name,
                lastName: item?.notification_appointment?.patient?.last_name,
                fees: item?.notification_appointment?.fee,
                status: item?.is_confirmed === false ? "Not Confirmed" : item.is_confirmed === true ? "Confirmed" : 'Cancel',
            }
        }
        )
        setTableData(data)
    }, [notificationData])
    return <>
        <Table
            type={TABLE.PATIENT_NOTIFICATION}
            columnTitles={columnsAppointment}
            rows={tableData}
            heading='All Requests'
        />
    </>
}

export default NotificationsPage; 