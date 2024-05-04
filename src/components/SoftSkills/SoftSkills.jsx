import { useTranslation } from 'react-i18next';
import { useGetSoftSkills } from '../../hooks';
import { SectionTitle } from '../SectionTitle';
import { SectionList } from '../SectionList';
import { DivStyled } from './SoftSkills.styled';

export const SoftSkills = () => {
  const [t] = useTranslation('global');
  const data = useGetSoftSkills();

  return (
    <DivStyled>
      <SectionTitle title={t('softSkills.title')} />

      <SectionList data={data} />
    </DivStyled>
  );
};
