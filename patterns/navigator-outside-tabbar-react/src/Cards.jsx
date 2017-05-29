import React from 'react';
import { Page, ListTitle, List, ListItem } from 'react-onsenui';

import PageNav2 from './PageNav2';

export default class Cards extends React.Component {
  pushPage(event) {
    this.props.navigator.pushPage({ component: PageNav2, props: { key: 'pageNav2', cardTitle: event.target.textContent } });
  }

  render() {
    return (
      <Page>
        <h2>Cards</h2>
        
        <ListTitle>Card List</ListTitle>
        <List>
          <ListItem onClick={this.pushPage.bind(this)}>Card One</ListItem>
          <ListItem onClick={this.pushPage.bind(this)}>Card Two</ListItem>
          <ListItem onClick={this.pushPage.bind(this)}>Card Three</ListItem>
        </List>
      </Page>
    );
  }
}