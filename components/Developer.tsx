import React from 'react';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import { Phone } from 'lucide-react';

const Developer: React.FC = () => {
  return (
    <section id="about-developer" className="py-20 bg-cream-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="mb-8">
            <span className="text-gold-600 font-semibold tracking-widest uppercase text-xs mb-3 block">Credits</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-6">About the Developer</h2>
            <div className="h-0.5 w-16 bg-gold-500 mx-auto opacity-50"></div>
          </div>

          <p className="text-lg text-charcoal-800 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Hi, I’m <strong className="font-semibold text-navy-900">Pantane</strong>, the developer behind this website. For collaborations, inquiries, or feedback, reach me at <a href="mailto:pantane254@gmail.com" className="text-gold-600 hover:underline hover:text-gold-500 transition-colors font-medium">pantane254@gmail.com</a> or on WhatsApp at <a href="https://wa.me/254740312402" target="_blank" rel="noreferrer" className="text-gold-600 hover:underline hover:text-gold-500 transition-colors font-medium">+254 740 312 402</a>.
          </p>

          <a href="https://wa.me/254740312402" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button variant="primary" className="btn-contact gap-2">
              <Phone size={18} />
              Reach Out via WhatsApp
            </Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Developer;