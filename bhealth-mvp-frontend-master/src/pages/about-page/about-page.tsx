import React, { FC } from 'react';
import styles from './about-page.module.scss';
import aboutLeft from './images/about-left.png';
import { Link } from 'react-router-dom';


interface Props {

}

const AboutPage: FC<Props> = () => {
    return (
        <>
            <section className={styles.sectionBottom}>
                <div className={styles.aboutsection}>
                    <div className={`${styles.aboutcolumn} ${styles.leftcolumn}`}>
                        <img src={aboutLeft} alt="aboutLeft" />
                    </div>
                    <div className={`${styles.aboutcolumn} ${styles.rightcolumn}`}>
                        <h6>About Us</h6>
                        <h2>BHealth</h2>
                        <p>BHealth is a web and mobile application which consists of two types of customers, i.e., users and private laboratories in Bosnia and Herzegovina, and offers efficient search for laboratory services to the users, as well as an ability to keep all their test results in one place, while for laboratories, it offers efficient and effective way of storing all their previous appointments, quick uploading of test results, and following precalculated statistics. Therefore, the business in which the project will be operating is healthcare in Bosnia and Herzegovina, with the narrowed scope to only laboratories, due to the collected feedback from the initial market research, which was firstly focused on all private health institution services. In addition, an application cannot offer to confuse the patients when their lives are at stake, so the focus is narrowed only to routine tests, rather than to services of high importance.</p>
                        <Link to='' className={styles.ctcBtn}>contact us</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage;