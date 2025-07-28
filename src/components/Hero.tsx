import { Brain, TrendingUp, Users, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient - CI 가이드라인 적용 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5"></div>
      
      {/* Floating elements - CI 애니메이션 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl ci-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/15 rounded-full blur-xl ci-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl ci-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon - CI 로고 스타일 */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/25 ci-glow">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-blue-500/20 blur-xl animate-pulse"></div>
            </div>
          </div>
          
          {/* Main heading - CI 타이포그래피 */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight ci-gradient-text tracking-tight">
            AI NEWS INSIGHT
          </h1>
          
          {/* Subtitle - CI 색상 팔레트 */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            거시적 관점의 AI 뉴스 분석
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            복잡한 AI 기술과 트렌드를 명확하고 깊이 있게 분석하여 제공합니다. 
            거시적 관점에서 AI의 현재와 미래를 조망합니다.
          </p>
          
          {/* Stats - CI 카드 스타일 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="ci-card p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">6+</div>
              <div className="text-sm text-gray-400">전문 분석</div>
            </div>
            <div className="ci-card p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-gray-400">전문적 견해</div>
            </div>
            <div className="ci-card p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">최신 정보</div>
            </div>
          </div>
          
          {/* Update info - CI 스타일 */}
          <div className="mt-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full text-sm text-gray-400 border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              최근 업데이트: 2024년 12월
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero