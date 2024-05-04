import PropTypes from 'prop-types';
import { H2Styled } from './SectionTitle.styled';

export const SectionTitle = ({ title }) => {
  return <H2Styled>{title}</H2Styled>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
