import React from 'react';
import Reveal from './ui/Reveal';
import Button from './ui/Button';
import { Users, Presentation } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-2 block">Business & Celebrations</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900">Conferencing & Banqueting</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <Reveal>
            <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src="https://picsum.photos/id/1/800/400" alt="Summit Hall" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-gold-500" size={24} />
                  <h3 className="font-serif text-2xl text-navy-900">Summit Hall</h3>
                </div>
                <p className="text-charcoal-800 font-light leading-relaxed mb-6">
                  Unlock your success in our modern retreat where ideas flourish and connections thrive. Located on the first floor of the Batian Wing, this hall is equipped with state-of-the-art facilities for smaller, unforgettable conferences and gatherings.
                </p>
                <Button variant="outline" size="sm" className="w-full">Inquire Availability</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
             <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src="https://picsum.photos/id/180/800/400" alt="Conference Room 2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <Presentation className="text-gold-500" size={24} />
                  <h3 className="font-serif text-2xl text-navy-900">Conference Room 2</h3>
                </div>
                <p className="text-charcoal-800 font-light leading-relaxed mb-6">
                  Discover the art of productive meetings & strengthened collaborations. This room, facing the gardens, sparks with innovation and is designed to inspire productivity and unleash your creativity.
                </p>
                <Button variant="outline" size="sm" className="w-full">Inquire Availability</Button>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Events;