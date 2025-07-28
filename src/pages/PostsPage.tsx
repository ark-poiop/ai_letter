import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Tag, ArrowRight, Search, Filter, Loader2 } from 'lucide-react'
import { getAllPosts, getAllCategories, searchPosts } from '../services/postService'
import { Post } from '../lib/markdown'

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 포스트 데이터 로드
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [postsData, categoriesData] = await Promise.all([
          getAllPosts(),
          getAllCategories()
        ])
        setPosts(postsData)
        setCategories(['all', ...categoriesData])
      } catch (err) {
        setError('포스트를 불러오는 중 오류가 발생했습니다.')
        console.error('Error loading posts:', err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // 검색 기능
  const [searchResults, setSearchResults] = useState<Post[]>([])
  const [searchLoading, setSearchLoading] = useState(false)

  useEffect(() => {
    const performSearch = async () => {
      if (searchTerm.trim()) {
        setSearchLoading(true)
        try {
          const results = await searchPosts(searchTerm)
          setSearchResults(results)
        } catch (err) {
          console.error('Search error:', err)
        } finally {
          setSearchLoading(false)
        }
      } else {
        setSearchResults([])
      }
    }

    const debounceTimer = setTimeout(performSearch, 300)
    return () => clearTimeout(debounceTimer)
  }, [searchTerm])

  // 필터링된 포스트
  const filteredPosts = searchTerm.trim() 
    ? searchResults.filter(post => 
        selectedCategory === 'all' || post.frontmatter.category === selectedCategory
      )
    : posts.filter(post => 
        selectedCategory === 'all' || post.frontmatter.category === selectedCategory
      )

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">포스트를 불러오는 중...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="ci-button"
          >
            다시 시도
          </button>
        </div>
      </div>
    )
  }

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
              {searchLoading && (
                <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 animate-spin" />
              )}
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
            {searchTerm.trim() && (
              <span className="ml-2 text-gray-500">
                (검색어: "{searchTerm}")
              </span>
            )}
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
                      {post.frontmatter.category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                    {post.frontmatter.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {post.frontmatter.excerpt}
                  </p>

                  {/* Tags */}
                  {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.frontmatter.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.frontmatter.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.frontmatter.readTime}
                      </div>
                    </div>
                    {post.frontmatter.author && (
                      <div className="text-xs text-gray-500">
                        by {post.frontmatter.author}
                      </div>
                    )}
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
              {searchTerm.trim() 
                ? `"${searchTerm}"에 대한 검색 결과가 없습니다.`
                : '다른 검색어나 카테고리를 시도해보세요.'
              }
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