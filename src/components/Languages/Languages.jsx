import { SectionTitle } from '../SectionTitle';
import { SectionList } from '../SectionList';
import { DivStyled } from './Languages.styled';

const data = [
  {
    id: 1,
    title: 'Ukrainian - Native speaker',
    type: 'text',
  },
  {
    id: 2,
    title: 'English - Pre Intermediate',
    type: 'text',
  },
];

export const Languages = () => {
  return (
    <DivStyled>
      <SectionTitle title='Languages' />

      <SectionList data={data} />
    </DivStyled>
  );
};
