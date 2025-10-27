'use client';

import { Gauge, Check, Zap, Cog, ArrowLeft, Activity } from 'lucide-react';
import Link from 'next/link';

export default function RegulationVitessePage() {
  const specifications = [
    'Compatible turbines Kaplan, Francis, Pelton',
    'Conforme IEC-61362 et IEC-60308',
    'Régulation primaire et secondaire',
    'Développé sur automate industriel',
    'Synchronisation automatique',
    'Protection contre l\'emballement',
    'Interface opérateur intuitive',
    'Redondance disponible'
  ];

  const typesTurbines = [
    {
      type: 'Kaplan',
      description: 'Régulation combinée pales et débit avec synchronisation',
      puissance: '100 kW - 200 MW'
    },
    {
      type: 'Francis',
      description: 'Régulation du distributeur avec compensation de chute',
      puissance: '500 kW - 800 MW'
    },
    {
      type: 'Pelton',
      description: 'Régulation multi-injecteurs avec déflecteur',
      puissance: '1 MW - 400 MW'
    }
  ];

  const miseEnService = [
    {
      etape: 'Étude',
      description: 'Analyse des caractéristiques de la turbine',
      duree: '1-2 semaines'
    },
    {
      etape: 'Programmation',
      description: 'Développement et simulation du régulateur',
      duree: '3-4 semaines'
    },
    {
      etape: 'Tests FAT',
      description: 'Tests en usine avec groupe hydraulique',
      duree: '1 semaine'
    },
    {
      etape: 'Mise en route',
      description: 'Réglages fin sur site et optimisation',
      duree: '1-2 semaines'
    }
  ];

  const essais = [
    'Test du groupe hydraulique',
    'Vérification des capteurs de position',
    'Test des servovalves',
    'Calibration des mesures',
    'Test de synchronisation',
    'Essai de montée en charge',
    'Test protection emballement',
    'Validation des temps de réponse',
    'Test de régulation îlotée',
    'Essai de délestage'
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
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Gauge className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Régulations de Vitesse
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Pour turbines Kaplan, Francis et Pelton
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
              src="/images/Imagescontour/HPU Speed governor.png"
              alt="Régulateur de vitesse"
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
              Régulation Précise et Fiable
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nos <strong>régulateurs de vitesse</strong> sont conçus pour assurer une régulation précise et stable de tous types de turbines hydrauliques : Kaplan, Francis et Pelton. Développés sur automate industriel robuste, ils garantissent une fiabilité maximale.
              </p>
              <p>
                Conformes aux normes <strong>IEC-61362</strong> (systèmes de régulation de vitesse pour turbines hydrauliques) et <strong>IEC-60308</strong> (groupes hydrauliques pour régulateurs), nos régulateurs intègrent toutes les fonctions de sécurité requises.
              </p>
              <p>
                La <strong>régulation primaire</strong> assure le maintien de la fréquence avec une précision de ±0.1% et un temps de réponse optimal. La <strong>régulation secondaire</strong> permet la participation au réglage réseau selon les consignes de l'opérateur.
              </p>
              <p>
                Adaptés aussi bien aux <strong>nouveaux projets</strong> qu'à la <strong>modernisation</strong> d'installations existantes, nos régulateurs peuvent remplacer d'anciens systèmes analogiques tout en conservant le groupe hydraulique existant si celui-ci est en bon état.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de turbines */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Compatibilité Turbines
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {typesTurbines.map((turbine, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-indigo-500 transition-all shadow-lg hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Cog className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {turbine.type}
                </h3>
                <p className="text-gray-600 mb-3">
                  {turbine.description}
                </p>
                <div className="text-sm text-indigo-600 font-semibold">
                  ⚡ {turbine.puissance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spécifications et Essais */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl border-2 border-indigo-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Activity size={32} className="text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Spécifications
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

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Zap size={32} className="text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Programme d'Essais
                </h2>
              </div>
              <ul className="space-y-3">
                {essais.map((essai, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
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
            Processus de Déploiement
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {miseEnService.map((phase, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-indigo-500 transition-all shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.etape}
                </h3>
                <p className="text-gray-600 mb-3">
                  {phase.description}
                </p>
                <div className="text-sm text-indigo-600 font-semibold">
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
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modernisez votre régulation de vitesse
            </h2>
            <p className="text-xl text-indigo-50 mb-8">
              Améliorez la performance et la fiabilité de votre turbine
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Demander une étude
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}