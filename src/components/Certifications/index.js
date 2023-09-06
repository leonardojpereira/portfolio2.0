import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './certification.css';
import englishCertificate from '../../images/certificado_ingles.png';
import frontendCertificate from '../../images/certificado_front-end.png';
import databaseCertificate from '../../images/certificado_db.png';
import reactCertificate from '../../images/certificado_react.jpg';
import Title from '../Title';

export default function Certification() {
    
    return (
        <section id='certification'>
            <Title children="Certificações"/>
             <Swiper className='swiper'>
            <SwiperSlide className="swiper-slide">
                <img src={englishCertificate} alt='Certificado de inglês' />
                <span>Curso de inglês</span>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={frontendCertificate} alt='Certificado de Frontend' />
                <span>Formação Front-End</span>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={databaseCertificate} alt='Certificado de inglês' />
                <span>Database Foundations</span>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={reactCertificate} alt='Certificado de inglês' />
                <span>ReactJS Avançado</span>
            </SwiperSlide>
        </Swiper>
        </section>
       
    );
}
