import PropTypes from 'prop-types';
import { LiStyled } from './SectionListItem.styled';

export const SectionListItem = ({ item }) => {
  const { id, title, link, period, name, type } = item;

  const checkChild = type => {
    if (type === 'link') {
      return (
        <a href={link} target='_blank' rel='noopener noreferer'>
          {title}
        </a>
      );
    }

    if (type === 'email') {
      return (
        <a href={`mailto:${link}`} target='_blank' rel='noopener noreferer'>
          {title}
        </a>
      );
    }

    if (type === 'phone') {
      return (
        <a href={`tel:${link}`} target='_blank' rel='noopener noreferer'>
          {title}
        </a>
      );
    }

    if (type === 'education') {
      return (
        <>
          <h3>{title}</h3>
          <p>{period}</p>
          <p>{name}</p>
        </>
      );
    }

    if (type === 'text') {
      return title;
    }
  };

  return <LiStyled pos={id}>{checkChild(type)}</LiStyled>;
};

SectionListItem.propTypes = {
  item: PropTypes.string.isRequired,
};
