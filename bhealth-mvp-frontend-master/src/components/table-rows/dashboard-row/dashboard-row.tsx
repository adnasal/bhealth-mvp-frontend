import React, { useEffect, useState } from 'react';
import styles from './dashboard-row.module.scss';
import { Row } from '../../types';
import classNames from 'classnames';
import { AppointPopup } from '../../appoint-popup';
import { UploadPopup } from '../../upload-popup';
import OutsideClickHandler from 'react-outside-click-handler';
import { useLocation } from 'react-router-dom';
import avatar from "../images/avatar.png"

interface Props {
    data: Row;
    cellWidth: number;
    appointmentId: string;
    setAppointmentId: React.Dispatch<React.SetStateAction<string>>;
    uploadId: string;
    setUploadId: React.Dispatch<React.SetStateAction<string>>;
    cancelAppointment?: (id: string) => void;
    page: string;
}

const DashboardRow: React.FC<Props> = (props) => {
    const { data, cellWidth, appointmentId,page, setAppointmentId, uploadId, setUploadId, cancelAppointment } = props;
    const locaton = useLocation();

    const handleOpenDetails = () => {
        setAppointmentId(data.id!);
    }

    const handleOpenUpload = (id: string) => {
        setUploadId(data.id!);
    }

    const isPatientHistory = (page === 'HISTORY');

    return <div className={styles.profileAppointmentRow}>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.patient)}>
           { data.photo && <div className={styles.avatar}>
                 <img src={data.photo}
                 onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = avatar;
                }}
                 alt={`${data.firstName} ${data.lastName}`} />
            </div>}
            <div className={styles.credentials}>{data?.patient && data?.patient}</div>
            <div className={styles.credentials}>{data?.doctor && data?.doctor}</div>
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text)}>
            {data.date}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.boldText)}>
            {data.name}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text)}>
            {data.fees}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.status)}>
            <div data-status={data.status} className={styles.statusCircle}></div>
            <div className={styles.text}>{data.status}</div>
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text, styles.visible)}>
            <button
                className={classNames(styles.button,
                    { [styles.smallButton]: isPatientHistory },
                    { [styles.active]: appointmentId === data.id },
                )}
                onClick={isPatientHistory ? () => handleOpenUpload(data.id!) : handleOpenDetails}
            >
                {isPatientHistory ? 'Send' : 'View Details'}
            </button>
            {
                appointmentId === data.id && <OutsideClickHandler
                    onOutsideClick={() => { setAppointmentId('') }}
                >
                    <AppointPopup
                        setAppointmentId={setAppointmentId}
                        cancelAppointment={cancelAppointment!}
                        id={data.id}
                        data={data}
                    />
                </OutsideClickHandler>
            }
            {
                uploadId === data.id &&
                <UploadPopup
                    uploadId={data.id}
                    setUploadId={setUploadId}
                />
            }
        </div>
    </div>
}

export default DashboardRow;
