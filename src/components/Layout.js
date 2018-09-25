import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import siteImage from '../img/shareImage.jpg';
import './Layout.css';

const siteUrl = ''; // http://example.com
const siteTitle = 'TLOU Part II - Countdown to release';
const siteDescription =
  'Are you hyped for the release of The Last of Us Part II? This countdown will help you keep track of the imminent release date!';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { isClient: false };
  }

  componentDidMount() {
    this.setState({ isClient: true });
  }

  render() {
    return (
      <>
        <Helmet
          title={siteTitle}
          meta={[
            {
              name: 'description',
              content: siteDescription,
            },
            {
              property: 'og:title',
              content: siteTitle,
            },
            {
              property: 'og:description',
              content: siteDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:image',
              content: `${siteUrl}${siteImage}`,
            },
            {
              property: 'og:url',
              content: siteUrl,
            },
            {
              property: 'twitter:card',
              content: 'summary',
            },
            {
              property: 'twitter:title',
              content: siteTitle,
            },
            {
              property: 'twitter:image',
              content: `${siteUrl}${siteImage}`,
            },
          ]}
          htmlAttributes={{ lang: 'en-US' }}
        />
        {this.props.children({ isClient: this.state.isClient })}
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
