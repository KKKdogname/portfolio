import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/videos', label: 'Video' },
  { to: '/graphics', label: 'Graphic' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-darkroom-bg/90 backdrop-blur-sm border-b border-darkroom-border">
      <div className="max-w-6xl mx-auto px-5 md:px-10 flex justify-between items-center h-16">
        <Link
          to="/"
          className="font-display text-xl text-darkroom-accent font-semibold tracking-wide no-underline"
        >
          Name
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-xs uppercase tracking-widest no-underline transition-colors duration-300 ${
                  location.pathname === link.to
                    ? 'text-darkroom-accent'
                    : 'text-darkroom-text-dim hover:text-darkroom-accent'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-darkroom-text p-1"
          aria-label="Toggle menu"
        >
          {open ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-darkroom-border bg-darkroom-bg/95 backdrop-blur-sm">
          <ul className="flex flex-col list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.to} className="border-b border-darkroom-border">
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block px-5 py-4 text-xs uppercase tracking-widest no-underline transition-colors ${
                    location.pathname === link.to
                      ? 'text-darkroom-accent'
                      : 'text-darkroom-text-dim hover:text-darkroom-accent'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
