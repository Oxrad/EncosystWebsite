'use client';

import { Award, Check, Zap, Battery, ArrowLeft, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function ArmoiresExcitationPage() {
  const specifications = [
    'Puissance jusqu\'à 1000Adc',
    'Thyristors ou IGBT haute performance',
    'Régulateurs de tension embarqués',
    'Compatibilité régulateurs du marché',
    'Refroidissement par ventilation forcée',
    'Protection contre les surcharges',
    'Mesures précises (0.5% précision)',
    'Interface homme-machine intuitive'
  ];

  const avantages = [
    {
      titre: 'Haute Précision',
      description: 'Régulation de tension à ±0.5% pour une qualité optimale',
      icon: TrendingUp
    },
    {
      titre: 'Fiabilité',
      description: 'Composants industriels de haute qualité',
      icon: Award
    },
    {
      titre: 'Flexibilité',
      description: 'Compatible avec différents régulateurs de tension',
      icon: Zap
    }
  ];

  const miseEnService = [
    {
      etape: 'Étude',
      description: 'Dimensionnement selon caractéristiques alternateur',
      duree: '1 semaine'
    },
    {
      etape: 'Fabrication',
      description: 'Assemblage et câblage en atelier',
      duree: '4-6 semaines'
    },
    {
      etape: 'Tests FAT',
      description: 'Tests complets en usine',
      duree: '3-5 jours'
    },
    {
      etape: 'Commissioning',
      description: 'Installation et mise en service sur site',
      duree: '5-7 jours'
    }
  ];

  const essais = [
    'Test d\'isolement haute tension',
    'Vérification des thyristors/IGBT',
    'Calibration des mesures',
    'Test du régulateur de tension',
    'Essai de montée en courant progressif',
    'Test de réponse dynamique',
    'Vérification des protections',
    'Test de refroidissement',
    'Mesure du rendement',
    'Validation des alarmes'
  ];

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 mb-8">
        <Link 
          href="/#solutions"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
        >
          <ArrowLeft size={20} />
          Retour aux produits
        </Link>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Award className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Armoires d'Excitation Statique
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Solutions jusqu'à 1000Adc
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image principale */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/Imagescontour/REGUL VITESSE.png"
              alt="Armoire d'excitation statique"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Excitation Statique Haute Performance
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nos <strong>armoires d'excitation statique</strong> alimentent le rotor des alternateurs avec un courant continu précisément régulé. Elles sont dimensionnées pour des puissances allant jusqu'à <strong>1000Adc</strong>, couvrant une large gamme d'applications hydroélectriques.
              </p>
              <p>
                L'excitation statique offre de nombreux avantages par rapport aux systèmes à collecteur traditionnel : <strong>absence d'usure mécanique</strong>, maintenance réduite, réponse dynamique rapide, et meilleur contrôle de la tension.
              </p>
              <p>
                Nos armoires peuvent être équipées de <strong>régulateurs de tension</strong> de différents fabricants du marché, ou utiliser un régulateur développé sur mesure et embarqué dans l'automate. Cette flexibilité permet de s'adapter aux préférences de chaque client.
              </p>
              <p>
                La conversion AC/DC est réalisée par des <strong>ponts thyristors</strong> ou <strong>IGBT</strong> selon la puissance et les performances requises. Le refroidissement par ventilation forcée assure un fonctionnement fiable même dans des conditions exigeantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Avantages de l'Excitation Statique
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {avantages.map((avantage, index) => {
              const Icon = avantage.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-amber-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {avantage.titre}
                  </h3>
                  <p className="text-gray-600">
                    {avantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spécifications et Essais */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border-2 border-amber-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Battery size={32} className="text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Caractéristiques
                </h2>
              </div>
              <ul className="space-y-3">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Zap size={32} className="text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Tests de Qualification
                </h2>
              </div>
              <ul className="space-y-3">
                {essais.map((essai, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{essai}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mise en service */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Réalisation Projet
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {miseEnService.map((phase, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-amber-500 transition-all shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.etape}
                </h3>
                <p className="text-gray-600 mb-3">
                  {phase.description}
                </p>
                <div className="text-sm text-amber-600 font-semibold">
                  ⏱ {phase.duree}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Besoin d'une solution d'excitation ?
            </h2>
            <p className="text-xl text-amber-50 mb-8">
              Contactez-nous pour un dimensionnement adapté à votre alternateur
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Obtenir un devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}