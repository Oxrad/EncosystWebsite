import { Zap, Globe, Award, Shield, Gauge, Database, Cpu, Activity } from 'lucide-react';

export default function ProduitsPage() {
  const services = [
    { 
      title: 'Armoires de Contrôle Commande',
      description: 'Conception, fabrication et programmation d\'armoires de contrôle commande et de tableaux de distribution (TGBT) conçus sur mesure pour chaque projet.',
      icon: Cpu,
      details: ['Design personnalisé', 'Fabrication complète', 'Programmation sur site'],
      image: '/images/ARMOIRES/20230609_122012.jpg' // Image 1
    },
    { 
      title: 'Ingénierie du Système Électrique',
      description: 'Ingénierie et intégration de l\'ensemble des équipements électriques : postes HTA/HTB, Balance of Plant (eBoP), distributions auxiliaires, chargeurs batteries, ventilation, drainage & exhaure.',
      icon: Shield,
      details: ['Postes HTA/HTB', 'Balance of Plant', 'Systèmes auxiliaires'],
      image: '/images/scada 1.png' // Image 6
    },
    { 
      title: 'SCADA',
      description: 'Développement de systèmes SCADA ergonomiques et conviviaux avec une esthétique soignée et des fonctionnalités complètes pour une opération simple et efficace. Veille permanente en cybersécurité.',
      icon: Globe,
      details: ['Interface ergonomique', 'Cybersécurité renforcée', 'Supervision temps réel'],
      image: '/images/Speed governor hmi.png' // Image 2
    },
    { 
      title: 'Data Visualisation et Reporting',
      description: 'Solutions innovantes Industrie 4.0 intégrant IoT et BigData pour collecter, stocker, compiler et valoriser les données sous forme de tableaux de bord dynamiques et rapports automatisés.',
      icon: Database,
      details: ['Industrie 4.0', 'IoT & BigData', 'Tableaux de bord dynamiques'],
      image: '/images/Encosyst Web Report.png' // Image 7
    },
    { 
      title: 'Régulations de Vitesse',
      description: 'Régulateurs de vitesse pour turbines Kaplan, Francis et Pelton. Adaptés aux nouveaux projets et à la modernisation. Développés sur automate, conformes IEC-61362 et IEC-60308. Régulation primaire et secondaire.',
      icon: Gauge,
      details: ['Tous types de turbines', 'Normes IEC', 'Groupes hydrauliques'],
      image: '/images/Imagescontour/HPU Speed governor.png' // Image 5
    },
    { 
      title: 'Armoires d\'Excitation Statique',
      description: 'Fabrication de solutions d\'armoires d\'excitation statique jusqu\'à 1000Adc. Équipées de régulateurs de tension du marché ou embarqués dans un automate.',
      icon: Award,
      details: ['Jusqu\'à 1000Adc', 'Régulateurs intégrés', 'Haute précision'],
      image: '/images/Imagescontour/REGUL VITESSE.png' // Image 4
    },
    { 
      title: 'Régulations de Tension',
      description: 'Systèmes d\'excitation statique de haute précision pour une régulation optimale de la tension des alternateurs.',
      icon: Activity,
      details: ['Haute précision', 'Excitation brushless', 'Régulation optimale'],
      image: '/images/arc 4.png' // Image 10
    },
    { 
      title: 'Instrumentation',
      description: 'Fourniture, installation et mise en service de tout type d\'instrumentation : niveau, température, position, vitesse, vibration, débit en canal ouvert, débit en conduite forcée.',
      icon: Zap,
      details: ['Installation complète', 'Barrages et prises d\'eau', 'Large gamme de capteurs'],
      image: '/images/20231211_074352.jpg' // Image 9
    }
  ];

  const advantages = [
    'Réduction des coûts opérationnels',
    'Augmentation du rendement énergétique',
    'Fiabilisation des installations',
    'Solutions performantes et optimales',
    'Conformité aux normes internationales',
    'Support technique et maintenance'
  ];

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Produits et Services
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Nous apportons notre expertise au développement de solutions innovantes et sur mesure pour la rénovation de systèmes existants ou pour la réalisation de nouveaux projets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-orange-500 transition-all group shadow-lg hover:shadow-2xl overflow-hidden"
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
                </div>

                {/* Contenu */}
                <div className="p-8">
                  <h3 className="font-bold text-2xl text-gray-900 mb-3">
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
              </div>
            );
          })}
        </div>

        {/* Avantages */}
        <div className="mt-20 bg-white p-12 rounded-2xl border-2 border-gray-200 max-w-4xl mx-auto shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nos Engagements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section expertise */}
        <div className="mt-12 bg-gradient-to-br from-green-50 to-white p-12 rounded-2xl border-2 border-green-200 max-w-4xl mx-auto shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Expertise Technique
          </h2>
          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed">
              <span className="text-green-600 font-semibold">Ingénierie complète :</span> L'ingénierie, les études de détail, la programmation, la configuration des systèmes et la mise en service sont réalisés par nos propres équipes.
            </p>
            <p className="leading-relaxed">
              <span className="text-orange-500 font-semibold">Partenariats solides :</span> La fourniture d'équipements, la fabrication et l'installation sur site sont réalisées par nos partenaires situés dans divers pays et en France, avec lesquels nous entretenons des relations très solides depuis de nombreuses années.
            </p>
            <p className="leading-relaxed">
              <span className="text-green-600 font-semibold">Objectif :</span> Développer des solutions efficaces et optimales pour répondre au mieux aux besoins spécifiques de production d'énergie.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}