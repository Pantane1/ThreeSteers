import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-navy-950 text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Experience the art of hospitality in a setting defined by heritage, luxury, and comfort.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={18} />
                <span>123 Luxury Avenue,<br/>Metropolis District, 10010</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-gold-500 flex-shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-gold-500 flex-shrink-0" size={18} />
                <span>concierge@threesteers.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="#rooms" className="text-gray-400 hover:text-gold-500 transition-colors">Accommodations</a></li>
              <li><a href="#amenities" className="text-gray-400 hover:text-gold-500 transition-colors">Wellness & Spa</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-gold-500 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-white">Newsletter</h3>
            <p className="text-gray-400 text-sm">Subscribe to receive exclusive offers and seasonal updates.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-navy-800 border border-navy-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
              />
              <Button variant="primary" size="sm" className="w-full">Subscribe</Button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 text-center text-sm text-gray-500">
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