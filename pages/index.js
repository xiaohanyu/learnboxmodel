import React from "react";

import App from "components/app";

import { Button, Container, Grid } from "semantic-ui-react";

export default () => {
  return (
    <div>
      <style>
        {`
        * {
          border-radius: 0 !important;
        }

        .two.column.grid > .column > .ui.button {
          margin-bottom: 8px;
        }
      `}
      </style>
      <App
        title="Learn CSS Box Model"
        subtitle="A tutorial guide about CSS box models."
      >
        <Container text style={{ marginTop: "2rem" }}>
        </Container>
      </App>
    </div>
  );
};
