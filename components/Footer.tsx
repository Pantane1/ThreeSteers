import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-navy-950 text-white pt-24 pb-8 overflow-hidden">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920" 
          alt="Hotel Night View" 
          className="w-full h-full object-cover opacity-10 blur-[2px]"
        />
        <div className="absolute inset-0 bg-navy-950/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest uppercase text-white">
                Three Steers
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gold-500 uppercase">
                Hotel & Suites
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Located 227KM from Nairobi along the Meru–Nairobi highway. Experience the art of hospitality.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://web.facebook.com/hotelthreesteers?_rdc=1&_rdr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/threesteershotelmeru/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://x.com/Threesteers" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6 col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="font-serif text-xl text-white">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={18} />
                  <span>B6, Meru, Kenya<br/>Meru–Nairobi Highway</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="text-gold-500 flex-shrink-0" size={18} />
                  <a href="mailto:reservation@threesteershotel.com" className="hover:text-gold-500 transition-colors">reservation@threesteershotel.com</a>
                </li>
              </ul>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <Phone className="text-gold-500 mt-1 flex-shrink-0" size={18} />
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-sm font-semibold">Sales Line:</span>
                    <a href="tel:+254728588005" className="hover:text-gold-500 transition-colors">+254 728 588 005</a>
                    <a href="tel:+254735497772" className="hover:text-gold-500 transition-colors">+254 735 497 772</a>
                    <span className="text-xs italic">(Mon - Fri, 9:00 AM - 5:00 PM)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Clock className="text-gold-500 mt-1 flex-shrink-0" size={18} />
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-sm font-semibold">Front Desk:</span>
                    <a href="tel:+254728588005" className="hover:text-gold-500 transition-colors">+254 (0) 728 588 005</a>
                    <span className="text-xs italic">(Mon - Sun, 8:00 AM - 8:00 PM)<br/>24/7 for on-site guests</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form Link */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-white">Get in Touch</h3>
            <p className="text-gray-400 text-sm">Have questions? Send us a message directly.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-navy-800/80 border border-navy-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors text-sm"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-navy-800/80 border border-navy-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors text-sm"
              />
              <Button variant="primary" size="sm" className="w-full">Send Message</Button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800/50 pt-8 text-center text-sm text-gray-500">
          <p className="mb-2">&copy; {new Date().getFullYear()} Three Steers Hotel & Suites. All rights reserved.</p>
          <p className="text-xs text-gray-600">
            Website created by <span className="text-gold-500">Pantane</span> | 
            Email: <a href="mailto:pantane254@gmail.com" className="hover:text-gold-500 transition-colors">pantane254@gmail.com</a> | 
            WhatsApp: <a href="https://wa.me/254740312402" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">+254 740 312 402</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;