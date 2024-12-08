import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import './certification.css';
import Title from '../Title';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

import englishCertificate from '../../assets/images/certificado_ingles.png';
import frontendCertificate from '../../assets/images/certificado_front-end.png';
import databaseCertificate from '../../assets/images/certificado_db.png';
import reactCertificate from '../../assets/images/certificado_react.jpg';
import versionControlCertificate from '../../assets/images/version_control_certified.jpg';
import uxDesignCertificate from '../../assets/images/ux_design.jpg';
import AngularCertificate from '../../assets/images/angular_certified.jpg';
import Angular14Certificate from '../../assets/images/angular14_certified.jpg';
import DotnetCertificate from '../../assets/images/dotnet_certified.jpg';
import SqlCertificate from '../../assets/images/sql_certified.jpg';
import linuxCertificate from '../../assets/images/linux.jpg';
import flutterCertificate from '../../assets/images/flutter_certified.jpg';
import JasmineCertified from '../../assets/images/jasmine_certified.png';

const certificates = [
    {
        image: AngularCertificate,
        alt: 'Angular Certificate'
    },
    {
        image: Angular14Certificate,
        alt: 'Angular 14 Certificate'
    },
    {
        image: JasmineCertified,
        alt: 'Jasmine Certificate'
    },
    {
        image: DotnetCertificate,
        alt: 'Dotnet Certificate'
    },
    {
        image: SqlCertificate,
        alt: 'Sql Certificate'
    },
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
        image: linuxCertificate,
        alt: 'Linux Certificate'
    },
    {
        image: flutterCertificate,
        alt: 'Flutter Certificate'
    },
];

export default function Certification() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (modalOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [modalOpen]);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

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
                            <img src={certificate.image} alt={certificate.alt} onClick={() => openModal(certificate.image)} />
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
            <div
                className="modal"
                style={{ display: modalOpen ? 'block' : 'none' }}
                onClick={closeModal}
            >
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <span className="close" onClick={closeModal}><GrClose fontSize={22} /></span>
                    {selectedImage && <img src={selectedImage} alt="Certificate" className="modal-image" />}
                </div>
            </div>
        </section>
    );
}
