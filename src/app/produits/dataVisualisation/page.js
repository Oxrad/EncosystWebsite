'use client';

import { Database, Check, BarChart3, TrendingUp, ArrowLeft, Cloud } from 'lucide-react';
import Link from 'next/link';

export default function DataVisualisationPage() {
  const specifications = [
    'Solutions Industrie 4.0',
    'Intégration IoT et BigData',
    'Tableaux de bord dynamiques',
    'Rapports automatisés personnalisables',
    'API RESTful pour intégrations',
    'Stockage cloud sécurisé',
    'Analytics avancés',
    'Export multi-formats (PDF, Excel, CSV)'
  ];

  const fonctionnalites = [
    {
      titre: 'Collecte de Données',
      description: 'Acquisition automatique depuis tous vos équipements',
      icon: Database
    },
    {
      titre: 'Visualisation',
      description: 'Tableaux de bord interactifs et personnalisables',
      icon: BarChart3
    },
    {
      titre: 'Analyse Prédictive',
      description: 'Intelligence artificielle pour anticiper les pannes',
      icon: TrendingUp
    }
  ];

  const miseEnService = [
    {
      etape: 'Audit',
      description: 'Analyse des sources de données existantes',
      duree: '1 semaine'
    },
    {
      etape: 'Architecture',
      description: 'Conception de la plateforme data',
      duree: '2 semaines'
    },
    {
      etape: 'Développement',
      description: 'Création des dashboards et rapports',
      duree: '4-6 semaines'
    },
    {
      etape: 'Déploiement',
      description: 'Mise en production et formation',
      duree: '1-2 semaines'
    }
  ];

  const rapports = [
    'Rapports de production journaliers',
    'Analyses de performance mensuelle',
    'KPI temps réel',
    'Alertes automatiques',
    'Comparatifs historiques',
    'Prévisions de maintenance',
    'Rapports personnalisés',
    'Export automatique'
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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Database className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Data Visualisation & Reporting
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Industrie 4.0 - IoT - BigData
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
              src="/images/Encosyst Web Report.png"
              alt="Tableau de bord data"
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
              L'Intelligence des Données au Service de Votre Performance
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nos solutions de <strong>data visualisation</strong> transforment vos données brutes en informations exploitables. Grâce à l'intégration des technologies <strong>IoT et BigData</strong>, nous collectons, stockons et analysons toutes les données de vos installations.
              </p>
              <p>
                Les <strong>tableaux de bord dynamiques</strong> offrent une vue en temps réel de vos KPI essentiels : production énergétique, rendement, disponibilité, coûts d'exploitation, et bien plus. Chaque dashboard est personnalisable selon vos besoins.
              </p>
              <p>
                Notre plateforme <strong>Industrie 4.0</strong> intègre des algorithmes d'intelligence artificielle pour l'analyse prédictive. Anticipez les pannes, optimisez la maintenance et maximisez la disponibilité de vos équipements.
              </p>
              <p>
                Les <strong>rapports automatisés</strong> sont générés selon votre périodicité (journalier, hebdomadaire, mensuel) et envoyés automatiquement par email aux destinataires configurés. Format PDF, Excel ou intégration API disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Fonctionnalités Clés
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {fonctionnalites.map((fonc, index) => {
              const Icon = fonc.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-purple-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {fonc.titre}
                  </h3>
                  <p className="text-gray-600">
                    {fonc.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spécifications et Rapports */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border-2 border-purple-200 p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Caractéristiques Techniques
              </h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Types de Rapports
              </h2>
              <ul className="space-y-3">
                {rapports.map((rapport, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{rapport}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mise en œuvre */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Déploiement de la Solution
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {miseEnService.map((phase, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-purple-500 transition-all shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.etape}
                </h3>
                <p className="text-gray-600 mb-3">
                  {phase.description}
                </p>
                <div className="text-sm text-purple-600 font-semibold">
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
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Valorisez vos données !
            </h2>
            <p className="text-xl text-purple-50 mb-8">
              Transformez vos données en avantage compétitif
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}