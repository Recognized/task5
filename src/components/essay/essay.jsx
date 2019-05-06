import React from 'react';

import './essay__body.css';
import './essay__nuclear-explosion.css';
import './essay__paragraph-container.css';
import './essay__paragraph.css';
import './essay__img-rounded.css';
import './essay__button.css';
import './essay-close__control-label.css';
import './essay-close.css';

import round from './images/round.png';

export const Essay = () => {
  const onClick = () => {
    document.getElementById('all').style.setProperty('display', 'none');
    document.getElementById('explosion').style.setProperty('display', 'block');
  };

  return (
    <div className="letter-inline-first-task">
      <div className="essay__body">
        <div className="essay__nuclear-explosion" id="explosion" />
        <div className="all" id="all">
          <div className="essay__paragraph-container">
            <p className="essay__paragraph">
              <u>По поводу курса</u>, ожидаю разбор классических проблем фронтенд разработки{' '}
              <sub>(понятия не имею, что это значит)</sub>. Хочу узнать, почему веб теперь такой,
              какой мы его имеем: откуда засилье фреймворков? почему всем правит только js? Может
              быть, стоит осветить какие-то паттерны фронтенд разработки (что-то отличное от{' '}
              <span>MVC</span>,
              <ruby>
                MVVM
                <rt> Эм-ви-ви-эм</rt>
              </ruby>
              ), типо как
              <img alt="Round button" className="essay__img-rounded" src={round} />
              написать сайт так, чтобы он работал при потере соединения с сервером (считая, что у
              нас интерактивное веб-приложение). Или как сделать, чтобы каждый элемент твоего
              приложения реагировал
              <i>асинхронно</i> на каждое изменение данных сервера, и при этом не убить сервер, и не
              погибнуть в бесконечных запросах. Еще хочу <abbr title="Web Assembly">WASM</abbr> и
              его будущее, (но я про него знаю, просто людям показать, много кто на котлине пишет).
            </p>
          </div>
          <div className="essay__button">
            <button onClick={onClick} type="button">
              hit to copystrike
            </button>
          </div>
          <button className="essay-close" type="button">
            <label className="essay-close__control-label" htmlFor="open-task-1">
              X
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};
