import { SectionTitle } from '../SectionTitle';
import { DivStyled } from './Projects.styled';

export const Projects = () => {
  return (
    <DivStyled>
      <SectionTitle title='Project experience' />

      {/* 1 */}
      <div>
        <a
          href='https://t.me/+DSMNErMAOtljY2Y6'
          target='_blank'
          rel='noopener noreferer'
        >
          Telegram bot
        </a>
        <h4>service w/web app for send announcement in channel</h4>

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

        <p>
          Used: React js, hooks, router, form, yup, emotion, mixins, axios,
          firebase, node, express, cors, telegram api, google cloud platform...
        </p>
      </div>

      {/* 2 */}
      <div>
        <h3>Warehouse</h3>
        <h4>mobile app for control stock balances</h4>

        <p>Used: React Native</p>
        <p>
          I joined the project when the existing mobile version of the warehouse
          application was rewritten to the size of a tablet and increased
          functionality. Made tables, drop-down lists, product window
        </p>
      </div>

      {/* 3 */}
      <div>
        <h3>Photo social net</h3>
        <h4>mobile app for publish photos and messages</h4>
        <a
          href='https://github.com/smisyuk4/Photo-social-net'
          target='_blank'
          rel='noopener noreferer'
        >
          Link to github
        </a>
        <p>Used: React Native, Expo, Redux, location, camera, Firebase</p>
      </div>

      {/* 4 */}
      <div>
        <h3>SoYummy</h3>
        <h4>Full stack project. Cookbook with recipes and shopping lists</h4>

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

        <p>
          Used: React, hooks, react-redux, react-router-dom, portal, lazy,
          reduxpersist, formik, emotion/styled, yup, prop-types, toastify,
          paginate, node, express, mongodb, mongoose, cloudinary, swagger....
        </p>
        <p>
          Team project. My role - team lead. Creation of project architecture.
          On the node, I wrote the search route by title and ingredient, and
          also helped write database queries for others. Swager wrote part of
          the documentation. On React, I made a "popular recipes" section to
          help colleagues in different sections. Fixed bugs throughout the
          project. I deployed the application.
        </p>
      </div>

      {/* 5 */}
      <div>
        <a
          href='https://smisyuk4.github.io/filmoteka_mriia_goit_project/'
          target='_blank'
          rel='noopener noreferer'
        >
          Filmoteka
        </a>
        <h4>Site for search films, read details, watch trailer video</h4>
        <a
          href='https://github.com/smisyuk4/filmoteka_mriia_goit_project'
          target='_blank'
          rel='noopener noreferer'
        >
          Link to github
        </a>

        <p>
          Used: JavaScript, Rest.API, axios, async/await, npm, firebase, SASS,
          HTML
        </p>
        <p>
          Team project. My role - team lead. Creation of project architecture.
          Layout and stylization of the header. Analysis of API documentation.
          Writing a film library class. Work with image quality. Bug fixes.
        </p>
      </div>

      {/* 6 */}
      <div>
        <a
          href='https://smisyuk4.github.io/13attempts_goit_project/'
          target='_blank'
          rel='noopener noreferer'
        >
          Icecream
        </a>
        <h4>Site for sales products</h4>
        <a
          href='https://github.com/smisyuk4/13attempts_goit_project'
          target='_blank'
          rel='noopener noreferer'
        >
          Link to github
        </a>

        <p>Used: HTML, SASS, Java Script, JQuery</p>
        <p>
          Team project. My role - team lead. Creation of project architecture.
          Helping the team with their questions. Bug fixes.
        </p>
      </div>
    </DivStyled>
  );
};
