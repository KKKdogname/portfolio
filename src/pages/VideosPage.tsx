import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/outline';
import { videos } from '../data/videos';
import { videoCategories } from '../data/categories';
import SectionTitle from '../components/SectionTitle';
import CategoryFilter from '../components/CategoryFilter';
import AnimatedEntrance from '../components/AnimatedEntrance';
import VideoPlayer from '../components/VideoPlayer';

export default function VideosPage() {
  const [activeCat, setActiveCat] = useState('全部');
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const filtered =
    activeCat === '全部'
      ? videos
      : videos.filter((v) => v.category.includes(activeCat));

  const selected = selectedVideo !== null ? videos[selectedVideo] : null;

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
      <AnimatedEntrance>
        <SectionTitle chapter="01" title="影像作品" />
      </AnimatedEntrance>

      <AnimatedEntrance delay={0.1}>
        <CategoryFilter
          categories={videoCategories}
          active={activeCat}
          onChange={setActiveCat}
        />
      </AnimatedEntrance>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-darkroom-border border border-darkroom-border"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((video) => {
            const originalIndex = videos.indexOf(video);
            return (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setSelectedVideo(originalIndex)}
                  className="block w-full text-left bg-darkroom-surface card-hover cursor-pointer border-none"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.poster}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors flex items-center justify-center">
                      <PlayIcon className="w-12 h-12 text-white/60" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-darkroom-text font-medium m-0">
                      {video.title}
                    </h3>
                    <p className="text-[11px] text-darkroom-accent uppercase tracking-wider mt-2 m-0">
                      {video.category.join(' · ')}
                    </p>
                    <p className="text-sm text-darkroom-text-dim mt-3 leading-relaxed m-0 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-darkroom-text-dim py-20 text-sm">
          该分类暂无作品。
        </p>
      )}

      {selected && (
        <VideoPlayer
          poster={selected.poster}
          videoUrl={selected.videoUrl}
          title={selected.title}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}
