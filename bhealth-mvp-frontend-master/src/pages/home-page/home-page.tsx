
import React, { useState, useEffect } from 'react';
import styles from './home-page.module.scss';
import { CardLab } from '../../components/card-lab';
import Subscribe from '../../components/subscribe/subscribe';
import photo from './images/roundedRectangle.jpg';
import photoTwo from "./images/roundedRectangleTwo.jpg";
import photoThree from "./images/roundedRectangleThree.jpg";
import { Search } from '../../components/search';
import { PREV_PATH } from '../../constants';
import { cardsRecommend, cardsOffer } from '../../moc-data/cards';
import { CardsCarousel } from '../../components/cards-carousel';

interface Props {
}

const HomePage: React.FC<Props> = (props) => {
    useEffect(() => {
        localStorage.setItem(PREV_PATH, 'Home');
    }, []);

    return <div className={styles.homePage}>
        <section className={styles.sectionTop}>
            <Search title='Stay checked...' />
        </section>
        <section id='section-home' className={styles.sectionBottom}>
            <h1 className={styles.service}>BEST SERVICES</h1>
            <h2 className={styles.title}>We recommend</h2>
            <div className={styles.recommendContent}>
                <CardLab id='1' photo={photo} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                <CardLab id='2' photo={photoTwo} name='BOSANES' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                <CardLab id='3' photo={photoThree} name='ORTHOS' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
            </div>
            <div className={styles.mobileContent}>
                <CardsCarousel data={cardsRecommend} />
            </div>
            <div className={styles.offers}>
                <h2 className={styles.title}>Special offers</h2>
                <div className={styles.offersContent}>
                    <CardLab id='1' photo={photo} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                    <CardLab id='3' photo={photoTwo} name='ORTHOS' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                    <CardLab id='1' photo={photoThree} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                </div>
                <div className={styles.mobileContent}>
                    <CardsCarousel data={cardsOffer} />
                </div>
            </div>
        </section>
        <Subscribe />
    </div>
}

export default HomePage;