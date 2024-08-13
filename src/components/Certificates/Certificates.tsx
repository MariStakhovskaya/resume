import { useState } from 'react';
import style from './Certificates.module.scss';
import { useTranslation } from 'react-i18next';
import Modal from '../ui/modal/modal';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import angular from '../../assets/angular.png';

export const Certificates = () => {
  const { t, i18n } = useTranslation();

  const certificates = [
    {
      id: 1,
      imageUrl: javascript,
      title: 'JavaScript/Front-end 2022Q3',
      date: '15.03.2023',
      school: 'The Rolling Scopes School',
    },
    {
      id: 2,
      imageUrl: react,
      title: 'React 2023Q1',
      date: '07.06.2023',
      school: 'The Rolling Scopes School',
    },
    {
      id: 3,
      imageUrl: angular,
      title: 'Angular 2023/Q4',
      date: '22.01.2024',
      school: 'The Rolling Scopes School',
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
            <div className={style.certificate__icon}>gtrfed</div>
            <div className={style.certificate__description}>
              <h4>{cert.title}</h4>
              <div className={style.certificate__school}>{cert.school}</div>
              <div className={style.certificate__date}>{cert.date}</div>
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
