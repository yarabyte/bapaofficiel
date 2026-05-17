'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navItems, type NavItem } from '@/lib/navigation';

/* ── chevron icon ── */
function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Desktop: simple liste déroulante ── */
function DesktopDropdown({ item }: { item: NavItem }) {
  if (!item.children?.length) return null;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 translate-y-1 group-hover:translate-y-0">
      <div className="flex justify-center">
        <div className="w-3 h-3 bg-white rotate-45 border-l border-t border-stone-100 -mb-1.5" />
      </div>
      <div className="min-w-[260px] max-w-[min(320px,calc(100vw-3rem))] max-h-[min(70vh,520px)] overflow-y-auto rounded-2xl border border-stone-100 bg-white py-2 shadow-2xl">
        <ul>
          {item.children.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-5 py-2.5 text-sm text-stone-700 transition-colors hover:bg-cream hover:text-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Mobile: une seule liste par section ── */
function MobileAccordionL1({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href ?? '#'}
        onClick={onClose}
        className="block px-4 py-3 text-base font-semibold text-stone-800 hover:text-brand border-b border-stone-100"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-stone-100">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-stone-800 hover:text-brand"
      >
        <span>{item.label}</span>
        <ChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="border-t border-stone-50 pb-2">
          <ul className="py-1">
            {item.children.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block px-4 py-2.5 pl-5 text-sm text-stone-600 hover:text-brand hover:bg-cream/50 transition-colors border-l-[3px] border-transparent hover:border-gold ml-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ── Main Navbar ── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeDrawer = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand/98 shadow-xl shadow-brand-dark/30 py-2.5 backdrop-blur-md'
            : 'bg-gradient-to-b from-black/55 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Bapa Logo"
                width={766}
                height={780}
                className="max-h-9 max-w-9 object-contain"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-bold text-lg tracking-wide" style={{ fontFamily: 'var(--font-playfair)' }}>
                BAPA
              </span>
              <span className="block text-white/70 text-[10px] tracking-widest uppercase">
                Officiel
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button type="button" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/85 hover:text-white rounded-lg hover:bg-white/8 transition-colors nav-link-ul">
                    {item.label}
                    <ChevronDown className="opacity-50 group-hover:opacity-100 transition-all group-hover:rotate-180 duration-200" />
                  </button>
                ) : (
                  <Link
                    href={item.href ?? '#'}
                    className="flex items-center px-3 py-2 text-sm font-medium text-white/85 hover:text-white rounded-lg hover:bg-white/8 transition-colors nav-link-ul"
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && <DesktopDropdown item={item} />}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/communaute/contacts"
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-bold text-brand bg-white rounded-full hover:bg-cream transition-colors shadow-md shadow-black/10"
            >
              Nous contacter
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Ouvrir le menu"
            >
              <span className="w-6 h-0.5 bg-white rounded" />
              <span className="w-5 h-0.5 bg-white rounded" />
              <span className="w-6 h-0.5 bg-white rounded" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="drawer-overlay" onClick={closeDrawer} />
          <div className="absolute top-0 right-0 bottom-0 w-80 max-w-full bg-white shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-4 bg-brand">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={766}
                    height={780}
                    className="max-h-7 max-w-7 object-contain"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
                <span className="text-white font-bold tracking-wide" style={{ fontFamily: 'var(--font-playfair)' }}>
                  BAPA
                </span>
              </div>
              <button
                type="button"
                onClick={closeDrawer}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xl"
                aria-label="Fermer"
              >
                ×
              </button>
            </div>

            <nav className="flex-1 py-2">
              {navItems.map((item) => (
                <MobileAccordionL1 key={item.label} item={item} onClose={closeDrawer} />
              ))}
            </nav>

            <div className="p-4 bg-cream-dark">
              <Link
                href="/communaute/contacts"
                onClick={closeDrawer}
                className="block w-full text-center py-3 bg-brand text-white font-semibold rounded-full text-sm hover:bg-brand-dark transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
