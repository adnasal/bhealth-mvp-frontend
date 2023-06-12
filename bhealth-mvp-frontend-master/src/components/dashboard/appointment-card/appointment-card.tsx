import React, { useEffect, useState } from 'react';
import styles from './appointment-card.module.scss';
import timeIcon from '../images/timeIcon.svg';
import dateIcon from '../images/dateIcon.svg';

import classNames from 'classnames';

interface Props {
    avatar?: string;
    firstName: string;
    lastName: string;
    subtitle: string;
    date: string;
    time: string;
}

const AppointmentCard: React.FC<Props> = ({ avatar, firstName, lastName, subtitle, date, time }) => {
    return <div className={styles.appointmentCard}>
        <div className={styles.avatar}>
            {
                avatar ? <img src={avatar} alt={`${firstName[0]} ${lastName[0]}`} />
                    : <div className={styles.credentials}>{firstName[0]}{lastName[0]}</div>
            }
        </div>
        <div className={styles.title}>{firstName} {lastName}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.dateBox}>
            <div className={styles.item}>
                <div className={styles.dateImage}>
                    <img src={dateIcon} alt="date" />
                </div>
                <div className={styles.itemText}>{date}</div>
            </div>
            <div className={styles.item}>
                <div className={styles.timeImage}>
                    <img src={timeIcon} alt="time" />
                </div>
                <div className={styles.itemText}>{time}</div>
            </div>
        </div>
    </div>
}

export default AppointmentCard;