import { SectionTitle } from '../SectionTitle';
import { SectionList } from '../SectionList';
import { DivStyled } from './Education.styled';

const data = [
  {
    id: 1,
    title: 'GoIT - start your career in IT',
    period: 'May 2022 - Apr 2023, on-line',
    name: 'Full stack developer',
    type: 'education',
  },
  {
    id: 2,
    title: 'National Agricultural University',
    period: 'Sep 2004 - May 2010, Mykolayiv',
    name: 'Engineer, Master',
    type: 'education',
  },
];

export const Education = () => {
  return (
    <DivStyled>
      <SectionTitle title='Education' />

      <SectionList data={data} />
    </DivStyled>
  );
};
