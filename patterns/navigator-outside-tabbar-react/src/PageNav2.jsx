import React from 'react';
import { Page, Toolbar, BackButton, Card, Button, Icon, List, ListHeader, ListItem } from 'react-onsenui';

export default class PageNav2 extends React.Component {
  renderToolbar() {
    return (
      <Toolbar>
        <div className='left'><BackButton>Back</BackButton></div>
        <div className="center"></div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <Card>
          <img src={"https://monaca.io/img/logos/download_image_onsenui_01.png"} alt="Onsen UI" style={{ width: '100%' }} />
          <div className="title">{this.props.cardTitle ? this.props.cardTitle : 'Custom Card'}</div>
          <div className="content">
            <div>
              <Button>
                <Icon icon="ion-thumbsup"></Icon>
              </Button>
              <Button>
                <Icon icon="ion-share"></Icon>
              </Button>
            </div>
            <List>
              <ListHeader>Bindings</ListHeader>
              <ListItem>Vue</ListItem>
              <ListItem>Angular</ListItem>
              <ListItem>React</ListItem>
            </List>
          </div>
        </Card>
      </Page>
    );
  }
}
