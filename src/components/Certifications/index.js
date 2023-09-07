import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import './certification.css';
import Title from '../Title';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

import englishCertificate from '../../images/certificado_ingles.png';
import frontendCertificate from '../../images/certificado_front-end.png';
import databaseCertificate from '../../images/certificado_db.png';
import reactCertificate from '../../images/certificado_react.jpg';
import versionControlCertificate from '../../images/version_control_certified.jpg';
import uxDesignCertificate from '../../images/ux_design.jpg';
import dataFundamentalsCertificate from '../../images/data_fundamentals.jpg';
import nodeCertificate from '../../images/nodejs.jpg';
import marketingDigitalCertificate from '../../images/marketing_digital.jpg';
import linuxCertificate from '../../images/linux.jpg';

const certificates = [
    {
        image: englishCertificate,
        alt: 'English Certificate'
    },
    {
        image: frontendCertificate,
        alt: 'Frontend Certificate'
    },
    {
        image: databaseCertificate,
        alt: 'Database Certificate'
    },
    {
        image: reactCertificate,
        alt: 'React Certificate'
    },
    {
        image: versionControlCertificate,
        alt: 'Version Control Certificate'
    },
    {
        image: uxDesignCertificate,
        alt: 'UX Design Certificate'
    },
    {
        image: dataFundamentalsCertificate,
        alt: 'Data Fundamentals Certificate'
    },
    {
        image: nodeCertificate,
        alt: 'Node.js Certificate'
    },
    {
        image: marketingDigitalCertificate,
        alt: 'Digital Marketing Certificate'
    },
    {
        image: linuxCertificate,
        alt: 'Linux Certificate'
    }
];

export default function Certification() {

    return (
        <section id='certification'>
            <div className="container">
                <Title children="Certificações" />
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    {certificates.map((certificate) => (
                        <SwiperSlide key={certificate.alt}>
                            <img src={certificate.image} alt={certificate.alt} />
                        </SwiperSlide>
                    ))}

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <AiOutlineArrowLeft color='#fff' size={24} />
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-next slider-arrow">
                            <AiOutlineArrowRight color='#fff' size={24} />
                        </div>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}
