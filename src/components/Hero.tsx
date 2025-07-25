import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
        <div className="text-center">
          {/* Large Logo */}
          <div className="mb-8 flex justify-center">
            <Logo size="lg" className="scale-125" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent tracking-tight">
            AI NEWS INSIGHT
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            거시적 관점의 AI 뉴스 분석
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            복잡한 AI 기술과 트렌드를 명확하고 깊이 있게 분석하여 제공합니다. 
            거시적 관점에서 AI의 현재와 미래를 조망합니다.
          </p>
          
          <div className="flex justify-center">
            <div className="text-sm text-muted-foreground/60 font-light">
              최근 업데이트: 2024년 12월
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;