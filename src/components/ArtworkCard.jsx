import { Link } from 'react-router-dom';
import { useGallery } from '../context/GalleryContext.jsx';
export default function ArtworkCard({ artwork }) {
  const { addToCart, toggleFavourite, favourites } = useGallery();
  return <article className="art-card"><div className="art-image"><Link to={`/artworks/${artwork.id}`}><img src={artwork.image} alt={artwork.title}/></Link><button className={`heart ${favourites.includes(artwork.id) ? 'active' : ''}`} onClick={() => toggleFavourite(artwork.id)} aria-label="Toggle favourite">♥</button></div><div className="art-info"><small>{artwork.category} · {artwork.artist}</small><h3><Link to={`/artworks/${artwork.id}`}>{artwork.title}</Link></h3><div className="art-bottom"><b>₹{Number(artwork.price).toLocaleString('en-IN')}</b><button onClick={() => { addToCart(artwork.id); alert('Artwork added to cart'); }}>Add to cart</button></div></div></article>;
}
