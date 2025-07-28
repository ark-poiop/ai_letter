import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export interface PostFrontmatter {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  author?: string;
  tags?: string[];
  image?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  htmlContent: string;
}

export async function parseMarkdownFile(markdownContent: string): Promise<Post> {
  const { data, content } = matter(markdownContent);
  
  // Process markdown to HTML
  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(content);
  
  const htmlContent = processedContent.toString();

  return {
    slug: data.slug,
    frontmatter: data as PostFrontmatter,
    content,
    htmlContent
  };
}

export function validateFrontmatter(data: any): PostFrontmatter {
  const required = ['title', 'excerpt', 'category', 'date', 'readTime', 'slug'];
  
  for (const field of required) {
    if (!data[field]) {
      throw new Error(`Missing required frontmatter field: ${field}`);
    }
  }
  
  return data as PostFrontmatter;
}

export function sortPostsByDate(posts: Post[]): Post[] {
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
} 