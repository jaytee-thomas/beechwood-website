'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  MapPin, 
  Eye, 
  Clock, 
  Bot,
  ArrowRight,
  Menu,
  X,
  Cpu,
  Zap,
  Brain,
  Sparkles
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1f] relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a1f]/80 backdrop-blur-xl border-b border-purple-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">beechwood.ai</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-300 hover:text-purple-400 transition-colors">Products</a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden text-purple-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a1f]/95 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#products" className="block text-gray-300 hover:text-purple-400 transition-colors">Products</a>
              <a href="#about" className="block text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="block text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* AI REVOLUTION HERO SECTION */}
      <div className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 z-10">
        {/* Floating Hexagons */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-32 h-32 border-2 border-purple-500/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-20 w-40 h-40 border-2 border-cyan-500/30"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* AI Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">
                AI-Powered Revolution
              </span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>

            {/* Main Headline - BOLD & FUTURISTIC */}
            <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
              REVOLUTIONIZE
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-gradient">
                WITH AI
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI technology. From autonomous agents to intelligent systems—we build the future, today.
            </motion.p>

            {/* CTA Buttons - AGGRESSIVE STYLE */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="#products"
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 overflow-hidden"
              >
                <span className="relative z-10">Start Revolution</span>
                <Zap className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="#about"
                className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-lg font-bold text-lg transition-all border-2 border-purple-500/50 hover:border-purple-500 backdrop-blur-sm inline-flex items-center justify-center gap-3"
              >
                Explore Tech
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>

            {/* AI Stats - FUTURISTIC COUNTERS */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Cpu, value: "6", label: "AI Solutions", color: "purple" },
                { icon: Brain, value: "3", label: "Live Platforms", color: "cyan" },
                { icon: Zap, value: "∞", label: "Possibilities", color: "purple" },
                { icon: Bot, value: "24/7", label: "AI Support", color: "cyan" }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-[#0a0a1f]/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                    <stat.icon className={`w-8 h-8 mb-3 mx-auto ${stat.color === 'purple' ? 'text-purple-400' : 'text-cyan-400'}`} />
                    <div className={`text-4xl font-black mb-1 ${stat.color === 'purple' ? 'text-purple-400' : 'text-cyan-400'}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/10 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-5xl font-black text-white mb-4 text-center">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">ARSENAL</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
              Powerful solutions engineered for every scale
            </motion.p>

            {/* Consumer Apps */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold text-purple-400 mb-8 uppercase tracking-wider">Consumer</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Beacon */}
                <Link href="/products/beacon">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group bg-gradient-to-br from-[#0a0a1f] to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-red-500/50 transition-all cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Shield className="w-12 h-12 text-red-500 mb-4 relative z-10" />
                    <h4 className="text-2xl font-bold text-white mb-2 relative z-10">Beacon</h4>
                    <p className="text-gray-400 mb-4 relative z-10">Emergency response system. Instant safety at your command.</p>
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm border border-red-500/30">Emergency</span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm border border-red-500/30">iOS</span>
                    </div>
                    <div className="flex items-center text-red-400 group-hover:gap-2 transition-all relative z-10">
                      <span className="font-bold">DEPLOY →</span>
                    </div>
                  </motion.div>
                </Link>

                {/* i65sports */}
                <Link href="/products/i65sports">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group bg-gradient-to-br from-[#0a0a1f] to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Users className="w-12 h-12 text-cyan-400 mb-4 relative z-10" />
                    <h4 className="text-2xl font-bold text-white mb-2 relative z-10">i65sports</h4>
                    <p className="text-gray-400 mb-4 relative z-10">Social platform for sports fans. Connect and dominate.</p>
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm border border-cyan-400/30">Social</span>
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm border border-cyan-400/30">Sports</span>
                    </div>
                    <div className="flex items-center text-cyan-400 group-hover:gap-2 transition-all relative z-10">
                      <span className="font-bold">DEPLOY →</span>
                    </div>
                  </motion.div>
                </Link>

                {/* Where2GoNashville */}
                <Link href="/products/where2gonashville">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group bg-gradient-to-br from-[#0a0a1f] to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-yellow-500/50 transition-all cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/0 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <MapPin className="w-12 h-12 text-yellow-400 mb-4 relative z-10" />
                    <h4 className="text-2xl font-bold text-white mb-2 relative z-10">Where2GoNashville</h4>
                    <p className="text-gray-400 mb-4 relative z-10">Real-time event discovery. Never miss the action.</p>
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm border border-yellow-400/30">Events</span>
                      <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm border border-yellow-400/30">Live</span>
                    </div>
                    <div className="flex items-center text-yellow-400 group-hover:gap-2 transition-all relative z-10">
                      <span className="font-bold">DEPLOY →</span>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Business Solutions */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 uppercase tracking-wider">Business</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Visual Counter */}
                <Link href="/products/visual-counter">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group bg-gradient-to-br from-[#0a0a1f] to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Eye className="w-12 h-12 text-purple-400 mb-4 relative z-10" />
                    <h4 className="text-2xl font-bold text-white mb-2 relative z-10">Visual Counter</h4>
                    <p className="text-gray-400 mb-4 relative z-10">AI-powered analytics. See everything.</p>
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm border border-purple-400/30">AI Vision</span>
                      <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm border border-purple-400/30">Analytics</span>
                    </div>
                    <div className="flex items-center text-purple-400 group-hover:gap-2 transition-all relative z-10">
                      <span className="font-bold">DEPLOY →</span>
                    </div>
                  </motion.div>
                </Link>

                {/* Clock Work */}
                <Link href="/products/clock-work">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group bg-gradient-to-br from-[#0a0a1f] to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-orange-400/50 transition-all cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Clock className="w-12 h-12 text-orange-400 mb-4 relative z-10" />
                    <h4 className="text-2xl font-bold text-white mb-2 relative z-10">Clock Work</h4>
                    <p className="text-gray-400 mb-4 relative z-10">Intelligent scheduling. Maximum efficiency.</p>
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      <span className="px-3 py-1 bg-orange-400/20 text-orange-400 rounded-full text-sm border border-orange-400/30">Scheduling</span>
                      <span className="px-3 py-1 bg-orange-400/20 text-orange-400 rounded-full text-sm border border-orange-400/30">SaaS</span>
                    </div>
                    <div className="flex items-center text-orange-400 group-hover:gap-2 transition-all relative z-10">
                      <span className="font-bold">DEPLOY →</span>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Enterprise */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-purple-400 mb-8 uppercase tracking-wider">Enterprise</h3>
              <Link href="/products/beechwood-os">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative group bg-gradient-to-br from-[#0a0a1f] to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Bot className="w-12 h-12 text-blue-400 mb-4 relative z-10" />
                  <h4 className="text-2xl font-bold text-white mb-2 relative z-10">Beechwood OS</h4>
                  <p className="text-gray-400 mb-4 relative z-10">AI-augmented enterprise OS. Autonomous intelligence.</p>
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm border border-blue-400/30">AI Agents</span>
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm border border-blue-400/30">Enterprise</span>
                  </div>
                  <div className="flex items-center text-blue-400 group-hover:gap-2 transition-all relative z-10">
                    <span className="font-bold">DEPLOY →</span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-5xl font-black text-white mb-12 text-center">
              BUILT ON <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">BEECHWOOD PL</span>
            </motion.h2>
            <div className="space-y-6 text-gray-300 text-lg">
              <motion.p variants={itemVariants}>
                Beechwood isn't just a company—it's a revolution in technology. Named after the street where our journey began, we carry forward the values of innovation, excellence, and relentless progress.
              </motion.p>
              <motion.p variants={itemVariants}>
                From life-saving emergency systems to AI platforms that transform enterprises, every product we build pushes boundaries. We don't follow trends—we create them.
              </motion.p>
              <motion.p variants={itemVariants}>
                Whether you're an individual, a business, or a global enterprise, Beechwood delivers solutions engineered for tomorrow, deployed today.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/20 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-5xl font-black text-white mb-6">
              JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">REVOLUTION</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8">
              Ready to transform your organization with AI? Let's build the future together.
            </motion.p>
            <motion.a 
              variants={itemVariants}
              href="mailto:hello@beechwood.ai"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              <span>Contact Us</span>
              <Zap className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Brain className="w-7 h-7 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">beechwood.ai</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Beechwood. Revolutionizing Technology.
          </p>
        </div>
      </footer>
    </div>
  );
}
