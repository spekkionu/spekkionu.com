import rss from '@astrojs/rss';
import site from '../data/config';
import {getActivePostsCollection} from "../utils/utils.js";

export async function GET(context) {

  const posts = await getActivePostsCollection(true, true);


  return rss({
    // `<title>` field in output xml
    title: site.name,
    // `<description>` field in output xml
    description: site.description,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    stylesheet: '/rss/styles.xsl',
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => {
      return {
        title: post.data.title,
        description: post.data.description,
        content: post.data.excerpt,
        link: post.data.url,
        pubDate: post.data.date.toJSDate(),
        categories: post.data.categories,
        // (optional) custom data to inject into the item
        customData: `<author>${post.data.author || site.author}</author>`,
      }
    }),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
