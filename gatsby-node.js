/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/**
 * Show images when accessing the site in development mode using other devices
 * Ref: https://github.com/gatsbyjs/gatsby/issues/5264#issuecomment-405424852
 */
if (process.env.NODE_ENV === 'development') {
  process.env.GATSBY_WEBPACK_PUBLICPATH = '/';
}
