import { Mail, TrendingUp, CheckCircle } from 'lucide-react'

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="ci-card p-8 md:p-12">
            <div className="text-center">
              {/* Icon - CI 스타일 */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg ci-glow">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title - CI 타이포그래피 */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI 트렌드 인사이트 받기
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                최신 AI 뉴스와 시장 분석을 이메일로 받아보세요. 
                거시적 관점의 전문적인 분석을 제공합니다.
              </p>

              {/* Features - CI 스타일 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>주간 업데이트</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>전문적 분석</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>무료 구독</span>
                </div>
              </div>

              {/* Email Form - CI 입력 스타일 */}
              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="이메일 주소를 입력하세요"
                      className="ci-input w-full pl-10 pr-4 py-3"
                      disabled
                    />
                  </div>
                  <button 
                    className="ci-button px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled
                  >
                    구독
                  </button>
                </div>
              </div>

              {/* Note */}
              <p className="text-sm text-gray-400 mt-4">
                현재 뉴스레터 기능은 개발 중입니다. 곧 서비스를 시작할 예정입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection