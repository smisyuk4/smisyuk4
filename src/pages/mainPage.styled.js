import styled from '@emotion/styled';

export const MainStyled = styled.main`
  position: relative;
  height: 297mm;
  width: 210mm;
  padding: 20px;
  margin: 0 auto;

  button {
    position: absolute;
    bottom: 0;
    left: 0;

    background-color: inherit;
    border: none;
    color: grey;
    font-size: 3mm;
    cursor: pointer;
  }
`;

export const HeaderStyled = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  background: var(--bgPrimaryColor);
  background: linear-gradient(
    0deg,
    var(--bgPrimaryColor) 70%,
    var(--bgSecondaryColor) 70%
  );

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
    margin-bottom: 20px;
    padding-right: 20px;
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

  p {
    font-size: 4.2mm;
  }
`;

export const MainWrp = styled.div`
  display: flex;
  gap: 30px;
`;
