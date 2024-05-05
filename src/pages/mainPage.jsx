import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Contacts } from '../components/Contacts';
import { HardSkills } from '../components/HardSkills';
import { Languages } from '../components/Languages';
import { Education } from '../components/Education';
import { Projects } from '../components/Projects';
import { Work } from '../components/Work';
import avatar from '../assets/images/avatar-2.png';
import { MainStyled, HeaderStyled, MainWrp } from './mainPage.styled';

export const MainPage = () => {
  const [t, i18n] = useTranslation('global');
  const [activeLang, setActiveLang] = useState('en');

  const toggleLanguage = async lang => {
    i18n.changeLanguage(lang);
    setActiveLang(() => lang);
  };
  return (
    <MainStyled>
      {/*<button
        onClick={() =>
          activeLang === 'ua' ? toggleLanguage('en') : toggleLanguage('ua')
        }
        aria-label='перемикач мови'
      >
        {activeLang.toUpperCase()}
      </button>*/}

      <HeaderStyled>
        <img src={avatar} height={150} width={150} alt='аватар' />

        <div>
          <div>
            <h1>{t('header.name')}</h1>
            <h2>{t('header.position')}</h2>
          </div>

          <p>{t('header.summary')}</p>
        </div>
      </HeaderStyled>

      <MainWrp>
        <div>
          <Contacts />

          <HardSkills />

          <Languages />

          <Education />
        </div>

        <div>
          <Projects />

          <Work />
        </div>
      </MainWrp>
    </MainStyled>
  );
};
