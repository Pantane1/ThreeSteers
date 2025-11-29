import React from 'react';
import { ChevronDown } from 'lucide-react';
import BookingWidget from './BookingWidget';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex flex-col justify-end">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop" 
          alt="Three Steers Hotel Exterior" 
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-950/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-navy-950/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center text-center px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <span className="block font-accent text-gold-500 italic text-xl md:text-2xl tracking-wide animate-fade-in-up">
            Karibu (Welcome) to
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight leading-tight drop-shadow-lg">
            THREE STEERS <br/> <span className="text-gold-400">HOTEL, MERU</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Experience the pinnacle of hospitality in the heart of Kenya. Where heritage meets modern luxury.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10 hidden md:block animate-bounce text-white/80">
        <ChevronDown size={32} />
      </div>

      {/* Spacer for Booking Widget overlap */}
      <div className="h-24 w-full"></div>
    </section>
  );
};

export default Hero;