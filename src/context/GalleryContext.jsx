import { createContext, useContext, useEffect, useState } from 'react';

const GalleryContext = createContext(null);
const starterArtworks = [
  { id: 1, title: 'Golden Horizon', artist: 'Aarav Mehta', category: 'Abstract', price: 12500, image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85', description: 'A warm abstract composition inspired by the changing colours of sunset.', status: 'Available' },
  { id: 2, title: 'Quiet Blue', artist: 'Mira Kapoor', category: 'Modern', price: 9800, image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85', description: 'A calm modern artwork with expressive blue tones.', status: 'Available' },
  { id: 3, title: 'The Old Street', artist: 'Dev Shah', category: 'Landscape', price: 15400, image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85', description: 'A painterly view of a peaceful street and its architecture.', status: 'Available' },
  { id: 4, title: 'Wild Flowers', artist: 'Ananya Rao', category: 'Nature', price: 7600, image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=85', description: 'Bright floral shapes celebrate the beauty of nature.', status: 'Available' },
  { id: 5, title: 'Modern Muse', artist: 'Mira Kapoor', category: 'Portrait', price: 18200, image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85', description: 'A contemporary portrait study with bold colours.', status: 'Available' },
  { id: 6, title: 'Earth Forms', artist: 'Aarav Mehta', category: 'Abstract', price: 11200, image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85', description: 'Layered shapes and natural colours create a balanced composition.', status: 'Available' }
];
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
export function GalleryProvider({ children }) {
  const [artworks, setArtworks] = useState(() => read('artworks', starterArtworks));
  const [artists, setArtists] = useState(() => read('artists', [
    { id: 1, name: 'Aarav Mehta', specialty: 'Abstract & Contemporary', bio: 'Aarav explores colour, shape and movement through contemporary abstract art.' },
    { id: 2, name: 'Mira Kapoor', specialty: 'Modern Art & Portraits', bio: 'Mira creates expressive portraits and modern compositions.' },
    { id: 3, name: 'Dev Shah', specialty: 'Landscape Painting', bio: 'Dev captures familiar places with a thoughtful artistic eye.' }
  ]));
  const [auctions, setAuctions] = useState(() => read('auctions', [
    { id: 1, title: 'Blue in Motion', artist: 'Mira Kapoor', currentBid: 8500, ends: '2027-01-15', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=700&q=80' },
    { id: 2, title: 'Autumn Fields', artist: 'Dev Shah', currentBid: 6200, ends: '2027-01-20', image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=700&q=80' }
  ]));
  const [exhibitions, setExhibitions] = useState(() => read('exhibitions', [{ id: 1, name: 'New Perspectives', date: '2027-02-10', venue: 'Artora Gallery Hall' }]));
  const [users, setUsers] = useState(() => read('users', []));
  const [cart, setCart] = useState(() => read('cart', []));
  const [favourites, setFavourites] = useState(() => read('favourites', []));
  const [reviews, setReviews] = useState(() => read('reviews', []));
  useEffect(() => localStorage.setItem('artworks', JSON.stringify(artworks)), [artworks]);
  useEffect(() => localStorage.setItem('artists', JSON.stringify(artists)), [artists]);
  useEffect(() => localStorage.setItem('auctions', JSON.stringify(auctions)), [auctions]);
  useEffect(() => localStorage.setItem('exhibitions', JSON.stringify(exhibitions)), [exhibitions]);
  useEffect(() => localStorage.setItem('users', JSON.stringify(users)), [users]);
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('favourites', JSON.stringify(favourites)), [favourites]);
  useEffect(() => localStorage.setItem('reviews', JSON.stringify(reviews)), [reviews]);
  const addToCart = id => setCart(old => old.includes(id) ? old : [...old, id]);
  const toggleFavourite = id => setFavourites(old => old.includes(id) ? old.filter(x => x !== id) : [...old, id]);
  return <GalleryContext.Provider value={{ artworks, setArtworks, artists, setArtists, auctions, setAuctions, exhibitions, setExhibitions, users, setUsers, cart, setCart, favourites, setFavourites, reviews, setReviews, addToCart, toggleFavourite }}>{children}</GalleryContext.Provider>;
}
export const useGallery = () => useContext(GalleryContext);
