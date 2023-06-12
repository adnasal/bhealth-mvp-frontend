import { Component } from "react";
import styles from './carousel.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './overwrite.css';
import photo from './images/photo.png';
import arrowRight from './images/arrowRight.svg';
import arrowLeft from './images/arrowLeft.svg';

const NextArrow = (props: any) => {
    return <div className={styles.nextArrow} onClick={props.onClick}>
        <img src={arrowRight} alt="arrow" />
    </div>
}

const PrevArrow = (props: any) => {
    return <div className={styles.prevArrow} onClick={props.onClick}>
        <img src={arrowLeft} alt="arrow" />
    </div>
}

export default class Carousel extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "22.5%",
            slidesToShow: 1,
            speed: 500,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        return <Slider {...settings}>
            <div className={styles.slideContainer}>
                <img src={photo} alt="photo" />
            </div>
            <div className={styles.slideContainer}>
                <img src={photo} alt="photo" />
            </div>
            <div className={styles.slideContainer}>
                <img src={photo} alt="photo" />
            </div>
        </Slider>
    }
}