const siteMetadata = {
  title: 'bramaudi',
  author: 'Brama Udi',
  headerTitle: 'bramaudi',
  footerTitle: 'Brama Udi',
  description: 'Personal Website',
  snippets: 'Reuseable code snippets collected by Brama Udi',
  language: 'en-us',
  siteUrl: 'https://bramaudi.my.id',
  siteRepo: 'https://github.com/bramaudi/blog',
  siteLogo: '/static/images/me.jpg',
  image: '/static/images/me.jpg',
  socialBanner: '/static/images/social.png',
  email: 'bramaudi.al@gmail.com',
  github: 'https://github.com/bramaudi',
  twitter: 'https://twitter.com/mumetify',
  facebook: 'https://facebook.com/bramaudi',
  youtube: '',
  linkedin: '',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'cusdis', // supported providers: giscus, utterances, disqus, cusdis
    cusdisConfig: {
      appId: process.env.NEXT_PUBLIC_CUSDIS_APPID,
    },
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment ????
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
  socialAccount: {
    twitter: 'mumetify',
  },
}

module.exports = siteMetadata
