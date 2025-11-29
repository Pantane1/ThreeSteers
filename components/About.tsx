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
                <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm">Our Story</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
                A Legacy of <span className="italic font-serif text-gold-600">Excellence</span> & <br/> True Hospitality
              </h2>
              
              <p className="text-charcoal-800 text-lg leading-relaxed font-light">
                Founded in 1965, Three Steers Hotel began as a modest inn and has transformed into the region's premier luxury destination. We pride ourselves on blending the warmth of traditional hospitality with the sophistication of modern amenities.
              </p>
              
              <p className="text-charcoal-800 text-lg leading-relaxed font-light">
                Every corner of our establishment tells a story, from the hand-carved mahogany in our lobby to the locally sourced artwork adorning our suites. We invite you to become part of our history.
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
                  src="https://picsum.photos/id/435/400/500" 
                  alt="Hotel Architecture" 
                  className="w-full h-64 object-cover rounded-sm shadow-lg transform translate-y-8"
                />
                <img 
                  src="https://picsum.photos/id/225/400/500" 
                  alt="Fine Dining" 
                  className="w-full h-64 object-cover rounded-sm shadow-lg"
                />
                <img 
                  src="https://picsum.photos/id/364/400/500" 
                  alt="Spa Treatment" 
                  className="w-full h-64 object-cover rounded-sm shadow-lg transform translate-y-8"
                />
                 <div className="bg-navy-900 flex items-center justify-center p-8 text-center rounded-sm shadow-lg">
                    <div className="space-y-2">
                      <span className="block text-4xl font-serif text-gold-500">50+</span>
                      <span className="block text-white text-sm uppercase tracking-widest">Years of Service</span>
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