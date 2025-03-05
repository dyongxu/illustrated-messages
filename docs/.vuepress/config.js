module.exports = {
  head: [
    ['script', { src: 'vendor.min.js' }],
    ['script', { src: 'guidebook.js' }]
  ],
  title: 'SAP Fiori Moments',
  description: '',
  base: '/sap-design-ops/fiori-moments/',
  themeConfig: {
    sidebar: 'auto',
    logo: '/logo-sap-fiori-moments.svg',
    repo: 'https://github.tools.sap/sap-design-ops/fiori-moments',
    nav: [
      { text: 'Introduction', link: '/' },
      { text: 'Illustration Style', link: '/style.html' },
      { text: 'Illustration and Messaging Guidance', link: '/messaging-guidance.html' },
      { text: 'Messaging Framework', link: '/messaging-framework.html' },
      { text: 'Illustration Library', link: '/library.html' },
      { text: 'Resources', link: '/resources.html' },
      { text: 'Component Status', link: '/status.html' }
    ]
  },
  scss: {

  },
  markdown: {
    anchor: {
      level: [2],
      permalinkBefore: false,
      permalinkClass: 'anchor'
    }
  }
}
