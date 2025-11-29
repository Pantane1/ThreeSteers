import React from 'react';
import { ChevronDown } from 'lucide-react';
import BookingWidget from './BookingWidget';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex flex-col justify-end">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/403/1920/1080" 
          alt="Luxury Hotel Lobby" 
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="block font-accent text-gold-500 italic text-xl md:text-2xl tracking-wide animate-fade-in-up">
            Welcome to Paradise
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight leading-tight">
            Experience <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Timeless Luxury</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Where traditional heritage meets modern sophistication. Your escape awaits at the heart of the city.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10 hidden md:block animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>

      {/* Spacer for Booking Widget overlap */}
      <div className="h-24 w-full"></div>
    </section>
  );
};

export default Hero;