import { useTranslation } from 'react-i18next';
import style from './titleBlock.module.scss';

type TitleBlockType = {
  title: string;
  className?: string;
};

export const TitleBlock = ({ title, className }: TitleBlockType) => {
  const { t } = useTranslation();

  return (
    <div className={`${style.titleBlock} ${className ? style[className] : ''}`}>
      <h2 className={style.heading}>{t(title)}</h2>
    </div>
  );
};
