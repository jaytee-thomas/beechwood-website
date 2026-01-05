'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';

const mockPosts = [
  {
    user: 'TitansFan615',
    avatar: '🏈',
    content: 'What a game! Titans defense was ON FIRE today! 🔥',
    team: 'Tennessee Titans',
    likes: 234,
    comments: 45,
    time: '2m ago'
  },
  {
    user: 'PredsFanatic',
    avatar: '🏒',
    content: 'Saros with another shutout! Best goalie in the league right now.',
    team: 'Nashville Predators',
    likes: 189,
    comments: 32,
    time: '15m ago'
  },
  {
    user: 'VandyHoops',
    avatar: '🏀',
    content: 'Big win tonight! Tournament bound! #AnchorDown',
    team: 'Vanderbilt Basketball',
    likes: 156,
    comments: 28,
    time: '1h ago'
  }
];

export default function I65SportsDemo() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (index: number) => {
    if (likedPosts.includes(index)) {
      setLikedPosts(likedPosts.filter(i => i !== index));
    } else {
      setLikedPosts([...likedPosts, index]);
    }
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-black text-white mb-2">Social Feed</h3>
          <p className="text-gray-400">Connect with fans. Share the excitement.</p>
        </div>

        {mockPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{post.avatar}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-white">{post.user}</span>
                  <span className="text-gray-500 text-sm">· {post.time}</span>
                </div>
                <div className="text-sm text-cyan-400 mb-3">{post.team}</div>
                <p className="text-gray-300 mb-4">{post.content}</p>
                
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => toggleLike(index)}
                    className={`flex items-center gap-2 transition-colors ${
                      likedPosts.includes(index) ? 'text-red-500' : 'text-gray-500 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${likedPosts.includes(index) ? 'fill-current' : ''}`} />
                    <span className="text-sm font-bold">
                      {post.likes + (likedPosts.includes(index) ? 1 : 0)}
                    </span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-bold">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-bold">You're all caught up!</span>
          </div>
        </div>
      </div>
    </div>
  );
}



