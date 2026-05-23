import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-darkroom-border py-10 px-5 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6">
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
        <p className="text-xs text-darkroom-text-dim tracking-wider m-0">
          © {new Date().getFullYear()} {profile.name}. 保留所有权利。
        </p>
      </div>
    </footer>
  );
}
