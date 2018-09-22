import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import favicon from '../img/favicon.ico';
import siteImage from '../img/shareImage.jpg';
import './Layout.css';

const siteUrl = ''; // http://example.com
const siteTitle = 'TLOU Part II - Countdown to release';
const siteDescription =
  'Are you hyped for the release of The Last of Us Part II? This countdown will help you keep track of the imminent release date!';

const Layout = ({ children }) => (
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
      link={[{ rel: 'shortcut icon', href: favicon }]}
      htmlAttributes={{ lang: 'en-US' }}
    />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
