import React, { useEffect, useState } from 'react';
import styles from './requests-page.module.scss';
import { Table } from '../../../../components/table';
// import { rowsAppointment, columnsAppointment } from '../../../../moc-data/dataDashboard';
import { TABLE } from '../../../../components/types';
import { useGetRequestsQuery } from '../../../../services/appointmentService';

interface Props {
}

interface accessDataType {
    "User Type": string
    "User Id": string
    access: string
    refresh: string
}

const RequestsPage: React.FC<Props> = (props) => {

    const [labId, setLabId] = useState<any>()

    //States
    const { data: requestData } = useGetRequestsQuery(1)
    const [tableData, setTableData] = useState([])

    //Column
    const columnsAppointment = ['Patient’s Name', 'DOB', 'TEST NAME', 'PHONE NUMBER', ""];

    
    //Effects

    useEffect(() => {
        let accessData: accessDataType | null = localStorage.getItem("accessData") ? JSON.parse(localStorage.getItem("accessData") ?? '') : null
        setLabId(accessData?.["User Id"])       
    }, [])

    useEffect(() => {
        const data = requestData?.map((item: any, index: string) => {
            return {
                id: index,
                photo: item?.patient?.profile_picture,
                name: item?.service_appointment?.name,
                date: (item.dob)?.split('T')[0],
                firstName: item?.patient?.first_name,
                lastName: item?.patient?.last_name,
                fees: "",
                status: item?.status === 1 ? "Scheduled" : item.status === 0 ? "Request" : 'Cancel',
                phone: item?.patient?.phone_number,
                lab_id: labId,
                service_id: item?.service_appointment?.id,
                patient: item?.patient?.id
            }
        }
        )
        setTableData(data)
    }, [requestData])
    return <>
        <Table
            type={TABLE.PATIENT_REQUEST}
            columnTitles={columnsAppointment}
            rows={tableData}
            heading='All Requests'
        />
    </>
}

export default RequestsPage; 