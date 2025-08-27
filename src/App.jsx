import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NFTDetails from "./pages/NFTDetails.jsx";
export default function App() {
  return (
    <div className="container">
      <header className="nav">
        <NavLink to="/" className="brand">NFT Gallery </NavLink>
        <nav className="links">
          <a href="https://example.com" target=" _blank" rel="noreferrer">Docs</a>
          <a href="https://example.com" target=" _blank" rel="noreferrer">About</a>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nft/:id" element={<NFTDetails />} />
        </Routes>
      </main>

      <footer className="footer">© {new Date().getFullYear()} NFT Gallery</footer>
    </div>
  );
}