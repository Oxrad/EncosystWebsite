'use client';

import { Cpu, Check, Zap, Settings, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ArmoiresPage() {
  const specifications = [
    'Conception sur mesure selon cahier des charges',
    'Conformité normes IEC 61439',
    'Intégration automates Siemens, Schneider, ABB',
    'Protection IP54 à IP65',
    'Câblage industriel haute qualité',
    'Documentation technique complète'
  ];

  const miseEnService = [
    {
      etape: 'Préparation',
      description: 'Vérification des schémas électriques et du câblage'
    },
    {
      etape: 'Installation',
      description: 'Montage et raccordement sur site des armoires'
    },
    {
      etape: 'Tests',
      description: 'Tests fonctionnels de tous les circuits'
    },
    {
      etape: 'Mise en route',
      description: 'Démarrage progressif et optimisation'
    }
  ];

  const essais = [
    'Test d\'isolement (1000V)',
    'Mesure de continuité',
    'Vérification des protections',
    'Test de fonctionnement à vide',
    'Test de fonctionnement en charge',
    'Validation des séquences de sécurité',
    'Test des communications',
    'Essai thermique'
  ];

  const images = [
    '/images/ARMOIRES/20230609_122012.jpg',
    '/images/ARMOIRES/armoire2.jpg',
    '/images/ARMOIRES/armoire3.jpg',
    '/images/ARMOIRES/armoire4.jpg'
  ];

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Bouton retour */}
      <div className="container mx-auto px-4 mb-8">
        <Link 
          href="/#solutions"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
        >
          <ArrowLeft size={20} />
          Retour aux produits
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Cpu className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Armoires de Contrôle Commande
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Solutions sur mesure pour le pilotage de vos installations
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
              src="/images/ARMOIRES/20230609_122012.jpg"
              alt="Armoire de contrôle commande"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Description détaillée */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Description Complète
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nos <strong>armoires de contrôle commande</strong> sont conçues et fabriquées sur mesure pour répondre aux exigences spécifiques de chaque projet hydroélectrique. Chaque armoire est le résultat d'une ingénierie précise intégrant les dernières technologies d'automatisation.
              </p>
              <p>
                Nous assurons la <strong>conception complète</strong> depuis les études électriques jusqu'à la fabrication en atelier, en passant par la programmation des automates et la validation en usine avant livraison.
              </p>
              <p>
                L'intégration peut inclure : automates programmables (Siemens, Schneider, ABB), variateurs de vitesse, systèmes de communication industrielle (Profibus, Modbus, Ethernet), dispositifs de protection et de mesure, alimentations redondantes, et systèmes de refroidissement adaptés.
              </p>
              <p>
                Nos armoires sont conçues pour fonctionner dans des environnements industriels exigeants avec des températures de -20°C à +60°C et conformes aux normes internationales les plus strictes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spécifications techniques */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="text-orange-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Spécifications Techniques
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
                <Shield className="text-green-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Tests et Essais
                </h2>
              </div>
              <ul className="space-y-3">
                {essais.map((essai, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Zap className="text-orange-600 flex-shrink-0 mt-1" size={20} />
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Processus de Mise en Service
            </h2>
            <p className="text-xl text-gray-600">
              Un déploiement structuré en 4 phases pour garantir la qualité
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {miseEnService.map((phase, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-orange-500 transition-all shadow-lg hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.etape}
                </h3>
                <p className="text-gray-600 mb-3">
                  {phase.description}
                </p>
                <div className="text-sm text-orange-600 font-semibold">
                  ⏱ {phase.duree}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie d'images */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Galerie Photos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div key={index} className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <img 
                  src={image}
                  alt={`Armoire ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Un projet d'armoire de contrôle commande ?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Notre équipe d'ingénieurs est prête à étudier votre projet
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}