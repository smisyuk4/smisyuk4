import { useTranslation } from 'react-i18next';
import { useGetContacts } from '../../hooks';
import { SectionTitle } from '../SectionTitle';
import { SectionList } from '../SectionList';
import { DivStyled } from './Contacts.styled';

export const Contacts = () => {
  const [t] = useTranslation('global');
  const data = useGetContacts();

  return (
    <DivStyled>
      <SectionTitle title={t('contacts.title')} />

      <SectionList data={data} />
    </DivStyled>
  );
};
