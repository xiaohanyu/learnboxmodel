import React from "react";

import { Container } from "semantic-ui-react";

export default class Article extends React.Component {
  render() {
    return (
      <Container text style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        {this.props.children}
      </Container>
    );
  }
}
