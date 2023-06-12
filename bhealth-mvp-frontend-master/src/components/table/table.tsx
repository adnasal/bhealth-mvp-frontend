import React, { useEffect, useState } from 'react';
import styles from './table.module.scss';
import { Row, TABLE } from '../types';
import { ProfileAppointmentRow, ProfileFindingRow, DashboardRow } from '../table-rows';
import classNames from 'classnames';
import { UploadPopup } from '../upload-popup';
import RequestRow from '../table-rows/request-row/request-row';
import NotificationRow from '../table-rows/notification-row/notification-row';

interface Props {
    type: TABLE;
    heading?: string;
    columnTitles: string[];
    emptyColumns?: number;
    rows: Row[];
    page?: string;
    setPopup?: React.Dispatch<React.SetStateAction<boolean>>;
    cancelAppointment?: (id: string) => void
}

const Table: React.FC<Props> = ({ heading, columnTitles, emptyColumns, rows, type, setPopup, cancelAppointment, page }) => {
    const cellWidth = 100 / columnTitles.length + (emptyColumns || 0);
    const [appointmentId, setAppointmentId] = useState('');
    const [uploadId, setUploadId] = useState('');

    const [appointmentIdRequest, setAppointmentIdRequest] = useState('');
    const [uploadIdRequest, setUploadIdRequest] = useState('');

    return <div className={styles.table}>
        {heading && <h1 className={styles.heading}>{heading}</h1>}
        <div className={classNames(styles.titlesContainer, { [styles.titlesRadius]: !heading })}>
            {
                columnTitles?.map((title, i) => {
                    return <div
                        key={i}
                        className={styles.columnTitle}
                        style={{ width: `${cellWidth}%` }}
                    >
                        {title}
                    </div>
                })
            }
            {emptyColumns && <div style={{ width: `${cellWidth}%` }} />}
        </div>
        <div className={styles.rowsContainer}>
            {
                type === TABLE.PROFILE_APPOINTMENT && rows?.map((row, i) => {
                    return <ProfileAppointmentRow
                        key={i}
                        data={row}
                        cellWidth={cellWidth}
                    />
                })
            }
            {
                type === TABLE.PROFILE_FINDINGS && rows?.map((row, i) => {
                    return <ProfileFindingRow
                        key={i}
                        data={row}
                        cellWidth={cellWidth}
                        setPopup={setPopup}
                    />
                })
            }
            {
                type === TABLE.DASHBOARD_ADMIN && rows?.map((row, i) => {
                    return <DashboardRow
                        key={i}
                        data={row}
                        cellWidth={cellWidth}
                        appointmentId={appointmentId}
                        setAppointmentId={setAppointmentId}
                        uploadId={uploadId}
                        setUploadId={setUploadId}
                        cancelAppointment={cancelAppointment}
                        page={page ?? ''}
                    />
                })
            }
             {
                type === TABLE.DASHBOARD_PATIENT && rows?.map((row, i) => {
                    return <DashboardRow
                        key={i}
                        data={row}
                        cellWidth={cellWidth}
                        appointmentId={appointmentId}
                        setAppointmentId={setAppointmentId}
                        uploadId={uploadId}
                        setUploadId={setUploadId}
                        cancelAppointment={cancelAppointment}
                        page={page ?? ''}
                    />
                })
            }
            {
                type === TABLE.PATIENT_REQUEST && rows?.map((row, i) => {
                    return <RequestRow
                        key={i}
                        data={row}
                        cellWidth={cellWidth}
                        appointmentId={appointmentIdRequest}
                        setAppointmentId={setAppointmentIdRequest}
                        uploadId={uploadIdRequest}
                        setUploadId={setUploadIdRequest}
                        page={page ?? ''}
                    />
                })
            }
            {
                type === TABLE.PATIENT_NOTIFICATION && rows?.map((row, i) => {
                    return <NotificationRow
                        key={i}
                        data={row}
                        cellWidth={cellWidth}
                        appointmentId={appointmentIdRequest}
                        setAppointmentId={setAppointmentIdRequest}
                        uploadId={uploadIdRequest}
                        setUploadId={setUploadIdRequest}
                        page={page ?? ''}
                    />
                })
            }
        </div>
    </div>
}

export default Table;