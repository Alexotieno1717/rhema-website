import React from 'react';

interface VideoPlayerProps {
  url: string;
  title?: string;
}

const VideoPlayer = ({ url, title = 'Video player' }: VideoPlayerProps) => {
    return (
      <div className="w-full pt-16 py-12 px-4 mt-16 border-t border-neutral-100/60 dark:border-neutral-800/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            {title}
          </h2>
          <div className="relative w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={url}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    );
  };
  
  

export default VideoPlayer; 