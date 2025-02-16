import React, { useState } from 'react';
import styles from './subscribe.module.scss';

interface Props {
}

const Subscribe: React.FC<Props> = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(email);
    };

    return <div className={styles.subscribeContainer}>
        <h1 className={styles.subscribeTitle}>Get In Touch</h1>
        <h2 className={styles.subscribeSubTitle}>The gradual accumulation of information about atomic and
            small-scale behaviour during the first quarter of the 20th </h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input
                type="email"
                className={styles.inputField}
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit' className={styles.subscribeBtn}>Subscribe</button>
        </form>
    </div>
}

export default Subscribe;