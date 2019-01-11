import React from "react";

import Head from "next/head";

import "semantic-ui-css/semantic.min.css";

import Nav from "components/nav";
import Footer from "components/footer";
import ReactGA from "react-ga";
import GithubCorner from "react-github-corner";

export default class App extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-131817507-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    let head = (
      <Head>
        <title>{this.props.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          content="Learn CSS Box Model: A tutorial guide about CSS box models."
          name="description"
        />
        <meta content="CSS, Box, Box-model, Border" name="keywords" />
        <meta content="Xiao Hanyu" name="author" />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/manifest.json" rel="manifest" />
        <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#ffffff" name="theme-color" />
      </Head>
    );

    return (
      <div>
        <GithubCorner href="https://github.com/xiaohanyu/learnboxmodel" />
        {head}
        <Nav title={this.props.title} subtitle={this.props.subtitle} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
