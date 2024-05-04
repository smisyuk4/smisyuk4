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
  ];

  return data;
};
