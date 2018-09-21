import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import favicon from '../img/favicon.ico';
import './Layout.css';

const Layout = ({ children }) => (
  <>
    <Helmet
      title="TLOU Part II - Countdown to release"
      meta={[
        {
          name: 'description',
          content: 'The Last of Us Part II - Countdown to release',
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
