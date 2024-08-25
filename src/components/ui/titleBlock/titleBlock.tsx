import style from './titleBlock.module.scss';

type TitleBlockType = {
  title: string;
};

export const TitleBlock = ({ title }: TitleBlockType) => {
  return (
    <div className={style.titleBlock}>
      <h2 className={style.heading}>{title}</h2>
    </div>
  );
};
