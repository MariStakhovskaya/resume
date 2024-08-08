import style from './button.module.scss';

type ButtonType = {
  title: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ title, onClick, className }: ButtonType) => {
  return (
    <button className={style[className || '']} onClick={onClick}>
      {title}
    </button>
  );
};
