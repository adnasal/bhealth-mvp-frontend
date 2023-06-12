import React, { useEffect, useState } from 'react';
import styles from './profile-appointment-row.module.scss';
import { Row } from '../../types';
import classNames from 'classnames';
import cardIcon from '../images/card.svg';

interface Props {
    data: Row,
    cellWidth: number
}

const ProfileAppointmentRow: React.FC<Props> = ({ data, cellWidth }) => {
    return <div className={styles.profileAppointmentRow}>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.boldText)}>
            {data.name}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.boldText)}>
            {data.name2}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text)}>
            {data.date}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.payment)}>
            <div className={styles.iconContainer}>
                <img src={cardIcon} alt="payment-icon" />
            </div>
            <div className={styles.text}>{data.payment}</div>
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text)}>
            {data.fees}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.status)}>
            <div data-status={data.status} className={styles.statusCircle}></div>
            <div className={styles.text}>{data.status}</div>
        </div>
    </div>
}

export default ProfileAppointmentRow;