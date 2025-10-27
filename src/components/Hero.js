import Link from 'next/link';
import { ChevronRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/ARMOIRES/oui.jpg)',
            backgroundAttachment: 'fixed' // Effet parallax
          }}
        />
        {/* Overlay dégradé sombre pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/20" />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border-2 border-green-500 px-6 py-3 rounded-full mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 font-semibold text-sm">
              Solutions internationales depuis 2011
            </span>
          </div>
          
          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in">
            Expert en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Contrôle Commande
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
            pour Centrales Hydroélectriques
          </p>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-3xl">
            Conception et réalisation de systèmes de contrôle commande pour centrales hydroélectriques de petite et moyenne capacité.
          </p>
          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-xl font-bold flex items-center justify-center gap-3 text-lg transition-all shadow-2xl hover:shadow-orange-500/50 hover:scale-105"
            >
              Démarrer un projet
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/produits"
              className="group backdrop-blur-md bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-all shadow-xl hover:scale-105"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm font-medium">Découvrir</span>
          <ArrowDown size={24} />
        </div>
      </div>

      {/* Effet de vignette sur les bords */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
    </section>
  );
}