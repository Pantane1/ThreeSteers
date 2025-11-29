import React from 'react';
import { ATTRACTIONS } from '../constants';
import { MapPin, Star, Navigation, Compass } from 'lucide-react';
import Reveal from './ui/Reveal';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-2 block">Discover</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900">Fun Experiences</h2>
          <p className="text-charcoal-800 mt-4 text-lg font-light max-w-2xl mx-auto uppercase tracking-wide">
            Embark on enchanting African bush adventures.
          </p>
          <p className="text-sm text-gray-500 mt-2">Contact our sales team to arrange your next excursion.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Map */}
          <Reveal>
            <div className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg border border-gray-300 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.04359495029!2d37.65!3d0.047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17887d1655555555%3A0x0!2sMeru%2C%20Kenya!5e0!3m2!1sen!2ske!4v1656684667824!5m2!1sen!2ske"
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
                   <p className="text-xs text-gray-500 mt-1">B6, Meru, Kenya</p>
                   <div className="flex items-center gap-1 mt-1">
                      <Star size={10} className="text-gold-500 fill-current" />
                      <span className="text-[10px] font-bold">4.2</span>
                      <span className="text-[10px] text-gray-400">(1,502 Reviews)</span>
                   </div>
                 </div>
              </div>
            </div>
          </Reveal>

          {/* Attractions List */}
          <div className="flex flex-col justify-center space-y-4">
             {ATTRACTIONS.map((attraction, index) => (
               <Reveal key={attraction.id} delay={index * 100}>
                 <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:border-gold-500/30 hover:shadow-md transition-all duration-300 group cursor-pointer">
                    <div className="flex justify-between items-center">
                       <h3 className="font-serif text-lg text-navy-900 group-hover:text-gold-600 transition-colors">{attraction.name}</h3>
                       <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-500 bg-cream-100 px-2 py-1 rounded">{attraction.type}</span>
                          <Compass size={18} className="text-gold-500" />
                       </div>
                    </div>
                 </div>
               </Reveal>
             ))}
             
             <Reveal delay={400}>
               <div className="mt-4 p-6 bg-navy-900 text-white rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-lg mb-1">Located in Meru Town</h4>
                    <p className="text-gray-400 text-sm">227KM from Nairobi along the Meru–Nairobi highway.</p>
                  </div>
                  <a href="https://www.google.com/maps/search/?api=1&query=Three+Steers+Hotel+Meru" target="_blank" rel="noopener noreferrer" className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors whitespace-nowrap">
                    Get Directions
                  </a>
               </div>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;