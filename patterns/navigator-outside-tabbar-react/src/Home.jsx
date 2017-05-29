import React from 'react';
import { Page, Button } from 'react-onsenui';

import PageNav1 from './PageNav1';

export default class Home extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({ component: PageNav1, props: { key: 'pageNav1' } });
  }

  render() {
    return (
      <Page>
        <h2>Home</h2>
        <div style={{ textAlign: 'center' }}>
          <br />
          <Button onClick={this.pushPage.bind(this)}>
            Push Page
          </Button>
        </div>
      </Page>
    );
  }
}