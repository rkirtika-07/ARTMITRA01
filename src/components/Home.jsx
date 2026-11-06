import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Categories from './Categories.jsx';
import Banner from './Banner.jsx';
import ArtworkCard from './ArtworkCard.jsx';
import Offers from './Offers.jsx';
import Services from './Services.jsx';
import Footer from './Footer.jsx';
import { useGallery } from '../context/GalleryContext.jsx';
export default function Home() {
  const { artworks } = useGallery();
  return <div className="container"><Header/><Categories/><Banner/><section className="section"><div className="section-heading"><div><p className="eyebrow">HANDPICKED FOR YOU</p><h2>Featured artworks</h2></div><Link to="/artworks">View all →</Link></div><div className="art-grid">{artworks.slice(0,4).map(a => <ArtworkCard key={a.id} artwork={a}/>)}</div></section><Offers/><section className="artist-strip"><p className="eyebrow">A WORLD OF CREATIVITY</p><h2>Art is not what you see,<br/><em>but what you make others see.</em></h2><Link className="outline-button" to="/artists">Meet our artists</Link></section><Services/><Footer/></div>;
}
