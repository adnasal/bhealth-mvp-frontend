import React from 'react';
import styles from './edit-greeting.module.scss';
import settingsIcon from './images/settings.svg';

interface Props {
    profileName: string;
}

const EditGreeting: React.FC<Props> = ({ profileName }) => {
    return <div className={styles.editGreeting}>
        <div className={styles.imageContainer}>
            <img src={settingsIcon} alt="icon" />
        </div>
        <h2 className={styles.heading}>
            Hello {profileName} Edit your profile here.
        </h2>
        <p className={styles.description}>
            Type in changes you would like to make instead of current values.
        </p>
    </div>
}

export default EditGreeting;