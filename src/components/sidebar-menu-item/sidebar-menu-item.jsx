import React, { Component } from 'react';

import './sidebar__menu-item_active.css';
import './sidebar__menu-item.css';

export class SidebarMenuItem extends Component {
  render() {
    const active = this.props.active ? 'sidebar__menu-item_active' : '';

    return (
      <li>
        <a className={`sidebar__menu-item ${active}`} href="#">
          {this.props.name}
        </a>
      </li>
    );
  }
}
