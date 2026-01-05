'use client';

import { useState, useEffect } from 'react';
import { Eye, Users, TrendingUp, Activity } from 'lucide-react';

export default function VisualCounterDemo() {
  const [count, setCount] = useState(47);
  const [todayTotal, setTodayTotal] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly change count
      const change = Math.random() > 0.5 ? 1 : -1;
      setCount(prev => Math.max(0, Math.min(150, prev + change)));
      setTodayTotal(prev => prev + (change > 0 ? 1 : 0));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-black text-white mb-2">Live People Counting</h3>
          <p className="text-gray-400">AI-powered foot traffic analytics in real-time</p>
        </div>

        {/* Main Counter */}
        <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 mb-8 text-center">
          <Eye className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
            {count}
          </div>
          <p className="text-xl text-gray-400">People Currently in Store</p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm text-purple-400 font-bold">Live</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
            <Users className="w-8 h-8 text-cyan-400 mb-3" />
            <div className="text-3xl font-black text-white mb-1">{todayTotal}</div>
            <div className="text-sm text-gray-400">Today's Total</div>
          </div>
          
          <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
            <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
            <div className="text-3xl font-black text-white mb-1">+23%</div>
            <div className="text-sm text-gray-400">vs. Yesterday</div>
          </div>
          
          <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
            <Activity className="w-8 h-8 text-purple-400 mb-3" />
            <div className="text-3xl font-black text-white mb-1">95.3%</div>
            <div className="text-sm text-gray-400">Accuracy</div>
          </div>
        </div>

        {/* Heatmap Preview */}
        <div className="mt-8 bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-400" />
            Traffic Heatmap
          </h4>
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 32 }).map((_, i) => {
              const intensity = Math.random();
              return (
                <div
                  key={i}
                  className="aspect-square rounded"
                  style={{
                    backgroundColor: intensity > 0.7 ? '#a855f7' : intensity > 0.4 ? '#8b5cf6' : intensity > 0.2 ? '#7c3aed' : '#1e1b4b'
                  }}
                />
              );
            })}
          </div>
          <p className="text-gray-500 text-xs mt-4">High traffic zones highlighted in purple</p>
        </div>
      </div>
    </div>
  );
}

