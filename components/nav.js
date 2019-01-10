import React from "react";

import { Container, Grid, Header, Image } from "semantic-ui-react";

export default class Nav extends React.Component {
  render() {
    const gridColumnStyle = {
      paddingTop: "2px",
      paddingBottom: "2px"
    };

    return (
      <div>
        <Container text style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Grid
            style={{ alignItems: "center", marginBottom: "0", marginTop: "0" }}
          >
            <Image src="/static/images/logo.svg" size="small" />
            <Header as="h1" style={{ marginTop: "0" }}>
              <Header.Content>{this.props.title}</Header.Content>
              <Header.Subheader>{this.props.subtitle}</Header.Subheader>
            </Header>
          </Grid>
        </Container>
        <Grid padded columns={7}>
          <Grid.Column color="red" style={gridColumnStyle} />
          <Grid.Column color="orange" style={gridColumnStyle} />
          <Grid.Column color="yellow" style={gridColumnStyle} />
          <Grid.Column color="green" style={gridColumnStyle} />
          <Grid.Column color="teal" style={gridColumnStyle} />
          <Grid.Column color="blue" style={gridColumnStyle} />
          <Grid.Column color="purple" style={gridColumnStyle} />
        </Grid>
      </div>
    );
  }
}
