import React from 'react';
import styles from './service-popup.module.scss';
import OutsideClickHandler from 'react-outside-click-handler';
import calender from './images/Calender.svg'

interface Props {
    closePopup: () => void,
    title: string
}

const ServicePopup: React.FC<Props> = ({ closePopup, title }) => {

    return <div className={styles.uploadPopup}>
        <div className={styles.backdrop}>
            <OutsideClickHandler onOutsideClick={() => { closePopup() }}>
                <div className={styles.content}>
                    <div className={styles.popupHeader}>
                        <div className={styles.title}>Note</div>
                        <div className={styles.closeBtn} onClick={closePopup}>X</div>
                    </div>
                    <div className={styles.popupBody}>
                        <div className={styles.logo}>
                            <img src={calender} alt="" />
                        </div>
                        <div className={styles.text}>
                            You have successfully requested <b>{title}</b>  service. Please check your notifications.
                        </div>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    </div>
}

export default ServicePopup;