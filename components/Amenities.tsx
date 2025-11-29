import React from 'react';
import { AMENITIES } from '../constants';
import * as Icons from 'lucide-react';
import Reveal from './ui/Reveal';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header Area */}
          <div className="lg:col-span-4 lg:py-12">
            <Reveal>
              <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Experiences</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">World Class Amenities</h2>
              <p className="text-gray-300 text-lg font-light mb-8">
                Immerse yourself in luxury with our curated selection of amenities designed to elevate your stay.
              </p>
              <a href="#" className="inline-flex items-center text-gold-500 hover:text-white transition-colors border-b border-gold-500 pb-1">
                Explore All Services
              </a>
            </Reveal>
          </div>

          {/* Grid Area */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {AMENITIES.map((amenity, index) => {
                // Dynamic icon rendering
                const IconComponent = (Icons as any)[amenity.iconName] || Icons.HelpCircle;

                return (
                  <Reveal key={amenity.id} delay={index * 100}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors duration-300 group">
                      <div className="w-14 h-14 bg-navy-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gold-500/30">
                        <IconComponent size={28} className="text-gold-500" />
                      </div>
                      <h3 className="font-serif text-xl mb-3 text-white">{amenity.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed">
                        {amenity.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Amenities;