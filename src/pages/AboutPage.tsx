import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { profile } from '../data/profile';
import SectionTitle from '../components/SectionTitle';
import AnimatedEntrance from '../components/AnimatedEntrance';

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
      <AnimatedEntrance>
        <SectionTitle chapter="03" title="About / 关于" />
      </AnimatedEntrance>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-8">
        {/* Photo */}
        <AnimatedEntrance delay={0.1}>
          <div className="border border-darkroom-border overflow-hidden">
            <img
              src="https://picsum.photos/seed/profile-portrait/600/750"
              alt={profile.name}
              className="w-full h-auto block grayscale-[20%]"
            />
          </div>
        </AnimatedEntrance>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <AnimatedEntrance delay={0.2}>
            <h2 className="font-display text-3xl md:text-4xl text-darkroom-text font-medium m-0">
              {profile.name}
            </h2>
            <p className="text-sm text-darkroom-accent uppercase tracking-[0.15em] mt-2 m-0">
              {profile.title} {profile.subtitle}
            </p>
          </AnimatedEntrance>

          <AnimatedEntrance delay={0.3}>
            <div className="mt-8 space-y-4">
              {profile.bio.map((p, i) => (
                <p
                  key={i}
                  className="text-sm md:text-base text-darkroom-text-dim leading-relaxed m-0 font-light"
                >
                  {p}
                </p>
              ))}
            </div>
          </AnimatedEntrance>

          {/* Contact */}
          <AnimatedEntrance delay={0.4}>
            <div className="mt-10 pt-8 border-t border-darkroom-border">
              <h3 className="text-xs uppercase tracking-[0.2em] text-darkroom-text mb-6 font-medium">
                Get in Touch
              </h3>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 text-sm text-darkroom-text-dim hover:text-darkroom-accent transition-colors no-underline mb-6"
              >
                <EnvelopeIcon className="w-5 h-5" />
                {profile.email}
              </a>

              <div className="flex gap-6 mt-6">
                {profile.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-darkroom-text-dim hover:text-darkroom-accent transition-colors no-underline"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedEntrance>
        </div>
      </div>
    </div>
  );
}
