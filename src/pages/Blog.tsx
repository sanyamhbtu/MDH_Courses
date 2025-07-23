import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'seo', name: 'SEO', count: 3 },
    { id: 'social-media', name: 'Social Media', count: 4 },
    { id: 'ppc', name: 'PPC & Ads', count: 2 },
    { id: 'analytics', name: 'Analytics', count: 2 },
    { id: 'trends', name: 'Industry Trends', count: 1 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Complete Guide to SEO in 2025: Strategies That Actually Work',
      slug: 'complete-seo-guide-2025',
      excerpt: 'Discover the latest SEO strategies and techniques that will help your website rank higher in search results this year.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'seo',
      author: 'Dr. Rajesh Kumar',
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['SEO', 'Google', 'Rankings', 'Content Strategy']
    },
    {
      id: 2,
      title: 'Social Media Marketing Trends That Will Dominate 2025',
      slug: 'social-media-trends-2025',
      excerpt: 'Stay ahead of the curve with the latest social media marketing trends and strategies for maximum engagement.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'social-media',
      author: 'Sarah Williams',
      date: '2025-01-12',
      readTime: '6 min read',
      tags: ['Social Media', 'Instagram', 'Facebook', 'Trends']
    },
    {
      id: 3,
      title: 'How to Optimize Google Ads for Maximum ROI',
      slug: 'optimize-google-ads-roi',
      excerpt: 'Learn advanced Google Ads optimization techniques to maximize your return on investment and reduce wasted spend.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'ppc',
      author: 'Amit Sharma',
      date: '2025-01-10',
      readTime: '10 min read',
      tags: ['Google Ads', 'PPC', 'ROI', 'Optimization']
    },
    {
      id: 4,
      title: 'Email Marketing Automation: A Step-by-Step Guide',
      slug: 'email-marketing-automation-guide',
      excerpt: 'Master email marketing automation with our comprehensive guide covering setup, segmentation, and optimization.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'email',
      author: 'Michael Chen',
      date: '2025-01-08',
      readTime: '7 min read',
      tags: ['Email Marketing', 'Automation', 'Segmentation', 'Conversion']
    },
    {
      id: 5,
      title: 'Understanding Google Analytics 4: A Complete Tutorial',
      slug: 'google-analytics-4-tutorial',
      excerpt: 'Get up to speed with Google Analytics 4 and learn how to track and analyze your website performance effectively.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'analytics',
      author: 'Neha Gupta',
      date: '2025-01-05',
      readTime: '12 min read',
      tags: ['Analytics', 'Google Analytics', 'Data', 'Tracking']
    },
    {
      id: 6,
      title: 'Content Marketing Strategies for B2B Success',
      slug: 'b2b-content-marketing-strategies',
      excerpt: 'Discover proven content marketing strategies specifically designed for B2B companies to generate leads and drive growth.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'content',
      author: 'Priya Patel',
      date: '2025-01-03',
      readTime: '9 min read',
      tags: ['Content Marketing', 'B2B', 'Lead Generation', 'Strategy']
    },
    {
      id: 7,
      title: 'Instagram Reels vs TikTok: Which Platform Should You Choose?',
      slug: 'instagram-reels-vs-tiktok',
      excerpt: 'Compare Instagram Reels and TikTok to determine which platform is best for your brand and marketing goals.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'social-media',
      author: 'Sarah Williams',
      date: '2025-01-01',
      readTime: '5 min read',
      tags: ['Instagram', 'TikTok', 'Short-form Video', 'Social Media']
    },
    {
      id: 8,
      title: 'Local SEO: How to Dominate Local Search Results',
      slug: 'local-seo-guide',
      excerpt: 'Master local SEO with our comprehensive guide covering Google My Business, local citations, and ranking factors.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'seo',
      author: 'Dr. Rajesh Kumar',
      date: '2024-12-28',
      readTime: '11 min read',
      tags: ['Local SEO', 'Google My Business', 'Local Search', 'Citations']
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Digital Marketing Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, strategies, and insights from the world of digital marketing
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <Link to={`/blog/${featuredPost.slug}`} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(c => c.id === featuredPost.category)?.name}
                  </span>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {new Date(featuredPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                  
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 shadow-lg">
                      <span className="text-sm font-medium text-gray-700">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium flex items-center space-x-1"
                        >
                          <Tag className="h-3 w-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                        Read Article
                      </span>
                      <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No articles found matching your criteria.</div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and get the latest digital marketing insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;