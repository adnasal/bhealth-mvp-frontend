import React, { useEffect, useState } from 'react';
import styles from './indication-card.module.scss';
import { INDICATION_IMAGE } from '../types';
import classNames from 'classnames';

interface Props {
    type: INDICATION_IMAGE;
    image: string;
    mainIndication: string;
    secondaryIndicaiton: string;
    title: string;
}

const IndicationCard: React.FC<Props> = ({ type, image, secondaryIndicaiton, mainIndication, title }) => {

    return <div className={styles.indicationCard}>
        <div className={classNames(styles.imageContainer,
            { [styles.appointments]: type === INDICATION_IMAGE.APPOINTMENTS },
            { [styles.newAppointments]: type === INDICATION_IMAGE.NEW_APPOINTMENTS },
            { [styles.growth]: type === INDICATION_IMAGE.GROWTH },
            { [styles.staff]: type === INDICATION_IMAGE.STAFF },
        )}>
            <img src={image} alt="icon" />
        </div>
        <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            <div className={styles.numbers}>
                <div className={styles.numberMain}>{mainIndication}</div>
                <div className={classNames(styles.numberSecondary, { [styles.negative]: secondaryIndicaiton.includes('-') })}>
                    {secondaryIndicaiton}
                </div>
            </div>
        </div>
    </div>
}

export default IndicationCard;