import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

// 샘플 포스트 데이터
const samplePosts: PostMeta[] = [
  {
    slug: "ai-trend-2024",
    title: "2024년 AI 기술 트렌드 분석",
    excerpt: "올해 주목해야 할 AI 기술 동향과 시장 변화를 분석합니다. 생성형 AI의 발전과 규제 환경의 변화를 중심으로 살펴봅니다.",
    category: "AI 트렌드",
    date: "2024-12-15",
    readTime: "8분"
  },
  {
    slug: "ai-policy-global",
    title: "AI 규제 정책의 글로벌 동향",
    excerpt: "전 세계 AI 규제 동향을 비교 분석합니다. EU AI Act, 미국의 AI 규제 정책, 그리고 한국의 AI 규제 방향성을 검토합니다.",
    category: "AI 정책",
    date: "2024-12-10",
    readTime: "12분"
  },
  {
    slug: "ai-invest-market",
    title: "AI 투자 시장의 구조적 변화",
    excerpt: "AI 스타트업 투자 동향과 대기업의 전략 변화를 분석합니다. 2024년 AI 투자 패턴과 향후 전망을 다룹니다.",
    category: "AI 투자",
    date: "2024-12-05",
    readTime: "10분"
  },
  {
    slug: "ai-enterprise-adoption",
    title: "기업의 AI 도입 현황과 전략",
    excerpt: "대기업과 중소기업의 AI 도입 현황을 분석하고, 성공적인 AI 전략 수립 방안을 제시합니다.",
    category: "AI 도입",
    date: "2024-11-30",
    readTime: "15분"
  }
];

const RecentPosts = () => {
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
          {samplePosts.map((post) => (
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