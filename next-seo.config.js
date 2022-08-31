const SITE = {
  name: 'MUEDSA BLOG',
  url: 'https://www.muedsa.com',
  description: 'MUEDSA Blog. XD',
  imageUrl: 'https://avatars.githubusercontent.com/u/7676275?v=4?s=400'
}

export default {
  titleTemplate: ' %s | ' + SITE.name,
  defaultTitle: SITE.name,
  title: undefined,
  openGraph: {
    site_name: SITE.name,
    title: SITE.name,
    description: SITE.description,
    images: [{ url: SITE.imageUrl }],
    twitter: {
      handle: '@handle',
      site: SITE.name,
      cardType: 'summary_large_image',
    }
  }
}