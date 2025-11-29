import React, { useState } from 'react';
import { Calendar, User, Search } from 'lucide-react';
import Button from './ui/Button';

const BookingWidget: React.FC = () => {
  const [dates, setDates] = useState({ checkIn: '', checkOut: '' });
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Checking availability for ${guests} guests from ${dates.checkIn} to ${dates.checkOut}`);
  };

  return (
    <div id="booking" className="w-full max-w-6xl mx-auto -mt-24 relative z-20 px-4 scroll-mt-32">
      <div className="bg-white shadow-xl rounded-lg p-6 lg:p-8 border-t-4 border-gold-500">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          
          {/* Check In */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-charcoal-800 uppercase tracking-wider flex items-center gap-2">
              <Calendar size={16} className="text-gold-500" /> Check In
            </label>
            <input 
              type="date" 
              className="w-full border-b-2 border-gray-200 py-2 text-charcoal-900 focus:border-gold-500 focus:outline-none transition-colors bg-transparent font-serif"
              onChange={(e) => setDates({...dates, checkIn: e.target.value})}
              required
            />
          </div>

          {/* Check Out */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-charcoal-800 uppercase tracking-wider flex items-center gap-2">
              <Calendar size={16} className="text-gold-500" /> Check Out
            </label>
            <input 
              type="date" 
              className="w-full border-b-2 border-gray-200 py-2 text-charcoal-900 focus:border-gold-500 focus:outline-none transition-colors bg-transparent font-serif"
              onChange={(e) => setDates({...dates, checkOut: e.target.value})}
              required
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-charcoal-800 uppercase tracking-wider flex items-center gap-2">
              <User size={16} className="text-gold-500" /> Guests
            </label>
            <select 
              className="w-full border-b-2 border-gray-200 py-2 text-charcoal-900 focus:border-gold-500 focus:outline-none transition-colors bg-transparent font-serif"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <div>
            <Button type="submit" variant="secondary" className="w-full h-12">
              Check Availability
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BookingWidget;