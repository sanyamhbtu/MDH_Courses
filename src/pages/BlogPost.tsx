import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Tag, Share2, Heart, MessageCircle } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    title: 'The Complete Guide to SEO in 2025: Strategies That Actually Work',
    slug: 'complete-seo-guide-2025',
    content: `
      <p>Search Engine Optimization (SEO) continues to evolve rapidly, and staying ahead of the curve is crucial for digital marketing success. In this comprehensive guide, we'll explore the most effective SEO strategies for 2025 that will help your website rank higher and drive more organic traffic.</p>

      <h2>Understanding the Current SEO Landscape</h2>
      <p>The SEO landscape in 2025 is significantly different from what it was just a few years ago. Google's algorithms have become more sophisticated, user experience signals carry more weight, and artificial intelligence plays an increasingly important role in search rankings.</p>

      <h3>Key Changes in 2025:</h3>
      <ul>
        <li>AI-powered content evaluation</li>
        <li>Enhanced focus on user experience signals</li>
        <li>Voice search optimization becomes mainstream</li>
        <li>Mobile-first indexing is now the standard</li>
        <li>Core Web Vitals remain crucial ranking factors</li>
      </ul>

      <h2>Technical SEO Fundamentals</h2>
      <p>Technical SEO forms the foundation of any successful SEO strategy. Without proper technical optimization, even the best content won't rank well.</p>

      <h3>Essential Technical Elements:</h3>
      <ol>
        <li><strong>Site Speed Optimization:</strong> Ensure your website loads in under 3 seconds on all devices.</li>
        <li><strong>Mobile Responsiveness:</strong> Your site must provide an excellent experience on mobile devices.</li>
        <li><strong>SSL Certificate:</strong> HTTPS is now a requirement, not an option.</li>
        <li><strong>XML Sitemaps:</strong> Help search engines understand your site structure.</li>
        <li><strong>Robots.txt:</strong> Guide search engine crawlers effectively.</li>
      </ol>

      <h2>Content Strategy for SEO Success</h2>
      <p>Content remains king in SEO, but the approach to content creation has evolved. It's no longer about keyword stuffing or creating content just for search engines.</p>

      <h3>Modern Content Approach:</h3>
      <p>Focus on creating comprehensive, valuable content that genuinely helps your audience. Google's algorithms can now understand context and user intent better than ever before.</p>

      <blockquote>
        "The best SEO strategy is to create content so good that people naturally want to share and link to it."
      </blockquote>

      <h2>Link Building in 2025</h2>
      <p>Link building strategies have become more sophisticated and relationship-focused. The emphasis is now on earning high-quality links through valuable content and genuine relationships.</p>

      <h3>Effective Link Building Strategies:</h3>
      <ul>
        <li>Digital PR and thought leadership</li>
        <li>Resource page link building</li>
        <li>Broken link building</li>
        <li>Guest posting on relevant, high-authority sites</li>
        <li>Creating linkable assets (tools, research, infographics)</li>
      </ul>

      <h2>Local SEO Optimization</h2>
      <p>For businesses serving local markets, local SEO is more important than ever. Google's local algorithm updates have made it crucial to optimize for local search.</p>

      <h2>Measuring SEO Success</h2>
      <p>Tracking the right metrics is essential for understanding the effectiveness of your SEO efforts. Focus on metrics that align with your business goals.</p>

      <h3>Key SEO Metrics to Track:</h3>
      <ul>
        <li>Organic traffic growth</li>
        <li>Keyword ranking improvements</li>
        <li>Click-through rates from search results</li>
        <li>Conversion rates from organic traffic</li>
        <li>Page load speed and Core Web Vitals</li>
      </ul>

      <h2>Conclusion</h2>
      <p>SEO in 2025 requires a holistic approach that combines technical excellence, valuable content, and genuine relationship building. By focusing on user experience and providing real value, you'll be well-positioned to succeed in the evolving search landscape.</p>

      <p>Remember, SEO is a long-term strategy that requires patience and consistency. Start implementing these strategies today, and you'll see improvements in your search rankings and organic traffic over time.</p>
    `,
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    category: 'SEO',
    author: 'Dr. Rajesh Kumar',
    authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    date: '2025-01-15',
    readTime: '8 min read',
    tags: ['SEO', 'Google', 'Rankings', 'Content Strategy', 'Digital Marketing'],
    likes: 142,
    comments: 28
  };

  const relatedPosts = [
    {
      title: 'Social Media Marketing Trends That Will Dominate 2025',
      slug: 'social-media-trends-2025',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      readTime: '6 min read'
    },
    {
      title: 'How to Optimize Google Ads for Maximum ROI',
      slug: 'optimize-google-ads-roi',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      readTime: '10 min read'
    },
    {
      title: 'Email Marketing Automation: A Step-by-Step Guide',
      slug: 'email-marketing-automation-guide',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      readTime: '7 min read'
    }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        url: window.location.href,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="pt-20">
      {/* Back to Blog */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category and Reading Time */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {blogPost.category}
            </span>
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{blogPost.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Author and Date */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <img
                src={blogPost.authorImage}
                alt={blogPost.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900">{blogPost.author}</div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(blogPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                <Heart className="h-5 w-5" />
                <span>{blogPost.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span>{blogPost.comments}</span>
              </button>
              <button 
                onClick={handleShare}
                className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors"
              >
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
            style={{
              '--tw-prose-body': '#374151',
              '--tw-prose-headings': '#111827',
              '--tw-prose-lead': '#4B5563',
              '--tw-prose-links': '#2563EB',
              '--tw-prose-bold': '#111827',
              '--tw-prose-counters': '#6B7280',
              '--tw-prose-bullets': '#D1D5DB',
              '--tw-prose-hr': '#E5E7EB',
              '--tw-prose-quotes': '#111827',
              '--tw-prose-quote-borders': '#E5E7EB',
              '--tw-prose-captions': '#6B7280',
              '--tw-prose-code': '#111827',
              '--tw-prose-pre-code': '#E5E7EB',
              '--tw-prose-pre-bg': '#1F2937',
              '--tw-prose-th-borders': '#D1D5DB',
              '--tw-prose-td-borders': '#E5E7EB',
            } as React.CSSProperties}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-2 mb-4">
              <Tag className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start space-x-6">
              <img
                src={blogPost.authorImage}
                alt={blogPost.author}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">About {blogPost.author}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dr. Rajesh Kumar is a Senior Digital Marketing Strategist and former Google Marketing Lead with over 12 years of experience. 
                  He specializes in data-driven marketing strategies and has helped scale digital campaigns for Fortune 500 companies. 
                  He's passionate about sharing knowledge and has mentored over 500 students in their digital marketing journey.
                </p>
                <div className="flex space-x-4">
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    View Profile
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    More Articles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Insights</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter and never miss out on valuable digital marketing tips and strategies
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

export default BlogPost;