import React, { useState } from 'react';
import { ROOMS } from '../constants';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import Modal from './ui/Modal';
import { User, Maximize, Check, Wifi, Coffee, Wind, Tv } from 'lucide-react';
import { Room } from '../types';

const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleBookRoom = () => {
    setSelectedRoom(null);
    const element = document.getElementById('booking');
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-2 block">Accommodations</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6">Suites & Rooms</h2>
          <p className="text-charcoal-800 text-lg font-light">
            Each of our rooms is a sanctuary of peace, featuring bespoke furniture, premium linens, and breathtaking views.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ROOMS.map((room, index) => (
            <Reveal key={room.id} delay={index * 100}>
              <div 
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedRoom(room)}
              >
                
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={room.imageUrl} 
                    alt={room.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-500"></div>
                  {room.featured && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-sm">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl text-navy-900">{room.name}</h3>
                  </div>
                  
                  <p className="text-charcoal-800/80 mb-6 text-sm leading-relaxed flex-grow">
                    {room.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-6 mb-6 text-sm text-charcoal-800/60 border-y border-gray-100 py-4">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gold-500" />
                      <span>Up to {room.guests} Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize size={16} className="text-gold-500" />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="block text-xs text-charcoal-800/60 uppercase">Starting from</span>
                      <span className="font-serif text-2xl text-navy-900 font-bold">${room.price}</span>
                      <span className="text-xs text-charcoal-800/60">/night</span>
                    </div>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedRoom(room);
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" onClick={() => setSelectedRoom(ROOMS[0])}>View All Accommodations</Button>
        </div>

      </div>

      {/* Room Detail Modal */}
      <Modal 
        isOpen={!!selectedRoom} 
        onClose={() => setSelectedRoom(null)}
        title={selectedRoom?.name}
      >
        {selectedRoom && (
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden h-64 md:h-80 w-full">
              <img src={selectedRoom.imageUrl} alt={selectedRoom.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <h4 className="font-serif text-2xl text-navy-900 mb-2">{selectedRoom.name}</h4>
                 <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><User size={14}/> {selectedRoom.guests} Guests</span>
                    <span className="flex items-center gap-1"><Maximize size={14}/> {selectedRoom.size}</span>
                 </div>
              </div>
              <div className="text-right">
                <span className="block text-3xl font-serif text-gold-600 font-bold">${selectedRoom.price}</span>
                <span className="text-sm text-gray-400">/ night</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {selectedRoom.description} This suite offers an unparalleled experience in comfort and style. Perfect for those seeking a luxurious getaway with top-tier amenities.
            </p>

            <div className="bg-cream-50 p-6 rounded-lg border border-gold-100">
              <h5 className="font-semibold text-navy-900 mb-4 uppercase tracking-wider text-sm">Room Amenities</h5>
              <div className="grid grid-cols-2 gap-3">
                {selectedRoom.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-charcoal-800">
                    <Check size={16} className="text-gold-500" />
                    <span>{amenity}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 text-charcoal-800"><Wifi size={16} className="text-gold-500" /><span>Free High-Speed Wi-Fi</span></div>
                <div className="flex items-center gap-2 text-charcoal-800"><Tv size={16} className="text-gold-500" /><span>55" Smart TV</span></div>
                <div className="flex items-center gap-2 text-charcoal-800"><Wind size={16} className="text-gold-500" /><span>Climate Control</span></div>
                <div className="flex items-center gap-2 text-charcoal-800"><Coffee size={16} className="text-gold-500" /><span>Espresso Machine</span></div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <Button variant="primary" className="flex-1" onClick={handleBookRoom}>
                Book This Room Now
              </Button>
              <Button variant="outline" onClick={() => setSelectedRoom(null)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
};

export default Rooms;