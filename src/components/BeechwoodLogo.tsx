import Image from 'next/image';

interface BeechwoodLogoProps {
  size?: number;
  variant?: 'icon' | 'logo';
  className?: string;
}

export default function BeechwoodLogo({ 
  size = 32, 
  variant = 'icon',
  className = '' 
}: BeechwoodLogoProps) {
  const imageSrc = variant === 'icon' 
    ? '/logos/beechwood-icon.png' 
    : '/logos/beechwood-logo.png';

  return (
    <Image
      src={imageSrc}
      alt="Beechwood Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}

