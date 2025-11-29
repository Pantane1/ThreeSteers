import React from 'react';
import { ATTRACTIONS } from '../constants';
import { MapPin, Star, Navigation } from 'lucide-react';
import Reveal from './ui/Reveal';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-2 block">Discover</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900">Location & Attractions</h2>
          <p className="text-charcoal-800 mt-4 text-lg font-light max-w-2xl mx-auto">
            Perfectly situated in the heart of the city, providing easy access to premium shopping, cultural landmarks, and business districts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Map */}
          <Reveal>
            <div className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg border border-gray-300 relative group">
              {/* Using a static map image or iframe for demo purposes */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1656684667824!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-sm shadow-md flex items-center gap-3 max-w-xs">
                 <div className="bg-gold-500 text-white p-2 rounded-full">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <p className="font-serif font-bold text-navy-900 leading-tight">Three Steers Hotel</p>
                   <p className="text-xs text-gray-500 mt-1">123 Luxury Avenue, Metropolis</p>
                 </div>
              </div>
            </div>
          </Reveal>

          {/* Attractions List */}
          <div className="flex flex-col justify-center space-y-6">
             {ATTRACTIONS.map((attraction, index) => (
               <Reveal key={attraction.id} delay={index * 100}>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-gold-500/30 hover:shadow-md transition-all duration-300 group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="font-serif text-xl text-navy-900 group-hover:text-gold-600 transition-colors">{attraction.name}</h3>
                       <div className="flex items-center gap-1 bg-cream-100 px-2 py-1 rounded text-xs font-bold text-navy-900">
                          <Star size={12} className="text-gold-500 fill-current" />
                          {attraction.rating}
                       </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                       <div className="text-sm text-gray-500 flex items-center gap-4">
                          <span>{attraction.type}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <span className="text-gold-600 font-medium">{attraction.distance}</span>
                       </div>
                       <button className="text-navy-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                          <Navigation size={20} />
                       </button>
                    </div>
                 </div>
               </Reveal>
             ))}
             
             <Reveal delay={400}>
               <div className="mt-6 p-6 bg-navy-900 text-white rounded-lg flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg mb-1">Need Transportation?</h4>
                    <p className="text-gray-400 text-sm">Our concierge can arrange a private chauffeur.</p>
                  </div>
                  <button className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                    Request Ride
                  </button>
               </div>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;