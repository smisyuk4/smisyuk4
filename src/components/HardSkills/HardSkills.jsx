import { SectionTitle } from '../SectionTitle';
import { SectionList } from '../SectionList';
import { DivStyled } from './HardSkills.styled';

const data = [
  {
    id: 1,
    title: 'HTML5, CSS3, SASS, Responsive/Adaptive design',
    type: 'text',
  },
  {
    id: 2,
    title: 'Java Script',
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
    title: 'Google Cloud Platform, Firebase, AWS S3, AWS EC2',
    type: 'text',
  },
];

export const HardSkills = () => {
  return (
    <DivStyled>
      <SectionTitle title='Hard skills' />

      <SectionList data={data} />
    </DivStyled>
  );
};
