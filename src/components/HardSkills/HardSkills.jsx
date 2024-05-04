import { useTranslation } from 'react-i18next';
import { useGetHardSkills } from '../../hooks';
import { SectionTitle } from '../SectionTitle';
import { SectionList } from '../SectionList';
import { DivStyled } from './HardSkills.styled';

export const HardSkills = () => {
  const [t] = useTranslation('global');
  const data = useGetHardSkills();

  return (
    <DivStyled>
      <SectionTitle title={t('hardSkills.title')} />

      <SectionList data={data} />
    </DivStyled>
  );
};
