import React from 'react';
import { Page, Toolbar, BackButton, Input, Button } from 'react-onsenui';

export default class PageNav1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title : 'Custom Page',
      nextTitle: null
    };
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='left'><BackButton>Back</BackButton></div>
        <div className="center">{this.state.title}</div>
      </Toolbar>
    );
  }

  pushPage() {
    this.props.navigator.pushPage({ component: PageNav1, props: { key: 'pageNav' + this.props.navigator.routes.length, title: this.state.nexTitle } });
  }

  popPage() {
    this.props.navigator.popPage();
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div style={{ textAlign: 'center' }}>
          <h1>Custom Page</h1>
          <p>
            <Input modifier="underbar" placeholder="Title" float onChange={evt => this.setState({ nexTitle: evt.target.value })} ></Input>
          </p>
          <Button onClick={this.pushPage.bind(this)}>
            Push Page
          </Button>
          <Button onClick={this.popPage.bind(this)}>
            Pop Page
          </Button>
        </div>
      </Page>
    );
  }
}