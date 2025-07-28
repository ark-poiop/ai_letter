import { Brain, Github, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand - CI 로고 스타일 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold ci-gradient-text">
                  AI NEWS INSIGHT
                </h3>
                <p className="text-xs text-gray-400 font-light">Macro Perspective</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              거시적 관점에서 AI 기술과 트렌드를 분석하는 전문 플랫폼입니다. 
              질문이나 피드백은 언제든 환영합니다.
            </p>
          </div>

          {/* Links - CI 스타일 */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/ark-poiop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
            <a 
              href="mailto:contact@ai-news-insight.com"
              className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              <Mail className="w-4 h-4 mr-2" />
              이메일
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 AI NEWS INSIGHT. 모든 분석은 전문적 견해입니다.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer