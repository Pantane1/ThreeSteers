import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';
import Reveal from './ui/Reveal';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-2 block">Guest Stories</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900">Unforgettable Moments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 150}>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative h-full flex flex-col">
                <Quote className="absolute top-6 right-6 text-gold-100 fill-current" size={48} />
                
                <div className="flex gap-1 mb-6 text-gold-500">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>

                <p className="text-charcoal-800 font-light text-lg italic mb-8 flex-grow">
                  "{t.comment}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={t.imageUrl} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-200"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-navy-900">{t.name}</h4>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{t.location}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;