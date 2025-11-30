// formatDate.js

/**
 * Turns an ISO date string into a readable date.
 * Example: "July 7, 2025"
 */
export function formatDate(value) {
  const dateObject = new Date(value);

  return dateObject.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
