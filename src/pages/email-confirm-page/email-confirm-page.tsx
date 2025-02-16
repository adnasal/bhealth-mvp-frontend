import React from 'react';
import styles from './email-confirm-page.module.scss';
import logoIcon from './images/logo.svg';

interface Props {
}

const EmailConfirmPage: React.FC<Props> = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }
    return <div className={styles.emailConfirmPage}>
        <div className={styles.content}>
            <div className={styles.logo}>
                <img src={logoIcon} alt="logo" />
            </div>
            <h1 className={styles.title}>One more step.</h1>
            <h2 className={styles.subtitle}>
                To confirm that it’s you, please type in the code we have sent to your e-mail.
            </h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <input type="email" />
                </div>
                <button className={styles.button} type='submit'>Confirm</button>
            </form>
        </div>
    </div>
}

export default EmailConfirmPage;