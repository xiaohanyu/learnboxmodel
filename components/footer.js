import React from "react";

import { Container } from "semantic-ui-react";

export default () => {
  return (
    <footer>
      <style>
        {`
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
      <Container text>Made by Xiao Hanyu.</Container>
    </footer>
  );
};
