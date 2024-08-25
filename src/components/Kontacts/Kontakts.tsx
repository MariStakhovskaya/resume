import { MdOutlineEmail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import style from './Kontakts.module.scss';

export const Kontakts = () => {
  const kontakts = [
    {
      id: 1,
      icon: <MdOutlineEmail />,
      kontact: 'maria.stachovski.de@gmail.com',
    },
    { id: 2, icon: <FaTelegramPlane />, kontact: 'maria.stachovski' },
    { id: 3, icon: <FaWhatsapp />, kontact: 'maria.stachovski' },
    { id: 4, icon: <FaLinkedin />, kontact: 'maria.stachovski' },
  ];
  return (
    <div className={style.kontakts}>
      {kontakts.map((kontact) => (
        <div key={kontact.id} className={style.kontakts__icon}>
          <span className={style.icon__icon}>{kontact.icon}</span>
          <span>{kontact.kontact}</span>
        </div>
      ))}
    </div>
  );
};
