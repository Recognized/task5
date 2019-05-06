import React, { Component } from 'react';
import debounce from 'debounce';

import { SearchBar } from '../search-bar/search-bar';
import { Sidebar } from '../sidebar/sidebar';
import { Letters } from '../letters/letters';

import { initialLetters, generateLetter } from './app';

import './mail__layout-letters.css';
import './mail__layout-search.css';
import './mail__layout-sidebar.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: initialLetters,
      maxId: 20
    };
  }

  componentDidMount() {
    const addNewLetterDebounced = debounce(this.addLetter, 5 * 60 * 1000);

    function addNewLetterRepeated() {
      addNewLetterDebounced();
      setTimeout(addNewLetterRepeated, new Date().getMilliseconds() % (60 * 1000));
    }

    addNewLetterRepeated();
  }

  updateLetter = f => {
    this.setState(prevState => {
      return {
        letters: f(prevState.letters)
      };
    });
  };

  addLetter = () => {
    const newLetter = generateLetter(this.state.maxId + 1);
    this.setState(prevState => {
      return {
        maxId: prevState.maxId + 1
      };
    });
    this.updateLetter(old => [newLetter, ...old]);
  };

  render() {
    return (
      <div>
        <div className="mail__layout-sidebar">
          <Sidebar addLetter={this.addLetter} />
        </div>
        <div className="mail__layout-search">
          <SearchBar />
        </div>
        <div className="mail__layout-letters">
          <Letters letters={this.state.letters} updateLetter={this.updateLetter} />
        </div>
      </div>
    );
  }
}
