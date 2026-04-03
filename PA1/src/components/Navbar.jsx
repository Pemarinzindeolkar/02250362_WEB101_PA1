import React from "react"; // Import React library
import { Link } from "react-router-dom"; // Import Link for client-side routing
import { ImSearch } from "react-icons/im"; // Import search icon
import netflixLogo from "../assets/netflix-logo.png"; // Import Netflix logo image

// Navbar component
function Navbar() {
  return (
    <div>
      {/* Main navigation bar */}
      <nav className="navbar">
        {/* Left section of navbar */}
        <div className="navbar nav-left">
          {/* Logo: reloads page when clicked */}
          <img
            src={netflixLogo}
            alt="netflixLogo"
            className="netflix-logo"
            onClick={() => window.location.reload()}
          />
          {/* Navigation links */}
          <Link to="/">TV Shows</Link>
          <Link to="/">Movies</Link>
          <Link to="/">Recently Added</Link>
          <Link to="/">My List</Link>
        </div>
        {/* Search icon on the right */}
        <ImSearch />
      </nav>
    </div>
  );
}

export default Navbar; // Export Navbar component