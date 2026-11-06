import { Link } from 'react-router-dom';
export default function Categories({ isAdmin = false }) {
  const admin = [['Dashboard','/admin/dashboard'],['Artworks','/admin/artworks'],['Artists','/admin/artists'],['Auctions','/admin/auctions'],['Users','/admin/users'],['Exhibitions','/admin/exhibitions']];
  const user = [['Home','/user/dashboard'],['All Artworks','/artworks'],['Categories','/artworks'],['Auctions','/auctions'],['Artists','/artists'],['Favourites','/favourites'],['Cart','/cart'],['Reviews','/reviews']];
  return <nav className="categories">{(isAdmin ? admin : user).map(([label, path]) => <Link key={label} to={path}>{label}</Link>)}</nav>;
}
