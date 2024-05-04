import { useTranslation } from 'react-i18next';
import { useGetLanguages } from '../../hooks';
import { SectionTitle } from '../SectionTitle';
import { SectionList } from '../SectionList';
import { DivStyled } from './Languages.styled';

export const Languages = () => {
  const [t] = useTranslation('global');
  const data = useGetLanguages();

  return (
    <DivStyled>
      <SectionTitle title={t('languages.title')} />

      <SectionList data={data} />
    </DivStyled>
  );
};
