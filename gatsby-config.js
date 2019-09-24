module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Last of Us Part II – Countdown to release',
        short_name: 'TLOU Part II',
        start_url: '/',
        background_color: '#0e191f',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/img/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
