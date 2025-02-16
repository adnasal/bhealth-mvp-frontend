import React, { useState, useEffect } from 'react';
import { Subscribe } from '../../components/subscribe';
import styles from './notifications-page.module.scss';
import avatarIcon from './images/avatar.png';
import { Notification } from '../../components/notification';
import { Link } from 'react-router-dom';
import { useGetNotificationQuery } from '../../services/appointmentService';

interface Props {
}

interface accessDataType {
    "User Type": string
    "User Id": string
    access: string
    refresh: string
}

const NotificationsPage: React.FC<Props> = () => {

    //State

    
    const [userId, setUserId] = useState<any>()
    const { data: notificationData } = useGetNotificationQuery({ patient: userId })
    const [todaysNotification, setTodaysNotification] = useState<any[] | null>(null)
    const [earlierNotification, setEarlierNotification] = useState<any[] | null>(null)

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

    //Effects
    
    useEffect(() => {
        let accessData: accessDataType | null = localStorage.getItem("accessData") ? JSON.parse(localStorage.getItem("accessData") ?? '') : null
        setUserId(accessData?.["User Id"])
    }, [])
    useEffect(() => {
        if (notificationData) {
            const today = new Date();
            let earlierData: any[] = []
            let todayData: any[] = []

            notificationData.forEach((notification: any) => {
                let date = new Date(notification.notification_date)

                if (date.getDate() === today.getDate() &&
                    date.getMonth() === today.getMonth() &&
                    date.getFullYear() === today.getFullYear()) {
                    todayData.push(notification)
                }
                else {
                    earlierData.push(notification)
                }
            });
            setEarlierNotification(earlierData)
            setTodaysNotification(todayData)
        }
    }, [notificationData])


    return <div className={styles.notificationsPage}>
        <div className={styles.topBox}>
            <h2 className={styles.topTitle}>Today</h2>
            <div className={styles.topItems}>
                {
                    todaysNotification && todaysNotification.length > 0 ? todaysNotification?.map((notification: any, index: number) => {
                        console.log('notification', notification)
                        // let lab = notification?.notification_appointment?.doctor
                        let dateString = getDateString(notification)
                        return (
                            <Notification
                                avatar={avatarIcon}
                                labName='Eurofarm Lab'
                                date={dateString}
                                key={index}
                                message={notification.message ?? ''}
                            />
                        )
                    }) : <h2 className={styles.emptyTitle}>No new notifications.</h2>
                }
            </div>
        </div>
        <div className={styles.bottomBox}>
            <h2 className={styles.bottomTitle}>Earlier</h2>
            <div className={styles.notificationsContainer}>
                {
                    earlierNotification && earlierNotification.length > 0 && earlierNotification?.map((notification: any, index: number) => {
                        console.log('notification', notification)
                        // let lab = notification?.notification_appointment?.doctor
                        let dateString = getDateString(notification)
                        return (
                            <Notification
                                avatar={avatarIcon}
                                labName='Eurofarm Lab'
                                date={dateString}
                                key={index}
                                message={notification.message ?? ''}
                            />
                        )
                    })
                }
            </div>
        </div>
        <Link to='/all-notifications' className={styles.button}>View more</Link>
        <Subscribe />
    </div>
}

export default NotificationsPage;
