import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Produits et Services', href: '/produits' },
    { name: 'Références', href: '/references' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Automatisme',
    'SCADA',
    'Régulations de vitesse',
    'Excitation statique',
    'Data visualisation',
    'Ingénierie électrique'
  ];

  return (
    <footer className="bg-gray-50 border-t-2 border-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">ENCOSYST</h4>
                <p className="text-xs text-green-500 font-semibold">Energy Control System</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Spécialiste en systèmes de contrôle commande pour centrales hydroélectriques depuis 2011.
            </p>
            <div className="flex gap-2">
              <span className="text-2xl">🇫🇷</span>
              <span className="text-2xl">🌎</span>
              <span className="text-2xl">🌍</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">Nos Services</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin size={16} className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div>13 Impasse Perbost</div>
                  <div>31800 Labarthe Inard</div>
                  <div>France</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500 flex-shrink-0" />
                <a href="tel:+33561953342" className="text-gray-600 hover:text-orange-500 transition-colors">
                  +33 (0) 5 61 95 33 42
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-500 flex-shrink-0" />
                <a href="mailto:contact@encosyst.com" className="text-green-600 hover:text-green-500 transition-colors font-medium">
                  contact@encosyst.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              &copy; 2025 ENCOSYST - SASU - RCS TOULOUSE B 529 905 697
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <span>Directeur : M. Laurent LOPES</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}