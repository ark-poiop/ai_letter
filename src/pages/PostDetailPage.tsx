import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { posts } from '../data/posts'

const PostDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">포스트를 찾을 수 없습니다</h1>
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button - CI 스타일 */}
      <Link 
        to="/" 
        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        목록으로 돌아가기
      </Link>

      {/* Post Header - CI 타이포그래피 */}
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="ci-badge">
              <Tag className="w-3 h-3 mr-1" />
              {post.category}
            </span>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
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
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Post Content - CI 카드 스타일 */}
        <div className="ci-card p-8">
          <div className="text-gray-300 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Related Posts - CI 스타일 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">관련 포스트</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts
              .filter(p => p.slug !== slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  to={`/post/${relatedPost.slug}`}
                  className="block group"
                >
                  <div className="ci-card p-6">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default PostDetailPage 