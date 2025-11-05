'use client';

import Hero from '@/components/Hero';
import Link from 'next/link';
import { Zap, Globe, Award, Shield, Gauge, Database, Cpu, Activity, ChevronRight, Check } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

function CountUpAnimation({ end, duration = 1500, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HomePage() {
  const services = [
    { 
      title: 'Armoires de Contrôle Commande',
      description: 'Conception, fabrication et programmation d\'armoires de contrôle commande et de tableaux de distribution (TGBT) conçus sur mesure pour chaque projet.',
      icon: Cpu,
      details: ['Design personnalisé', 'Fabrication complète', 'Programmation sur site'],
      image: '/images/ARMOIRES/20230609_122012.jpg',
      link: '/produits/armoires'
    },
    { 
      title: 'Ingénierie du Système Électrique',
      description: 'Ingénierie et intégration de l\'ensemble des équipements électriques : postes HTA/HTB, Balance of Plant (eBoP), distributions auxiliaires.',
      icon: Shield,
      details: ['Postes HTA/HTB', 'Balance of Plant', 'Systèmes auxiliaires'],
      image: '/images/scada 1.png',
      link: '/produits/systemeElectrique'
    },
    { 
      title: 'SCADA',
      description: 'Développement de systèmes SCADA ergonomiques et conviviaux avec une esthétique soignée et des fonctionnalités complètes pour une opération simple et efficace.',
      icon: Globe,
      details: ['Interface ergonomique', 'Cybersécurité renforcée', 'Supervision temps réel'],
      image: '/images/Speed governor hmi.png',
      link: '/produits/scada'
    },
    { 
      title: 'Data Visualisation et Reporting',
      description: 'Solutions innovantes Industrie 4.0 intégrant IoT et BigData pour collecter, stocker, compiler et valoriser les données sous forme de tableaux de bord dynamiques.',
      icon: Database,
      details: ['Industrie 4.0', 'IoT & BigData', 'Tableaux de bord dynamiques'],
      image: '/images/Encosyst Web Report.png',
      link: '/produits/dataVisualisation'
    },
    { 
      title: 'Régulations de Vitesse',
      description: 'Régulateurs de vitesse pour turbines Kaplan, Francis et Pelton. Adaptés aux nouveaux projets et à la modernisation. Conformes IEC-61362 et IEC-60308.',
      icon: Gauge,
      details: ['Tous types de turbines', 'Normes IEC', 'Groupes hydrauliques'],
      image: '/images/Imagescontour/HPU Speed governor.png',
      link: '/produits/regulationVitesse'
    },
    { 
      title: 'Armoires d\'Excitation Statique',
      description: 'Fabrication de solutions d\'armoires d\'excitation statique jusqu\'à 1000Adc. Équipées de régulateurs de tension du marché ou embarqués dans un automate.',
      icon: Award,
      details: ['Jusqu\'à 1000Adc', 'Régulateurs intégrés', 'Haute précision'],
      image: '/images/Imagescontour/REGUL VITESSE.png',
      link: '/produits/armoiresExcitation'
    },
    { 
      title: 'Régulations de Tension',
      description: 'Systèmes d\'excitation statique de haute précision pour une régulation optimale de la tension des alternateurs.',
      icon: Activity,
      details: ['Haute précision', 'Excitation brushless', 'Régulation optimale'],
      image: '/images/arc 4.png',
      link: '/produits/regulationTension'
    },
    { 
      title: 'Instrumentation',
      description: 'Fourniture, installation et mise en service de tout type d\'instrumentation : niveau, température, position, vitesse, vibration, débit en canal ouvert.',
      icon: Zap,
      details: ['Installation complète', 'Barrages et prises d\'eau', 'Large gamme de capteurs'],
      image: '/images/20231211_074352.jpg',
      link: '/produits/instrumentation'
    }
  ];

  const expertise = [
    'Ingénierie complète réalisée par nos équipes',
    'Études de détail et programmation',
    'Configuration système et mise en service',
    'Partenaires internationaux de confiance',
    'Solutions adaptées à vos besoins',
    'Support technique et maintenance'
  ];

  return (
    <main className="pt-0">
      <Hero />
      {/* Section Chiffres Clés */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Nos Résultats
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Chiffres Clés
              </h2>
            </div>

            {/* Première ligne - 2 éléments */}
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 group-hover:border-orange-400 transition-all shadow-lg group-hover:shadow-xl">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-3">
                    <CountUpAnimation end={14} />
                  </div>
                  <div className="text-gray-600 font-semibold">Années d'activité</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-200 group-hover:border-green-400 transition-all shadow-lg group-hover:shadow-xl">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 mb-3">
                    <CountUpAnimation end={12} />
                  </div>
                  <div className="text-gray-600 font-semibold">Pays d'intervention</div>
                </div>
              </div>
            </div>

            {/* Deuxième ligne - 3 éléments */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 group-hover:border-orange-400 transition-all shadow-lg group-hover:shadow-xl">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-3">
                    <CountUpAnimation end={320} />
                  </div>
                  <div className="text-gray-600 font-semibold">MW installés</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-200 group-hover:border-green-400 transition-all shadow-lg group-hover:shadow-xl">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 mb-3">
                    <CountUpAnimation end={40} suffix="+" />
                  </div>
                  <div className="text-gray-600 font-semibold">Projets majeurs</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 group-hover:border-orange-400 transition-all shadow-lg group-hover:shadow-xl">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-3">
                    <CountUpAnimation end={1.6} />M€
                  </div>
                  <div className="text-gray-600 font-semibold">Chiffre d'affaires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expertise */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Notre Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Spécialiste en Systèmes de Contrôle Commande
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Depuis 2011, nous mettons notre expertise au service de vos installations hydroélectriques avec des solutions innovantes et sur mesure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {expertise.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 hover:border-orange-300 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-green-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - VERSION CLIQUABLE */}
      <section id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Nos Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Domaines de Compétences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions techniques complètes pour optimiser vos installations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="bg-white rounded-2xl border-2 border-gray-200 hover:border-orange-500 transition-all group shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-900">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>
                    {/* Badge "En savoir plus" au hover */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 shadow-xl">
                        En savoir plus
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-8">
                    <h3 className="font-bold text-2xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.details.map((detail, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-orange-50 border border-orange-200 text-orange-600 px-3 py-1 rounded-full font-medium"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Internationale avec Effet */}
      <section className="relative py-32 overflow-hidden">
        {/* Fond dégradé */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-green-900/95" />
          {/* Pattern de points style carte du monde */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
          {/* Lignes horizontales */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-0 right-0 h-px bg-white" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
            <div className="absolute top-3/4 left-0 right-0 h-px bg-white" />
          </div>
          {/* Lignes verticales */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white" />
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
            <div className="absolute top-0 bottom-0 left-3/4 w-px bg-white" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Présence Internationale
              </span>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Un Rayonnement International
              </h3>
              <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
                Situés au pied des Pyrénées dans le Sud-Ouest de la France, nous intervenons dans <span className="text-green-300 font-bold">12 pays</span> avec une forte expérience en Amérique Centrale et en Afrique.
              </p>
            </div>
            
            {/* Carte Google Maps intégrée */}
            <div className="mb-12">
              <div className="backdrop-blur-lg bg-white/10 p-4 rounded-2xl border-2 border-white/20 shadow-2xl">
                <div className="rounded-xl overflow-hidden border-2 border-white/30 shadow-xl">
                  <iframe 
                    src="https://www.google.com/maps/d/embed?mid=1H9DAzR8xL4KoRGHquQCrxzv9f5s&ehbc=2E312F" 
                    width="100%" 
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte des projets ENCOSYST dans le monde"
                  ></iframe>
                </div>
                <p className="text-white/80 text-sm mt-4 text-center">
                  📍 Visualisez l'ensemble de nos interventions à travers le monde
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/references"
                className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-xl text-lg hover:scale-105"
              >
                Découvrir nos références
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h3>
          <p className="text-xl md:text-2xl text-orange-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            Notre équipe d'experts est à votre disposition pour étudier vos besoins et vous proposer des solutions sur mesure
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-orange-600 px-10 py-5 rounded-xl font-bold transition-all text-lg shadow-2xl hover:shadow-white/20 hover:scale-105"
          >
            Contactez-nous
            <ChevronRight size={24} />
          </Link>
        </div>
      </section>
    </main>
  );
}