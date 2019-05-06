import React from 'react';

import { Checkbox } from '../checkbox/checkbox';

import './letters__panel.css';
import './letters__panel-item.css';
import './letters__panel-button.css';

export const LettersPanel = ({ checkAll, isAllSelected, deleteSelected }) => {
  return (
    <div className="letters__panel">
      <Checkbox check={checkAll} checked={isAllSelected} />
      <LettersPanelItem name="Переслать" />
      <LettersPanelItem name="Удалить" action={deleteSelected} />
      <LettersPanelItem name="Это спам!" />
      <LettersPanelItem name="Прочитано" />
    </div>
  );
};

const LettersPanelItem = ({ name, action }) => {
  return (
    <div className="letters__panel-item">
      <p>
        <a className="letters__panel-button" href="#" onClick={action}>
          {name}
        </a>
      </p>
    </div>
  );
};
