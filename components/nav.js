import React from "react";

import { Container, Grid, Header } from "semantic-ui-react";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <style>
          {`
          .seven.column.grid > .column {
            padding-top: 2px;
            padding-bottom: 1px;
          }
        `}
        </style>
        <Container text style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
          <Header as="h1">
            <Header.Content>{this.props.title}</Header.Content>
            <Header.Subheader>{this.props.subtitle}</Header.Subheader>
          </Header>
        </Container>
        <Grid padded columns={7}>
          <Grid.Column color="red" />
          <Grid.Column color="orange" />
          <Grid.Column color="yellow" />
          <Grid.Column color="green" />
          <Grid.Column color="teal" />
          <Grid.Column color="blue" />
          <Grid.Column color="purple" />
        </Grid>
      </div>
    );
  }
}
