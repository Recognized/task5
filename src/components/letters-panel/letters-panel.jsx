import React from 'react';
import { Checkbox } from '../components/checkbox/checkbox';
import '../components/letters/letters__panel.css';
import '../components/letters/letters__panel-item.css';
import '../components/letters/letters__panel-button.css';
import '../common.blocks/mail-link.css';
import '../common.blocks/single-line.css';

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
        <a className="mail-link single-line letters__panel-button" href="#" onClick={action}>
          {name}
        </a>
      </p>
    </div>
  );
};
