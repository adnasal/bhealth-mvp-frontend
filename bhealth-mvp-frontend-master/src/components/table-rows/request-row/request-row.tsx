import React from 'react';
import styles from './request-row.module.scss';
import { Row } from '../../types';
import classNames from 'classnames';
import { AppointPopup } from '../../appoint-popup';
import OutsideClickHandler from 'react-outside-click-handler';
import { RequestPopup } from '../../request-popup';
import avatar from "../images/avatar.png"

interface Props {
    data: Row;
    cellWidth: number;
    appointmentId: string;
    setAppointmentId: React.Dispatch<React.SetStateAction<string>>;
    uploadId: string;
    setUploadId: React.Dispatch<React.SetStateAction<string>>;
    cancelAppointment?: (id: string) => void;
    page?: string;
}

const RequestRow: React.FC<Props> = (props) => {
    const { data, cellWidth, appointmentId, page, setAppointmentId, uploadId, setUploadId, cancelAppointment } = props;
    const handleOpenDetails = () => {
        setAppointmentId(data.id!);
    }

    const handleOpenUpload = (id: string) => {
        setUploadId(data.id!);
    }

    const isPatientHistory = true;

    return <div className={styles.profileAppointmentRow}>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.patient)}>
            <div className={styles.avatar}>
              <img src={data.photo}
                 onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = avatar;
                }}
                alt={`${data.firstName} ${data.lastName}`} />
            </div>
            <div className={styles.credentials}>{data.firstName} {data.lastName}</div>
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text)}>
            {data.date}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.boldText)}>
            {data.name}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text)}>
            {data.phone}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text, styles.visible)}>
            <button
                className={classNames(styles.button,
                    { [styles.smallButton]: isPatientHistory },
                    { [styles.active]: appointmentId === data.id },
                )}
                onClick={() => handleOpenUpload(data.id!)}
            >
                Send
            </button>
            {
                appointmentId === data.id && <OutsideClickHandler
                    onOutsideClick={() => { setAppointmentId('') }}
                >
                    <AppointPopup
                        setAppointmentId={setAppointmentId}
                        cancelAppointment={cancelAppointment!}
                        id={data.id}
                    />
                </OutsideClickHandler>
            }
            {
                uploadId === data.id &&
                <RequestPopup
                    uploadId={data.id}
                    setUploadId={setUploadId}
                    data={data}
                />
            }
        </div>
    </div>
}

export default RequestRow;
