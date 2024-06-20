import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="flex items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-200"></div>
        <span className="ml-4 text-white">Processing...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;