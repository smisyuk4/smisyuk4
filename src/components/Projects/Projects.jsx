import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../SectionTitle';
import { DivStyled } from './Projects.styled';

export const Projects = () => {
  const [t] = useTranslation('global');
  return (
    <DivStyled>
      <SectionTitle title={t('projects.title')} />
      {/* 10 */}
      <div>
        <a
          href='https://furycomics.com.ua/'
          target='_blank'
          rel='noopener noreferer'
        >
          {t('projects.ten.title')}
        </a>
        <h4>{t('projects.ten.subTitle')}</h4>

        <p>{t('projects.ten.used')}</p>
        <p>{t('projects.ten.desc')}</p>
      </div>

      {/* 9 */}
      <div>
        <a
          href='https://useprosto.com.ua/'
          target='_blank'
          rel='noopener noreferer'
        >
          {t('projects.nine.title')}
        </a>
        <h4>{t('projects.nine.subTitle')}</h4>

        <p>{t('projects.nine.used')}</p>
        <p>{t('projects.nine.desc')}</p>
      </div>

      {/* 8 */}
      <div>
        <a
          href='https://posts-sqlite.xyz/api-v1/'
          target='_blank'
          rel='noopener noreferer'
        >
          {t('projects.eight.title')}
        </a>
        <h4>{t('projects.eight.subTitle')}</h4>

        <p>{t('projects.eight.used')}</p>
        <p>{t('projects.eight.desc')}</p>
      </div>

      {/* 7 */}
      <div>
        <a
          href='https://statusac.com.ua/'
          target='_blank'
          rel='noopener noreferer'
        >
          {t('projects.seven.title')}
        </a>
        <h4>{t('projects.seven.subTitle')}</h4>

        <p>{t('projects.seven.used')}</p>
        <p>{t('projects.seven.desc')}</p>
      </div>

      {/* 1 */}
      <div>
        <a
          href='https://t.me/+DSMNErMAOtljY2Y6'
          target='_blank'
          rel='noopener noreferer'
        >
          {t('projects.one.title')}
        </a>
        <h4>{t('projects.one.subTitle')}</h4>

        <ul>
          <li>
            <a
              href='https://github.com/smisyuk4/sales-telegram-bot-react'
              target='_blank'
              rel='noopener noreferer'
            >
              Link to github - react
            </a>
            <a
              href='https://github.com/smisyuk4/sales-telegram-bot-node'
              target='_blank'
              rel='noopener noreferer'
            >
              Link to github - node
            </a>
          </li>
        </ul>

        <p>{t('projects.one.used')}</p>
      </div>

      {/* 2 */}
      <div>
        <h3>{t('projects.two.title')}</h3>
        <h4>{t('projects.two.subTitle')}</h4>

        <p>{t('projects.two.used')}</p>
        <p>{t('projects.two.desc')}</p>
      </div>

      {/* 3 */}
      <div>
        <h3>{t('projects.three.title')}</h3>
        <h4>{t('projects.three.subTitle')}</h4>
        <a
          href='https://github.com/smisyuk4/Photo-social-net'
          target='_blank'
          rel='noopener noreferer'
        >
          Link to github
        </a>
        <p>{t('projects.three.used')}</p>
      </div>

      {/* 4 */}
      <div>
        <h3>{t('projects.four.title')}</h3>
        <h4>{t('projects.four.subTitle')}</h4>

        <ul>
          <li>
            <a
              href='https://github.com/smisyuk4/yummy-react-frontend'
              target='_blank'
              rel='noopener noreferer'
            >
              Link to github - react
            </a>
            <a
              href='https://github.com/smisyuk4/yummy-rest-api'
              target='_blank'
              rel='noopener noreferer'
            >
              Link to github - node
            </a>
          </li>
        </ul>

        <p>{t('projects.four.used')}</p>
        <p>{t('projects.four.desc')}</p>
      </div>

      {/* 5 */}
      <div>
        <a
          href='https://smisyuk4.github.io/filmoteka_mriia_goit_project/'
          target='_blank'
          rel='noopener noreferer'
        >
          {t('projects.five.title')}
        </a>
        <h4>{t('projects.five.subTitle')}</h4>
        <a
          href='https://github.com/smisyuk4/filmoteka_mriia_goit_project'
          target='_blank'
          rel='noopener noreferer'
        >
          Link to github
        </a>

        <p>{t('projects.five.used')}</p>
        <p>{t('projects.five.desc')}</p>
      </div>

      {/* 6 */}
      <div>
        <a
          href='https://smisyuk4.github.io/13attempts_goit_project/'
          target='_blank'
          rel='noopener noreferer'
        >
          {t('projects.six.title')}
        </a>
        <h4>{t('projects.six.subTitle')}</h4>
        <a
          href='https://github.com/smisyuk4/13attempts_goit_project'
          target='_blank'
          rel='noopener noreferer'
        >
          Link to github
        </a>

        <p>{t('projects.six.used')}</p>
        <p>{t('projects.six.desc')}</p>
      </div>
    </DivStyled>
  );
};
