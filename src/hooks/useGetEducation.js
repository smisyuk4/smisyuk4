import { useTranslation } from 'react-i18next';

export const useGetEducation = () => {
  const [t] = useTranslation('global');

  const data = [
    {
      id: 1,
      title: t('education.one.title'),
      period: t('education.one.period'),
      name: t('education.one.name'),
      type: 'course',
      link: 'https://drive.google.com/file/d/1CduehMFWz3gZG46oQRv5ZKglsNH--wOS/view?usp=sharing',
    },
    {
      id: 2,
      title: t('education.two.title'),
      period: t('education.two.period'),
      name: t('education.two.name'),
      type: 'course',
      link: 'https://drive.google.com/file/d/1LMCZpKNLREUKWGxc_UjLNgEVmIdI5p3r/view?usp=sharing',
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
