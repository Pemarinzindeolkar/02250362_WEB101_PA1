import { useState, useEffect } from "react"; // Import React hooks
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import routing components
import { Home } from "./pages"; // Import Home page component
import { Navbar, PreLoader } from "./components"; // Import Navbar and PreLoader components
import "./scss/App.scss"; // Import main App styling

function App() {
  // State to manage loading screen
  const [isLoading, setIsLoading] = useState(true);

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Set a timeout to simulate loading (1.2 seconds)
    setTimeout(() => {
      setIsLoading(false); // Hide preloader after timeout
    }, 1200);
  }, []);

  return (
    // BrowserRouter enables routing for the app
    <BrowserRouter>
      <div className="app">
        {/* Conditional rendering: show PreLoader while loading */}
        {isLoading ? (
          <PreLoader load={isLoading} />
        ) : (
          // Main app content displayed after loading
          <div className="netflix-app">
            <Navbar /> {/* Navigation bar component */}
            <Routes>
              {/* Define routes for the app */}
              <Route path="/" element={<Home />} /> {/* Home page route */}
              <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes to Home */}
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App; // Export App component