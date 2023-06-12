import React, { Component } from "react";
import Slider from "react-slick";
import { CardLab } from '../../components/card-lab';
import styles from './cards-carousel.module.scss';

interface Props {
    data: {
        id: string;
        photo: string;
        name: string;
        location: string;
        time: string;
        tell: string;
        website: string;
    }[]
}

const NextArrow = (props: any) => {
    return <div className={styles.nextArrow} onClick={props.onClick} />
}

const PrevArrow = (props: any) => {
    return <div className={styles.prevArrow} onClick={props.onClick} />
}

export default class SimpleSlider extends Component<Props> {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        return (
            <div>
                <Slider {...settings}>
                    {this.props.data.map(card => {
                        return <CardLab
                            id={card.id}
                            photo={card.photo}
                            name={card.name}
                            location={card.name}
                            time={card.time}
                            tell={card.tell}
                            website={card.website}
                        />
                    })}
                </Slider>
            </div>
        );
    }
};
