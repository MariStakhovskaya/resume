import { FaLinkedin } from 'react-icons/fa';
import style from './Kontakts.module.scss';
import wapp from '../../assets/wa_icon.png';

export const Kontakts = () => {
  const kontakts = [
    {
      id: 1,
      icon: (
        <svg
          width="37"
          height="24"
          viewBox="0 0 37 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 11L1 21M1 21V3C1 1.89543 1.89543 1 3 1H34C35.1046 1 36 1.89543 36 3V21M1 21C1 22.1046 1.89543 23 3 23H34C35.1046 23 36 22.1046 36 21M25 11L36 21M2 2L17 14C17.7464 14.6333 19.2536 14.6333 20 14L35 2"
            stroke="#387178"
            strokeWidth="2"
          />
        </svg>
      ),
      kontact: 'maria.stachovski.de@gmail.com',
    },
    {
      id: 2,
      icon: (
        <svg
          width="34"
          height="28"
          viewBox="0 0 34 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.6494 0.00722222C33.2827 -0.33722 0.662407 11.7577 0.666016 12.794C0.669625 13.8304 8.99822 16.5967 9.72738 16.5955C10.4565 16.5944 26.7627 6.22784 26.7627 6.22784C26.7627 6.22784 12.9895 18.3163 12.9895 18.6691C12.9895 19.0219 12.7825 25.725 12.9895 25.9265C13.1965 26.1279 17.3432 21.4326 17.7014 21.4338C18.0596 21.4349 25.3131 28 26.7627 28C28.2124 28 34.0161 0.351665 33.6494 0.00722222Z"
            fill="#387178"
          />
        </svg>
      ),
      kontact: 'Maria.St',
    },
    { id: 3, icon: <img src={wapp} />, kontact: 'maria.stachovski' },
    { id: 4, icon: <FaLinkedin />, kontact: 'maria-stachovski' },
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
