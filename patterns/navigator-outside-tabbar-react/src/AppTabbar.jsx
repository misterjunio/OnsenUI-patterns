import React from 'react';
import ReactDOM from 'react-dom';
import { Toolbar, Page, Tabbar, Tab } from 'react-onsenui';

import Home from './Home'

export default class AppTabbar extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({ component: Home });
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Navigator outside Tabbar</div>
      </Toolbar>
    );
  }

  renderTabs() {
    return [
      {
        content: <Home navigator={this.props.navigator} />,
        tab: <Tab label="Home" icon="ion-ios-home-outline" />
      },
      {
        content: <Home navigator={this.props.navigator} />,
        tab: <Tab label="Dialogs" icon="ion-ios-albums-outline" />
      },
      {
        content: <Home />,
        tab: <Tab label="Forms" icon="ion-edit" />
      },
      {
        content: <Home navigator={this.props.navigator} />,
        tab: <Tab label="Animations" icon="ion-film-marker" />
      }
    ];
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Tabbar renderTabs={this.renderTabs} />
      </Page>
    );
  }
}