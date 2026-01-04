'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';

type BlogEntry = {
  date: string;
  title: string;
  content: string;
};

// Same default blog data
const productsDefaultBlog = {
  'beacon': {
    name: 'Beacon',
    color: 'red',
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
  },
  'i65sports': {
    name: 'i65sports',
    color: 'mint',
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
  },
  'where2gonashville': {
    name: 'Where2GoNashville',
    color: 'yellow',
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
  },
  'visual-counter': {
    name: 'Visual Counter',
    color: 'purple',
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
  },
  'clock-work': {
    name: 'Clock Work',
    color: 'orange',
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
  },
  'beechwood-os': {
    name: 'Beechwood OS',
    color: 'blue',
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
  },
};

const colorClasses = {
  red: 'text-red-400 border-red-500/30',
  mint: 'text-emerald-400 border-emerald-500/30',
  yellow: 'text-yellow-400 border-yellow-500/30',
  purple: 'text-purple-400 border-purple-500/30',
  orange: 'text-orange-400 border-orange-500/30',
  blue: 'text-blue-400 border-blue-500/30'
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export default function BlogPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [allBlogEntries, setAllBlogEntries] = useState<BlogEntry[]>([]);
  
  const product = productsDefaultBlog[slug as keyof typeof productsDefaultBlog];

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

      // Listen for storage changes
      const handleStorageChange = () => {
        loadBlogEntries();
      };

      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('blogUpdated', handleStorageChange);

      // Poll for changes (since same-window localStorage changes don't trigger storage event)
      const interval = setInterval(loadBlogEntries, 1000);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('blogUpdated', handleStorageChange);
        clearInterval(interval);
      };
    }
  }, [slug, product]);

  if (!product) {
    notFound();
  }

  const colorClass = colorClasses[product.color as keyof typeof colorClasses];

  return (
    <div className="min-h-screen bg-[#0a0a1f] relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a1f]/80 backdrop-blur-xl border-b border-purple-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link 
            href={`/products/${slug}`} 
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to {product.name}</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            {product.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Development Blog</span>
          </h1>
          <p className="text-xl text-gray-400">
            Follow the journey from concept to launch
          </p>
        </div>
      </div>

      {/* Blog Timeline */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8 pb-20 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-500/20" />

            {/* Blog entries */}
            <div className="space-y-12">
              {allBlogEntries.map((entry, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 top-2 w-5 h-5 rounded-full border-4 ${colorClass} bg-[#0a0a1f]`} />
                  
                  {/* Entry card */}
                  <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <Calendar className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <h2 className="text-2xl font-black text-white">
                            {entry.title}
                          </h2>
                          <span className="text-sm text-gray-500 whitespace-nowrap">
                            {formatDate(entry.date)}
                          </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-lg">
                          {entry.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline end */}
            <div className="relative pl-20 pt-12">
              <div className="absolute left-6 w-5 h-5 rounded-full bg-purple-500/20" />
              <p className="text-gray-600 italic">
                This is where it all began...
              </p>
            </div>
          </div>
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
