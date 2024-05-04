import { SectionTitle } from '../SectionTitle';
import { DivStyled } from './Work.styled';

export const Work = () => {
  return (
    <DivStyled>
      <SectionTitle title='Work experience' />

      <div>
        <h3>Crossfit trainer - MKCF Sport Club</h3>
        <h4>Nov 2015 - Oct 2020, Mykolayiv</h4>

        <ul>
          <li>Working with clients, identifying their needs</li>
          <li>Studied professional courses</li>
        </ul>

        <p>
          Achievement: I've made an application
          <a
            href='https://github.com/smisyuk4/Calendar_Sheet'
            target='_blank'
            rel='noopener noreferer'
          >
            (Google script + Telegram bot)
          </a>
          for monitoring client visits and payment accounting. Made an automatic
          service
          <a
            href='https://github.com/smisyuk4/Customer_Greetings'
            target='_blank'
            rel='noopener noreferer'
          >
            (Google script + telegram)
          </a>
          to congratulate clients on their birthday, which improved their
          loyalty to the club.
        </p>
      </div>

      <div>
        <h3>Sales manager Landtech LLC</h3>
        <h4>Jun 2011 - Oct 2015, Mykolayiv</h4>

        <ul>
          <li>Communicating with clients and identifying their needs</li>
          <li>Studied of technical documentation and courses</li>
          <li>Analytics of orders</li>
        </ul>

        <p>
          Achievement: I've trained new employees to increase the company's
          network and profit.
        </p>
      </div>
    </DivStyled>
  );
};
