import React, { useState } from 'react';
import { ROOMS } from '../constants';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import Modal from './ui/Modal';
import { User, Maximize, Check, Wifi, Coffee, Wind, Tv } from 'lucide-react';
import { Room } from '../types';

const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const batianRooms = ROOMS.filter(r => r.category === 'Batian Wing');
  const lenanaRooms = ROOMS.filter(r => r.category === 'Lenana Wing');

  const handleBookRoom = () => {
    setSelectedRoom(null);
    const element = document.getElementById('booking');
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  const RoomCard = ({ room }: { room: Room }) => (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer"
      onClick={() => setSelectedRoom(room)}
    >
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
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-serif text-xl text-navy-900 mb-2">{room.name}</h3>
        <p className="text-charcoal-800/80 mb-6 text-sm leading-relaxed flex-grow line-clamp-3">
          {room.description}
        </p>
        <div className="flex items-center gap-6 mb-6 text-sm text-charcoal-800/60 border-y border-gray-100 py-4">
          <div className="flex items-center gap-2">
            <User size={16} className="text-gold-500" />
            <span>{room.guests} Guests</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize size={16} className="text-gold-500" />
            <span>{room.size}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-lg text-navy-900 font-bold">KSh {room.priceKsh.toLocaleString()}</span>
              <span className="text-xs text-charcoal-800/60">/night</span>
            </div>
            <span className="text-xs text-charcoal-800/60 font-medium">${room.price} USD</span>
          </div>
          <Button variant="primary" size="sm" onClick={(e) => {
            e.stopPropagation();
            setSelectedRoom(room);
          }}>
            Details
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-2 block">Accommodations</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6">Rooms & Suites</h2>
          <p className="text-charcoal-800 text-lg font-light">
            Choose between the modern luxury of our Batian Wing or the vintage elegance of the Lenana Wing.
          </p>
        </div>

        {/* Batian Wing */}
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <h3 className="text-3xl font-serif text-navy-900">Batian Wing</h3>
            <div className="h-px bg-gray-200 flex-grow"></div>
            <span className="text-sm uppercase tracking-widest text-gold-600 font-medium">Modern & Luxurious</span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {batianRooms.map((room, index) => (
            <Reveal key={room.id} delay={index * 100}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>

        {/* Lenana Wing */}
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <h3 className="text-3xl font-serif text-navy-900">Lenana Wing</h3>
            <div className="h-px bg-gray-200 flex-grow"></div>
            <span className="text-sm uppercase tracking-widest text-gold-600 font-medium">Vintage Elegance</span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {lenanaRooms.map((room, index) => (
            <Reveal key={room.id} delay={index * 100}>
              <RoomCard room={room} />
            </Reveal>
          ))}
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
                <span className="text-gold-600 uppercase text-xs tracking-widest font-bold mb-1 block">{selectedRoom.category}</span>
                <h4 className="font-serif text-2xl text-navy-900 mb-2">{selectedRoom.name}</h4>
                 <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><User size={14}/> {selectedRoom.guests} Guests</span>
                    <span className="flex items-center gap-1"><Maximize size={14}/> {selectedRoom.size}</span>
                 </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <span className="block text-3xl font-serif text-gold-600 font-bold">KSh {selectedRoom.priceKsh.toLocaleString()}</span>
                <span className="text-xl text-gray-500 font-medium">${selectedRoom.price} USD</span>
                <span className="text-sm text-gray-400">/ night</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {selectedRoom.description}
            </p>

            <div className="bg-cream-50 p-6 rounded-lg border border-gold-100">
              <h5 className="font-semibold text-navy-900 mb-4 uppercase tracking-wider text-sm">Room Amenities</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {selectedRoom.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-charcoal-800 text-sm">
                    <Check size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span>{amenity}</span>
                  </div>
                ))}
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