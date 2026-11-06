import Header from './Header.jsx'; import Categories from './Categories.jsx'; import Footer from './Footer.jsx';
export default function PageLayout({children,admin=false}){return <div className="container"><Header/><Categories isAdmin={admin}/><main className="page-content">{children}</main><Footer/></div>;}
