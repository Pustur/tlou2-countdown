import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './Layout.css';

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords.join(', '),
            },
          ]}
          htmlAttributes={{ lang: 'en-US' }}
        />
        {children}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
