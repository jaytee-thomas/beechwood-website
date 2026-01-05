'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, ArrowRight, Brain, Play, ImageIcon, X } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import DemoModal from '@/components/DemoModal';
import BeaconDemo from '@/components/demos/BeaconDemo';
import I65SportsDemo from '@/components/demos/I65SportsDemo';
import Where2GoNashvilleDemo from '@/components/demos/Where2GoNashvilleDemo';
import VisualCounterDemo from '@/components/demos/VisualCounterDemo';
import ClockWorkDemo from '@/components/demos/ClockWorkDemo';
import BeechwoodOSDemo from '@/components/demos/BeechwoodOSDemo';

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

// Demo components mapping
const demoComponents = {
  'beacon': BeaconDemo,
  'i65sports': I65SportsDemo,
  'where2gonashville': Where2GoNashvilleDemo,
  'visual-counter': VisualCounterDemo,
  'clock-work': ClockWorkDemo,
  'beechwood-os': BeechwoodOSDemo,
};

// Product data with completion %, languages, and DEFAULT blog entries
const products = {
  'beacon': {
    name: 'Beacon',
    tagline: 'Emergency Response Platform',
    description: 'Real-time emergency alert system connecting users with first responders. Built for speed, reliability, and life-saving communication.',
    category: 'Consumer',
    color: 'red',
    completion: 45,
    languages: [
      { name: 'Swift', percentage: 55 },
      { name: 'TypeScript', percentage: 30 },
      { name: 'Kotlin', percentage: 15 },
    ],
    defaultBlog: [
      {
        date: '2026-01-03',
        title: 'Emergency Alert System Complete',
        content: 'Completed the core emergency alert system with one-tap activation. Users can now send instant alerts to first responders with their exact location. Implemented offline fallback protocols for areas with limited connectivity. The system has been tested in various network conditions and performs reliably even with 2G connections. Next up: family safety features and multi-device synchronization.'
      },
      {
        date: '2025-12-15',
        title: 'Real-time Location Tracking Implemented',
        content: 'Integrated high-precision location tracking using GPS, WiFi, and cellular triangulation. The system now provides accurate location data within 10 meters in urban areas. Added background location monitoring with battery optimization to ensure the app is always ready in emergencies. Working on location sharing with designated emergency contacts.'
      },
      {
        date: '2025-11-28',
        title: 'iOS App Foundation & UI Design',
        content: 'Built the foundation of the iOS app using Swift and UIKit. Created an intuitive, accessible interface designed for high-stress emergency situations. Large, clear buttons and simple navigation ensure the app can be used quickly under pressure. Implemented dark mode and high-contrast options for visibility in various lighting conditions.'
      },
    ],
    features: [
      'Instant emergency alerts to local responders',
      'Real-time location sharing',
      'One-tap emergency activation',
      'Family safety features',
      'Offline emergency protocols',
      'Multi-platform support'
    ],
    tech: ['React Native', 'iOS', 'Android', 'Real-time'],
    status: 'In Development',
    cta: {
      primary: { text: 'Join Waitlist', link: 'mailto:hello@beechwood.ai?subject=Beacon Waitlist' },
      secondary: null
    }
  },
  'i65sports': {
    name: 'i65sports',
    tagline: 'Connect Through Sports',
    description: 'Social platform for sports enthusiasts to connect, share, and engage with their favorite teams and players. Built for the modern sports fan.',
    category: 'Consumer',
    color: 'mint',
    completion: 30,
    languages: [
      { name: 'React Native', percentage: 65 },
      { name: 'TypeScript', percentage: 25 },
      { name: 'Node.js', percentage: 10 },
    ],
    defaultBlog: [
      {
        date: '2025-12-20',
        title: 'Social Feed & Real-time Updates',
        content: 'Launched the core social feed where users can share reactions, comments, and insights about their favorite teams. Implemented real-time game updates using WebSockets for instant score notifications. The feed now supports rich media including images, videos, and GIFs. Building out the community moderation tools next.'
      },
      {
        date: '2025-11-10',
        title: 'User Profiles & Team Following',
        content: 'Created user profile system where fans can showcase their favorite teams, recent activity, and sports interests. Users can now follow multiple teams across different sports and leagues. Built customizable profile pages with team badges and fan stats. Working on the social graph and friend connections.'
      },
    ],
    features: [
      'Follow favorite teams and players',
      'Real-time game updates',
      'Social feed for sports discussions',
      'Fantasy league integration',
      'Live stats and analytics',
      'Community-driven content'
    ],
    tech: ['React Native', 'Social', 'iOS', 'Android'],
    status: 'Coming Soon',
    cta: {
      primary: { text: 'Get Early Access', link: 'mailto:hello@beechwood.ai?subject=i65sports Early Access' },
      secondary: null
    }
  },
  'where2gonashville': {
    name: 'Where2GoNashville',
    tagline: 'Discover Nashville Events',
    description: 'Your guide to Nashville\'s vibrant event scene. Discover live music, food festivals, and local happenings in real-time.',
    category: 'Consumer',
    color: 'yellow',
    completion: 60,
    languages: [
      { name: 'React Native', percentage: 70 },
      { name: 'TypeScript', percentage: 20 },
      { name: 'Python', percentage: 10 },
    ],
    defaultBlog: [
      {
        date: '2026-01-02',
        title: 'Beta Testing in Nashville',
        content: 'Launched closed beta with 100 Nashville locals! Gathering feedback on event discovery, venue recommendations, and notification preferences. Early users love the real-time updates and the ability to see what\'s happening tonight. Making improvements to the map view and adding filters for music genres. Planning public beta launch for late January.'
      },
      {
        date: '2025-12-08',
        title: 'Interactive Map & Venue Database',
        content: 'Built interactive map showing all active events and venues in Nashville. Integrated with venue databases and event calendars for comprehensive coverage. Users can now see what\'s happening nearby in real-time. Added venue profiles with photos, descriptions, and upcoming events. The map updates live as new events are added.'
      },
      {
        date: '2025-11-15',
        title: 'Event Aggregation System',
        content: 'Developed automated event aggregation system pulling from multiple sources including Eventbrite, Bandsintown, and local venue websites. Built custom scrapers for Nashville-specific sources. Now tracking 500+ venues and processing 1000+ events weekly. Implementing machine learning to improve event categorization and recommendations.'
      },
    ],
    features: [
      'Real-time event discovery',
      'Live music venue finder',
      'Food festival calendar',
      'Local recommendations',
      'Event notifications',
      'Interactive map view'
    ],
    tech: ['React Native', 'Events', 'iOS', 'Android'],
    status: 'Beta',
    cta: {
      primary: { text: 'Download Beta', link: 'mailto:hello@beechwood.ai?subject=Where2GoNashville Beta' },
      secondary: null
    }
  },
  'visual-counter': {
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
  },
  'clock-work': {
    name: 'Clock Work',
    tagline: 'Smart Workforce Scheduling',
    description: 'Intelligent scheduling platform that optimizes workforce management. Reduce costs, improve efficiency, and empower your team.',
    category: 'Business',
    color: 'orange',
    completion: 85,
    languages: [
      { name: 'TypeScript', percentage: 45 },
      { name: 'React', percentage: 35 },
      { name: 'Python', percentage: 20 },
    ],
    defaultBlog: [
      {
        date: '2025-12-30',
        title: 'Launch Week - 50+ Companies Onboarded',
        content: 'Officially launched Clock Work to the public! Onboarded 50+ companies in the first week ranging from restaurants to retail chains. Customer feedback has been overwhelmingly positive - reporting 30% reduction in scheduling time and 15% decrease in labor costs. The AI optimization is proving its value. Adding team collaboration features and mobile improvements based on early user requests.'
      },
      {
        date: '2025-12-10',
        title: 'AI Schedule Optimization Complete',
        content: 'Completed the AI-powered schedule optimization engine that considers employee preferences, labor laws, peak hours, and budget constraints. The system now generates optimal schedules in seconds that would take managers hours to create manually. Beta testing shows significant improvements in employee satisfaction and cost efficiency. Preparing for public launch.'
      },
      {
        date: '2025-11-05',
        title: 'Mobile App for Employees',
        content: 'Released mobile app allowing employees to view schedules, request time off, swap shifts, and communicate availability. Push notifications keep everyone informed of schedule changes. The app has drastically reduced scheduling conflicts and last-minute callouts. Employee adoption rate is 90%+ across beta companies.'
      },
    ],
    features: [
      'AI-powered schedule optimization',
      'Employee shift preferences',
      'Time-off management',
      'Real-time availability',
      'Mobile app for employees',
      'Labor cost analytics'
    ],
    tech: ['SaaS', 'Scheduling', 'Web', 'Mobile'],
    status: 'Available',
    cta: {
      primary: { text: 'Start Free Trial', link: 'mailto:hello@beechwood.ai?subject=Clock Work Trial' },
      secondary: { text: 'View Demo', link: 'mailto:hello@beechwood.ai?subject=Clock Work Demo' }
    }
  },
  'beechwood-os': {
    name: 'Beechwood OS',
    tagline: 'AI-Augmented Corporation Operating System',
    description: 'Revolutionary platform featuring specialized AI employees that work alongside your team. Transform how your organization operates with autonomous agents for every department.',
    category: 'Enterprise',
    color: 'blue',
    completion: 20,
    languages: [
      { name: 'Python', percentage: 50 },
      { name: 'TypeScript', percentage: 30 },
      { name: 'Rust', percentage: 20 },
    ],
    defaultBlog: [
      {
        date: '2025-12-22',
        title: 'First AI Agent Prototypes',
        content: 'Built initial prototypes of three AI agents: Sarah (Sales), Marcus (Marketing), and Dana (Data Analysis). Each agent can autonomously handle specific tasks within their domain. Sarah can qualify leads and schedule meetings. Marcus drafts social media content and analyzes campaign performance. Dana generates insights from company data. Early testing with partner companies shows promising results. Refining agent personalities and capabilities.'
      },
      {
        date: '2025-11-18',
        title: 'Platform Architecture & Agent Framework',
        content: 'Designed the core platform architecture for Beechwood OS. Built the foundational agent framework that allows AI employees to have persistent memory, learn from interactions, and collaborate with humans and other agents. Implemented secure sandboxing for agent actions and approval workflows for sensitive tasks. The system can now support multiple specialized agents working in parallel.'
      },
    ],
    features: [
      'AI employees for every department',
      'Autonomous task execution',
      'Enterprise-grade security',
      'Custom AI agent creation',
      'Seamless integration with existing tools',
      'Real-time collaboration between humans and AI'
    ],
    tech: ['AI Agents', 'Enterprise', 'Automation', 'Integration'],
    status: 'Coming 2026',
    cta: {
      primary: { text: 'Schedule Consultation', link: 'mailto:hello@beechwood.ai?subject=Beechwood OS Consultation' },
      secondary: { text: 'Learn More', link: 'mailto:hello@beechwood.ai?subject=Beechwood OS Info' }
    }
  }
};

const colorClasses = {
  red: 'from-red-500/20 to-red-600/20 border-red-500/30 text-red-400',
  mint: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400',
  yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400',
  purple: 'from-beechwood-main/20 to-beechwood-sage/20 border-beechwood-main/30 text-beechwood-sage',
  orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400',
  blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400'
};

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
          className="text-beechwood-main/20"
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
          className="text-beechwood-sage transition-all duration-1000 ease-out"
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

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [allBlogEntries, setAllBlogEntries] = useState<BlogEntry[]>([]);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const product = products[slug as keyof typeof products];
  const DemoComponent = demoComponents[slug as keyof typeof demoComponents];
  
  // Image paths
  const heroImage = `/products/${slug}/hero.png`;
  const screenshots = [
    `/products/${slug}/screenshot-1.png`,
    `/products/${slug}/screenshot-2.png`,
    `/products/${slug}/screenshot-3.png`,
  ];

  // Load blog entries from localStorage and merge with defaults
  useEffect(() => {
    const loadBlogEntries = () => {
      const saved = localStorage.getItem('beechwood-blog-entries');
      let customEntries: BlogEntry[] = [];
      
      if (saved) {
        try {
          const allSaved = JSON.parse(saved);
          customEntries = allSaved[slug] || [];
        } catch (e) {
          console.error('Error loading blog entries:', e);
        }
      }

      // Merge custom entries with default entries
      const defaultEntries = product?.defaultBlog || [];
      const combined = [...customEntries, ...defaultEntries];
      
      // Sort by date (newest first)
      combined.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      setAllBlogEntries(combined);
    };

    if (product) {
      loadBlogEntries();

      // Listen for storage changes (when blog admin adds entries)
      const handleStorageChange = () => {
        loadBlogEntries();
      };

      window.addEventListener('storage', handleStorageChange);
      
      // Also listen for custom event from same window
      window.addEventListener('blogUpdated', handleStorageChange);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('blogUpdated', handleStorageChange);
      };
    }
  }, [slug, product?.defaultBlog]);

  if (!product) {
    notFound();
  }

  const colorClass = colorClasses[product.color as keyof typeof colorClasses];
  const latestUpdates = allBlogEntries.slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0a0a1f] relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(45,106,79,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,106,79,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-beechwood-main/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-beechwood-sage/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} title={product.name}>
        {DemoComponent && <DemoComponent />}
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
      <nav className="fixed top-0 w-full bg-[#0a0a1f]/80 backdrop-blur-xl border-b border-beechwood-main/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-beechwood-sage transition-colors">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-beechwood-main/10 border border-beechwood-main/30 rounded-full mb-6 backdrop-blur-sm">
            <Brain className="w-4 h-4 text-beechwood-sage" />
            <span className="text-sm font-bold text-beechwood-sage uppercase tracking-wider">
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
                className="px-8 py-4 bg-gradient-to-r from-beechwood-main to-beechwood-sage text-white rounded-lg font-bold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-beechwood-main/50"
              >
                {product.cta.primary.text}
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {product.cta.secondary && (
              <a
                href={product.cta.secondary.link}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg font-bold transition-all border-2 border-beechwood-main/50 hover:border-beechwood-main"
              >
                {product.cta.secondary.text}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Development Progress Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-beechwood-forest/10 z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center uppercase tracking-wider">
            Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-beechwood-sage to-beechwood-lime">Progress</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center">
              <CircularProgress percentage={product.completion} />
              <p className="mt-6 text-gray-400 text-center max-w-xs">
                {product.completion < 30 && 'Early development stage - Core features in progress'}
                {product.completion >= 30 && product.completion < 60 && 'Active development - Major features being built'}
                {product.completion >= 60 && product.completion < 90 && 'Advanced stage - Refinement and testing underway'}
                {product.completion >= 90 && 'Near completion - Final polish and optimization'}
              </p>
            </div>

            <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-beechwood-main/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Github className="w-5 h-5 text-beechwood-sage" />
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
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-beechwood-sage to-beechwood-lime">Updates</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              {latestUpdates.map((entry, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-beechwood-main/30 rounded-2xl p-8 hover:border-beechwood-main/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Calendar className="w-5 h-5 text-beechwood-sage flex-shrink-0 mt-1" />
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
                  href={`/products/${slug}/blog`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-beechwood-main to-beechwood-sage text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-beechwood-main/50"
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
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-beechwood-forest/10 z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center uppercase tracking-wider">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-beechwood-sage to-beechwood-lime">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-beechwood-main/30 rounded-lg p-6 hover:border-beechwood-main/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-beechwood-sage mt-2 flex-shrink-0" />
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
            Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-beechwood-sage to-beechwood-lime">With</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {product.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-beechwood-main/10 border border-beechwood-main/30 rounded-full text-gray-300 text-sm font-bold backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SCREENSHOTS & DEMO SECTION - COMBINED */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-beechwood-forest/10 z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center uppercase tracking-wider">
            See It <span className="text-transparent bg-clip-text bg-gradient-to-r from-beechwood-sage to-beechwood-lime">In Action</span>
          </h2>
          
          {/* Interactive Demo Button */}
          <button
            onClick={() => setIsDemoOpen(true)}
            className="relative group w-full bg-[#0a0a1f]/50 backdrop-blur-sm border border-beechwood-main/30 rounded-2xl p-8 mb-8 text-center hover:border-beechwood-main/50 transition-all cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-beechwood-main/0 to-beechwood-sage/0 group-hover:from-beechwood-main/10 group-hover:to-beechwood-sage/10 transition-all" />
            
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Play className="w-12 h-12 text-beechwood-sage group-hover:text-beechwood-lime transition-colors" />
                <div className="text-left">
                  <p className="text-2xl font-black text-white">
                    Try Interactive Demo
                  </p>
                  <p className="text-gray-400">
                    Experience {product.name} in action
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-beechwood-main to-beechwood-sage text-white rounded-lg font-bold shadow-lg shadow-beechwood-main/50 group-hover:shadow-beechwood-main/70 transition-all">
                <Play className="w-5 h-5" />
                Launch Demo
              </div>
            </div>
          </button>

          {/* Hero Screenshot */}
          <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-beechwood-main/30 rounded-2xl p-8 mb-8 overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-beechwood-main/5 to-beechwood-sage/5 rounded-lg overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={heroImage}
                alt={`${product.name} Screenshot`}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                fallback={
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <ImageIcon className="w-24 h-24 text-beechwood-main/30 mb-4" />
                    <p className="text-gray-500 text-xl font-bold">
                      Product Screenshots Coming Soon
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Add hero.png to /public/products/{slug}/
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
                className="relative aspect-video bg-gradient-to-br from-beechwood-main/5 to-beechwood-sage/5 rounded-lg overflow-hidden group cursor-pointer border border-beechwood-main/30 hover:border-beechwood-main/50 transition-all"
              >
                <ImageWithFallback
                  src={src}
                  alt={`${product.name} Screenshot ${index + 1}`}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  fallback={
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-beechwood-main/30 mb-2" />
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
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-beechwood-sage to-beechwood-lime">Deploy?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {product.status === 'Available' 
              ? 'Start using ' + product.name + ' today.' 
              : 'Be the first to know when ' + product.name + ' launches.'}
          </p>
          {product.cta.primary && (
            <a
              href={product.cta.primary.link}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-beechwood-main to-beechwood-sage text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-beechwood-main/50"
            >
              {product.cta.primary.text}
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-beechwood-main/20 py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Beechwood. Revolutionizing Technology.
          </p>
        </div>
      </footer>
    </div>
  );
}
