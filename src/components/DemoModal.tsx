'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
};

export default function DemoModal({ isOpen, onClose, children, title }: DemoModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] m-4 bg-[#0a0a1f] border border-beechwood-main/30 rounded-2xl overflow-hidden shadow-2xl shadow-beechwood-main/20">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-beechwood-main/20">
          <h2 className="text-2xl font-black text-white flex items-center gap-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-beechwood-sage to-beechwood-lime">
              {title}
            </span>
            <span className="text-sm font-normal text-gray-500">Live Demo</span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Demo Content */}
        <div className="h-[calc(100%-5rem)] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

