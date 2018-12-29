import React from "react";

import "semantic-ui-css/semantic.min.css";

import { Button, Container, Header, Grid } from "semantic-ui-react";

export default () => {
  return (
    <div>
      <style>
        {`
        * {
          border-radius: 0 !important;
        }

        .seven.column.grid > .column {
          padding-top: 2px;
          padding-bottom: 1px;
        }

        .two.column.grid > .column > .ui.button {
          margin-bottom: 8px;
        }

        footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding-top: 20px;
          padding-bottom: 20px;
          background-color: #f5f5f5;
          margin-top: 0;
          margin-bottom: 0;
        }
      `}
      </style>
      <Container text style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
        <Header as="h1">
          <Header.Content>Learn CSS Box Model</Header.Content>
          <Header.Subheader>
            A tutorial guide about something about CSS box models.
          </Header.Subheader>
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
      <Container text style={{ marginTop: "2rem" }}>
        <Grid columns={2}>
          <Grid.Column>
            <Button basic fluid size="large" as="a" href="/display">
              display
            </Button>
            <Button basic fluid size="large" as="a" href="/border-radius">
              border-radius
            </Button>
            <Button basic fluid size="large" as="a" href="/border-color">
              border-color
            </Button>
            <Button basic fluid size="large" as="a" href="/border-style">
              border-style
            </Button>
            <Button basic fluid size="large" as="a" href="/border-image">
              border-image
            </Button>
            <Button basic fluid size="large" as="a" href="/border-block">
              border-block
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button basic fluid size="large" as="a" href="/margin">
              margin
            </Button>
            <Button basic fluid size="large" as="a" href="/padding">
              padding
            </Button>
            <Button basic fluid size="large" as="a" href="/outline">
              outline
            </Button>
            <Button basic fluid size="large" as="a" href="/box-sizing">
              box-sizing
            </Button>
            <Button basic fluid size="large" as="a" href="/box-shadow">
              box-shadow
            </Button>
            <Button basic fluid size="large" as="a" href="/box-shadow">
              box-shadow
            </Button>
          </Grid.Column>
        </Grid>
      </Container>
      <footer>
        <Container text>Made by Xiao Hanyu.</Container>
      </footer>
    </div>
  );
};
