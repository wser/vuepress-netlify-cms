module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  head: [
    ['script', { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true }]
  ],
  themeConfig: {
    docsDir: 'docs',
    repo: 'ekoeryanto/vuepress-netlify-cms',
    sidebar: [
      '/',
      '/welcome',
      '/test'
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/',
      }
    ]
  }
}