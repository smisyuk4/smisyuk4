import { useTranslation } from 'react-i18next';
import { useGetEducation } from '../../hooks';
import { SectionTitle } from '../SectionTitle';
import { SectionList } from '../SectionList';
import { DivStyled } from './Education.styled';

export const Education = () => {
  const [t] = useTranslation('global');
  const data = useGetEducation();

  return (
    <DivStyled>
      <SectionTitle title={t('education.title')} />

      <SectionList data={data} />
    </DivStyled>
  );
};
