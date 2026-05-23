import { useEffect, useCallback } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface LightboxProps {
  images: { src: string; title: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const current = images[currentIndex];

  const goPrev = useCallback(() => onPrev(), [onPrev]);
  const goNext = useCallback(() => onNext(), [onNext]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, goPrev, goNext]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-darkroom-text-dim hover:text-darkroom-text transition-colors z-10 cursor-pointer p-1"
      >
        <XMarkIcon className="w-7 h-7" />
      </button>

      {/* Counter */}
      <span className="absolute top-5 left-5 text-xs uppercase tracking-widest text-darkroom-text-dim z-10">
        {currentIndex + 1} / {images.length}
      </span>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-4 text-darkroom-text-dim hover:text-darkroom-text transition-colors z-10 cursor-pointer p-2"
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.title}
          className="max-w-full max-h-[80vh] object-contain shadow-2xl"
        />
        <p className="text-sm text-darkroom-text-dim mt-4 tracking-wider text-center">
          {current.title}
        </p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-4 text-darkroom-text-dim hover:text-darkroom-text transition-colors z-10 cursor-pointer p-2"
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>
    </div>
  );
}
