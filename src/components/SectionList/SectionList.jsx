import PropTypes from 'prop-types';

import { SectionListItem } from './SectionListItem';
import { UlStyled } from './SectionList.styled';

export const SectionList = ({ data }) => {
  return (
    <UlStyled>
      {data.map(item => (
        <SectionListItem key={item.id} item={item} />
      ))}
    </UlStyled>
  );
};

SectionList.propTypes = {
  data: PropTypes.array.isRequired,
};
