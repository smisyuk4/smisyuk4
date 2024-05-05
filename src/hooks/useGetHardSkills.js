import { useTranslation } from 'react-i18next';

export const useGetHardSkills = () => {
  const [t] = useTranslation('global');

  const data = [
    {
      id: 1,
      title: 'HTML5, CSS3, SASS, Responsive/Adaptive design, web accessibility',
      type: 'text',
    },
    {
      id: 2,
      title: 'JavaScript',
      type: 'text',
    },
    {
      id: 3,
      title: 'React, Redux, Styled, MUI',
      type: 'text',
    },
    {
      id: 4,
      title: 'React Native, Expo',
      type: 'text',
    },
    {
      id: 5,
      title: 'Node.js, Express',
      type: 'text',
    },
    {
      id: 6,
      title: 'Mongodb, mongoose, SQLite, Firestore',
      type: 'text',
    },
    {
      id: 7,
      title: 'REST API, NPM, GIT, Postman, Figma, Trello, Jira',
      type: 'text',
    },
    {
      id: 8,
      title: 'Google Cloud Platform, Firebase, AWS S3, AWS EC2, AWS Route 53',
      type: 'text',
    },
    {
      id: 9,
      title: 'Stripe, liqpay',
      type: 'text',
    },
  ];

  return data;
};
