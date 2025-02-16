import React from 'react';
import styles from './auth-greeting.module.scss';
import emoji from './images/Emoji.svg';

interface Props {
    title: string;
    subtitle: string;
}

const AuthGreeting: React.FC<Props> = ({ title, subtitle }) => {
    return <div className={styles.authGreeting}>
        <div className={styles.imageContainer}>
            <img src={emoji} alt="emoji" />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
}

export default AuthGreeting;