import React from 'react';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream-100 overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <Reveal>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gold-500"></div>
                <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm">Welcome</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
                Your Urban <span className="italic font-serif text-gold-600">Sanctuary</span> in<br/> the Heart of Meru
              </h2>
              
              <p className="text-charcoal-800 text-lg leading-relaxed font-light">
                Welcome to the Three Steers Hotel. With two distinct wings—the modern <strong>Batian Wing</strong> and the classically elegant <strong>Lenana Wing</strong>—we offer a perfect stay for every traveler. 
              </p>
              
              <p className="text-charcoal-800 text-lg leading-relaxed font-light">
                Indulge in exquisite dining, host memorable events, and embark on enchanting adventures, all from the comfort of our sophisticated haven.
              </p>

              <div className="pt-4">
                <Button variant="outline">Learn More About Us</Button>
              </div>
            </div>
          </Reveal>

          {/* Image Grid */}
          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold-500 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold-500 z-0"></div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=400" 
                  alt="Lush Gardens at Three Steers" 
                  className="w-full h-64 object-cover rounded-sm shadow-lg transform translate-y-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551632436-cbf8dd354ca8?auto=format&fit=crop&q=80&w=400" 
                  alt="Fine Dining Service" 
                  className="w-full h-64 object-cover rounded-sm shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400" 
                  alt="Spa and Wellness" 
                  className="w-full h-64 object-cover rounded-sm shadow-lg transform translate-y-8"
                />
                 <div className="bg-navy-900 flex items-center justify-center p-8 text-center rounded-sm shadow-lg">
                    <div className="space-y-2">
                      <span className="block text-4xl font-serif text-gold-500">2</span>
                      <span className="block text-white text-sm uppercase tracking-widest">Unique Wings</span>
                    </div>
                 </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default About;