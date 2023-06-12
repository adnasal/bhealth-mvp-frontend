import React, { useEffect, useState } from 'react';
import styles from './lab-page.module.scss';
import { Subscribe } from '../../components/subscribe';
import svgLocation from '../lab-page/images/svg/locationImg.svg';
import star from '../lab-page/images/svg/star.svg';
import svgTime from '../lab-page/images/svg/timeImg.svg';
import svgTell from '../lab-page/images/svg/tellImg.svg';
import svgWebsite from '../lab-page/images/svg/websiteImg.svg';
import lab66 from '../lab-page/images/lab-66.jpg';
import corridor from '../lab-page/images/corridor-33.jpg';
import doctors from '../lab-page/images/doctors-33.jpg';
import bed from '../lab-page/images/bed-33.jpg';
import lab33 from '../lab-page/images/lab-33.jpg';
import { Carousel } from '../../components/carousel';
import { Map } from '../../components/map';
import { useNavigate, useParams } from "react-router-dom";
import { Breadcrumbs } from '../../components/breadcrumbs';
import classNames from 'classnames';
import { ServicePopup } from '../../components/service-popup';
import { useGetLabQuery, useGetServicesQuery } from '../../services/labService';
import { useAddAppointmentMutation } from '../../services/appointmentService';

interface Props {

}

interface accessDataType {
    "User Type": string
    "User Id": string
    access: string
    refresh: string
}

const LabPage: React.FC<Props> = () => {

    //States
    let navigate = useNavigate();
    const { labKey } = useParams() as any;
    const [servicePopup, setServicePopup] = useState<boolean>(false)
    const [selectedService, setSelectedService] = useState<string>('')
    const [selectedServiceName, setSelectedServiceName] = useState<string>('')
    const [serviceError, setServiceError] = useState<string>('')

    //API - Get lab query
    const { data: labData, isError: isErrorLab, error: errorLab } = useGetLabQuery(labKey)
    const { data: ServicesData, isError: isErrorServices } = useGetServicesQuery(labKey)
    const [addAppointment, { isSuccess: isSuccessAddAppointment, isError: isErrorAddAppointment }] = useAddAppointmentMutation()

    //Functionalities
    const onRequestAppointment = () => {
        if (selectedService === '') {
            setServiceError('Please select service')
            return
        }
        setServiceError('')
        let accessData: accessDataType | null = localStorage.getItem("accessData") ? JSON.parse(localStorage.getItem("accessData") ?? '') : null
        const payload = {
            lab_appointment: labKey,
            service_appointment: selectedService,
            patient: accessData?.["User Id"],
            status: "0"
        }
        addAppointment(payload)
    }

    //Effects
    useEffect(() => {
        if (isErrorLab) {
            navigate("/notfound")
        }
    }, [isErrorLab, errorLab, navigate]);

    useEffect(() => {
        if (!isErrorAddAppointment && isSuccessAddAppointment) {
            setServicePopup(true)
        }
    }, [isSuccessAddAppointment, isErrorAddAppointment]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <div className={styles.labPage}>
        <Carousel />
        <div className={styles.cotentContainer}>
            <section className={styles.content}>
                <Breadcrumbs />
                <div className={styles.infoTop}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardHeadingItem}>
                            <h1 className={styles.cardHeading}>{labData?.name}</h1>
                            {/* <h1 className={styles.cardHeading}>Poliklinika Bosanes</h1> */}
                            <div className={styles.cardReviews}>
                                <div className={styles.star}><img src={star} alt="star" /></div>
                                <div className={styles.rating}>{labData?.average_rating}</div>
                                {/* <div className={styles.reviews}>(67 reviews)</div> */}
                            </div>
                        </div>
                        <div className={styles.cardTextItem}>
                            <div className={styles.infoItem}>
                                <div className={styles.svg}>
                                    <img src={svgLocation} alt="location" />
                                </div>
                                <span className={styles.infoText}>{labData?.address}, {labData?.city?.name}</span>
                                {/* <span className={styles.infoText}>Azize Šaćirbegović 16, Sarajevo 71000, Bosnia & Herzegovina</span> */}
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.infoItem}>
                                    <div className={styles.svg}>
                                        <img src={svgTime} alt="time" />
                                    </div>
                                    <div className={styles.infoText}>{labData?.working_days}</div>
                                </div>
                                <a className={styles.infoItem} href={`tel: ${labData?.phone_number}`}>
                                    <div className={styles.svg}>
                                        <img src={svgTell} alt="tell" />
                                    </div>
                                    <div className={classNames(styles.infoText, styles.mobile)}>{labData?.phone_number}</div>
                                </a>
                                <a className={styles.infoItem} href="https://www.google.com" target='_blank'>
                                    <div className={styles.svg}>
                                        <img src={svgWebsite} alt="website" />
                                    </div>
                                    <div className={styles.infoText}>{labData?.website}</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.border}></div>
                <div className={styles.menu}>
                    <h2 className={styles.title}>Menu</h2>
                    <ul className={styles.menuServices}>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>PCR Test</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Antigen Test</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Diopter check</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Fundus examination</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Cardiac examination with EKG</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Gynecological examinations</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Pregnancy diagnosis</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                    </ul>
                </div>
                <div className={styles.border}></div>
                <div className={styles.about}>
                    <h2 className={styles.title}>About</h2>
                    <div className={styles.map}>
                        <Map />
                    </div>
                </div>
                <div className={styles.border}></div>
                <div className={styles.description}>
                    <h2 className={styles.title}>Description</h2>
                    <p className={styles.descriptionSubtitle}>
                        {labData?.description}
                    </p>
                </div>
                <div className={styles.border}></div>
                <div className={styles.photos}>
                    <h2 className={styles.title}>Photos</h2>
                    <div className={styles.photosContainer}>
                        <div className={styles.photo}><img src={lab66} alt="lab" /></div>
                        <div className={styles.photo}><img src={corridor} alt="corridor" /></div>
                        <div className={styles.photo}><img src={doctors} alt="doctors" /></div>
                        <div className={styles.photo}><img src={bed} alt="bed" /></div>
                        <div className={styles.photo}><img src={lab33} alt="lab" /></div>
                    </div>
                </div>
            </section>
            <section>
                <section className={styles.phoneSection}>
                    <div className={styles.call}>Call to make an appointment</div>
                    <div className={styles.border}></div>
                    <a className={styles.tell} href={`tel: ${labData?.phone_number}`}>+{labData?.phone_number}</a>
                </section>
                <section className={styles.requestSection}>
                    <div className={styles.call}>Request an appointment</div>
                    <div className={styles.border}></div>
                    {!isErrorServices && ServicesData && <div>
                        <select
                            name="services"
                            id="services"
                            className={styles.selection}
                            placeholder='Choose service'
                            value={selectedService}
                            onChange={(e: any) => {
                                let serviceName = e.target.options[e.target.selectedIndex].getAttribute('data-name')
                                setSelectedServiceName(serviceName)
                                setSelectedService(e.target.value)
                            }}
                        >
                            <option value="">Choose service</option>
                            {
                                ServicesData?.map((item: any, index: number) => {
                                    return <option value={item?.service?.id} key={index} data-name={item?.service?.name}>{item?.service?.name}</option>
                                })
                            }
                        </select>
                        {serviceError && <span className={styles.errorMessage}>{serviceError}</span>}
                    </div>}
                    <div>
                        <button className={styles.request} onClick={() => { onRequestAppointment() }}>Request</button>
                    </div>
                </section>
            </section>
        </div>
        {
            servicePopup && <ServicePopup
                title={selectedServiceName}
                closePopup={() => { setServicePopup(false) }}
            />
        }
        <Subscribe />
    </div >
}

export default LabPage;