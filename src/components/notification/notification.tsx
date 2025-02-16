import React from 'react';
import styles from './notification.module.scss';
import { Link } from 'react-router-dom';
import deleteIcon from './images/delete.svg';

interface Props {
    avatar: string;
    labName: string;
    date: string;
    message: string;
    testName?: string;
    avatarDefault?: any
}

const Notification: React.FC<Props> = ({ avatar, labName, date, message, testName, avatarDefault }) => {

    return <div className={styles.notification}>
        <section className={styles.content}>
            <div className={styles.imageContainer}>
                <img src={avatar}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = avatarDefault;
                    }}
                    alt="avatar" />
            </div>
            <div className={styles.dateContainer}>
                <p className={styles.text}>
                    {/* {labName} has uploaded your <Link to='/findings'>medical record</Link> for PCR test. */}
                    {labName} has uploaded your medical record for {testName}.
                    {/* {message ?? ''} */}
                </p>
                <div className={styles.date}>{date}</div>
            </div>
        </section>
        <button className={styles.delete}>
            <img src={deleteIcon} alt="delete" />
        </button>
    </div>
}

export default Notification;