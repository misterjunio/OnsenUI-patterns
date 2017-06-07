import React from 'react';
import { Page, Toolbar, ToolbarButton, Icon } from 'react-onsenui';

export default class Settings extends React.Component {
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

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <h2>Settings</h2>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
      </Page>
    );
  }
}