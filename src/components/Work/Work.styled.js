import styled from '@emotion/styled';

export const DivStyled = styled.div`
  div:not(:last-of-type) {
    margin-bottom: 10px;
  }

  h3 {
    display: inline-block;
    margin-right: 7px;
    font-weight: 600;
    color: var(--secondColor);
  }

  h4 {
    display: inline-block;
    font-size: 3.5mm;
  }

  p:first-of-type {
    margin: 5px 0;
  }

  ul {
    margin: 5px 0 0 0;
    justify-content: center;
  }
`;
