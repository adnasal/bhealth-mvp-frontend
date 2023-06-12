import React, { useEffect, useState } from 'react';
import styles from './create-appointment.module.scss';
import addIcon from '../images/add.svg';

interface Props {
    handleSideMenu: (state: boolean) => void
}

const CreateAppointment: React.FC<Props> = ({ handleSideMenu }) => {

    return <div className={styles.createAppointment}>
        <div className={styles.burgerContainer} onClick={() => handleSideMenu(true)}>
            <span className={styles.stick} />
        </div>
        <h1 className={styles.title}>Dashboard</h1>
        <button className={styles.button}>
            <div className={styles.buttonImage}>
                <img src={addIcon} alt="add" />
            </div>
            <div className={styles.buttonText}>Create an Appointment</div>
        </button>
    </div>
}

export default CreateAppointment;