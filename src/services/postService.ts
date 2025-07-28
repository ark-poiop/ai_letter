import { Post, parseMarkdownFile, sortPostsByDate } from '../lib/markdown';

// 마크다운 파일들을 동적으로 import하기 위한 함수
async function loadMarkdownFiles(): Promise<Post[]> {
  try {
    // Vite의 동적 import를 사용하여 마크다운 파일들을 로드
    const markdownModules = import.meta.glob('../data/markdown/*.md', { as: 'raw' });
    
    const posts: Post[] = [];
    
    for (const path in markdownModules) {
      try {
        const markdownContent = await markdownModules[path]();
        const post = await parseMarkdownFile(markdownContent);
        posts.push(post);
      } catch (error) {
        console.error(`Error loading markdown file ${path}:`, error);
      }
    }
    
    return sortPostsByDate(posts);
  } catch (error) {
    console.error('Error loading markdown files:', error);
    return [];
  }
}

// 마크다운 포스트를 가져오는 함수
export async function getAllPosts(): Promise<Post[]> {
  try {
    const markdownPosts = await loadMarkdownFiles();
    return markdownPosts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

// 특정 슬러그로 포스트를 가져오는 함수
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const posts = await getAllPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error);
    return null;
  }
}

// 카테고리별 포스트를 가져오는 함수
export async function getPostsByCategory(category: string): Promise<Post[]> {
  try {
    const posts = await getAllPosts();
    return posts.filter(post => post.frontmatter.category === category);
  } catch (error) {
    console.error(`Error getting posts by category ${category}:`, error);
    return [];
  }
}

// 검색어로 포스트를 검색하는 함수
export async function searchPosts(query: string): Promise<Post[]> {
  try {
    const posts = await getAllPosts();
    const lowercaseQuery = query.toLowerCase();
    
    return posts.filter(post => 
      post.frontmatter.title.toLowerCase().includes(lowercaseQuery) ||
      post.frontmatter.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.frontmatter.category.toLowerCase().includes(lowercaseQuery) ||
      (post.frontmatter.tags && post.frontmatter.tags.some(tag => 
        tag.toLowerCase().includes(lowercaseQuery)
      )) ||
      post.content.toLowerCase().includes(lowercaseQuery)
    );
  } catch (error) {
    console.error(`Error searching posts with query ${query}:`, error);
    return [];
  }
}

// 최근 포스트를 가져오는 함수
export async function getRecentPosts(limit: number = 5): Promise<Post[]> {
  try {
    const posts = await getAllPosts();
    return posts.slice(0, limit);
  } catch (error) {
    console.error(`Error getting recent posts:`, error);
    return [];
  }
}

// 모든 카테고리를 가져오는 함수
export async function getAllCategories(): Promise<string[]> {
  try {
    const posts = await getAllPosts();
    const categories = posts.map(post => post.frontmatter.category);
    return [...new Set(categories)]; // 중복 제거
  } catch (error) {
    console.error('Error getting all categories:', error);
    return [];
  }
}

// 모든 태그를 가져오는 함수
export async function getAllTags(): Promise<string[]> {
  try {
    const posts = await getAllPosts();
    const tags = posts.flatMap(post => post.frontmatter.tags || []);
    return [...new Set(tags)]; // 중복 제거
  } catch (error) {
    console.error('Error getting all tags:', error);
    return [];
  }
} 