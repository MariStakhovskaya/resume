import style from './Resume.module.scss';
import { useTranslation } from 'react-i18next';

export const Resume = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={style.resumeBlock}>
      <div>{t('Education')}</div>
      <div>{t('Experience')}</div>
    </div>
  );
};
