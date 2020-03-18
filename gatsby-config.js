// const path = require('path');
// const REPO_ABSOLUTE_PATH = process.cwd();

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: `Kyle Mathews`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === 'production',
          position: 'displace',
        },
        plugins: [
          'gatsby-tinacms-json',
          {
            resolve: 'gatsby-tinacms-git',
            options: {
              // pathToRepo: REPO_ABSOLUTE_PATH,
              // pathToContent: '.',
              defaultCommitMessage: 'Update from the content ',
              defaultCommitName: 'TinaCMS',
              defaultCommitEmail: 'git@tinacms.org',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    'gatsby-transformer-json',
  ],
};
