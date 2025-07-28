import { Link } from 'react-router-dom'
import { Brain, Github } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - CI 로고 스타일 */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 ci-glow">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 w-8 h-8 rounded-lg bg-blue-500/20 blur-sm animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold ci-gradient-text">
                AI NEWS INSIGHT
              </h1>
              <p className="text-xs text-gray-400 font-light">Macro Perspective</p>
            </div>
          </Link>

          {/* Navigation - CI 색상 팔레트 */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link to="/posts" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
              Posts
            </Link>
            <Link to="/contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* GitHub Link - CI 스타일 */}
          <div className="flex items-center">
            <a 
              href="https://github.com/ark-poiop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors rounded-lg hover:bg-white/5"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header