import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Tag, ArrowRight, Search, Filter } from 'lucide-react'
import { posts } from '../data/posts'

const PostsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // 카테고리 목록 추출
  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))]

  // 필터링된 포스트
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 ci-gradient-text">
            AI News Posts
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            거시적 관점에서 AI 기술과 시장 동향을 분석한 전문 포스트들을 확인하세요.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="ci-card p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="포스트 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ci-input w-full pl-10 pr-4 py-3"
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="ci-input w-full pl-10 pr-4 py-3 appearance-none cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? '모든 카테고리' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
            총 <span className="text-blue-400 font-semibold">{filteredPosts.length}</span>개의 포스트를 찾았습니다.
          </p>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link 
                key={post.slug}
                to={`/post/${post.slug}`}
                className="group block"
              >
                <article className="ci-card p-6 h-full">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="ci-badge">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-400">
              다른 검색어나 카테고리를 시도해보세요.
            </p>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link 
            to="/" 
            className="ci-button inline-flex items-center px-6 py-3"
          >
            홈으로 돌아가기
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostsPage 