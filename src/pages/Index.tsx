import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecentPosts from "@/components/FeaturedArticles";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <RecentPosts />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
