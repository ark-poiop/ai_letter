import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, TrendingUp } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Card className="border border-border/20 bg-card/50 backdrop-blur-sm shadow-medium">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl mb-4">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                AI 트렌드 인사이트 받기
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                최신 AI 뉴스와 시장 분석을 이메일로 받아보세요. 
                거시적 관점의 전문적인 분석을 제공합니다.
              </p>
            </div>

            <div className="max-w-sm mx-auto mb-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="(기능이 제공되지 않습니다.)"
                  className="flex-1 bg-background/50 border-border/30"
                />
                <Button className="px-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  구독
                </Button>
              </div>
            </div>

            <p className="text-xs text-muted-foreground/60">
              언제든 구독을 해지할 수 있습니다
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;