'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, ArrowRight, Brain, Play, ImageIcon, X } from 'lucide-react';
import { notFound } from 'next/navigation';
import DemoModal from '@/components/DemoModal';
import VisualCounterDemo from '@/components/demos/VisualCounterDemo';

// Language colors (GitHub-style)
const languageColors: { [key: string]: string } = {
  'TypeScript': '#3178c6',
  'JavaScript': '#f1e05a',
  'Swift': '#ffac45',
  'Kotlin': '#A97BFF',
  'Python': '#3572A5',
  'Go': '#00ADD8',
  'Rust': '#dea584',
  'C++': '#f34b7d',
  'React': '#61dafb',
  'React Native': '#61dafb',
  'Next.js': '#000000',
  'Node.js': '#339933',
  'TensorFlow': '#FF6F00',
  'PyTorch': '#EE4C2C',
};

// Blog entry type
type BlogEntry = {
  date: string;
  title: string;
  content: string;
};

// Product data
const product = {
  name: 'Visual Counter',
  tagline: 'AI-Powered People Counting',
  description: 'Advanced computer vision solution for accurate foot traffic analysis. Perfect for retail, events, and facility management.',
  category: 'Business',
  color: 'purple',
  completion: 75,
  languages: [
    { name: 'Python', percentage: 60 },
    { name: 'TypeScript', percentage: 25 },
    { name: 'C++', percentage: 15 },
  ],
  defaultBlog: [
    {
      date: '2025-12-28',
      title: 'Client Deployments & Real-world Testing',
      content: 'Successfully deployed Visual Counter at three retail locations and one event venue. Accuracy is exceeding 95% in real-world conditions. Clients are using the data to optimize staffing, improve customer experience, and measure marketing campaign effectiveness. Added custom reporting dashboards based on client feedback. Preparing for wider commercial launch.'
    },
    {
      date: '2025-11-20',
      title: 'Heatmap Analytics & API Integration',
      content: 'Released heatmap analytics showing customer movement patterns and high-traffic zones. Retail clients can now visualize where customers spend the most time. Built REST API for easy integration with existing POS and analytics systems. Added webhook support for real-time occupancy alerts. Documentation and SDKs now available for developer partners.'
    },
  ],
  features: [
    'Real-time people counting',
    'AI-powered accuracy',
    'Heatmap analytics',
    'Occupancy monitoring',
    'Historical data tracking',
    'API integration ready'
  ],
  tech: ['AI', 'Computer Vision', 'Analytics', 'API'],
  status: 'Available',
  cta: {
    primary: { text: 'Request Demo', link: 'mailto:hello@beechwood.ai?subject=Visual Counter Demo' },
    secondary: { text: 'View Pricing', link: 'mailto:hello@beechwood.ai?subject=Visual Counter Pricing' }
  }
};

const colorClass = 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400';

// Circular Progress Component
function CircularProgress({ percentage }: { percentage: number }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="transform -rotate-90" width="160" height="160">
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="currentColor"
          strokeWidth="12"
          fill="none"
          className="text-purple-500/20"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="currentColor"
          strokeWidth="12"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-purple-400 transition-all duration-1000 ease-out"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-black text-white">{percentage}%</span>
        <span className="text-sm text-gray-400 uppercase tracking-wider">Complete</span>
      </div>
    </div>
  );
}

// Language Bar Component
function LanguageBar({ languages }: { languages: Array<{ name: string; percentage: number }> }) {
  return (
    <div className="w-full">
      <div className="flex h-2 rounded-full overflow-hidden mb-4">
        {languages.map((lang, index) => (
          <div
            key={index}
            style={{
              width: `${lang.percentage}%`,
              backgroundColor: languageColors[lang.name] || '#8B5CF6'
            }}
            className="transition-all duration-300"
          />
        ))}
      </div>
      
      <div className="flex flex-wrap gap-4">
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: languageColors[lang.name] || '#8B5CF6' }}
            />
            <span className="text-gray-300 text-sm font-medium">{lang.name}</span>
            <span className="text-gray-500 text-sm">{lang.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Format date nicely
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Image with fallback component
function ImageWithFallback({ 
  src, 
  alt, 
  className,
  fallback 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  fallback: React.ReactNode;
}) {
  const [imageError, setImageError] = useState(false);
  
  if (imageError) {
    return <>{fallback}</>;
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      onError={() => setImageError(true)}
    />
  );
}

export default function VisualCounterPage() {
  const [allBlogEntries, setAllBlogEntries] = useState<BlogEntry[]>([]);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Load blog entries from localStorage and merge with defaults
  useEffect(() => {
    const loadBlogEntries = () => {
      const saved = localStorage.getItem('beechwood-blog-entries');
      let customEntries: BlogEntry[] = [];
      
      if (saved) {
        try {
          const allSaved = JSON.parse(saved);
          customEntries = allSaved['visual-counter'] || [];
        } catch (e) {
          console.error('Error loading blog entries:', e);
        }
      }

      // Merge custom entries with default entries
      const defaultEntries = product.defaultBlog || [];
      const combined = [...customEntries, ...defaultEntries];
      
      // Sort by date (newest first)
      combined.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      setAllBlogEntries(combined);
    };

    loadBlogEntries();

    const handleStorageChange = () => {
      loadBlogEntries();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('blogUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('blogUpdated', handleStorageChange);
    };
  }, []);

  const latestUpdates = allBlogEntries.slice(0, 2);

  // Image paths
  const heroImage = `/products/visual-counter/hero.png`;
  const screenshots = [
    `/products/visual-counter/screenshot-1.png`,
    `/products/visual-counter/screenshot-2.png`,
    `/products/visual-counter/screenshot-3.png`,
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1f] relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} title={product.name}>
        <VisualCounterDemo />
      </DemoModal>

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Screenshot"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a1f]/80 backdrop-blur-xl border-b border-purple-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Home</span>
          </Link>
          <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${colorClass} border backdrop-blur-sm`}>
            {product.status}
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6 backdrop-blur-sm">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-bold text-purple-400 uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
            {product.name}
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-400 mb-8">
            {product.tagline}
          </p>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-12">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {product.cta.primary && (
              <a
                href={product.cta.primary.link}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-bold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50"
              >
                {product.cta.primary.text}
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {product.cta.secondary && (
              <a
                href={product.cta.secondary.link}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg font-bold transition-all border-2 border-purple-500/50 hover:border-purple-500"
              >
                {product.cta.secondary.text}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Development Progress Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/10 z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center uppercase tracking-wider">
            Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Progress</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center">
              <CircularProgress percentage={product.completion} />
              <p className="mt-6 text-gray-400 text-center max-w-xs">
                Advanced stage - Refinement and testing underway
              </p>
            </div>

            <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Github className="w-5 h-5 text-purple-400" />
                Tech Stack Distribution
              </h3>
              <LanguageBar languages={product.languages} />
              <p className="mt-6 text-gray-500 text-sm">
                Language breakdown shows the primary technologies powering {product.name}.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Development Updates */}
      {allBlogEntries.length > 0 && (
        <div className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-12 text-center uppercase tracking-wider">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Updates</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              {latestUpdates.map((entry, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Calendar className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {entry.title}
                        </h3>
                        <span className="text-sm text-gray-500 whitespace-nowrap">
                          {formatDate(entry.date)}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {entry.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {allBlogEntries.length > 2 && (
              <div className="text-center">
                <Link
                  href="/products/visual-counter/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
                >
                  View All Updates ({allBlogEntries.length})
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/10 z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center uppercase tracking-wider">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-wider">
            Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">With</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {product.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-gray-300 text-sm font-bold backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* VIDEO DEMO & SCREENSHOTS SECTION */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/10 z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center uppercase tracking-wider">
            See It <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">In Action</span>
          </h2>
          
          {/* Interactive Demo Button */}
          <button
            onClick={() => setIsDemoOpen(true)}
            className="relative group w-full bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-8 text-center hover:border-purple-500/50 transition-all cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all" />
            
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Play className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <div className="text-left">
                  <p className="text-2xl font-black text-white">
                    Try Interactive Demo
                  </p>
                  <p className="text-gray-400">
                    Experience {product.name} in action
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-bold shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all">
                <Play className="w-5 h-5" />
                Launch Demo
              </div>
            </div>
          </button>

          {/* YOUTUBE VIDEO DEMO */}
          <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-8 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-400 font-bold text-sm uppercase tracking-wider">Live Demo Video</span>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black/50">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/o_kIKdGSfVI?rel=0&modestbranding=1"
                title="Visual Counter AI Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
              <div className="text-gray-400">
                <p className="font-bold text-white mb-1">Real-Time AI People Counting</p>
                <p>Watch Visual Counter track people with 95%+ accuracy</p>
              </div>
              <a 
                href="https://youtube.com/shorts/o_kIKdGSfVI?si=DN9cF1WAgEp1s833" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 flex items-center gap-2 font-bold transition-colors"
              >
                Watch on YouTube <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Screenshot */}
          <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-8 overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-purple-400" />
              Product Screenshots
            </h3>
            <div className="relative aspect-video bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-lg overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={heroImage}
                alt={`${product.name} Screenshot`}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                fallback={
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <ImageIcon className="w-24 h-24 text-purple-500/30 mb-4" />
                    <p className="text-gray-500 text-xl font-bold">
                      Product Screenshots Coming Soon
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Add hero.png to /public/products/visual-counter/
                    </p>
                  </div>
                }
              />
            </div>
          </div>

          {/* Additional Screenshots Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {screenshots.map((src, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(src)}
                className="relative aspect-video bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-lg overflow-hidden group cursor-pointer border border-purple-500/30 hover:border-purple-500/50 transition-all"
              >
                <ImageWithFallback
                  src={src}
                  alt={`${product.name} Screenshot ${index + 1}`}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  fallback={
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-purple-500/30 mb-2" />
                      <p className="text-gray-600 text-xs text-center px-2">
                        screenshot-{index + 1}.png
                      </p>
                    </div>
                  }
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Deploy?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Start using {product.name} today.
          </p>
          {product.cta.primary && (
            <a
              href={product.cta.primary.link}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              {product.cta.primary.text}
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Beechwood. Revolutionizing Technology.
          </p>
        </div>
      </footer>
    </div>
  );
}

