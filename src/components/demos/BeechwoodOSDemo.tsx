'use client';

import { useState } from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';

const aiAgents = [
  { name: 'Sarah', role: 'Sales Agent', avatar: '💼', color: 'text-purple-400' },
  { name: 'Marcus', role: 'Marketing Agent', avatar: '📊', color: 'text-cyan-400' },
  { name: 'Dana', role: 'Data Analyst', avatar: '📈', color: 'text-yellow-400' },
];

export default function BeechwoodOSDemo() {
  const [selectedAgent, setSelectedAgent] = useState(0);
  const [messages, setMessages] = useState([
    { from: 'agent', text: `Hi! I'm ${aiAgents[0].name}, your AI ${aiAgents[0].role}. How can I help you today?` }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { from: 'user', text: input }]);
    
    setTimeout(() => {
      const responses = [
        "I'd be happy to help with that! Let me analyze the data...",
        "Great question! Based on my analysis, I recommend...",
        "I've processed your request. Here's what I found...",
      ];
      setMessages(prev => [...prev, { 
        from: 'agent', 
        text: responses[Math.floor(Math.random() * responses.length)]
      }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-black text-white mb-2">AI Employee Dashboard</h3>
          <p className="text-gray-400">Autonomous agents working for your business</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {aiAgents.map((agent, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedAgent(index);
                setMessages([{ from: 'agent', text: `Hi! I'm ${agent.name}, your AI ${agent.role}. How can I help you today?` }]);
              }}
              className={`bg-[#0a0a1f]/50 backdrop-blur-sm border rounded-2xl p-6 text-left transition-all ${
                selectedAgent === index ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-purple-500/30 hover:border-purple-500/40'
              }`}
            >
              <div className="text-4xl mb-3">{agent.avatar}</div>
              <h4 className={`font-bold ${agent.color} mb-1`}>{agent.name}</h4>
              <p className="text-gray-400 text-sm">{agent.role}</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-bold">Active</span>
              </div>
            </button>
          ))}
        </div>

        {/* Chat Interface */}
        <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="border-b border-purple-500/20 p-4 flex items-center gap-3">
            <div className="text-3xl">{aiAgents[selectedAgent].avatar}</div>
            <div>
              <div className={`font-bold ${aiAgents[selectedAgent].color}`}>
                {aiAgents[selectedAgent].name}
              </div>
              <div className="text-gray-400 text-sm">{aiAgents[selectedAgent].role}</div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md px-4 py-3 rounded-2xl ${
                  msg.from === 'user' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-[#0a0a1f] border border-purple-500/30 text-gray-300'
                }`}>
                  {msg.from === 'agent' && (
                    <div className="flex items-center gap-2 mb-1">
                      <Bot className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-purple-400 font-bold">AI Agent</span>
                    </div>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-purple-500/20 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask your AI agent anything..."
                className="flex-1 px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={sendMessage}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
