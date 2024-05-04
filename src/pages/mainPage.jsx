import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Contacts } from '../components/Contacts';
import { HardSkills } from '../components/HardSkills';
import { SoftSkills } from '../components/SoftSkills';
import { Languages } from '../components/Languages';
import { Education } from '../components/Education';
import { Projects } from '../components/Projects';
import { Work } from '../components/Work';

export const MainPage = () => {
  const [t, i18n] = useTranslation('global');
  const [activeLang, setActiveLang] = useState('en');

  const toggleLanguage = async lang => {
    i18n.changeLanguage(lang);
    setActiveLang(() => lang);
  };
  return (
    <>
      <button
        onClick={() =>
          activeLang === 'ua' ? toggleLanguage('en') : toggleLanguage('ua')
        }
        aria-label='перемикач мови'
        //activeLang={activeLang}
        //currentLang='ua'
      >
        {activeLang.toUpperCase()}
      </button>
      <p>СЕРГІЙ МІСЮК SERGIY MISYUK</p>

      <Contacts />

      <HardSkills />

      <SoftSkills />

      <Languages />

      <Education />

      <Projects />

      <Work />
    </>
  );
};
