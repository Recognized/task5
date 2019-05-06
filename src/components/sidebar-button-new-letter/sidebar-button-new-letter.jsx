import React, { Component } from 'react';

import './sidebar__button-new-letter.css';

export class SidebarButtonNewLetter extends Component {
  render() {
    return (
      <button className="sidebar__button-new-letter" onClick={this.props.action} type="button">
        Написать
      </button>
    );
  }
}
