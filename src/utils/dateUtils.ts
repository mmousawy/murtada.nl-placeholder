/**
 * Formats a date string (yyyy-mm-dd) to a locale string with ordinal suffix
 * Example: "2025-09-16" -> "September 16th, 2025"
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();
  
  // Add ordinal suffix
  const getOrdinalSuffix = (n: number): string => {
    const j = n % 10;
    const k = n % 100;
    if (j === 1 && k !== 11) return 'st';
    if (j === 2 && k !== 12) return 'nd';
    if (j === 3 && k !== 13) return 'rd';
    return 'th';
  };
  
  return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
};

