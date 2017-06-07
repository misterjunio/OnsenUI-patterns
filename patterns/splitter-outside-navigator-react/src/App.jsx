import React from 'react';
import { Splitter, SplitterSide, SplitterContent, Page, List, ListItem, Navigator } from 'react-onsenui';

import Home from './Home'
import Cards from './Cards'
import Settings from './Settings'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.loadPage = this.loadPage.bind(this);
  }

  hide() {
    this.setState({ isOpen: false });
  }

  show() {
    this.setState({ isOpen: true });
  }

  loadPage(page) {
    this.hide();
    this.navigator.resetPage({ component: page, props: { key: page } });
  }

  renderPage(route, navigator) {
    console.log('route', route);
    console.log('navigator', navigator);
    route.props = route.props || {};
    route.props.navigator = navigator;
    route.props.showMenu = this.show.bind(this);

    return React.createElement(route.component, route.props);
  }

  render() {
    return (
      <Splitter>
        <SplitterSide side='right' width={220} collapse={true} isSwipeable={true} isOpen={this.state.isOpen} onClose={this.hide.bind(this)} onOpen={this.show.bind(this)}>
          <Page>
            <List>
              <ListItem key='home' onClick={this.loadPage.bind(this, Home)} tappable>Home</ListItem>
              <ListItem key='cards' onClick={this.loadPage.bind(this, Cards)} tappable>Cards</ListItem>
              <ListItem key='settings' onClick={this.loadPage.bind(this, Settings)} tappable>Settings</ListItem>
            </List>
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Navigator initialRoute={{ component: Home, props: { key: 'home' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
        </SplitterContent>
      </Splitter>
    );
  }
}