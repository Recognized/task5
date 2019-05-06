import React, { PureComponent } from 'react';

import { SidebarLogo } from '../sidebar-logo/sidebar-logo';
import { SidebarButtonNewLetter } from '../sidebar-button-new-letter/sidebar-button-new-letter';
import { SidebarMenu } from '../sidebar-menu/sidebar-menu';
import { SidebarMenuItem } from '../sidebar-menu-item/sidebar-menu-item';

import './sidebar.css';
import './sidebar__logo-container.css';

export class Sidebar extends PureComponent {
  render() {
    return (
      <nav className="sidebar">
        <div className="sidebar__logo-container">
          <SidebarLogo />
        </div>
        <SidebarButtonNewLetter action={this.props.addLetter} />
        <SidebarMenu>
          <SidebarMenuItem name="Входящие" active />
          <SidebarMenuItem name="Отправленные" />
          <SidebarMenuItem name="Удалённые" />
          <SidebarMenuItem name="Спам" />
          <SidebarMenuItem name="Черновики" />
          <SidebarMenuItem name="Создать папку" />
        </SidebarMenu>
      </nav>
    );
  }
}
