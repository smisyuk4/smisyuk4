import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../SectionTitle';
import { DivStyled } from './Work.styled';

export const Work = () => {
  const [t] = useTranslation('global');

  return (
    <DivStyled>
      <SectionTitle title={t('work.title')} />

      <div>
        <h3>{t('work.three.title')}</h3>
        <h4>{t('work.three.period')}</h4>

        <ul>
          <li>{t('work.three.firstListItem')}</li>
          <li>{t('work.three.secondListItem')}</li>
          <li>{t('work.three.thirdListItem')}</li>
        </ul>

        <p>{t('work.three.partOne')}</p>
      </div>

      {/*<div>
        <h3>{t('work.one.title')}</h3>
        <h4>{t('work.one.period')}</h4>

        <ul>
          <li>{t('work.one.firstListItem')}</li>
          <li>{t('work.one.secondListItem')}</li>
        </ul>

        <p>
          {t('work.one.partOne')}
          <a
            href='https://github.com/smisyuk4/Calendar_Sheet'
            target='_blank'
            rel='noopener noreferer'
          >
            (Google script + Telegram bot)
          </a>
          {t('work.one.partTwo')}
          <a
            href='https://github.com/smisyuk4/Customer_Greetings'
            target='_blank'
            rel='noopener noreferer'
          >
            (Google script + Telegram bot)
          </a>
          {t('work.one.partThree')}
        </p>
      </div>*/}

      {/*<div>
        <h3>{t('work.two.title')}</h3>
        <h4>{t('work.two.period')}</h4>

        <ul>
          <li>{t('work.two.firstListItem')}</li>
          <li>{t('work.two.secondListItem')}</li>
          <li>{t('work.two.thirdListItem')}</li>
        </ul>

        <p>{t('work.two.partOne')}</p>
      </div>*/}
    </DivStyled>
  );
};
