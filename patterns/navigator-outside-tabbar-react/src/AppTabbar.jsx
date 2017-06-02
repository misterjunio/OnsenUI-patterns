import React from 'react';
import { Toolbar, Page, Tabbar, Tab } from 'react-onsenui';

import Home from './Home'
import Cards from './Cards'
import Settings from './Settings'

export default class AppTabbar extends React.Component {
  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Navigator+Tabbar</div>
      </Toolbar>
    );
  }

  renderTabs(navigator) {
    return [
      {
        content: <Home key="home" navigator={this.props.navigator} />,
        tab: <Tab key="home" label="Home" icon="ion-home" />
      },
      {
        content: <Cards key="cards" navigator={this.props.navigator} />,
        tab: <Tab key="cards" label="Cards" icon="ion-card" badge="3" />
      },
      {
        content: <Settings key="settings" />,
        tab: <Tab key="settings" label="Settings" icon="ion-ios-cog" />
      }
    ];
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Tabbar position='auto' index={0} renderTabs={this.renderTabs.bind(this)} />
      </Page>
    );
  }
}