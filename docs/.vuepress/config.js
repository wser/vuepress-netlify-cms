let publicURL = `http://localhost:${process.env.PORT || 8080}`;

switch (process.env.CONTEXT) {
  case 'production':
    publicURL = process.env.URL;
    break;
  case 'branch-deploy':
    publicURL = process.env.URL.replace('://', `://${process.env.BRANCH}.`);
    break;
  case 'deploy-preview':
    publicURL = process.env.DEPLOY_PRIME_URL;
    break;
}

module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  head: [
    [
      'script',
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        defer: true
      }
    ]
  ],
  themeConfig: {
    docsDir: 'docs',
    repo: 'wser/vuepress-netlify-cms',
    sidebar: ['/', '/welcome', '/test'],
    nav: [
      {
        text: 'Admin',
        link: `${publicURL}/admin/`
      }
    ]
  }
};
