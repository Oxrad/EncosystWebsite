'use client';

import { MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function ReferencesPage() {
  const [selectedYear, setSelectedYear] = useState('all');
  
  const regions = [
    {
      name: 'Europe',
      emoji: '🇫🇷',
      countries: ['France'],
      color: 'green'
    },
    {
      name: 'Amérique Centrale',
      emoji: '🌎',
      countries: ['Costa Rica', 'Honduras', 'Guatemala', 'Panamá'],
      color: 'orange'
    },
    {
      name: 'Afrique',
      emoji: '🌍',
      countries: ['RDC', 'Madagascar', 'Rwanda', 'Centrafrique'],
      color: 'green'
    },
    {
      name: 'Autres',
      emoji: '🌏',
      countries: ['Turquie', 'Géorgie', 'Portugal'],
      color: 'orange'
    }
  ];

  const projects = [
    { year: 2025, name: 'Centrale Pocosol', country: 'Costa Rica', power: '2x15000KVA', type: 'Modernisation' },
    { year: 2025, name: 'Centrale Agua Gata', country: 'Costa Rica', power: '1x2500KVA', type: 'Modernisation' },
    { year: 2024, name: 'Centrale de Boali 1', country: 'Centrafrique', power: '5x2200KVA', type: 'Modernisation complète' },
    { year: 2024, name: 'Central Chocosuela 3', country: 'Costa Rica', power: '1x5720KVA', type: 'Modernisation' },
    { year: 2024, name: 'Central La Esperanza', country: 'Costa Rica', power: '2x3250KVA', type: 'Modernisation' },
    { year: 2024, name: 'Valloirette', country: 'France (73)', power: '1x2500KVA + 1x810KVA', type: 'Nouveau projet' },
    { year: 2023, name: 'Noyelles Sous Lens', country: 'France (62)', power: '1x1000KVA', type: 'Modernisation' },
    { year: 2023, name: 'Centrale du Bessans', country: 'France (73)', power: '1x800KVA', type: 'Nouveau projet' },
    { year: 2023, name: 'Centrale de Rwanguba', country: 'RDC', power: '2x15000KVA', type: 'Nouveau projet' },
    { year: 2023, name: 'Centrale de St Maurice G1', country: 'France (05)', power: '1x5700KVA', type: 'Modernisation' },
    { year: 2023, name: 'Central Birris 1', country: 'Costa Rica', power: '1x10000KVA', type: 'Modernisation' },
    { year: 2023, name: 'Central Tuis', country: 'Costa Rica', power: '1x2100KVA', type: 'Modernisation' },
    { year: 2023, name: 'Dolega et Macho de Monte', country: 'Panamá', power: '5x2000KVA', type: 'Modernisation SCADA' },
    { year: 2023, name: 'Oxec I', country: 'Guatemala', power: '2x15000KVA', type: 'Modernisation' },
    { year: 2023, name: 'Les Arcs', country: 'France (05)', power: '1x500KVA', type: 'Nouveau projet' },
    { year: 2022, name: 'Serre Chevalier - Villeneuve', country: 'France (05)', power: '1x1150KVA', type: 'Nouveau projet' },
    { year: 2022, name: 'Centrale du Merlet', country: 'France (73)', power: '1x3800KVA', type: 'Nouveau projet' },
    { year: 2022, name: 'Central El General', country: 'Costa Rica', power: '2x25000KVA', type: 'Modernisation SCADA' },
    { year: 2022, name: 'Barrage de Vierzon', country: 'France (18)', power: '-', type: 'Automatisation' },
    { year: 2022, name: 'Central Cubujuqui', country: 'Costa Rica', power: '2x15000KVA', type: 'Modernisation complète' },
    { year: 2021, name: 'Central Platanar', country: 'Costa Rica', power: '2x7920KVA', type: 'Modernisation' },
    { year: 2021, name: 'Ensemble de 7 centrales', country: 'France (46,65)', power: '-', type: 'Télégestion' },
    { year: 2021, name: 'Centrale de Tignes', country: 'France (73)', power: '1x210KW', type: 'Nouveau projet' },
    { year: 2021, name: 'Poste de Kalemie', country: 'RDC', power: '30MW', type: 'Modernisation poste HTA' },
    { year: 2021, name: 'Central Canalete', country: 'Costa Rica', power: '2x10350KVA', type: 'Modernisation' },
    { year: 2020, name: 'Moulin de Villars', country: 'France (86)', power: '2x600KW', type: 'Modernisation' },
    { year: 2020, name: 'Central San Lorenzo', country: 'Costa Rica', power: '2x8650KVA', type: 'Modernisation' },
    { year: 2020, name: 'Centrale du Haut Bens', country: 'France (38)', power: '1900KVA', type: 'Nouveau projet' },
    { year: 2019, name: 'Centrale de Sanga - Phase 2', country: 'RDC', power: '3x3750KVA', type: 'Réhabilitation complète' },
    { year: 2019, name: 'Centrale de Bendera', country: 'RDC', power: '2x10750KVA', type: 'Réhabilitation complète' },
    { year: 2019, name: 'Centrale des Moulins', country: 'France (38)', power: '2x8000KVA', type: 'Modernisation' },
    { year: 2018, name: 'Zoti HEPP', country: 'Géorgie', power: '1x25245KVA + 2x14555KVA', type: 'Ingénierie complète' },
    { year: 2017, name: 'Centrale de Sahanivotry', country: 'Madagascar', power: '3x6875KVA', type: 'Modernisation' },
    { year: 2016, name: 'Centrale de Sanga', country: 'RDC', power: '3x3750KVA', type: 'Réhabilitation complète' },
    { year: 2015, name: 'Central Chocosuela', country: 'Costa Rica', power: '2x7200KVA', type: 'Modernisation' },
    { year: 2015, name: 'Centrale du Bazacle', country: 'France (31)', power: '7 groupes', type: 'Modernisation' },
    { year: 2014, name: 'Kalen & AKSU HEPP', country: 'Turquie', power: '5 groupes', type: 'SCADA cascade' },
    { year: 2013, name: 'Pont des moines', country: 'France (15)', power: '3x1700KVA', type: 'Nouveau projet' },
    { year: 2012, name: 'Sirimtas HEPP', country: 'Turquie', power: '2x15100KVA', type: 'Nouveau projet' },
    { year: 2012, name: 'ZINGUIZAPA', country: 'Honduras', power: '1x3200KVA', type: 'Nouveau projet' },
    { year: 2011, name: 'Central Aguas Zarcas', country: 'Costa Rica', power: '3 groupes', type: 'Modernisation SCADA' }
  ];

  const years = ['all', ...Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a)];
  
  const filteredProjects = selectedYear === 'all' 
    ? projects 
    : projects.filter(p => p.year === parseInt(selectedYear));

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nos Références
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Plus de 14 ans d'expérience à travers le monde
          </p>
        </div>
        
        {/* Stats */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 text-center shadow-lg">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-2">
                12
              </div>
              <p className="text-gray-600 font-medium">Pays d'intervention</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 text-center shadow-lg">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 mb-2">
                320
              </div>
              <p className="text-gray-600 font-medium">MW de puissance cumulée</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 text-center shadow-lg">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-2">
                {projects.length}+
              </div>
              <p className="text-gray-600 font-medium">Projets réalisés</p>
            </div>
          </div>
        </div>

        {/* Régions */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Nos Interventions par Région</h3>
            <div className="space-y-6">
              {regions.map((region, index) => (
                <div key={index} className="border-l-4 border-orange-500 pl-6 py-2">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">{region.emoji}</span> {region.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country) => (
                      <span 
                        key={country} 
                        className="bg-orange-50 border border-orange-300 text-orange-600 px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* … ton iframe … */}
        <div className="rounded-xl overflow-hidden border-2 border-gray-700">
          <iframe 
            src="https://www.google.com/maps/d/embed?mid=1H9DAzR8xL4KoRGHquQCrxzv9f5s&ehbc=2E312F" 
            width="100%" 
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte des projets ENCOSYST"
          />
        </div>

        {/* Légende sous la carte */}
        <div className="mt-4 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Item 1 */}
            <div className="flex items-center gap-3 p-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500">
                <MapPin size={18} className="text-white" />
              </span>
              <span className="text-gray-800 font-medium">Nouveau projet</span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3 p-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500">
                <MapPin size={18} className="text-white" />
              </span>
              <span className="text-gray-800 font-medium">Modernisation / Réhabilitation</span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3 p-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-700">
                <MapPin size={18} className="text-white" />
              </span>
              <span className="text-gray-800 font-medium">Services</span>
            </div>
          </div>
        </div>


                

        {/* Projets */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Calendar className="text-orange-500" size={28} />
                Liste des Projets
              </h3>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">Toutes les années</option>
                {years.filter(y => y !== 'all').map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-orange-500 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-orange-500 font-bold text-lg">{project.year}</span>
                        <h4 className="font-bold text-gray-900 text-lg">{project.name}</h4>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="text-gray-600 flex items-center gap-1">
                          <MapPin size={14} className="text-green-500" />
                          {project.country}
                        </span>
                        <span className="bg-green-50 border border-green-300 text-green-600 px-3 py-1 rounded-full font-medium">
                          {project.power}
                        </span>
                        <span className="bg-orange-50 border border-orange-300 text-orange-600 px-3 py-1 rounded-full font-medium">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Localisation */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="text-orange-500" size={28} />
              Notre Localisation
            </h3>
            <p className="text-gray-900 mb-2 text-lg font-semibold">
              13 Impasse Perbost - Zone Perbost
            </p>
            <p className="text-gray-900 mb-6 text-lg">
              31800 Labarthe Inard, France
            </p>
            <p className="text-gray-600 mb-6">
              Au pied des Pyrénées dans le Sud-Ouest de la France
            </p>
            
            <a 
              href="https://www.google.com/maps/search/13+Impasse+Perbost+31800+Labarthe+Inard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}