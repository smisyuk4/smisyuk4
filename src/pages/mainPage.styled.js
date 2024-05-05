import styled from '@emotion/styled';

export const MainStyled = styled.main`
  height: 297mm;
  width: 210mm;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid black;

  background: rgb(242, 242, 230);
  background: linear-gradient(
    0deg,
    rgba(242, 242, 230, 1) 93%,
    rgba(1, 60, 40, 1) 93%
  );
`;

export const HeaderStyled = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  img {
    height: 150px;
    width: 150px;
    background: var(--accentColor);

    border: 5px solid var(--firstColor);
  }

  div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  h1 {
    font-family: var(--rubik);
    font-size: 9mm;
    font-weight: 700;
    color: var(--bgPrimaryColor);
  }

  h2 {
    font-family: var(--rubik);
    font-size: 5mm;
    font-weight: 700;
    color: var(--bgPrimaryColor);
  }
`;

export const MainWrp = styled.div`
  display: flex;
  gap: 20px;
`;
