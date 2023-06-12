import React, { useEffect, useState } from 'react';
import styles from './profile-finding-row.module.scss';
import { Row } from '../../types';
import classNames from 'classnames';
import cardIcon from '../images/card.svg';

interface Props {
    data: Row;
    cellWidth: number;
    setPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileFindingRow: React.FC<Props> = ({ data, cellWidth, setPopup }) => {
    const handleClick = () => {
        setPopup && setPopup(true);
    }

    return <div className={styles.profileFindingRow}>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.boldText)}>
            {data.name}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text)}>
            {data.date}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text)}>
            <button className={styles.button} onClick={handleClick}>View</button>
        </div>
    </div>
}

export default ProfileFindingRow;