import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowLeft, Calendar, Clock, Tag, Loader2 } from 'lucide-react'
import { getPostBySlug, getRecentPosts } from '../services/postService'
import { Post } from '../lib/markdown'

const PostDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return
      
      try {
        setLoading(true)
        const [postData, recentPostsData] = await Promise.all([
          getPostBySlug(slug),
          getRecentPosts(3)
        ])
        
        if (postData) {
          setPost(postData)
          // 현재 포스트를 제외한 관련 포스트
          setRelatedPosts(recentPostsData.filter(p => p.slug !== slug))
        } else {
          setError('포스트를 찾을 수 없습니다.')
        }
      } catch (err) {
        setError('포스트를 불러오는 중 오류가 발생했습니다.')
        console.error('Error loading post:', err)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">포스트를 불러오는 중...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            {error || '포스트를 찾을 수 없습니다'}
          </h1>
          <Link 
            to="/posts" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            포스트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button - CI 스타일 */}
      <Link 
        to="/posts" 
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
              {post.frontmatter.category}
            </span>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.frontmatter.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.frontmatter.readTime}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.frontmatter.title}
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            {post.frontmatter.excerpt}
          </p>

          {/* Author */}
          {post.frontmatter.author && (
            <p className="text-gray-400 text-sm">
              작성자: {post.frontmatter.author}
            </p>
          )}

          {/* Tags */}
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.frontmatter.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Post Content - CI 카드 스타일 */}
        <div className="ci-card p-8">
          <div 
            className="text-gray-300 leading-relaxed prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            style={{
              '--tw-prose-body': 'rgb(209 213 219)',
              '--tw-prose-headings': 'rgb(255 255 255)',
              '--tw-prose-links': 'rgb(59 130 246)',
              '--tw-prose-bold': 'rgb(255 255 255)',
              '--tw-prose-counters': 'rgb(156 163 175)',
              '--tw-prose-bullets': 'rgb(156 163 175)',
              '--tw-prose-hr': 'rgb(75 85 99)',
              '--tw-prose-quotes': 'rgb(156 163 175)',
              '--tw-prose-quote-borders': 'rgb(75 85 99)',
              '--tw-prose-captions': 'rgb(156 163 175)',
              '--tw-prose-code': 'rgb(255 255 255)',
              '--tw-prose-pre-code': 'rgb(209 213 219)',
              '--tw-prose-pre-bg': 'rgb(17 24 39)',
              '--tw-prose-th-borders': 'rgb(75 85 99)',
              '--tw-prose-td-borders': 'rgb(55 65 81)',
            } as React.CSSProperties}
          />
        </div>

        {/* Related Posts - CI 스타일 */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">관련 포스트</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  to={`/post/${relatedPost.slug}`}
                  className="block group"
                >
                  <div className="ci-card p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="ci-badge text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {relatedPost.frontmatter.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                      {relatedPost.frontmatter.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                      {relatedPost.frontmatter.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedPost.frontmatter.date}</span>
                      <span>{relatedPost.frontmatter.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}

export default PostDetailPage 