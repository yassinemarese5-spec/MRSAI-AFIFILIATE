import React from 'react';
import { Search, ChevronRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Blog() {
  return (
    <div className="pt-28 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 pt-8">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                <span className="text-blue-600 font-medium">AI Video</span>
                <span>•</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 5 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
                The Future of Video Production: How AI is Changing the Game
              </h1>

              <div className="prose prose-lg prose-blue max-w-none text-gray-600">
                <p className="text-xl leading-relaxed mb-8">
                  Video creation has always been a time-intensive, highly technical process. But in 2026, generative AI tools have matured to a point where a single creator can produce studio-quality content from their bedroom.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Text-to-Video is Finally Usable</h2>
                <p className="mb-6">
                  Remember those early, completely abstract AI-generated videos? Those days are long gone. Platforms like Runway now offer cinematic-quality generation that maintains temporal consistency—meaning characters don't morph unexpectedly from frame to frame.
                </p>
                <p className="mb-6">
                  This opens the doors for indie filmmakers, marketers, and educators who previously lacked the budget for heavy CGI or dedicated camera crews.
                </p>

                <div className="my-10 p-8 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
                  <p className="text-gray-900 italic font-medium m-0">
                    "AI won't replace creators; creators using AI will replace creators not using AI."
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Magic of AI Avatars</h2>
                <p className="mb-6">
                  Tools like HeyGen have revolutionized how we think about presenting video content. By uploading a small sample of footage, you can create a hyper-realistic digital twin. Need to localize a video into 10 different languages? Done in minutes.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Where Do We Go From Here?</h2>
                <p className="mb-6">
                  While we're still in the early innings, the trajectory is clear. As compute becomes cheaper and models become more efficient, the barrier to high-end video production will drop to zero. The new currency won't be production value—it will be taste and storytelling.
                </p>
              </div>
            </motion.article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            
            {/* Search Widget */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-display">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-display">Categories</h3>
              <ul className="space-y-2">
                {['AI Video', 'Audio Editing', 'Marketing Tips', 'Productivity', 'Industry News'].map((category) => (
                  <li key={category}>
                    <a href="#" className="flex items-center justify-between py-2 text-gray-600 hover:text-blue-600 transition-colors group">
                      <span>{category}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-display">Recent Posts</h3>
              <div className="space-y-6">
                {[
                  { title: "5 AI Video Editors That Let You Skip the Timeline", date: "June 2, 2026" },
                  { title: "How to Clone Your Voice with ElevenLabs", date: "May 28, 2026" },
                  { title: "The Best Prompts for B-Roll Generation", date: "May 24, 2026" }
                ].map((post, i) => (
                  <div key={i} className="group cursor-pointer">
                    <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-1 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}
