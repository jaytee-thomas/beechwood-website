'use client'

import { motion } from 'framer-motion'
import { AlertCircle, TrendingUp, Users, Calendar, Brain, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-beechwood-navy/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <Image 
                src="/icon.png" 
                alt="Beechwood Logo" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-beechwood-red to-pink-500 bg-clip-text text-transparent">
                  Beechwood.ai
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#products" className="hover:text-beechwood-red transition-colors">Products</a>
              <a href="#about" className="hover:text-beechwood-red transition-colors">About</a>
              <a href="#contact" className="hover:text-beechwood-red transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-beechwood-navy via-beechwood-blue to-beechwood-navy animate-gradient -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Innovation at
              <br />
              <span className="bg-gradient-to-r from-beechwood-red via-pink-500 to-beechwood-mint bg-clip-text text-transparent">
                Every Scale
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-beechwood-cream/80 max-w-3xl mx-auto mb-12"
          >
            From consumer apps to enterprise AI, we build technology that works in the real world
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#products"
              className="px-8 py-4 bg-beechwood-red hover:bg-beechwood-red/80 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-beechwood-red/50"
            >
              See What We Build
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-beechwood-red text-beechwood-red hover:bg-beechwood-red/10 font-bold rounded-lg transition-all duration-300"
            >
              Let&#39;s Talk
            </a>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-beechwood-navy">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4">Our Products</h2>
            <p className="text-xl text-beechwood-cream/70">Solutions for every need</p>
          </motion.div>

         {/* Consumer Apps */}
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold mb-8 text-beechwood-mint">Consumer</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/products/beacon" className="h-full">
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-beechwood-blue to-beechwood-navy p-8 rounded-2xl border border-white/10 hover:border-beechwood-red/50 transition-all duration-300 hover:scale-105 cursor-pointer h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-beechwood-red/20 rounded-lg">
                      <AlertCircle className="w-8 h-8 text-beechwood-red" />
                    </div>
                    <h4 className="text-2xl font-bold">Beacon</h4>
                  </div>
                  <p className="text-beechwood-cream/80 mb-4 flex-grow">
                    Emergency response, reimagined. One-tap emergency recording and instant sharing with authorities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-beechwood-red/20 rounded-full text-sm">Emergency Safety</span>
                    <span className="px-3 py-1 bg-beechwood-red/20 rounded-full text-sm">Privacy-First</span>
                    <span className="px-3 py-1 bg-beechwood-red/20 rounded-full text-sm">React Native</span>
                  </div>
                </motion.div>
              </Link>

              <Link href="/products/i65sports" className="h-full">
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-beechwood-blue to-beechwood-navy p-8 rounded-2xl border border-white/10 hover:border-beechwood-red/50 transition-all duration-300 hover:scale-105 cursor-pointer h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-beechwood-mint/20 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-beechwood-mint" />
                    </div>
                    <h4 className="text-2xl font-bold">i65sports</h4>
                  </div>
                  <p className="text-beechwood-cream/80 mb-4 flex-grow">
                    Where sports fans connect. Social platform for real-time video takes, live game chat, and betting odds.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-beechwood-mint/20 rounded-full text-sm">Social Platform</span>
                    <span className="px-3 py-1 bg-beechwood-mint/20 rounded-full text-sm">Live Streaming</span>
                    <span className="px-3 py-1 bg-beechwood-mint/20 rounded-full text-sm">Next.js</span>
                  </div>
                </motion.div>
              </Link>

              <Link href="/products/where2gonashville" className="h-full">
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-beechwood-blue to-beechwood-navy p-8 rounded-2xl border border-white/10 hover:border-beechwood-red/50 transition-all duration-300 hover:scale-105 cursor-pointer h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-yellow-500/20 rounded-lg">
                      <MapPin className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h4 className="text-2xl font-bold">Where2GoNashville</h4>
                  </div>
                  <p className="text-beechwood-cream/80 mb-4 flex-grow">
                    Discover Nashville events in real-time. Universal mobile app for finding live music, food festivals, and local happenings.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-sm">Events Discovery</span>
                    <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-sm">React Native</span>
                    <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-sm">Cross-Platform</span>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
          {/* Business Solutions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold mb-8 text-beechwood-red">Business</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/products/visual-counter">
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-beechwood-blue to-beechwood-navy p-8 rounded-2xl border border-white/10 hover:border-beechwood-red/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <Users className="w-8 h-8 text-purple-400" />
                    </div>
                    <h4 className="text-2xl font-bold">Visual Counter</h4>
                  </div>
                  <p className="text-beechwood-cream/80 mb-4">
                    AI-powered people counting. Computer vision system with iOS app, web dashboard, analytics, and offline sync.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Computer Vision</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Swift</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">React</span>
                  </div>
                </motion.div>
              </Link>

              <Link href="/products/clock-work">
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-beechwood-blue to-beechwood-navy p-8 rounded-2xl border border-white/10 hover:border-beechwood-red/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-orange-500/20 rounded-lg">
                      <Calendar className="w-8 h-8 text-orange-400" />
                    </div>
                    <h4 className="text-2xl font-bold">Clock Work</h4>
                  </div>
                  <p className="text-beechwood-cream/80 mb-4">
                    Workforce scheduling made simple. 3-tier hierarchy for shift management with first-come-first-serve claiming.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-500/20 rounded-full text-sm">PWA</span>
                    <span className="px-3 py-1 bg-orange-500/20 rounded-full text-sm">Mobile + Web</span>
                    <span className="px-3 py-1 bg-orange-500/20 rounded-full text-sm">TypeScript</span>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Enterprise Platform */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-8 text-blue-400">Enterprise</h3>
            <Link href="/products/beechwood-os">
              <div className="bg-gradient-to-br from-blue-900/30 via-beechwood-blue to-beechwood-navy p-12 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue-500/20 rounded-xl">
                    <Brain className="w-12 h-12 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-2">Beechwood OS</h4>
                    <p className="text-blue-300">AI-Augmented Corporation Operating System</p>
                  </div>
                </div>
                <p className="text-beechwood-cream/80 text-lg mb-6">
                  Revolutionary AI platform with specialized &quot;AI employees&quot; (Security AI, Engineering AI) that collaborate like a real company. Each AI agent has domain expertise powered by Claude Sonnet 4.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h5 className="font-bold mb-2 text-blue-300">🔒 Security AI</h5>
                    <p className="text-sm text-beechwood-cream/70">Emergency systems, security protocols, privacy architecture</p>
                  </div>
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h5 className="font-bold mb-2 text-blue-300">⚙️ Engineering AI</h5>
                    <p className="text-sm text-beechwood-cream/70">Code generation, architecture design, technical implementation</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">FastAPI</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Claude AI</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Multi-Agent</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beechwood-blue to-beechwood-navy">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-8 text-center">About Beechwood</h2>
            <div className="bg-beechwood-navy/50 p-8 rounded-2xl border border-white/10">
              <p className="text-lg text-beechwood-cream/80 mb-6 leading-relaxed">
                Beechwood started with a simple idea: build technology that solves real problems for real people. Named after Beechwood PL, the street where our founder grew up, we bring that same sense of home and authenticity to everything we create.
              </p>
              <p className="text-lg text-beechwood-cream/80 mb-6 leading-relaxed">
                From emergency safety apps that could save lives, to AI systems that reimagine how companies operate, we&#39;re building at every scale. Whether it&#39;s helping sports fans connect in real-time, or giving businesses the tools to count crowds and manage schedules efficiently, our focus is always on innovation that matters.
              </p>
              <p className="text-lg text-beechwood-cream/80 leading-relaxed">
                We don&#39;t just build apps. We build solutions. And we&#39;re just getting started.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-beechwood-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Let&#39;s Build Together</h2>
            <p className="text-xl text-beechwood-cream/80 mb-12">
              Have an idea? Need a solution? Let&#39;s talk about how Beechwood can help.
            </p>
            <a
              href="mailto:hello@beechwood.ai"
              className="inline-flex items-center gap-3 px-8 py-4 bg-beechwood-red hover:bg-beechwood-red/80 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-beechwood-red/50"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-beechwood-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left flex items-center gap-3">
              <Image 
                src="/icon.png" 
                alt="Beechwood Logo" 
                width={48} 
                height={48}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-beechwood-red to-pink-500 bg-clip-text text-transparent">
                    Beechwood.ai
                  </span>
                </h3>
                <p className="text-beechwood-cream/60">Innovation at Every Scale</p>
              </div>
            </div>
            <div className="text-center text-beechwood-cream/60">
              <p>© 2025 Beechwood. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}