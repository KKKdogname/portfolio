import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { profile } from '../data/profile';
import { videos } from '../data/videos';
import { graphics } from '../data/graphics';
import SectionTitle from '../components/SectionTitle';
import AnimatedEntrance from '../components/AnimatedEntrance';

const featuredVideos = videos.filter((v) => v.featured).slice(0, 3);
const featuredGraphics = graphics.filter((g) => g.featured).slice(0, 3);

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-10 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[11px] text-darkroom-accent uppercase tracking-[0.2em] mb-6 font-medium">
              Chapter 01
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-darkroom-text leading-tight m-0">
              {profile.title}
              <br />
              <em className="text-darkroom-accent italic font-medium">{profile.subtitle}</em>
            </h1>
            <p className="text-darkroom-text-dim text-sm md:text-base mt-6 max-w-md mx-auto leading-relaxed font-light">
              用镜头与画笔捕捉光影，在每一帧里寻找时间的质感。
            </p>

            <div className="flex justify-center gap-6 mt-8">
              <Link
                to="/videos"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-darkroom-text hover:text-darkroom-accent transition-colors no-underline"
              >
                View Videos <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                to="/graphics"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-darkroom-text hover:text-darkroom-accent transition-colors no-underline"
              >
                View Graphics <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mt-14 md:mt-20 overflow-hidden border border-darkroom-border"
          >
            <div className="absolute inset-0 bg-gradient-radial from-darkroom-accent/5 to-transparent pointer-events-none z-10" />
            <img
              src="https://picsum.photos/seed/hero-cinematic/1200/500"
              alt="Hero"
              className="w-full h-64 md:h-96 object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium">
                Showreel
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 pt-4 pb-16">
        <AnimatedEntrance>
          <SectionTitle chapter="01" title="Featured / 影像" />
        </AnimatedEntrance>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-darkroom-border border border-darkroom-border">
          {featuredVideos.map((video, i) => (
            <AnimatedEntrance key={video.id} delay={i * 0.1}>
              <Link
                to="/videos"
                className="block bg-darkroom-surface card-hover no-underline group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base md:text-lg text-darkroom-text font-medium m-0">
                    {video.title}
                  </h3>
                  <p className="text-[11px] text-darkroom-accent uppercase tracking-wider mt-2 m-0">
                    {video.category[0]} · {video.category[1]}
                  </p>
                </div>
              </Link>
            </AnimatedEntrance>
          ))}
        </div>
      </section>

      {/* Featured Graphics */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 pb-16">
        <AnimatedEntrance>
          <SectionTitle chapter="02" title="Featured / 平面" />
        </AnimatedEntrance>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-darkroom-border border border-darkroom-border">
          {featuredGraphics.map((item, i) => (
            <AnimatedEntrance key={item.id} delay={i * 0.1}>
              <Link
                to="/graphics"
                className="block bg-darkroom-surface card-hover no-underline group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base md:text-lg text-darkroom-text font-medium m-0">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-darkroom-accent uppercase tracking-wider mt-2 m-0">
                    {item.category[0]} · {item.category[1]}
                  </p>
                </div>
              </Link>
            </AnimatedEntrance>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="border-t border-darkroom-border">
        <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24 text-center">
          <AnimatedEntrance>
            <p className="text-[11px] text-darkroom-accent uppercase tracking-[0.2em] mb-6 font-medium">
              About
            </p>
            <p className="font-display text-2xl md:text-3xl text-darkroom-text font-medium max-w-2xl mx-auto leading-relaxed">
              {profile.bio[0]}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-widest text-darkroom-text-dim hover:text-darkroom-accent transition-colors no-underline"
            >
              More About Me <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </AnimatedEntrance>
        </div>
      </section>
    </div>
  );
}
