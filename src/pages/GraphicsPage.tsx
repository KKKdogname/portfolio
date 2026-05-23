import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { graphics } from '../data/graphics';
import { graphicCategories } from '../data/categories';
import SectionTitle from '../components/SectionTitle';
import CategoryFilter from '../components/CategoryFilter';
import AnimatedEntrance from '../components/AnimatedEntrance';
import Lightbox from '../components/Lightbox';

export default function GraphicsPage() {
  const [activeCat, setActiveCat] = useState('全部');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCat === '全部'
      ? graphics
      : graphics.filter((g) => g.category.includes(activeCat));

  const lightboxImages = filtered.map((g) => ({
    src: g.image,
    title: g.title,
  }));

  const openLightbox = (filteredIndex: number) => {
    setLightboxIndex(filteredIndex);
  };

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
      <AnimatedEntrance>
        <SectionTitle chapter="02" title="平面作品" />
      </AnimatedEntrance>

      <AnimatedEntrance delay={0.1}>
        <CategoryFilter
          categories={graphicCategories}
          active={activeCat}
          onChange={setActiveCat}
        />
      </AnimatedEntrance>

      {/* Masonry-ish grid: columns approach */}
      <motion.div
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid"
            >
              <button
                onClick={() => openLightbox(i)}
                className="block w-full text-left bg-darkroom-surface card-hover cursor-pointer border border-darkroom-border group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-darkroom-text font-medium m-0">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-darkroom-accent uppercase tracking-wider mt-2 m-0">
                    {item.category.join(' · ')}
                  </p>
                  <p className="text-sm text-darkroom-text-dim mt-3 leading-relaxed m-0">
                    {item.description}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-darkroom-text-dim py-20 text-sm">
          该分类暂无作品。
        </p>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev! > 0 ? prev! - 1 : lightboxImages.length - 1
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev! < lightboxImages.length - 1 ? prev! + 1 : 0
            )
          }
        />
      )}
    </div>
  );
}
