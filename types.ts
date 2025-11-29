export interface Room {
  id: string;
  name: string;
  category: 'Batian Wing' | 'Lenana Wing';
  description: string;
  price: number;
  priceKsh: number;
  size: string;
  guests: number;
  amenities: string[];
  imageUrl: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  imageUrl: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Attraction {
  id: string;
  name: string;
  type: string;
  distance: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum BookingStatus {
  IDLE = 'IDLE',
  CHECKING = 'CHECKING',
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE'
}