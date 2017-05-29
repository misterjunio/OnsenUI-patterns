import React from 'react';
import { Navigator } from 'react-onsenui';

import AppTabbar from './AppTabbar'

export default class App extends React.Component {
  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;

    return React.createElement(route.component, route.props);
  }

  render() {
    return (
      <Navigator initialRoute={{ component: AppTabbar, props: {key: 'appTabbar'} }} renderPage={this.renderPage} />
    );
  }
}