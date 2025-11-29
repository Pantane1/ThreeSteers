import { Room, Testimonial, Amenity, NavItem, Attraction } from './types';
import { Wifi, Utensils, Droplets, Car, Dumbbell, Calendar, MapPin, Coffee } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Presidential Suite',
    description: 'Experience the pinnacle of luxury with panoramic city views, a private lounge, and a master bath with a jacuzzi.',
    price: 850,
    size: '120 sqm',
    guests: 4,
    amenities: ['King Bed', 'Jacuzzi', 'City View', 'Private Lounge', 'Butler Service'],
    imageUrl: 'https://picsum.photos/id/1036/800/600',
    featured: true,
  },
  {
    id: '2',
    name: 'Executive Deluxe',
    description: 'Designed for the business traveler, featuring a dedicated workspace, high-speed internet, and access to the executive club.',
    price: 450,
    size: '65 sqm',
    guests: 2,
    amenities: ['Queen Bed', 'Workspace', 'Lounge Access', 'Rain Shower'],
    imageUrl: 'https://picsum.photos/id/234/800/600',
    featured: false,
  },
  {
    id: '3',
    name: 'Classic Heritage Room',
    description: 'A blend of traditional charm and modern comfort. Features antique furnishings with contemporary amenities.',
    price: 320,
    size: '45 sqm',
    guests: 2,
    amenities: ['Queen Bed', 'Garden View', 'Minibar', 'Smart TV'],
    imageUrl: 'https://picsum.photos/id/366/800/600',
    featured: false,
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: '1',
    title: 'Fine Dining',
    description: 'Experience gourmet cuisine crafted by world-class chefs using local ingredients.',
    iconName: 'Utensils',
  },
  {
    id: '2',
    title: 'Luxury Spa',
    description: 'Rejuvenate your senses with our exclusive range of therapeutic treatments.',
    iconName: 'Droplets',
  },
  {
    id: '3',
    title: 'Valet Parking',
    description: 'Complimentary secure parking with 24/7 valet service for all guests.',
    iconName: 'Car',
  },
  {
    id: '4',
    title: 'Fitness Center',
    description: 'State-of-the-art equipment available 24 hours a day to keep up with your routine.',
    iconName: 'Dumbbell',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Eleanor Sterling',
    location: 'London, UK',
    rating: 5,
    comment: 'The attention to detail at Three Steers is unmatched. The blend of heritage and modern luxury created an unforgettable stay.',
    imageUrl: 'https://picsum.photos/id/64/100/100',
  },
  {
    id: '2',
    name: 'James Harrington',
    location: 'New York, USA',
    rating: 5,
    comment: 'Exceptional service from the moment we arrived. The Presidential Suite exceeded all expectations.',
    imageUrl: 'https://picsum.photos/id/91/100/100',
  },
  {
    id: '3',
    name: 'Sofia Martinez',
    location: 'Madrid, Spain',
    rating: 4,
    comment: 'Beautiful architecture and a wonderful spa experience. Highly recommended for a relaxing getaway.',
    imageUrl: 'https://picsum.photos/id/65/100/100',
  },
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: '1',
    name: 'Royal Botanical Gardens',
    type: 'Nature & Parks',
    distance: '0.8 km',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'The Grand Opera House',
    type: 'Culture & Arts',
    distance: '1.2 km',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'City Central Mall',
    type: 'Shopping',
    distance: '0.5 km',
    rating: 4.5,
  },
  {
    id: '4',
    name: 'Old Town Heritage Walk',
    type: 'History',
    distance: '1.5 km',
    rating: 4.7,
  }
];