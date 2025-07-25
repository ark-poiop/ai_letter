import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

function parseFrontmatter(md: string): PostMeta {
  // 매우 단순한 frontmatter 파서 (--- ~ --- 사이)
  const match = md.match(/^---([\s\S]*?)---/);
  const meta: any = {};
  if (match) {
    match[1].split("\n").forEach(line => {
      const [key, ...rest] = line.split(":");
      if (key && rest.length) meta[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
    });
  }
  // 예시: 카테고리, 읽기시간은 frontmatter에 없으면 기본값
  return {
    slug: meta.slug || '',
    title: meta.title || '',
    excerpt: meta.excerpt || '',
    category: meta.category || 'AI',
    date: meta.date || '',
    readTime: meta.readTime || '5분',
  };
}

const RecentPosts = () => {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    const modules = import.meta.glob("../posts/*.md", { as: "raw" });
    Promise.all(
      Object.entries(modules).map(async ([path, loader]) => {
        const slug = path.split("/").pop()?.replace(/\.md$/, "");
        const md = await (loader as () => Promise<string>)();
        const meta = parseFrontmatter(md);
        return { ...meta, slug };
      })
    ).then((all) => {
      // 최신순 정렬 (date 내림차순)
      setPosts(
        all
          .filter((p) => p.title)
          .sort((a, b) => (a.date < b.date ? 1 : -1))
      );
    });
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            최신 AI 뉴스 분석
          </h2>
          <p className="text-muted-foreground">
            거시적 관점에서 AI 기술과 시장 동향을 분석합니다
          </p>
        </div>
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link to={`/post/${post.slug}`} key={post.slug}>
              <Card className="border border-border/20 bg-card/50 backdrop-blur-sm shadow-light hover:shadow-medium transition-all duration-200 group cursor-pointer hover:border-primary/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;