import { useState } from 'react';

import { FaReact } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

import Modal from '../ui/modal/modal';

import style from './Certificates.module.scss';

import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import angular from '../../assets/angular.png';

export const Certificates = () => {
  const certificates = [
    {
      id: 1,
      imageUrl: javascript,
      title: 'Front-end 2022Q3',
      date: '15.03.2023',
      school: 'The Rolling Scopes School',
      icon: <IoLogoJavascript style={{ fontSize: '4.8rem' }} />,
    },
    {
      id: 2,
      imageUrl: react,
      title: 'React 2023Q1',
      date: '07.06.2023',
      school: 'The Rolling Scopes School',
      icon: <FaReact style={{ fontSize: '4.8rem' }} />,
    },
    {
      id: 3,
      imageUrl: angular,
      title: 'Angular 2023/Q4',
      date: '22.01.2024',
      school: 'The Rolling Scopes School',
      icon: <FaAngular style={{ fontSize: '4.8rem' }} />,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className={style.certificatesWrapper}>
      {certificates.map((cert) => (
        <div
          key={cert.id}
          className={style.certificate}
          onClick={() => openModal(cert.imageUrl)}
        >
          <div className={style.certificate__block}>
            <div className={style.certificate__icon}>{cert.icon}</div>
            <div className={style.certificate__description}>
              <h4>{cert.title}</h4>
              <div className={style.certificate__school}>{cert.school}</div>
              <div className={style.certificate__date}>
                <span>{cert.date}</span>
                <span className={style.certificate__arrow}>
                  <svg
                    width="13"
                    height="25"
                    viewBox="0 0 13 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.7393 22.7396C3.18717 22.7265 2.72901 23.1635 2.71597 23.7157C2.70293 24.2678 3.13994 24.726 3.69207 24.739L3.7393 22.7396ZM11.2834 18.8632L10.374 18.4472L10.374 18.4472L11.2834 18.8632ZM1.16245 2.23124C0.624167 2.35479 0.287957 2.89132 0.411509 3.4296L2.42491 12.2015C2.54846 12.7398 3.08499 13.076 3.62327 12.9524C4.16156 12.8289 4.49777 12.2924 4.37422 11.7541L2.58453 3.95684L10.3818 2.16715C10.9201 2.0436 11.2563 1.50707 11.1327 0.968784C11.0092 0.430497 10.4726 0.0942874 9.93435 0.21784L1.16245 2.23124ZM3.71569 23.7393C3.69207 24.739 3.69256 24.739 3.69307 24.739C3.69327 24.739 3.6938 24.739 3.69419 24.739C3.69498 24.7391 3.69585 24.7391 3.6968 24.7391C3.6987 24.7391 3.70093 24.7392 3.70348 24.7392C3.70858 24.7393 3.71497 24.7394 3.72262 24.7394C3.73792 24.7396 3.75826 24.7396 3.78338 24.7394C3.83362 24.739 3.90308 24.7377 3.98971 24.734C4.16279 24.7266 4.40537 24.7098 4.70068 24.6729C5.2895 24.5992 6.09848 24.4436 6.98857 24.1144C8.77921 23.4522 10.9126 22.0777 12.1928 19.2791L10.374 18.4472C9.36664 20.6494 7.71619 21.713 6.29485 22.2386C5.57896 22.5034 4.92493 22.6292 4.45224 22.6884C4.21678 22.7178 4.02898 22.7305 3.90437 22.7358C3.84215 22.7384 3.79594 22.7393 3.76771 22.7395C3.7536 22.7396 3.74402 22.7396 3.73919 22.7395C3.73678 22.7395 3.73556 22.7395 3.73557 22.7395C3.73558 22.7395 3.73589 22.7395 3.73651 22.7395C3.73682 22.7395 3.7372 22.7395 3.73767 22.7395C3.7379 22.7395 3.73831 22.7395 3.73843 22.7395C3.73886 22.7395 3.7393 22.7396 3.71569 23.7393ZM12.1928 19.2791C13.1826 17.1153 12.9208 14.9143 12.0754 12.9253C11.2375 10.9538 9.80282 9.12423 8.31451 7.58388C6.8186 6.03566 5.22214 4.73243 4.0057 3.8192C3.39594 3.36143 2.87797 2.9989 2.51078 2.74975C2.32711 2.62513 2.18093 2.52872 2.0796 2.46279C2.02892 2.42982 1.98944 2.40446 1.96207 2.38699C1.94838 2.37825 1.93772 2.37149 1.9302 2.36673C1.92644 2.36436 1.92346 2.36248 1.92128 2.36111C1.9202 2.36042 1.91931 2.35986 1.91862 2.35943C1.91828 2.35922 1.91791 2.35899 1.91774 2.35888C1.91743 2.35869 1.91716 2.35852 1.38617 3.20589C0.855167 4.05327 0.855005 4.05317 0.854894 4.0531C0.854924 4.05311 0.854862 4.05308 0.854922 4.05311C0.85504 4.05319 0.855358 4.05339 0.855874 4.05371C0.856905 4.05436 0.858728 4.05551 0.861327 4.05715C0.866525 4.06044 0.87483 4.06571 0.886127 4.07292C0.908722 4.08734 0.943282 4.10953 0.988897 4.1392C1.08014 4.19857 1.21554 4.28784 1.38784 4.40475C1.73261 4.63868 2.22423 4.98266 2.80495 5.41863C3.96948 6.2929 5.47761 7.52608 6.87621 8.97358C8.28239 10.4289 9.53212 12.0544 10.2348 13.7076C10.93 15.3433 11.065 16.9366 10.374 18.4472L12.1928 19.2791Z"
                      fill="#818188"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img src={selectedImage} alt="Selected Certificate" />
      </Modal>
    </div>
  );
};
