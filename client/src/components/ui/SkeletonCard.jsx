import React from 'react';

/**
 * A reusable skeleton loading component.
 * It displays an animated placeholder to indicate that content is being loaded.
 * @param {object} props - The component props.
 * @param {string} props.className - Additional CSS classes to apply for custom sizing (e.g., 'h-64').
 */
function SkeletonCard({ className }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`}>
      {/* This inner div creates the slightly darker pulse effect */}
      <div className="h-full w-full bg-gray-300 rounded-lg"></div>
    </div>
  );
}

export default SkeletonCard;