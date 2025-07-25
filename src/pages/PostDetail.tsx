import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
}

// 예시 추천 글 데이터
const recommendedPosts: PostMeta[] = [
  {
    slug: "ai-trend-2024",
    title: "2024년 AI 기술 트렌드 분석",
    excerpt: "올해 주목해야 할 AI 기술 동향과 시장 변화를 분석합니다."
  },
  {
    slug: "ai-policy-global",
    title: "AI 규제 정책의 글로벌 동향",
    excerpt: "전 세계 AI 규제 동향을 비교 분석합니다."
  },
  {
    slug: "ai-invest-market",
    title: "AI 투자 시장의 구조적 변화",
    excerpt: "AI 스타트업 투자 동향과 대기업의 전략 변화를 분석합니다."
  }
];

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    import(`../posts/${slug}.md`)
      .then((mod) => fetch(mod.default).then((res) => res.text()).then(setContent))
      .catch(() => setNotFound(true));
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <article className="prose prose-invert prose-lg max-w-none bg-card/60 rounded-xl p-8 shadow-medium mb-12">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
          <section>
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">추천 글</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {recommendedPosts.filter(p => p.slug !== slug).map((post) => (
                <Link to={`/post/${post.slug}`} key={post.slug}>
                  <Card className="border border-border/20 bg-card/70 hover:border-primary/30 transition-all cursor-pointer">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{post.excerpt}</p>
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