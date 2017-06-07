import React from 'react';
import { Page, Toolbar, ToolbarButton, Icon, ListTitle, List, ListItem } from 'react-onsenui';

import PageNav2 from './PageNav2';

export default class Cards extends React.Component {
  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Splitter+Navigator</div>
        <div className='right'>
          <ToolbarButton onClick={this.showMenu.bind(this)}>
            <Icon icon='ion-navicon, material:md-menu' />
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage(event) {
    this.props.navigator.pushPage({ component: PageNav2, props: { key: 'pageNav2', cardTitle: event.target.textContent } });
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <h2>Cards</h2>
        
        <ListTitle>Card List</ListTitle>
        <List>
          <ListItem onClick={this.pushPage.bind(this)}>Card One</ListItem>
          <ListItem onClick={this.pushPage.bind(this)}>Card Two</ListItem>
          <ListItem onClick={this.pushPage.bind(this)}>Card Three</ListItem>
        </List>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
      </Page>
    );
  }
}