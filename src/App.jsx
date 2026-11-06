import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import UserDashboard from './pages/user/UserDashboard.jsx';
import Artworks from './pages/user/Artworks.jsx';
import ArtworkDetails from './pages/user/ArtworkDetails.jsx';
import Favourites from './pages/user/Favourites.jsx';
import Cart from './pages/user/Cart.jsx';
import Auctions from './pages/user/Auctions.jsx';
import Artists from './pages/user/Artists.jsx';
import Reviews from './pages/user/Reviews.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import ManageArtworks from './pages/admin/ManageArtworks.jsx';
import ManageArtists from './pages/admin/ManageArtists.jsx';
import ManageAuctions from './pages/admin/ManageAuctions.jsx';
import AllUsers from './pages/admin/AllUsers.jsx';
import ManageExhibitions from './pages/admin/ManageExhibitions.jsx';
import './App.css';

function Guard({ role, children }) {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  const loginType = localStorage.getItem('loginType');
  if (!loggedIn || loginType !== role) return <Navigate to="/login" replace />;
  return children;
}
export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/user/dashboard" element={<Guard role="user"><UserDashboard /></Guard>} />
    <Route path="/artworks" element={<Guard role="user"><Artworks /></Guard>} />
    <Route path="/artworks/:id" element={<Guard role="user"><ArtworkDetails /></Guard>} />
    <Route path="/favourites" element={<Guard role="user"><Favourites /></Guard>} />
    <Route path="/cart" element={<Guard role="user"><Cart /></Guard>} />
    <Route path="/auctions" element={<Guard role="user"><Auctions /></Guard>} />
    <Route path="/artists" element={<Guard role="user"><Artists /></Guard>} />
    <Route path="/reviews" element={<Guard role="user"><Reviews /></Guard>} />
    <Route path="/admin/dashboard" element={<Guard role="admin"><AdminDashboard /></Guard>} />
    <Route path="/admin/artworks" element={<Guard role="admin"><ManageArtworks /></Guard>} />
    <Route path="/admin/artists" element={<Guard role="admin"><ManageArtists /></Guard>} />
    <Route path="/admin/auctions" element={<Guard role="admin"><ManageAuctions /></Guard>} />
    <Route path="/admin/users" element={<Guard role="admin"><AllUsers /></Guard>} />
    <Route path="/admin/exhibitions" element={<Guard role="admin"><ManageExhibitions /></Guard>} />
    <Route path="*" element={<main className="not-found"><h2>404 - Page not found</h2><a href="/">Go Home</a></main>} />
  </Routes>;
}
