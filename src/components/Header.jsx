import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  const role = localStorage.getItem('loginType');
  const logout = () => { localStorage.removeItem('loggedIn'); localStorage.removeItem('loginType'); localStorage.removeItem('currentUser'); navigate('/'); };
  const submitSearch = e => { e.preventDefault(); navigate(`/artworks?search=${encodeURIComponent(search)}`); };
  return <header className="header">
    <Link className="logo" to="/"><span className="logo-mark">A</span><span>ARTORA<small>ONLINE ART GALLERY</small></span></Link>
    <form className="search" onSubmit={submitSearch}><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search paintings, artists..." /><button>Search</button></form>
    <div className="account">{loggedIn ? <><span>Welcome, {localStorage.getItem('currentUser') || role}</span><button className="logout-button" onClick={logout}>Logout</button></> : <><Link to="/login">Login</Link><span>/</span><Link to="/signup">Register</Link></>}</div>
  </header>;
}
