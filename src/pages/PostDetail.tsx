import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

// 샘플 포스트 데이터
const samplePosts: Record<string, PostMeta> = {
  "ai-trend-2024": {
    slug: "ai-trend-2024",
    title: "2024년 AI 기술 트렌드 분석",
    excerpt: "올해 주목해야 할 AI 기술 동향과 시장 변화를 분석합니다.",
    category: "AI 트렌드",
    date: "2024-12-15",
    readTime: "8분",
    content: `# 2024년 AI 기술 트렌드 분석

## 개요

2024년은 AI 기술이 새로운 전환점을 맞이한 해입니다. 생성형 AI의 폭발적 성장과 함께, 기업들의 AI 도입이 본격화되면서 시장의 구조적 변화가 일어나고 있습니다.

## 주요 트렌드

### 1. 생성형 AI의 성숙화

생성형 AI는 단순한 텍스트 생성에서 벗어나, 멀티모달 AI로 발전하고 있습니다. OpenAI의 GPT-4, Google의 Gemini, Anthropic의 Claude 등이 이미지, 음성, 비디오를 통합적으로 처리할 수 있게 되었습니다.

### 2. AI 규제 환경의 변화

EU AI Act의 발효와 함께, 전 세계적으로 AI 규제가 강화되고 있습니다. 이는 AI 기술의 책임 있는 발전을 위한 중요한 전환점입니다.

### 3. 기업 AI 도입의 가속화

대기업들이 AI 도입을 본격화하면서, AI 전문 인력에 대한 수요가 급증하고 있습니다. 특히 금융, 의료, 제조업 분야에서 AI 활용이 활발합니다.

## 시장 전망

2024년 AI 시장은 다음과 같은 방향으로 발전할 것으로 예상됩니다:

- **AI 인프라 시장의 성장**: 클라우드 기반 AI 서비스의 확산
- **AI 윤리와 투명성**: AI 시스템의 설명 가능성과 공정성에 대한 요구 증가
- **AI와 인간의 협업**: AI가 인간을 대체하는 것이 아닌, 인간의 능력을 증강하는 도구로 발전

## 결론

2024년은 AI 기술이 실제 비즈니스 가치를 창출하는 해가 될 것입니다. 기업들은 AI 전략을 수립하고 투자할 때, 기술적 혁신과 함께 윤리적 고려사항도 함께 고려해야 합니다.`
  },
  "ai-policy-global": {
    slug: "ai-policy-global",
    title: "AI 규제 정책의 글로벌 동향",
    excerpt: "전 세계 AI 규제 동향을 비교 분석합니다.",
    category: "AI 정책",
    date: "2024-12-10",
    readTime: "12분",
    content: `# AI 규제 정책의 글로벌 동향

## EU AI Act의 발효

2024년 4월, EU AI Act가 발효되면서 전 세계 AI 규제의 새로운 기준이 마련되었습니다. 이 법안은 AI 시스템을 위험도에 따라 분류하고, 각각에 맞는 규제를 적용합니다.

## 미국의 AI 규제 정책

미국은 주별로 AI 규제를 추진하고 있으며, 연방 차원에서는 AI 안전과 혁신을 동시에 추구하는 정책을 펼치고 있습니다.

## 한국의 AI 규제 방향성

한국은 AI 규제 프레임워크를 구축하고 있으며, AI 윤리 가이드라인을 통해 자율규제를 장려하고 있습니다.

## 글로벌 협력의 필요성

AI 기술의 글로벌적 특성을 고려할 때, 국가 간 협력이 필수적입니다. OECD, G7 등 국제기구를 통한 AI 규제 협력이 활발히 진행되고 있습니다.`
  },
  "ai-invest-market": {
    slug: "ai-invest-market",
    title: "AI 투자 시장의 구조적 변화",
    excerpt: "AI 스타트업 투자 동향과 대기업의 전략 변화를 분석합니다.",
    category: "AI 투자",
    date: "2024-12-05",
    readTime: "10분",
    content: `# AI 투자 시장의 구조적 변화

## AI 스타트업 투자 동향

2024년 AI 스타트업 투자는 전년 대비 30% 증가했으며, 특히 생성형 AI 분야에서 투자가 집중되고 있습니다.

## 대기업의 AI 전략

구글, 마이크로소프트, 아마존 등 대기업들이 AI 스타트업 인수와 전략적 투자를 확대하고 있습니다.

## 투자 패턴의 변화

초기 단계 스타트업보다는 성장 단계의 AI 기업에 대한 투자가 증가하고 있으며, 이는 AI 기술의 성숙화를 반영합니다.

## 향후 전망

AI 투자 시장은 2025년까지 지속적인 성장이 예상되며, 특히 AI 인프라와 AI 애플리케이션 분야에서 투자가 활발할 것으로 전망됩니다.`
  },
  "ai-enterprise-adoption": {
    slug: "ai-enterprise-adoption",
    title: "기업의 AI 도입 현황과 전략",
    excerpt: "대기업과 중소기업의 AI 도입 현황을 분석하고, 성공적인 AI 전략 수립 방안을 제시합니다.",
    category: "AI 도입",
    date: "2024-11-30",
    readTime: "15분",
    content: `# 기업의 AI 도입 현황과 전략

## 대기업의 AI 도입 현황

포춘 500대 기업의 80% 이상이 AI 기술을 도입했거나 도입 계획을 가지고 있습니다. 특히 고객 서비스, 마케팅, 운영 최적화 분야에서 AI 활용이 활발합니다.

## 중소기업의 AI 도입 과제

중소기업들은 AI 도입에 대한 기술적, 재정적 제약으로 어려움을 겪고 있습니다. 이를 해결하기 위한 정부 지원과 AI 솔루션 제공업체의 역할이 중요합니다.

## 성공적인 AI 전략 수립 방안

1. **단계적 접근**: 작은 프로젝트부터 시작하여 점진적으로 확대
2. **인력 개발**: AI 리터러시 향상을 위한 교육 프로그램 운영
3. **윤리적 고려**: AI 윤리 가이드라인 수립 및 준수
4. **파트너십**: AI 전문 기업과의 협력을 통한 기술 도입

## 결론

AI 도입은 단순한 기술 도입이 아닌, 조직 문화와 프로세스의 변화를 수반하는 전략적 과제입니다. 기업들은 이러한 변화를 체계적으로 관리할 수 있는 전략을 수립해야 합니다.`
  }
};

// 예시 추천 글 데이터
const recommendedPosts: PostMeta[] = [
  {
    slug: "ai-trend-2024",
    title: "2024년 AI 기술 트렌드 분석",
    excerpt: "올해 주목해야 할 AI 기술 동향과 시장 변화를 분석합니다.",
    category: "AI 트렌드",
    date: "2024-12-15",
    readTime: "8분",
    content: ""
  },
  {
    slug: "ai-policy-global",
    title: "AI 규제 정책의 글로벌 동향",
    excerpt: "전 세계 AI 규제 동향을 비교 분석합니다.",
    category: "AI 정책",
    date: "2024-12-10",
    readTime: "12분",
    content: ""
  },
  {
    slug: "ai-invest-market",
    title: "AI 투자 시장의 구조적 변화",
    excerpt: "AI 스타트업 투자 동향과 대기업의 전략 변화를 분석합니다.",
    category: "AI 투자",
    date: "2024-12-05",
    readTime: "10분",
    content: ""
  }
];

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostMeta | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    
    const foundPost = samplePosts[slug];
    if (foundPost) {
      setPost(foundPost);
    } else {
      setNotFound(true);
    }
  }, [slug]);

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">포스트를 찾을 수 없습니다</h1>
            <Link to="/" className="text-primary underline">홈으로 돌아가기</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>로딩 중...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Post Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline" className="border-primary/30 text-primary">
                {post.category}
              </Badge>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
                <span>•</span>
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {post.excerpt}
            </p>
          </div>

          {/* Post Content */}
          <article className="prose prose-invert prose-lg max-w-none bg-card/60 rounded-xl p-8 shadow-medium mb-12">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>

          {/* Recommended Posts */}
          <section>
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">추천 글</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {recommendedPosts.filter(p => p.slug !== slug).map((recommendedPost) => (
                <Link to={`/post/${recommendedPost.slug}`} key={recommendedPost.slug}>
                  <Card className="border border-border/20 bg-card/70 hover:border-primary/30 transition-all cursor-pointer">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {recommendedPost.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{recommendedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostDetail; 