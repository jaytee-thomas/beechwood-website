import Image from 'next/image';

interface BeechwoodLogoProps {
  size?: number;
  className?: string;
  variant?: 'full' | 'icon' | 'badge';
}

export default function BeechwoodLogo({ 
  size = 40, 
  className = '',
  variant = 'icon'
}: BeechwoodLogoProps) {
  const logoSrc = {
    'full': '/logos/beechwood-logo.png',      // Full logo with text
    'icon': '/logos/beechwood-icon.png',      // Icon only (brain-tree)
    'badge': '/logos/beechwood-logo.png',     // Badge version
  };

  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={logoSrc[variant]}
        alt="Beechwood Logo"
        fill
        className="object-contain"
        priority
        style={{ 
          mixBlendMode: 'normal',
          // Remove any white background artifacts
          filter: 'drop-shadow(0 0 0 transparent)'
        }}
      />
    </div>
  );
}

