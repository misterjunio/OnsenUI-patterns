import React from 'react';
import { Page, Toolbar, ToolbarButton, Icon, Button } from 'react-onsenui';

import PageNav1 from './PageNav1';

export default class Home extends React.Component {
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

  pushPage() {
    this.props.navigator.pushPage({ component: PageNav1, props: { key: 'pageNav1' } });
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <h2>Home</h2>
        <div style={{ textAlign: 'center' }}>
          <br />
          <Button onClick={this.pushPage.bind(this)}>
            Push Page
          </Button>
        </div>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
      </Page>
    );
  }
}