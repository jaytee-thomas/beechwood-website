import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';

// Product data
const products = {
  'beacon': {
    name: 'Beacon',
    tagline: 'Emergency Response Platform',
    description: 'Real-time emergency alert system connecting users with first responders. Built for speed, reliability, and life-saving communication.',
    category: 'Consumer',
    color: 'red',
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
  red: 'from-beechwood-red/20 to-beechwood-red/30 border-beechwood-red/30 text-beechwood-red',
  mint: 'from-beechwood-mint/20 to-beechwood-mint/30 border-beechwood-mint/30 text-beechwood-mint',
  yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400',
  purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400',
  orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400',
  blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400'
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  const colorClass = colorClasses[product.color as keyof typeof colorClasses];

  return (
    <div className="min-h-screen bg-gradient-to-br from-beechwood-navy via-beechwood-blue to-beechwood-navy">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-beechwood-navy/80 backdrop-blur-md border-b border-beechwood-cream/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-beechwood-cream hover:text-beechwood-mint transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${colorClass} border`}>
            {product.status}
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-beechwood-mint uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-beechwood-cream mb-6">
            {product.name}
          </h1>
          <p className="text-2xl sm:text-3xl text-beechwood-cream/70 mb-8">
            {product.tagline}
          </p>
          <p className="text-lg sm:text-xl text-beechwood-cream/60 max-w-2xl mx-auto mb-12">
            {product.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {product.cta.primary && (
              <a
                href={product.cta.primary.link}
                className="px-8 py-4 bg-beechwood-red hover:bg-beechwood-red/80 text-white rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                {product.cta.primary.text}
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {product.cta.secondary && (
              <a
                href={product.cta.secondary.link}
                className="px-8 py-4 bg-beechwood-cream/10 hover:bg-beechwood-cream/20 text-beechwood-cream rounded-lg font-semibold transition-all border border-beechwood-cream/20"
              >
                {product.cta.secondary.text}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-beechwood-blue/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-beechwood-cream mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-beechwood-navy/50 backdrop-blur-sm border border-beechwood-cream/10 rounded-lg p-6 hover:border-beechwood-mint/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-beechwood-mint mt-2 flex-shrink-0" />
                  <p className="text-beechwood-cream/80 text-lg">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-beechwood-cream mb-8">
            Built With
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {product.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-beechwood-cream/10 border border-beechwood-cream/20 rounded-full text-beechwood-cream/80 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Screenshot Placeholder */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-beechwood-blue/20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-beechwood-navy/50 backdrop-blur-sm border border-beechwood-cream/10 rounded-2xl p-12 text-center">
            <div className="aspect-video bg-gradient-to-br from-beechwood-cream/5 to-beechwood-mint/5 rounded-lg flex items-center justify-center">
              <p className="text-beechwood-cream/40 text-xl">
                Product Screenshots Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-beechwood-cream mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-beechwood-cream/70 mb-8">
            {product.status === 'Available' 
              ? 'Start using ' + product.name + ' today.' 
              : 'Be the first to know when ' + product.name + ' launches.'}
          </p>
          {product.cta.primary && (
            <a
              href={product.cta.primary.link}
              className="inline-flex items-center gap-2 px-8 py-4 bg-beechwood-red hover:bg-beechwood-red/80 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              {product.cta.primary.text}
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-beechwood-cream/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-beechwood-cream/60 text-sm">
            © {new Date().getFullYear()} Beechwood. Innovation at Every Scale.
          </p>
        </div>
      </footer>
    </div>
  );
}
