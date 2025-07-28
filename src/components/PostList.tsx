import { Link } from 'react-router-dom'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { posts } from '../data/posts'

const PostList = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - CI 타이포그래피 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            최신 AI 뉴스 분석
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            거시적 관점에서 AI 기술과 시장 동향을 분석합니다
          </p>
        </div>

        {/* Posts Grid - CI 카드 스타일 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <Link 
              key={post.slug}
              to={`/post/${post.slug}`}
              className="group block"
            >
              <article className="ci-card p-6">
                {/* Category Badge - CI 배지 스타일 */}
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
                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
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

        {/* View All Button - CI 버튼 스타일 */}
        <div className="text-center mt-12">
          <Link to="/posts">
            <div className="ci-button inline-flex items-center px-6 py-3">
              모든 포스트 보기
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PostList 