import React from 'react';
import Reveal from './ui/Reveal';
import { Utensils, Coffee } from 'lucide-react';

const Dining: React.FC = () => {
  return (
    <section id="dining" className="py-24 bg-navy-900 text-white relative">
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1920)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-2 block">Taste</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Food & Drinks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Aberdares Restaurant */}
          <Reveal>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10 hover:border-gold-500/50 transition-colors h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-navy-900">
                  <Utensils size={24} />
                </div>
                <h3 className="text-2xl font-serif text-white">Aberdares Restaurant</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Indulge in a symphony of flavours at the Aberdares Restaurant. Let your foodie dreams come alive in a tantalizing culinary extravaganza. Our skilled chefs orchestrate a feast of mouthwatering delights, meticulously curated just for you.
              </p>
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600" alt="Aberdares Restaurant" className="w-full h-48 object-cover rounded-sm shadow-md opacity-90" />
            </div>
          </Reveal>

          {/* Master's Lounge */}
          <Reveal delay={200}>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10 hover:border-gold-500/50 transition-colors h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-navy-900">
                  <Coffee size={24} />
                </div>
                <h3 className="text-2xl font-serif text-white">Master's Lounge</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Unwind, connect, and let your spirit soar in the Master's Lounge. The perfect setting to relax after a long day or to meet with friends and colleagues.
              </p>
              <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=600" alt="Master's Lounge" className="w-full h-48 object-cover rounded-sm shadow-md opacity-90" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Dining;