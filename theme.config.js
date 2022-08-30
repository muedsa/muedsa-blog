const YEAR = new Date().getFullYear();
export const AUTHOR_NAME = 'MUEDSA';
export const SITE_NAME = 'MUEDSA BLOG';
export const SITE_URL = 'https://www.muedsa.com';

export default {
  authorName: AUTHOR_NAME,
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © {SITE_NAME}.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
