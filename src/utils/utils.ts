import {type CollectionEntry, getCollection, type InferEntrySchema} from "astro:content";
import {DateTime} from "luxon";
import MarkdownIt from 'markdown-it';
import makeslug from "slugify";
import site from "../data/config";
import sanitizeHtml from 'sanitize-html';
import { stripHtml } from "string-strip-html";

// @ts-ignore
export interface PostData extends InferEntrySchema<"post"> {
  date: DateTime;
  year: string;
  month: string;
  monthname: string;
  url: string;
  full_url: string;
  id: string;
  slug: string;
  excerpt: string;
  author: string;
  noindex: boolean;
  categories: string[];
}

// @ts-ignore
export interface Post extends CollectionEntry<"post"> {
  slug: string;
  data: PostData;
}

export type Category = {
  slug: string;
  name: string;
  url: string;
  full_url: string;
}

const parser = new MarkdownIt({
  html: true,
  linkify: false,
  typographer: false
});

const slugify = (str: string): string => {
  return makeslug(str, {
    replacement: '-',
    lower: true,
    strict: true,
    trim: true
  })
}

export const getActivePostsCollection = async (sort_ascending: boolean = false, with_teaser: boolean = false): Promise<Post[]> => {

  const posts = await getCollection('post', ({data}) => {
    return import.meta.env.PROD ? data.published !== false : true;
  });
  if(sort_ascending){
    // @ts-ignore
    posts.sort((a, b) => new Date(a.data.date) - new Date(b.data.date));
  } else {
    // @ts-ignore
    posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  }

  // @ts-ignore
  return posts.map(post => getPostFromCollectionItem(post, with_teaser));
};

export const getPostFromCollectionItem = (post: Post, with_teaser: boolean = false): Post => {
  post.data.id = post.id;
  post.data.slug = post.data.slug || post.slug || post.id;
  // @ts-ignore
  post.data.date = DateTime.fromISO(post.data.date, { zone: "UTC" });
  post.data.year = post.data.date.toFormat('yyyy').toString();
  post.data.month = post.data.date.toFormat('LL').toString();
  post.data.monthname = post.data.date.toFormat('LLLL').toString();
  post.data.url = `/${post.data.year}/${post.data.month}/${post.data.slug}/`;
  post.data.full_url = `${site.url}${post.data.url}`;
  post.data.author = post.data.author || site.author;
  post.data.noindex = post.data.noindex || false;
  post.data.categories = post.data.categories || [];

  if(with_teaser) {
    if (!post.data.excerpt) {
      if (post.body?.includes('<hr class="more" />')) {
        post.data.excerpt = parser.render(post.body.split('<hr class="more" />')[0]).trim();
      } else {
        post.data.excerpt = stripHtml(post.data.description || '').result.trim();
      }
    } else {
      post.data.excerpt = sanitizeHtml(post.data.excerpt, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'figure', 'figcaption']),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          img: ['src', 'srcset', 'alt', 'width', 'height', 'loading', 'class'],
          figure: ['class'],
          figcaption: ['class']
        }
      }).trim();
    }
  } else {
    post.data.excerpt = post.data.excerpt?.trim() ?? '';
  }

  return post as Post;
};

export const getCategoryData = (category: string): Category => {
  const slug = slugify(category);
  return {
    name: category,
    slug: slug,
    url: `/category/${slug}/`,
    full_url: `${site.url}/category/${slug}/`,
  };
}


export const getCategoriesFromPostData = (categories: string[] = []): Category[] => {
  return categories.map(category => getCategoryData(category));
}

