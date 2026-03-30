'use client';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourUrl: string;
}

export default function VirtualTourModal({ isOpen, onClose, tourUrl }: VirtualTourModalProps) {
  if (!isOpen) return null;

  // Simple logic to ensure YouTube URLs are embeddable
  let embedUrl = tourUrl;
  if (tourUrl.includes('youtube.com/watch?v=')) {
    embedUrl = tourUrl.replace('watch?v=', 'embed/');
  } else if (tourUrl.includes('youtu.be/')) {
    embedUrl = tourUrl.replace('youtu.be/', 'youtube.com/embed/');
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300">
      <div className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all backdrop-blur-md"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <iframe 
          src={embedUrl}
          className="w-full h-full border-none"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      
      {/* Background click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
}
