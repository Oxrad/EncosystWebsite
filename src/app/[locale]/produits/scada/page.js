'use client';

import { Globe, Check, Monitor, Lock, ArrowLeft, Network } from 'lucide-react';
import Link from 'next/link';

export default function ScadaPage() {
  const specifications = [
    'Interface ergonomique et intuitive',
    'Compatibilité multi-protocoles (Modbus, OPC, IEC 104)',
    'Supervision temps réel',
    'Historisation des données',
    'Gestion des alarmes intelligente',
    'Cybersécurité avancée',
    'Accès distant sécurisé',
    'Rapports automatisés'
  ];

  const fonctionnalites = [
    {
      titre: 'Supervision Centralisée',
      description: 'Vue d\'ensemble de l\'installation avec synoptiques animés',
      icon: Monitor
    },
    {
      titre: 'Cybersécurité',
      description: 'Protection contre les intrusions et veille permanente',
      icon: Lock
    },
    {
      titre: 'Communication',
      description: 'Intégration avec tous les équipements industriels',
      icon: Network
    }
  ];

  const miseEnService = [
    {
      etape: 'Analyse',
      description: 'Étude des besoins et architecture du système',
      duree: '1-2 semaines'
    },
    {
      etape: 'Développement',
      description: 'Création des synoptiques et programmation',
      duree: '3-6 semaines'
    },
    {
      etape: 'Tests FAT',
      description: 'Tests en usine avec simulation',
      duree: '1 semaine'
    },
    {
      etape: 'Déploiement',
      description: 'Installation sur site et mise en service',
      duree: '1-2 semaines'
    }
  ];

  const essais = [
    'Test de connectivité réseau',
    'Validation des communications automate',
    'Test des alarmes et événements',
    'Vérification de l\'historisation',
    'Test des accès utilisateurs',
    'Validation cybersécurité',
    'Test de charge système',
    'Formation opérateurs'
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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Globe className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Systèmes SCADA
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Supervision ergonomique et cybersécurisée
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
              src="/images/Speed governor hmi.png"
              alt="Interface SCADA"
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
              Supervision Intelligente et Sécurisée
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nos <strong>systèmes SCADA</strong> (Supervisory Control And Data Acquisition) offrent une supervision complète et intuitive de vos installations hydroélectriques. Développés avec une attention particulière à l'ergonomie et à la cybersécurité, ils permettent une exploitation optimale.
              </p>
              <p>
                Chaque SCADA est développé sur mesure avec une <strong>interface graphique moderne</strong> et des synoptiques animés en temps réel. L'esthétique soignée facilite la prise en main et réduit la charge cognitive des opérateurs.
              </p>
              <p>
                La <strong>cybersécurité</strong> est au cœur de notre conception : authentification renforcée, chiffrement des communications, journalisation complète des actions, et veille permanente contre les menaces.
              </p>
              <p>
                Nos SCADA intègrent des fonctions avancées : gestion intelligente des alarmes avec priorisation, historisation haute performance, rapports automatiques personnalisables, et accès distant sécurisé pour maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Fonctionnalités Principales
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {fonctionnalites.map((fonc, index) => {
              const Icon = fonc.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-blue-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
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

      {/* Spécifications et Essais */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Spécifications
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

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tests et Validation
              </h2>
              <ul className="space-y-3">
                {essais.map((essai, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
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
            Déploiement du SCADA
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {miseEnService.map((phase, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-500 transition-all shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.etape}
                </h3>
                <p className="text-gray-600 mb-3">
                  {phase.description}
                </p>
                <div className="text-sm text-blue-600 font-semibold">
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
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Besoin d'un système SCADA performant ?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Discutons de votre projet de supervision
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}