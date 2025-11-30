// App.jsx

import { useEffect, useState } from "react";
import Header from "./components/Header";
import PodcastGrid from "./components/PodcastGrid";
import { genres } from "./data";
import { fetchPodcasts } from "./api/fetchPodcasts";

/**
 * Main App component.
 * Handles:
 * - fetching podcasts from API
 * - loading and error states
 * - showing podcast cards when ready
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // load data when the app first starts
  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* Loading Screen */}
        {loading && (
          <div className="message-container">
            <div className="spinner"></div>
            <p>Loading podcasts...</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="message-container">
            <div className="error">Could not fetch podcasts: {error}</div>
          </div>
        )}

        {/* Show grid only when everything is okay */}
        {!loading && !error && (
          <PodcastGrid podcasts={podcasts} genres={genres} />
        )}
      </main>
    </>
  );
}
