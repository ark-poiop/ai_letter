import Hero from '../components/Hero'
import PostList from '../components/PostList'
import NewsletterSection from '../components/NewsletterSection'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PostList />
      <NewsletterSection />
    </div>
  )
}

export default HomePage 