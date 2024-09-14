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
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.9844 11.704C38.6399 11.3805 7.99661 22.7424 8 23.7159C8.00339 24.6894 15.8272 27.2881 16.5122 27.287C17.1972 27.2859 31.9545 17.5477 32.5151 17.5477C33.0757 17.5477 19.5766 28.9034 19.5766 29.2349C19.5766 29.5663 19.3821 35.8631 19.5766 36.0524C19.771 36.2417 23.6664 31.831 24.0029 31.832C24.3394 31.8331 31.1533 38.0003 32.5151 38.0003C33.8769 38.0003 39.3289 12.0276 38.9844 11.704Z"
            stroke="#387178"
            strokeWidth="1.87879"
          />
        </svg>
      ),
      kontact: 'Maria.St',
    },
    { id: 3, icon: <img src={wapp} />, kontact: 'maria.stachovski' },
    {
      id: 4,
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36 36V28.2642C36 24.1132 33.7399 22.1321 30.8206 22.1321C28.4664 22.1321 27.3363 23.4528 26.7713 24.3962V22.5094H22.2511C22.3453 23.7359 22.2511 36 22.2511 36H26.7713V28.4528C26.7713 27.9811 26.8655 27.6038 26.9596 27.3208C27.2422 26.566 27.9955 25.717 29.2197 25.717C30.8206 25.717 31.4798 26.9434 31.4798 28.7359V36H36Z"
            fill="#387178"
          />
          <path
            d="M15 18.3585C15 17.0377 16.0359 16 17.5426 16C19.1435 16 20.0852 16.9434 19.991 18.3585C19.991 19.6792 19.0493 20.717 17.4484 20.717C15.9417 20.717 15 19.6792 15 18.3585Z"
            fill="#387178"
          />
          <path d="M19.8027 36H15.2825V22.5094H19.8027V36Z" fill="#387178" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 8.15269C8 6.96379 8.96379 6 10.1527 6H39.8473C41.0362 6 42 6.96379 42 8.15269V37.8473C42 39.0362 41.0362 40 39.8473 40H10.1527C8.96379 40 8 39.0362 8 37.8473V8.15269ZM10.1527 8H39.8473C39.9316 8 40 8.06836 40 8.15269V37.8473C40 37.9316 39.9316 38 39.8473 38H10.1527C10.0684 38 10 37.9316 10 37.8473V8.15269C10 8.06836 10.0684 8 10.1527 8Z"
            fill="#387178"
          />
        </svg>
      ),
      kontact: 'maria-stachovski',
    },
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
