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

// 간단한 frontmatter 파서
function parseFrontmatter(content: string): { frontmatter: any, markdown: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    throw new Error('Frontmatter not found');
  }
  
  const frontmatterText = match[1];
  const markdown = match[2];
  
  // YAML을 간단히 파싱
  const frontmatter: any = {};
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // 따옴표 제거
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // 배열 파싱 (tags)
      if (key === 'tags' && value.startsWith('[') && value.endsWith(']')) {
        frontmatter[key] = value.slice(1, -1).split(',').map(tag => tag.trim().replace(/"/g, ''));
      } else {
        frontmatter[key] = value;
      }
    }
  });
  
  return { frontmatter, markdown };
}

// 간단한 마크다운을 HTML로 변환
function markdownToHtml(markdown: string): string {
  return markdown
    // 헤더
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // 굵은 텍스트
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // 기울임 텍스트
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // 링크
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // 줄바꿈
    .replace(/\n/g, '<br>')
    // 단락
    .replace(/<br><br>/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '');
}

export async function parseMarkdownFile(markdownContent: string): Promise<Post> {
  const { frontmatter, markdown } = parseFrontmatter(markdownContent);
  const htmlContent = markdownToHtml(markdown);

  return {
    slug: frontmatter.slug,
    frontmatter: frontmatter as PostFrontmatter,
    content: markdown,
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