
import React, { useEffect, useState } from 'react';
import styles from './notifications-popup.module.scss'
import { Notification } from './notification';
import { Link } from 'react-router-dom';
import { useGetNotificationQuery } from '../../services/appointmentService';

interface Props {
    setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

interface accessDataType {
    "User Type": string
    "User Id": string
    access: string
    refresh: string
}

const NotificationsPopup: React.FC<Props> = ({ setOpenPopup }) => {

    const [userType, setUserType] = useState({})


    //States
    const { data: notificationData } = useGetNotificationQuery(userType)

    //Functionalities
    const handleBackdropClick = () => {
        setOpenPopup(false);
    }

    const handleClose = () => {
        setOpenPopup(false);
    }

    const getTimeAgo = (time: string) => {
        const date = new Date(time)
        const timeDifference = Date.now() - date.getTime();
        const minuteInMs = 60 * 1000;
        const hourInMs = 60 * minuteInMs;
        const dayInMs = 24 * hourInMs;
        const monthInMs = 30 * dayInMs;
        const yearInMs = 365 * dayInMs;

        if (timeDifference < minuteInMs) {
            const seconds = Math.round(timeDifference / 1000);
            return `${seconds} seconds ago`;
        } else if (timeDifference < hourInMs) {
            const minutes = Math.round(timeDifference / minuteInMs);
            return `${minutes} minutes ago`;
        } else if (timeDifference < dayInMs) {
            const hours = Math.round(timeDifference / hourInMs);
            return `${hours} hours ago`;
        } else if (timeDifference < monthInMs) {
            const days = Math.round(timeDifference / dayInMs);
            return `${days} days ago`;
        } else if (timeDifference < yearInMs) {
            const months = Math.round(timeDifference / monthInMs);
            return `${months} months ago`;
        } else {
            const years = Math.round(timeDifference / yearInMs);
            return `${years} years ago`;
        }
    }

    const getDateString = (notification: any) => {
        let date = new Date(notification?.notification_appointment?.date)
        var monthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
        let month = monthName(date)
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let tmpMinutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + tmpMinutes + ' ' + ampm;

        return `${date.getDay()} ${month} ${date.getFullYear()}, ${strTime}`
    }

    useEffect(() => {
        let accessData: accessDataType | null = localStorage.getItem("accessData") ? JSON.parse(localStorage.getItem("accessData") ?? '') : null
        accessData?.["User Type"] === "Patient" && setUserType({ patient: accessData?.["User Id"] })
        accessData?.["User Type"] === "Lab" && setUserType({ lab: accessData?.["User Id"] })
    }, [])

    return <div className={styles.notificationsPopup}>
        <div className={styles.backdrop} onClick={handleBackdropClick} />
        <div className={styles.contentContainer}>
            <div className={styles.popupBox}>
                <div className={styles.heading}>
                    <div className={styles.notificationHeading}>Notifications</div>
                    <div className={styles.clearNotification}>Clear all</div>
                </div>
                {
                    notificationData?.map((notification: any, index: string) => {
                        let status = notification?.notification_appointment?.status
                        let doctor = notification?.notification_appointment?.doctor
                        let dateString = getDateString(notification)

                        return (
                            <Notification
                                isCanceled={status === 2}
                                name={doctor}
                                date={dateString}
                                dateRecieved={getTimeAgo(notification.notification_date)}
                                // confirmButtons={true}
                                confirmButtons={status === 0}
                                id={notification.id}
                                key={index}
                            />
                        )
                    })
                }
                <Link
                    to='/all-notifications'
                    className={styles.notificationButton}
                    onClick={handleClose}
                >
                    View all
                </Link>
            </div>
        </div>

    </div>
}

export default NotificationsPopup;