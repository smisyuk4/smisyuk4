import { useTranslation } from 'react-i18next';

export const useGetSoftSkills = () => {
  const [t] = useTranslation('global');

  const data = [
    {
      id: 1,
      title: t('softSkills.accurate'),
      type: 'text',
    },
    {
      id: 2,
      title: t('softSkills.attentive'),
      type: 'text',
    },
    {
      id: 3,
      title: t('softSkills.communicative'),
      type: 'text',
    },
    {
      id: 4,
      title: t('softSkills.flexible'),
      type: 'text',
    },
    {
      id: 5,
      title: t('softSkills.learn'),
      type: 'text',
    },
  ];

  return data;
};
