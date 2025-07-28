import { Brain, TrendingUp, Users, Target, Award, Globe } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 ci-gradient-text">
            About AI NEWS INSIGHT
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            거시적 관점에서 AI 기술과 트렌드를 분석하는 전문 플랫폼입니다. 
            복잡한 AI 기술을 명확하고 깊이 있게 전달합니다.
          </p>
        </div>

        {/* Mission Section */}
        <div className="ci-card p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                AI 기술의 급속한 발전 속에서, 우리는 단순한 뉴스 전달을 넘어 
                거시적 관점에서 AI의 현재와 미래를 조망합니다.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                복잡한 기술적 내용을 누구나 이해할 수 있도록 명확하게 전달하고, 
                AI가 우리 사회에 미치는 영향을 깊이 있게 분석합니다.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ci-glow">
                <Target className="w-32 h-32 text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="ci-card p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">전문성</h3>
              <p className="text-gray-400">
                AI 분야의 전문 지식을 바탕으로 정확하고 신뢰할 수 있는 분석을 제공합니다.
              </p>
            </div>
            <div className="ci-card p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">거시적 관점</h3>
              <p className="text-gray-400">
                개별 기술을 넘어 AI가 사회와 산업에 미치는 전반적인 영향을 분석합니다.
              </p>
            </div>
            <div className="ci-card p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">접근성</h3>
              <p className="text-gray-400">
                복잡한 기술적 내용을 누구나 이해할 수 있도록 명확하게 전달합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="ci-card p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
              <div className="text-gray-400">전문 분석</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400">전문적 견해</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-400">최신 정보</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-gray-400">성장 가능성</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage 