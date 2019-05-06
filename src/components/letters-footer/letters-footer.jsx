import React from 'react';

import './letters__footer.css';
import './letters__footer-item.css';
import './letters__footer-link.css';

export const LettersFooter = () => {
  return (
    <footer className="letters__footer">
      <LettersFooterItem name="© 2001-2018, Яндекс" />
      <LettersFooterItem name="Реклама" />
      <LettersFooterItem name="Помощь и обратная связь" />
    </footer>
  );
};

const LettersFooterItem = ({ name }) => {
  return (
    <div className="letters__footer-item">
      <p>
        <a className="letters__footer-link" href="#">
          {name}
        </a>
      </p>
    </div>
  );
};
