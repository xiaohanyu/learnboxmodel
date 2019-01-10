import React from "react";

import { Button, Grid } from "semantic-ui-react";

import App from "components/app";

import Article from "components/article";

export default () => {
  return (
    <App
      title="Learn CSS Box Model"
      subtitle="A tutorial guide about CSS box models."
    >
      <Article>
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
      </Article>
    </App>
  );
};
