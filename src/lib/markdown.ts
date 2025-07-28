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
  let html = markdown;
  
  // 표 처리 (가장 먼저 처리)
  const tableRegex = /(\|.*\|[\r\n]+)+/g;
  html = html.replace(tableRegex, (tableMatch) => {
    const lines = tableMatch.trim().split('\n').filter(line => line.trim());
    let tableHtml = '<table class="markdown-table">';
    
    lines.forEach((line, index) => {
      // 헤더 구분선 건너뛰기
      if (line.match(/^\|[\s\-:|]+\|$/)) {
        return;
      }
      
      const cells = line.split('|').slice(1, -1).map(cell => cell.trim());
      const cellHtml = cells.map(cell => `<td>${cell}</td>`).join('');
      tableHtml += `<tr>${cellHtml}</tr>`;
    });
    
    tableHtml += '</table>';
    return tableHtml;
  });
  
  // 헤더
  html = html
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // 굵은 텍스트
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // 기울임 텍스트
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // 링크
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // 줄바꿈 (표 내부가 아닌 경우에만)
  html = html.replace(/(?<!<td>.*)\n(?!.*<\/td>)/g, '<br>');
  
  // 단락 (표가 아닌 경우에만)
  html = html.replace(/(?<!<table>.*)<br><br>(?!.*<\/table>)/g, '</p><p>');
  html = html.replace(/(?<!<table>.*)^(.+)$(?!.*<\/table>)/gm, '<p>$1</p>');
  html = html.replace(/<p><\/p>/g, '');
  
  return html;
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