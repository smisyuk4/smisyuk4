import { useTranslation } from 'react-i18next';
import goit from '../assets/docs/goit-fullstack-developer.pdf';
import udemy from '../assets/docs/udemy-nextjs.pdf';

export const useGetEducation = () => {
  const [t] = useTranslation('global');

  const data = [
    {
      id: 1,
      title: t('education.one.title'),
      period: t('education.one.period'),
      name: t('education.one.name'),
      type: 'course',
      link: udemy,
    },
    {
      id: 2,
      title: t('education.two.title'),
      period: t('education.two.period'),
      name: t('education.two.name'),
      type: 'course',
      link: goit,
    },
    {
      id: 3,
      title: t('education.three.title'),
      period: t('education.three.period'),
      name: t('education.three.name'),
      type: 'education',
    },
  ];

  return data;
};
