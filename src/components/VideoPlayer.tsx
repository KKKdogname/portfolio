import { useEffect, useRef, useState, useCallback } from 'react';
import { XMarkIcon, PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

interface VideoPlayerProps {
  poster: string;
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export default function VideoPlayer({ poster, videoUrl, title, onClose }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(!muted);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = ratio * duration;
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      setCurrentTime(v.currentTime);
      setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
    };
    const onLoaded = () => setDuration(v.duration);
    const onEnd = () => setPlaying(false);
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('loadedmetadata', onLoaded);
    v.addEventListener('ended', onEnd);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('loadedmetadata', onLoaded);
      v.removeEventListener('ended', onEnd);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') { e.preventDefault(); togglePlay(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, togglePlay]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 bg-darkroom-bg border border-darkroom-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-3 border-b border-darkroom-border">
          <span className="text-xs uppercase tracking-widest text-darkroom-text-dim">{title}</span>
          <button onClick={onClose} className="text-darkroom-text-dim hover:text-darkroom-text transition-colors p-1 cursor-pointer">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Video */}
        <div className="relative bg-black cursor-pointer" onClick={togglePlay}>
          <video
            ref={videoRef}
            src={videoUrl}
            poster={poster}
            className="w-full block max-h-[70vh] object-contain"
            playsInline
          />
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity">
              <PlayIcon className="w-16 h-16 text-white/80 drop-shadow-lg" />
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="px-5 py-3 flex items-center gap-4">
          <button onClick={togglePlay} className="text-darkroom-text hover:text-darkroom-accent transition-colors cursor-pointer p-1">
            {playing ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
          </button>

          <div
            ref={progressRef}
            onClick={seek}
            className="flex-1 h-1 bg-darkroom-border rounded cursor-pointer group"
          >
            <div
              className="h-full bg-darkroom-accent rounded transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="text-xs text-darkroom-text-dim min-w-[70px] text-right tabular-nums">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <button onClick={toggleMute} className="text-darkroom-text-dim hover:text-darkroom-text transition-colors cursor-pointer p-1">
            {muted ? <SpeakerXMarkIcon className="w-5 h-5" /> : <SpeakerWaveIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
