import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingWidget from './components/BookingWidget';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Developer from './components/Developer';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <BookingWidget />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Location />
        <Testimonials />
        <Developer />
      </main>
      <Footer />
    </div>
  );
};

export default App;