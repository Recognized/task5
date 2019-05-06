import React from 'react';

import { Checkbox } from '../checkbox/checkbox';

import './letter.css';
import './letter__date.css';
import './letter__date-paragraph.css';
import './letter__preview.css';
import './letter__read-box.css';
import './letter__sender-icon.css';
import './letter__link.css';
import './letter__sender-name.css';
import './letter__single-letter.css';
import './letter_unread.css';
import './letter_added.css';
import './letter_deleted.css';

export const Letter = ({ id, data, unread, special, deleted, added, check }) => {
  const inner = (
    <div>
      <div className="letter__sender-icon">
        <span className="letter__single-letter">{data.letter}</span>
      </div>
      <p className="letter__sender-name">{data.sender}</p>
      <div className="letter__read-box" />
      <p className="letter__preview">{data.preview}</p>
      <div className="letter__date">
        <p className="letter__date-paragraph">{data.date}</p>
      </div>
    </div>
  );
  const deletedStyle = deleted ? 'letter_deleted' : '';
  const addedStyle = added && !deleted ? 'letter_added' : '';
  const unreadStyle = unread ? 'letter_unread' : '';

  const onClick = () => {
    check(id);
  };

  return (
    <div className={`letter ${addedStyle} ${deletedStyle} ${unreadStyle}`} id={id}>
      {special ? (
        <label className="essay-close__control-label" htmlFor="open-task-1">
          <Checkbox check={onClick} checked={data.checked} />
          {inner}
        </label>
      ) : (
        <div>
          <Checkbox check={onClick} checked={data.checked} />
          <a className="letter__link" href="#">
            {inner}
          </a>
        </div>
      )}
    </div>
  );
};
