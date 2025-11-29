import React from 'react';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-2 block">Journal</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-8">Latest News & Stories</h2>
          
          <div className="max-w-2xl mx-auto bg-cream-50 p-10 rounded-lg border border-gold-100/50">
            <p className="text-xl text-charcoal-800 font-light italic mb-6">
              "Let our blog inspire your next getaway with insider information on Local Attractions, Travel Guides, and Special Offers. Happy Reading!"
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded shadow-sm text-sm font-semibold text-navy-900">Local Attractions</div>
              <div className="bg-white p-4 rounded shadow-sm text-sm font-semibold text-navy-900">Travel Guides</div>
              <div className="bg-white p-4 rounded shadow-sm text-sm font-semibold text-navy-900">Special Offers</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Blogs;