'use client';

import { Activity, Check, Zap, TrendingUp, ArrowLeft, Radio } from 'lucide-react';
import Link from 'next/link';

export default function RegulationTensionPage() {
  const specifications = [
    'Régulation de tension haute précision',
    'Temps de réponse < 100ms',
    'Précision ±0.5%',
    'Excitation brushless ou statique',
    'Compatible tous types d\'alternateurs',
    'Limitation de courant programmable',
    'Protection contre survoltage',
    'Interface numérique IEC 61850'
  ];

  const fonctions = [
    {
      titre: 'Régulation AVR',
      description: 'Maintien automatique de la tension à la valeur de consigne',
      icon: TrendingUp
    },
    {
      titre: 'Limitation Courant',
      description: 'Protection de l\'alternateur contre les surcharges',
      icon: Zap
    },
    {
      titre: 'Synchronisation',
      description: 'Couplage automatique au réseau avec contrôle tension/phase',
      icon: Radio
    }
  ];

  const miseEnService = [
    {
      etape: 'Paramétrage',
      description: 'Configuration selon caractéristiques alternateur',
      duree: '1-2 jours'
    },
    {
      etape: 'Calibration',
      description: 'Ajustement des gains et des limites',
      duree: '2-3 jours'
    },
    {
      etape: 'Tests',
      description: 'Validation des performances statiques et dynamiques',
      duree: '2-3 jours'
    },
    {
      etape: 'Optimisation',
      description: 'Réglage fin pour performance optimale',
      duree: '1-2 jours'
    }
  ];

  const essais = [
    'Test de précision statique',
    'Essai de réponse échelon',
    'Test de limitation de courant',
    'Validation surcharge transitoire',
    'Essai de synchronisation',
    'Test de couplage au réseau',
    'Validation des protections',
    'Test de découplage',
    'Mesure temps de réponse',
    'Essai de tenue aux perturbations'
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
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Activity className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Régulations de Tension
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Systèmes AVR haute précision
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
              src="/images/arc 4.png"
              alt="Régulateur de tension"
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
              Régulation Optimale de la Tension
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nos <strong>systèmes de régulation de tension</strong> (AVR - Automatic Voltage Regulator) assurent le maintien précis de la tension générée par l'alternateur, garantissant ainsi une qualité d'énergie optimale.
              </p>
              <p>
                Grâce à une <strong>réponse dynamique rapide</strong> (temps de réponse inférieur à 100ms) et une <strong>précision de ±0.5%</strong>, nos régulateurs maintiennent la tension stable même lors de variations importantes de charge.
              </p>
              <p>
                Le système intègre des fonctions de <strong>limitation de courant</strong> pour protéger l'alternateur contre les surcharges. La courbe de limitation est programmable pour s'adapter aux caractéristiques thermiques spécifiques de chaque machine.
              </p>
              <p>
                Compatible avec les systèmes d'<strong>excitation brushless</strong> (sans balais) ou <strong>statique</strong>, notre régulateur s'adapte à tous types d'alternateurs synchrones. L'interface de communication <strong>IEC 61850</strong> permet l'intégration dans les systèmes SCADA modernes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctions principales */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Fonctions Principales
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {fonctions.map((fonction, index) => {
              const Icon = fonction.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-rose-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {fonction.titre}
                  </h3>
                  <p className="text-gray-600">
                    {fonction.description}
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
            <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl border-2 border-rose-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp size={32} className="text-rose-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Performances
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

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Zap size={32} className="text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Programme de Tests
                </h2>
              </div>
              <ul className="space-y-3">
                {essais.map((essai, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-rose-600 flex-shrink-0 mt-1" size={20} />
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
            Commissioning
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {miseEnService.map((phase, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-rose-500 transition-all shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.etape}
                </h3>
                <p className="text-gray-600 mb-3">
                  {phase.description}
                </p>
                <div className="text-sm text-rose-600 font-semibold">
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
          <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Optimisez votre régulation de tension
            </h2>
            <p className="text-xl text-rose-50 mb-8">
              Améliorez la qualité et la stabilité de votre production
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-rose-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Demander un audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}