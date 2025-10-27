'use client';

import { Shield, Check, Zap, Building2, ArrowLeft, Cable, Battery } from 'lucide-react';
import Link from 'next/link';

export default function SystemeElectriquePage() {
  const specifications = [
    'Postes HTA/HTB clé en main',
    'Balance of Plant (eBoP) complet',
    'Distributions auxiliaires AC/DC',
    'Chargeurs batteries redondants',
    'Systèmes de ventilation',
    'Drainage et exhaure',
    'Études de court-circuit',
    'Plans de protection sélectivité'
  ];

  const composantes = [
    {
      titre: 'Postes HTA/HTB',
      description: 'Transformateurs élévateurs, cellules et protection',
      icon: Building2
    },
    {
      titre: 'Balance of Plant',
      description: 'Tous les équipements électriques auxiliaires',
      icon: Cable
    },
    {
      titre: 'Distributions',
      description: 'Tableaux AC et DC pour tous les consommateurs',
      icon: Zap
    }
  ];

  const miseEnService = [
    {
      etape: 'Ingénierie',
      description: 'Études électriques complètes et schémas',
      duree: '4-8 semaines'
    },
    {
      etape: 'Fourniture',
      description: 'Approvisionnement des équipements',
      duree: '12-20 semaines'
    },
    {
      etape: 'Installation',
      description: 'Montage et raccordement sur site',
      duree: '4-12 semaines'
    },
    {
      etape: 'Commissioning',
      description: 'Tests et mise en service progressive',
      duree: '2-4 semaines'
    }
  ];

  const etudes = [
    'Schémas unifilaires HTA/HTB',
    'Plans d\'implantation',
    'Calculs de court-circuit',
    'Étude de sélectivité',
    'Dimensionnement câbles',
    'Calculs thermiques',
    'Note de calcul mise à la terre',
    'Dossier de consultation fournisseurs'
  ];

  const equipements = [
    {
      categorie: 'Poste HTA/HTB',
      elements: [
        'Transformateur élévateur',
        'Cellules HTA',
        'Disjoncteur de ligne',
        'Transformateur services auxiliaires',
        'Protection différentielle',
        'Relais de protection'
      ]
    },
    {
      categorie: 'Distributions',
      elements: [
        'TGBT 400V',
        'Tableaux divisionnaires',
        'Distribution DC 110V/48V',
        'Onduleurs',
        'Chargeurs batteries',
        'Batteries stationnaires'
      ]
    },
    {
      categorie: 'Auxiliaires',
      elements: [
        'Ventilation centrale',
        'Ventilation paliers',
        'Pompes de drainage',
        'Pompe d\'exhaure',
        'Chauffage anti-condensation',
        'Éclairage et prises'
      ]
    }
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
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Shield className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Ingénierie du Système Électrique
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                HTA/HTB, Balance of Plant, Auxiliaires
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
              src="/images/scada 1.png"
              alt="Système électrique"
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
              Ingénierie Électrique Complète
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nous assurons l'<strong>ingénierie et l'intégration de l'ensemble des équipements électriques</strong> nécessaires au fonctionnement d'une centrale hydroélectrique, depuis les postes haute tension jusqu'aux distributions auxiliaires.
              </p>
              <p>
                Les <strong>postes HTA/HTB</strong> comprennent les transformateurs élévateurs, les cellules de protection, les disjoncteurs de ligne et tous les équipements nécessaires pour l'évacuation de l'énergie produite vers le réseau. Nous réalisons les études de court-circuit et de sélectivité des protections.
              </p>
              <p>
                Le <strong>Balance of Plant électrique (eBoP)</strong> regroupe tous les équipements électriques auxiliaires indispensables : distributions AC et DC, chargeurs de batteries, onduleurs, systèmes de ventilation, pompes de drainage, exhaure, chauffage, éclairage.
              </p>
              <p>
                Les <strong>distributions auxiliaires</strong> assurent l'alimentation de tous les consommateurs de la centrale. Nous concevons des architectures redondantes pour les systèmes critiques (contrôle-commande, protection). Les chargeurs batteries maintiennent la disponibilité des alimentations DC même en cas de défaillance du réseau AC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Composantes principales */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Composantes Principales
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {composantes.map((comp, index) => {
              const Icon = comp.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-teal-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {comp.titre}
                  </h3>
                  <p className="text-gray-600">
                    {comp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Équipements détaillés */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Équipements Fournis
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {equipements.map((equip, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-teal-200">
                  {equip.categorie}
                </h3>
                <ul className="space-y-2">
                  {equip.elements.map((element, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-teal-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Études et Spécifications */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl border-2 border-teal-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Battery size={32} className="text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Documents d'Études
                </h2>
              </div>
              <ul className="space-y-3">
                {etudes.map((etude, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{etude}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border-2 border-emerald-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Zap size={32} className="text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Caractéristiques
                </h2>
              </div>
              <ul className="space-y-3">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{spec}</span>
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
            Phases du Projet
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {miseEnService.map((phase, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-teal-500 transition-all shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.etape}
                </h3>
                <p className="text-gray-600 mb-3">
                  {phase.description}
                </p>
                <div className="text-sm text-teal-600 font-semibold">
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
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Un projet d'ingénierie électrique ?
            </h2>
            <p className="text-xl text-teal-50 mb-8">
              Confiez-nous l'intégration de vos systèmes électriques
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-teal-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Demander une consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}