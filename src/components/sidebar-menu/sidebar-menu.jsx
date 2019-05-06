import React, { Component } from 'react';

import './sidebar__menu-list.css';

export class SidebarMenu extends Component {
  render() {
    return <ul className="sidebar__menu-list">{this.props.children}</ul>;
  }
}
