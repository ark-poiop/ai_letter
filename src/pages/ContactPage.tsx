import { Mail, MessageSquare, Github, MapPin, Clock, Send } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 ci-gradient-text">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI NEWS INSIGHT에 대한 문의사항이나 피드백이 있으시면 언제든 연락주세요. 
            여러분의 의견은 우리에게 큰 도움이 됩니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="ci-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6">메시지 보내기</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    className="ci-input w-full px-4 py-3"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    className="ci-input w-full px-4 py-3"
                    disabled
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  제목
                </label>
                <input
                  type="text"
                  placeholder="제목을 입력하세요"
                  className="ci-input w-full px-4 py-3"
                  disabled
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  메시지
                </label>
                <textarea
                  placeholder="메시지를 입력하세요"
                  rows={6}
                  className="ci-input w-full px-4 py-3 resize-none"
                  disabled
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="ci-button w-full flex items-center justify-center py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                <Send className="w-4 h-4 mr-2" />
                메시지 보내기
              </button>
            </form>
            
            <p className="text-sm text-gray-400 mt-4 text-center">
              현재 연락처 기능은 개발 중입니다. 이메일로 직접 연락해주세요.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="ci-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">연락 방법</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">이메일</h3>
                    <p className="text-gray-400 mb-2">contact@ai-news-insight.com</p>
                    <p className="text-sm text-gray-500">
                      일반적인 문의사항이나 피드백을 보내주세요.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">피드백</h3>
                    <p className="text-gray-400 mb-2">기능 개선 제안</p>
                    <p className="text-sm text-gray-500">
                      사이트 개선이나 새로운 기능 제안을 해주세요.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Github className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">GitHub</h3>
                    <p className="text-gray-400 mb-2">github.com/ark-poiop</p>
                    <p className="text-sm text-gray-500">
                      기술적 이슈나 기여를 원하시면 GitHub를 방문해주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="ci-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">응답 시간</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">평일</p>
                    <p className="text-gray-400">09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">주말</p>
                    <p className="text-gray-400">10:00 - 16:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">응답 시간</p>
                    <p className="text-gray-400">24시간 이내</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="ci-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">자주 묻는 질문</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-medium mb-2">포스트 업데이트는 언제 하나요?</h3>
                  <p className="text-gray-400 text-sm">
                    매주 새로운 AI 뉴스와 분석을 업데이트합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">기고나 협업은 가능한가요?</h3>
                  <p className="text-gray-400 text-sm">
                    네, AI 관련 전문가들의 기고를 환영합니다. 이메일로 문의해주세요.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">뉴스레터 구독은 언제 시작되나요?</h3>
                  <p className="text-gray-400 text-sm">
                    현재 개발 중이며, 2024년 말에 서비스를 시작할 예정입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 