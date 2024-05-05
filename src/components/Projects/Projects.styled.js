import styled from '@emotion/styled';

export const DivStyled = styled.div`
  div:not(:last-of-type) {
    margin-bottom: 10px;
  }

  a {
    display: inline-block;
    margin-right: 7px;
    font-weight: 600;
    color: var(--secondColor);
  }

  h4 {
    display: inline-block;
  }

  p:first-of-type {
    margin: 5px 0;
  }

  ul {
    margin: 5px 0;
    display: flex;
    gap: 20px;
    justify-content: center;
    list-style: none;
  }
`;
