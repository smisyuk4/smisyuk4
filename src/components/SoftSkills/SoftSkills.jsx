import { SectionTitle } from '../SectionTitle';
import { SectionList } from '../SectionList';
import { DivStyled } from './SoftSkills.styled';

const data = [
  {
    id: 1,
    title: 'Accurate',
    type: 'text',
  },
  {
    id: 2,
    title: 'Attentive',
    type: 'text',
  },
  {
    id: 3,
    title: 'Communicative',
    type: 'text',
  },
  {
    id: 4,
    title: 'Flexible',
    type: 'text',
  },
  {
    id: 5,
    title: 'Eager to learn',
    type: 'text',
  },
];

export const SoftSkills = () => {
  return (
    <DivStyled>
      <SectionTitle title='Soft skills' />

      <SectionList data={data} />
    </DivStyled>
  );
};
