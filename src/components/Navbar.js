'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Produits et Services', href: '/#solutions' },
    { name: 'Références', href: '/references' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed w-full top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo uniquement */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo 3000DPI.png"
              alt="ENCOSYST - Energy Control System"
              width={200}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-5 py-2 rounded-lg transition-all font-medium text-gray-600 hover:bg-gray-50 hover:text-orange-500">
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg mb-2 font-medium text-gray-600 hover:bg-gray-50 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}