import { useTranslation } from 'react-i18next';

export const useGetContacts = () => {
  const [t] = useTranslation('global');

  const data = [
    { id: 1, title: '+972 50 4838 779', link: '+972504838779', type: 'phone' },
    { id: 2, title: 'telegram', link: 'https://t.me/smisyuk', type: 'link' },
    {
      id: 3,
      title: 'smisyuk@gmail.com',
      link: 'smisyuk@gmail.com',
      type: 'email',
    },
    {
      id: 4,
      title: 'linkedin',
      link: 'https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%BC%D0%B8%D1%81%D1%8E%D0%BA/',
      type: 'link',
    },
    {
      id: 5,
      title: 'github',
      link: 'https://github.com/smisyuk4',
      type: 'link',
    },
    {
      id: 6,
      title: t('contacts.address'),
      type: 'text',
    },
  ];

  return data;
};
