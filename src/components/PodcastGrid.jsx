// PodcastGrid.jsx

import PodcastCard from "./PodcastCard";

/**
 * Shows all podcast cards in a grid layout.
 */
export default function PodcastGrid({ podcasts, genres }) {
  return (
    <div className="grid">
      {podcasts.map((item) => (
        <PodcastCard key={item.id} podcast={item} genres={genres} />
      ))}
    </div>
  );
}
