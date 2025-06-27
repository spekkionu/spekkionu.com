export default {
  name: "Spekkionu's MTG Blog",
  description: "A blog about Magic the Gathering.",
  url: "https://www.spekkionu.com",
  author: "Jonathan Bernardi",
  locale: "en-US",
  version: String(Date.now()),
  gtm_tag_id: import.meta.env.GTM_TAG_ID,
  google_analytics: import.meta.env.GOOGLE_ANALYTICS,
  disqus_short_name: "spekkionu",
  comments_enabled: false,
  twitter: "@thejonbernardi",
  pagination: 10,
};
