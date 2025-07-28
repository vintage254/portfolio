import React from 'react';

const DownloadCVButton: React.FC = () => {
  const handleDownload = () => {
    // Using the public URL structure of your site
    const fileUrl = '/cv/DerrickNjuguna.pdf';
    
    // Create invisible anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'DerrickNjuguna.pdf');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-medium tracking-tighter text-white bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 ease-out"
      aria-label="Download Resume"
    >
      <span className="absolute inset-0 rounded-md bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></span>
      <span className="absolute inset-0.5 rounded-md bg-gray-900 group-hover:bg-opacity-90 transition-all duration-300 ease-out"></span>
      <span className="relative flex items-center gap-2 group-hover:text-blue-200 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download CV
      </span>
    </button>
  );
};

export default DownloadCVButton;