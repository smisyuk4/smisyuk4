import { useTranslation } from 'react-i18next';
import goit from '../assets/docs/goit-fullstack-developer.pdf';

export const useGetEducation = () => {
  const [t] = useTranslation('global');

  const data = [
    {
      id: 1,
      title: t('education.one.title'),
      period: t('education.one.period'),
      name: t('education.one.name'),
      type: 'course',
      link: goit,
    },
    {
      id: 2,
      title: t('education.two.title'),
      period: t('education.two.period'),
      name: t('education.two.name'),
      type: 'education',
    },
  ];

  return data;
};
