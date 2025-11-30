// PodcastCard.jsx

import { formatDate } from "../utils/formatDate";

/**
 * Displays one podcast card (image, title, seasons, genres, updated date).
 */
export default function PodcastCard({ podcast, genres }) {
  const genreLabels = podcast.genres.map((genreId) => {
    const found = genres.find((g) => g.id === genreId);

    return (
      <span key={genreId} className="tag">
        {found ? found.title : "Unknown (" + genreId + ")"}
      </span>
    );
  });

  return (
    <div className="card">
      <img src={podcast.image} alt={podcast.title} />

      <h3>{podcast.title}</h3>
      <p className="seasons">{podcast.seasons} seasons</p>

      <div className="tags">{genreLabels}</div>

      <p className="updated-text">Updated {formatDate(podcast.updated)}</p>
    </div>
  );
}
