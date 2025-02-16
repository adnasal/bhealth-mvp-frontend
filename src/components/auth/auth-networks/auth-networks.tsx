import React from 'react';
import styles from './auth-networks.module.scss';
import apple from './images/apple.svg';
import facebook from './images/facebook.svg';
import google from './images/google.svg';


interface Props {

}

const AuthTabs: React.FC<Props> = (props) => {

    return <div className={styles.authNetworks}>
        <div className={styles.separator}>
            <h2 className={styles.subtitle}>or do it via other accounts</h2>
        </div>
        <div className={styles.networks}>
            <div className={styles.network}>
                <img src={google} alt="google" />
            </div>
            <div className={styles.network}>
                <img src={apple} alt="apple" />
            </div>
            <div className={styles.network}>
                <img src={facebook} alt="facebook" />
            </div>
        </div>
    </div>
}

export default AuthTabs;