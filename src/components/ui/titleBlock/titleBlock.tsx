import style from './titleBlock.module.scss';

type TitleBlockType = {
  title: string;
  className?: string;
};

export const TitleBlock = ({ title, className }: TitleBlockType) => {
  return (
    <div className={`${style.titleBlock} ${className ? style[className] : ''}`}>
      <h2 className={style.heading}>{title}</h2>
    </div>
  );
};
