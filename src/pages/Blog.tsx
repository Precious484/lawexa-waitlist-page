import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
const Blog = () => {
  useEffect(() => {
    document.title = 'Blog - Lawexa | Legal Insights & Updates';
  }, []);
  const featuredPost = {
    title: 'Understanding the New Companies and Allied Matters Act 2020: What Nigerian Businesses Need to Know',
    excerpt: 'A comprehensive guide to the key changes in Nigeria\'s corporate law landscape and how they affect your business operations.',
    author: 'Adebayo Ogundimu',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Corporate Law',
    image: 'https://placehold.co/800x400/374151/FFD700?text=Featured+Article',
    slug: 'cama-2020-guide'
  };
  const blogPosts = [{
    title: 'AI in Legal Practice: How Nigerian Law Firms Can Leverage Technology',
    excerpt: 'Exploring the opportunities and challenges of integrating artificial intelligence into traditional legal practice in Nigeria.',
    author: 'Kemi Adeyemi',
    date: 'March 12, 2024',
    readTime: '6 min read',
    category: 'Legal Tech',
    image: 'https://placehold.co/400x250/374151/FFD700?text=AI+Legal',
    slug: 'ai-legal-practice'
  }, {
    title: 'Student Guide: How to Excel in Constitutional Law',
    excerpt: 'Essential tips and strategies for mastering constitutional law concepts and acing your examinations.',
    author: 'Chioma Okwu',
    date: 'March 10, 2024',
    readTime: '5 min read',
    category: 'Legal Education',
    image: 'https://placehold.co/400x250/374151/FFD700?text=Constitutional+Law',
    slug: 'constitutional-law-guide'
  }, {
    title: 'Contract Essentials: What Every Nigerian Entrepreneur Should Know',
    excerpt: 'Key contractual provisions that can protect your business and avoid costly legal disputes.',
    author: 'Tunde Alabi',
    date: 'March 8, 2024',
    readTime: '7 min read',
    category: 'Business Law',
    image: 'https://placehold.co/400x250/374151/FFD700?text=Contracts',
    slug: 'contract-essentials'
  }, {
    title: 'Intellectual Property Protection in Nigeria: A Complete Guide',
    excerpt: 'Understanding trademarks, patents, and copyrights to safeguard your intellectual assets.',
    author: 'Adebayo Ogundimu',
    date: 'March 5, 2024',
    readTime: '9 min read',
    category: 'IP Law',
    image: 'https://placehold.co/400x250/374151/FFD700?text=IP+Law',
    slug: 'ip-protection-guide'
  }, {
    title: 'Legal Tech Trends in 2024: What to Expect',
    excerpt: 'The latest innovations shaping the future of legal services across Africa.',
    author: 'Kemi Adeyemi',
    date: 'March 3, 2024',
    readTime: '4 min read',
    category: 'Legal Tech',
    image: 'https://placehold.co/400x250/374151/FFD700?text=Legal+Trends',
    slug: 'legal-tech-trends-2024'
  }, {
    title: 'Employment Law Updates: Recent Changes in Nigerian Labor Laws',
    excerpt: 'Stay updated with the latest developments in employment law and their impact on employers and employees.',
    author: 'Chioma Okwu',
    date: 'March 1, 2024',
    readTime: '6 min read',
    category: 'Employment Law',
    image: 'https://placehold.co/400x250/374151/FFD700?text=Employment+Law',
    slug: 'employment-law-updates'
  }];
  const categories = ['All Posts', 'Corporate Law', 'Legal Tech', 'Legal Education', 'Business Law', 'IP Law', 'Employment Law'];
  return <div className="min-h-screen bg-background animate-fade-in">
      <div className="bg-black min-h-[64px] flex items-center">
        <Header />
      </div>
      
      <main>
        {/* Hero Section */}
        <section className="bg-lawexa-dark text-white py-20 bg-slate-950 pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
                Legal Insights & 
                <span className="text-lawexa-gold"> Expert Analysis</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Stay informed with the latest legal developments, expert commentary, and practical guides for navigating Nigerian law.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  Updated Weekly
                </div>
                <div className="flex items-center text-gray-300">
                  <User className="w-4 h-4 mr-2" />
                  Expert Authors
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-2" />
                  5-10 Min Reads
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Featured Article</h2>
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-medium hover:shadow-large transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-64 md:h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-lawexa-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-lawexa-gold rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-sm">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{featuredPost.author}</p>
                        <p className="text-gray-500 text-sm">{featuredPost.date}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-lawexa-gold font-semibold hover:gap-3 transition-all duration-300">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => <button key={index} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${index === 0 ? 'bg-lawexa-gold text-black' : 'bg-white text-gray-600 hover:bg-lawexa-gold hover:text-black border border-gray-200'}`}>
                  {category}
                </button>)}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-lawexa-gold rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-xs">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{post.author}</p>
                          <p className="text-gray-500 text-xs">{post.date}</p>
                        </div>
                      </div>
                      <button className="flex items-center gap-1 text-lawexa-gold font-semibold text-sm hover:gap-2 transition-all duration-300">
                        Read <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </article>)}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-lawexa-gold text-black px-8 py-3 rounded-xl font-bold hover:bg-lawexa-gold/90 hover:scale-105 transition-all duration-300 bg-yellow-400 hover:bg-yellow-300">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-lawexa-dark text-white bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">
              Stay Updated with Legal Insights
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-800">
              Get weekly legal updates, expert analysis, and practical guides delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-lawexa-gold" />
              <button className="bg-lawexa-gold text-black px-6 py-3 rounded-xl font-bold hover:bg-lawexa-gold/90 transition-colors duration-300 bg-yellow-400 hover:bg-yellow-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Blog;