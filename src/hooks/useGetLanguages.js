import { useTranslation } from 'react-i18next';

export const useGetLanguages = () => {
  const [t] = useTranslation('global');

  const data = [
    {
      id: 1,
      title: t('languages.en'),
      type: 'text',
    },
    {
      id: 2,
      title: t('languages.ua'),
      type: 'text',
    },
    {
      id: 3,
      title: t('languages.he'),
      type: 'text',
    },
  ];

  return data;
};
