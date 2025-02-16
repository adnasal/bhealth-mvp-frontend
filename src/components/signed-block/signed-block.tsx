import React, { useState } from 'react';
import styles from './signed-block.module.scss';
import bellIcon from './images/bell.svg';
import bellGrey from './images/bellGrey.svg';
import avatarIcon from './images/avatar.svg';
import arrow from './images/arrow.svg';
import { NotificationsPopup } from '../notifications-popup';
import OutsideClickHandler from 'react-outside-click-handler';

interface Props {
}

const SignedBlock: React.FC<Props> = (props) => {
    const [openPopup, setOpenPopup] = useState(false);

    const toggleNotifications = () => {
        setOpenPopup((prev) => !prev);
    }

    const handleLogOut = () => { }

    return <div className={styles.signedBlock}>
        <div className={styles.imgContainer}>
            <img src={bellGrey} alt="notifications" />
        </div>
        <div onClick={toggleNotifications} className={styles.userContainer}>
            <div className={styles.avatarContainer}>
                <img src={avatarIcon} alt="avatar" />
            </div>
            <div className={styles.name}>Sawan J.</div>
            <div className={styles.arrow}>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
        <button className={styles.button} onClick={handleLogOut}>Log out</button>
        {
            openPopup && <OutsideClickHandler onOutsideClick={() => { setOpenPopup(false) }}>
                <NotificationsPopup setOpenPopup={setOpenPopup} />
            </OutsideClickHandler>
        }
    </div>
}

export default SignedBlock;