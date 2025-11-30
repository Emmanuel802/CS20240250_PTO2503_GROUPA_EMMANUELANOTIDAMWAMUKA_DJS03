// fetchPodcasts.js

/**
 * Fetches podcasts from the API and updates loading, error,
 * and podcast states.
 */
export async function fetchPodcasts(setPodcasts, setError, setLoading) {
  setLoading(true);

  try {
    const response = await fetch("https://podcast-api.netlify.app/shows");

    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }

    const results = await response.json();

    setPodcasts(results);
  } catch (error) {
    setError(error.message);
    console.log("Fetch failed:", error);
  } finally {
    setLoading(false);
  }
}
