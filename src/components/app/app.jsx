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
  mounted = false;

  constructor(props) {
    super(props);

    this.state = {
      letters: initialLetters,
      mounted: false,
      maxId: 20
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.addNewLetterRepeated();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateLetter = f => {
    this.setState(prevState => {
      return {
        letters: f(prevState.letters)
      };
    });
  };

  addLetter = () => {
    if (!this.mounted) {
      return;
    }
    const newLetter = generateLetter(this.state.maxId + 1);
    this.setState(prevState => {
      return {
        maxId: prevState.maxId + 1
      };
    });
    this.updateLetter(old => [newLetter, ...old]);
  };

  addNewLetterDebounced = debounce(this.addLetter, 5 * 60 * 1000);

  addNewLetterRepeated = () => {
    this.addNewLetterDebounced();
    if (this.mounted) {
      const timeout = Math.random() * (10 * 60 * 1000) + 10;
      console.log(`Timeout: ${timeout}ms`);
      setTimeout(this.addNewLetterRepeated, timeout);
    }
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
