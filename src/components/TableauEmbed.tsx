import React, { useEffect, useRef } from 'react';

interface TableauEmbedProps {
  url: string;
  options?: {
    hideTabs?: boolean;
    hideToolbar?: boolean;
  };
}

export const TableauEmbed: React.FC<TableauEmbedProps> = ({ url, options }) => {
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTableauAPI = async () => {
      try {
        // Check if Tableau API is already loaded
        if (!(window as any).tableau) {
          // Create and append script element
          const script = document.createElement('script');
          script.src = 'https://public.tableau.com/javascripts/api/tableau-2.min.js';
          script.async = true;
          document.head.appendChild(script);

          // Wait for script to load
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
          });
        }

        // Initialize visualization after API is loaded
        const tableau = (window as any).tableau;
        if (vizRef.current && tableau && tableau.Viz) {
          new tableau.Viz(vizRef.current, url, options);
        }
      } catch (error) {
        console.error('Error loading Tableau API:', error);
      }
    };

    loadTableauAPI();

    // Cleanup function
    return () => {
      const viz = vizRef.current?.querySelector('iframe');
      if (viz) {
        viz.remove();
      }
    };
  }, [url, options]);

  return (
    <div 
      ref={vizRef} 
      className="w-full h-[32rem] border border-gray-200 rounded-lg shadow-sm"
    />
  );
};

export default TableauEmbed;
