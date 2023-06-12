import React from 'react';
import { Subscribe } from '../../components/subscribe';
import styles from './all-notifications-page.module.scss';
import avatarIcon from './images/avatar.png';
import { Notification } from '../../components/notification';
import { useGetNotificationQuery } from '../../services/appointmentService';

interface Props {
}

const AllNotificationsPage: React.FC<Props> = () => {
    //State
    const { data: notificationData } = useGetNotificationQuery({})

    //Functionalities
    const getDateString = (notification: any) => {
        let date = new Date(notification?.notification_date)
        var monthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
        let month = monthName(date)
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let tmpMinutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + tmpMinutes + ' ' + ampm;

        return `${date.getDate()} ${month} ${date.getFullYear()}, ${strTime}`
    }

    return <div className={styles.allNotificationsPage}>
        <div className={styles.content}>
            <div className={styles.notificationsContainer}>
                {
                    notificationData && notificationData?.map((notification: any, index: string) => {
                        console.log('notification', notification)
                        // let lab = notification?.notification_appointment?.doctor
                        let dateString = getDateString(notification)
                        return (
                            <Notification
                                avatar={notification?.notification_appointment?.lab_appointment?.profile_picture}
                                avatarDefault={avatarIcon}
                                labName={notification?.notification_appointment?.lab_appointment?.name ?? ''}
                                date={dateString}
                                key={index}
                                message={notification.message ?? ''}
                                testName={notification?.notification_appointment?.service_appointment?.name ?? ''}
                            />
                        )
                    })
                }
            </div>
        </div>
        <Subscribe />
    </div>
}

export default AllNotificationsPage;