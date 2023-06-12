
import React, { useEffect, useState } from 'react';
import styles from './notification.module.scss'
import redIcon from '../images/red.svg'
import greenIcon from '../images/green.svg'
import classNames from 'classnames';
import { useCancelAppointmentMutation, useConfirmNotificationMutation } from '../../../services/appointmentService';
interface Props {
    // setPopup: React.Dispatch<React.SetStateAction<boolean>>;
    isCanceled?: boolean;
    name: string;
    date?: string;
    confirmButtons?: boolean
    dateRecieved: string;
    id: string
}

const Notification: React.FC<Props> = ({ isCanceled, name, dateRecieved, date, confirmButtons, id }) => {

    //States
    const [confirmNotification, { isError: isErrorConfirm }] = useConfirmNotificationMutation()
    const [isDeclined, setIsDeclined] = useState(false)

    const declineAppointment = () => {
        setIsDeclined(true)
    }
    console.log('isDeclined', isDeclined)

    return <div className={styles.notification}>
        <div className={classNames(styles.notificationItem, { [styles.cancelled]: isCanceled })}>
            <div className={styles.notificationImg}>
                <img src={isCanceled ? redIcon : greenIcon} alt="note" />
            </div>
            <div className={styles.notificationText}>
                <div className={styles.textItem}>
                    {
                        isCanceled ? <>
                            Your appointment with <span className={styles.bold}>{name}</span> has been <span className={styles.cancel}>cancelled</span>.
                        </>
                            : <>
                                Your appointment with <span className={styles.bold}>{name}</span> has been confirmed at <span className={styles.bold}>{date}</span>
                            </>
                    }
                    {
                        confirmButtons && <div className={styles.buttonRow}>
                            <button disabled={isDeclined} className={`${styles.buttonLeft} ${isDeclined && styles.disableButton}`} onClick={() => confirmNotification(id)}>Confirm</button>
                            <button className={styles.buttonRigt} onClick={declineAppointment}>Decline</button>
                        </div>
                    }

                </div>
                <div className={styles.date}>{dateRecieved}</div>
            </div>
        </div>
        <div className={styles.border}></div>
    </div>
}

export default Notification;