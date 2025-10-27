'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, User } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulaire soumis ! (À connecter à votre backend)');
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Notre équipe est à votre disposition pour répondre à vos besoins
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Infos contact */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-50 border-2 border-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-green-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Adresse</h3>
                  <p className="text-gray-600 leading-relaxed">
                    13 Impasse Perbost - Zone Perbost<br />
                    31800 Labarthe Inard<br />
                    France
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Au pied des Pyrénées, Sud-Ouest de la France
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-50 border-2 border-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-orange-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Téléphone</h3>
                  <a 
                    href="tel:+33561953342"
                    className="text-gray-600 hover:text-orange-500 transition-colors text-lg"
                  >
                    +33 (0) 5 61 95 33 42
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-50 border-2 border-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-green-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Email</h3>
                  <a 
                    href="mailto:contact@encosyst.com"
                    className="text-gray-600 hover:text-green-500 transition-colors"
                  >
                    contact@encosyst.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-50 border-2 border-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="text-orange-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Responsable</h3>
                  <p className="text-gray-600">M. Laurent LOPES</p>
                  <p className="text-gray-500 text-sm mt-2">Directeur</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-200 shadow-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Informations légales</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="text-gray-500">Raison sociale :</span> ENCOSYST</p>
                <p><span className="text-gray-500">RCS :</span> TOULOUSE - B 529 905 697</p>
                <p><span className="text-gray-500">Forme juridique :</span> SASU</p>
                <p><span className="text-gray-500">Activité :</span> Ingénierie, études techniques</p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-400"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-400"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-400"
                  placeholder="+33 X XX XX XX XX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-gray-400 resize-none"
                  placeholder="Décrivez votre projet ou votre besoin..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-lg font-bold transition-all text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Envoyer le message
              </button>
              
              <p className="text-gray-500 text-xs text-center">
                * Champs obligatoires
              </p>
            </form>
          </div>
        </div>

        {/* Horaires */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Horaires d'ouverture
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-gray-600 mb-2">Lundi - Vendredi</p>
                <p className="text-gray-900 font-semibold text-lg">9h00 - 12h30 / 14h00 - 18h00</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Weekend</p>
                <p className="text-gray-900 font-semibold text-lg">Fermé</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center mt-6">
              Pour les urgences ou interventions internationales, nous restons joignables 24h/24
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}