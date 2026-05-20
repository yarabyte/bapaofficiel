'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navItems, type NavItem, type NavChild } from '@/lib/navigation';

function childKey(navItem: NavChild): string {
  return navItem.href ?? `group:${navItem.label}`;
}

/** Lien du menu correspond à la route courante (évite les faux positifs pour « Accueil » vs ancres « /#… »). */
function isHrefActive(pathname: string, href: string): boolean {
  const pathOnly = href.split('#')[0];
  const path = pathOnly === '' ? '/' : pathOnly;
  if (href.includes('#') && path === '/') return false;
  if (path === '/') return pathname === '/';
  return pathname === path || pathname.startsWith(`${path}/`);
}

function navSubtreeHasActiveHref(pathname: string, nodes: NavChild[]): boolean {
  return nodes.some((node) => {
    if (node.href && isHrefActive(pathname, node.href)) return true;
    if (node.children?.length) return navSubtreeHasActiveHref(pathname, node.children);
    return false;
  });
}

/** Rubrique L1 sans sous-menu : résoud les chevauchements (/communaute vs /communaute/echos) par préfixe le plus long. */
function useActiveSimpleNavLabel(pathname: string): string | null {
  return useMemo(() => {
    const simple = navItems
      .filter((i): i is NavItem & { href: string } => Boolean(i.href) && !i.children)
      .map((i) => ({ label: i.label, href: i.href }));
    simple.sort((a, b) => b.href.length - a.href.length);
    for (const { label, href } of simple) {
      if (isHrefActive(pathname, href)) return label;
    }
    return null;
  }, [pathname]);
}

const desktopNavTriggerBase =
  'nav-link-ul flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors';
const desktopNavTriggerInactive = 'text-white/85 hover:bg-white/8 hover:text-white';
const desktopNavTriggerActive =
  'bg-white/18 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/20';

const desktopDropdownLinkActive = 'bg-cream text-brand font-semibold';
const desktopDropdownLinkInactive = 'text-stone-700 hover:bg-cream hover:text-brand';

const mobileL1Active = 'border-l-[3px] border-gold-dark bg-cream/70 pl-[calc(1rem-3px)] text-brand';
const mobileL1Inactive = 'border-l-[3px] border-transparent text-stone-800 hover:text-brand';
const mobileLeafActive = 'border-gold bg-cream text-brand font-semibold';
const mobileLeafInactive =
  'border-stone-200 text-stone-600 hover:border-gold hover:bg-cream/50 hover:text-brand';

/* ── chevron ── */
function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMediatheque({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 20h15V8h-9l-2-2H6v14z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 13h9M9 17h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconContact({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 8l8 5 8-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPartenaires({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 20v-1a4 4 0 0 1 4-4h0M16 15a4 4 0 0 1 4 4v1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Barre secondaire ── */
function SecondaryQuickNav({ variant, pathname }: { variant: 'header' | 'drawer'; pathname: string }) {
  const medActive = pathname === '/mediatheque' || pathname.startsWith('/mediatheque/');
  const partenairesActive =
    pathname === '/communaute/partenaires' || pathname.startsWith('/communaute/partenaires/');
  const contactActive = pathname === '/contacts' || pathname.startsWith('/contacts/');

  if (variant === 'drawer') {
    return (
      <nav aria-label="Liens rapides" className="flex w-full gap-2">
        <Link
          href="/mediatheque"
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl border py-2.5 shadow-sm transition-all ${
            medActive
              ? 'border-gold-dark/55 bg-cream shadow-md ring-1 ring-gold-dark/25'
              : 'border-stone-200/90 bg-white hover:border-gold-dark/35 hover:bg-cream hover:shadow-md'
          }`}
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-lg ring-1 ${
              medActive ? 'bg-brand/15 text-brand ring-brand/25' : 'bg-brand/8 text-brand ring-brand/15'
            }`}
          >
            <IconMediatheque className="h-4 w-4" />
          </span>
          <span className={`text-xs font-semibold ${medActive ? 'text-brand' : 'text-brand'}`}>Médiathèque</span>
        </Link>
        <Link
          href="/communaute/partenaires"
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl border py-2.5 shadow-sm transition-all ${
            partenairesActive
              ? 'border-gold-dark/55 bg-cream shadow-md ring-1 ring-gold-dark/25'
              : 'border-stone-200/90 bg-white hover:border-gold-dark/35 hover:bg-cream hover:shadow-md'
          }`}
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-lg ring-1 ${
              partenairesActive
                ? 'bg-forest/15 text-forest ring-forest/25'
                : 'bg-forest/8 text-forest ring-forest/15'
            }`}
          >
            <IconPartenaires className="h-4 w-4" />
          </span>
          <span className="text-xs font-semibold text-brand">Partenaires</span>
        </Link>
        <Link
          href="/contacts"
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl border py-2.5 shadow-sm transition-all ${
            contactActive
              ? 'border-gold-dark/55 bg-cream shadow-md ring-1 ring-gold-dark/25'
              : 'border-stone-200/90 bg-white hover:border-gold-dark/35 hover:bg-cream hover:shadow-md'
          }`}
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-lg ring-1 ${
              contactActive ? 'bg-gold/25 text-gold-dark ring-gold-dark/35' : 'bg-gold/15 text-gold-dark ring-gold-dark/20'
            }`}
          >
            <IconContact className="h-4 w-4" />
          </span>
          <span className="text-xs font-semibold text-brand">Contact</span>
        </Link>
      </nav>
    );
  }

  const pillActive =
    'bg-gold-dark/35 text-white shadow-[0_0_12px_-2px_rgba(212,148,62,0.45)] ring-gold-light/35';
  const pillInactive =
    'bg-white/[0.07] text-gold-light ring-white/15 group-hover:bg-gold-dark/40 group-hover:text-white group-hover:shadow-[0_0_12px_-2px_rgba(212,148,62,0.45)]';

  return (
    <nav aria-label="Liens rapides" className="flex items-center">
      <div className="flex items-center rounded-full border border-white/25 bg-black/15 p-px backdrop-blur-md">
        <Link
          href="/mediatheque"
          className={`group flex items-center gap-1.5 rounded-full px-1.5 py-0.5 transition-colors hover:bg-white/[0.12] sm:gap-2 sm:px-2.5 sm:py-1 ${
            medActive ? 'bg-white/12' : ''
          }`}
          aria-current={medActive ? 'page' : undefined}
        >
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ring-1 transition-[background-color,color,box-shadow] ${
              medActive ? pillActive : pillInactive
            }`}
          >
            <IconMediatheque className="h-[13px] w-[13px]" />
          </span>
          <span
            className={`hidden text-[10px] font-medium tracking-normal sm:inline ${medActive ? 'text-white' : 'text-white/92 group-hover:text-white'}`}
          >
            Médiathèque
          </span>
        </Link>
        <span className="mx-0.5 hidden h-3.5 w-px bg-white/[0.18] sm:block" aria-hidden />
        <Link
          href="/communaute/partenaires"
          className={`group flex items-center gap-1.5 rounded-full px-1.5 py-0.5 transition-colors hover:bg-white/[0.12] sm:gap-2 sm:px-2.5 sm:py-1 ${
            partenairesActive ? 'bg-white/12' : ''
          }`}
          aria-current={partenairesActive ? 'page' : undefined}
        >
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ring-1 transition-[background-color,color,box-shadow] ${
              partenairesActive ? pillActive : pillInactive
            }`}
          >
            <IconPartenaires className="h-[13px] w-[13px]" />
          </span>
          <span
            className={`hidden text-[10px] font-medium tracking-normal sm:inline ${partenairesActive ? 'text-white' : 'text-white/92 group-hover:text-white'}`}
          >
            Partenaires
          </span>
        </Link>
        <span className="mx-0.5 hidden h-3.5 w-px bg-white/[0.18] sm:block" aria-hidden />
        <Link
          href="/contacts"
          className={`group flex items-center gap-1.5 rounded-full px-1.5 py-0.5 transition-colors hover:bg-white/[0.12] sm:gap-2 sm:px-2.5 sm:py-1 ${
            contactActive ? 'bg-white/12' : ''
          }`}
          aria-current={contactActive ? 'page' : undefined}
        >
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ring-1 transition-[background-color,color,box-shadow] ${
              contactActive ? pillActive : pillInactive
            }`}
          >
            <IconContact className="h-[13px] w-[13px]" />
          </span>
          <span
            className={`hidden text-[10px] font-medium tracking-normal sm:inline ${contactActive ? 'text-white' : 'text-white/92 group-hover:text-white'}`}
          >
            Nous contacter
          </span>
        </Link>
      </div>
    </nav>
  );
}

/* ── Dropdown desktop : une seule colonne (pas de méga-menu) ── */
function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  if (!item.children?.length) return null;

  return (
    <div className="absolute top-full left-1/2 z-50 mt-1 -translate-x-1/2 translate-y-1 opacity-0 invisible transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
      <div className="flex justify-center">
        <div className="-mb-1.5 h-3 w-3 rotate-45 border-l border-t border-stone-100 bg-white" />
      </div>
      <div className="max-h-[min(70vh,520px)] min-w-[260px] max-w-[min(340px,calc(100vw-3rem))] overflow-y-auto rounded-2xl border border-stone-100 bg-white py-2 shadow-2xl">
        <ul className="py-1">
          {item.children.map((child) =>
            child.children?.length ? (
              <li key={childKey(child)} className="py-1">
                <div className="px-5 pb-1 pt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                  {child.label}
                </div>
                <ul>
                  {child.children.map((leaf) => {
                    const leafActive = Boolean(leaf.href && isHrefActive(pathname, leaf.href));
                    return (
                      <li key={childKey(leaf)}>
                        <Link
                          href={leaf.href ?? '#'}
                          aria-current={leafActive ? 'page' : undefined}
                          className={`block px-5 py-2 pl-8 text-sm transition-colors ${
                            leafActive ? desktopDropdownLinkActive : desktopDropdownLinkInactive
                          }`}
                        >
                          {leaf.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li key={childKey(child)}>
                <Link
                  href={child.href ?? '#'}
                  aria-current={child.href && isHrefActive(pathname, child.href) ? 'page' : undefined}
                  className={`block px-5 py-2.5 text-sm transition-colors ${
                    child.href && isHrefActive(pathname, child.href)
                      ? desktopDropdownLinkActive
                      : desktopDropdownLinkInactive
                  }`}
                >
                  {child.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

/* ── Mobile : liste simple sous chaque entrée L1 ── */
function MobileNavChildren({ nodes, onClose, pathname }: { nodes: NavChild[]; onClose: () => void; pathname: string }) {
  return (
    <div className="border-t border-stone-50 space-y-1 px-4 pb-3">
      {nodes.map((child) =>
        child.children?.length ? (
          <div key={childKey(child)}>
            <p className="ml-4 px-4 pb-1 pt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
              {child.label}
            </p>
            <ul className="space-y-0.5">
              {child.children.map((leaf) => {
                const leafActive = Boolean(leaf.href && isHrefActive(pathname, leaf.href));
                return (
                  <li key={childKey(leaf)}>
                    <Link
                      href={leaf.href ?? '#'}
                      onClick={onClose}
                      aria-current={leafActive ? 'page' : undefined}
                      className={`ml-8 flex min-h-11 items-center border-l-2 py-2.5 pr-3 pl-4 text-xs transition-colors ${
                        leafActive ? mobileLeafActive : mobileLeafInactive
                      }`}
                    >
                      {leaf.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <Link
            key={childKey(child)}
            href={child.href ?? '#'}
            onClick={onClose}
            aria-current={child.href && isHrefActive(pathname, child.href) ? 'page' : undefined}
            className={`ml-4 flex min-h-11 items-center border-l-2 py-2.5 pr-3 pl-4 text-sm transition-colors ${
              child.href && isHrefActive(pathname, child.href) ? mobileLeafActive : mobileLeafInactive
            }`}
          >
            {child.label}
          </Link>
        ),
      )}
    </div>
  );
}

/* ── Mobile : L1 ── */
function MobileAccordionL1({
  item,
  onClose,
  pathname,
  activeSimpleLabel,
}: {
  item: NavItem;
  onClose: () => void;
  pathname: string;
  activeSimpleLabel: string | null;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    const active = activeSimpleLabel === item.label;
    return (
      <Link
        href={item.href ?? '#'}
        onClick={onClose}
        aria-current={active ? 'page' : undefined}
        className={`block border-b border-stone-100 px-4 py-3 text-base font-semibold transition-colors ${
          active ? mobileL1Active : mobileL1Inactive
        }`}
      >
        {item.label}
      </Link>
    );
  }

  const branchActive = navSubtreeHasActiveHref(pathname, item.children);

  return (
    <div className={`border-b border-stone-100 ${branchActive ? 'bg-cream/35' : ''}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between px-4 py-3 text-base font-semibold transition-colors ${
          branchActive ? 'text-brand' : 'text-stone-800 hover:text-brand'
        }`}
      >
        <span>{item.label}</span>
        <ChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && item.children && <MobileNavChildren nodes={item.children} onClose={onClose} pathname={pathname} />}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const activeSimpleLabel = useActiveSimpleNavLabel(pathname);
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
      {/* Fond commun — dégradé ou barre pleine depuis tout en haut (évite la couture avec la navbar) */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-x-0 top-0 z-[45] transition-all duration-300 ${
          scrolled
            ? 'min-h-[calc(2.5rem+4.25rem)] border-b border-white/[0.07] bg-brand-dark/[0.38] shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150'
            : 'min-h-[clamp(10rem,26vmin,14rem)] bg-gradient-to-b from-black/[0.58] via-black/[0.32] to-transparent'
        }`}
      />

      {/* Barre secondaire — accès directs (marge haute conservée) */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-transparent pt-2">
        <div className="relative mx-auto flex h-8 max-w-7xl items-center justify-between gap-2 px-3 sm:px-6">
          <div className="hidden min-w-0 items-center gap-2 md:flex">
            <span className="h-0.5 w-0.5 shrink-0 rounded-full bg-gold/90 shadow-[0_0_8px_rgba(212,148,62,0.55)]" aria-hidden />
            <span className="text-[10px] font-medium tracking-normal text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]">
              Accès directs
            </span>
          </div>
          <div className="flex flex-1 justify-end md:flex-none">
            <SecondaryQuickNav variant="header" pathname={pathname} />
          </div>
        </div>
      </div>

      <header
        className={`fixed top-10 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${
          scrolled ? 'py-2.5' : 'py-5'
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 sm:gap-6 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/10">
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
              <span className="font-heading block text-lg font-bold tracking-wide text-white">
                BAPA
              </span>
              <span className="block text-[10px] tracking-widest text-white/70 uppercase">Officiel</span>
            </div>
          </Link>

          <nav className="ml-auto hidden items-center gap-0.5 lg:flex xl:gap-1">
            {navItems.map((navItem) => {
              const dropdownActive = Boolean(navItem.children && navSubtreeHasActiveHref(pathname, navItem.children));
              const simpleActive = Boolean(!navItem.children && activeSimpleLabel === navItem.label);

              return (
                <div key={navItem.label} className="group relative">
                  {navItem.children ? (
                    <button
                      type="button"
                      className={`${desktopNavTriggerBase} ${dropdownActive ? desktopNavTriggerActive : desktopNavTriggerInactive}`}
                    >
                      {navItem.label}
                      <ChevronDown
                        className={`transition-all duration-200 group-hover:rotate-180 ${
                          dropdownActive ? 'opacity-100 text-gold-light' : 'opacity-50 group-hover:opacity-100'
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={navItem.href ?? '#'}
                      aria-current={simpleActive ? 'page' : undefined}
                      className={`nav-link-ul flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        simpleActive ? desktopNavTriggerActive : desktopNavTriggerInactive
                      }`}
                    >
                      {navItem.label}
                    </Link>
                  )}
                  {navItem.children && <DesktopDropdown item={navItem} pathname={pathname} />}
                </div>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="ml-auto flex min-h-11 min-w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg p-2 transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <span className="h-0.5 w-6 rounded bg-white" />
            <span className="h-0.5 w-5 rounded bg-white" />
            <span className="h-0.5 w-6 rounded bg-white" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div className="drawer-overlay" onClick={closeDrawer} />
          <div className="absolute top-0 right-0 bottom-0 z-[71] flex w-80 max-w-full flex-col overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-brand px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Image src="/images/logo.png" alt="Logo" width={766} height={780} className="max-h-7 max-w-7 object-contain" />
                </div>
                <span className="font-heading font-bold tracking-wide text-white">BAPA</span>
              </div>
              <button type="button" onClick={closeDrawer} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20" aria-label="Fermer">
                ×
              </button>
            </div>
            <div className="flex gap-2 border-b border-stone-100 bg-gradient-to-r from-cream-dark/95 to-cream/90 px-3 py-3">
              <SecondaryQuickNav variant="drawer" pathname={pathname} />
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {navItems.map((ni) => (
                <MobileAccordionL1
                  key={ni.label}
                  item={ni}
                  onClose={closeDrawer}
                  pathname={pathname}
                  activeSimpleLabel={activeSimpleLabel}
                />
              ))}
            </nav>
            <div className="bg-cream-dark p-4">
              <Link href="/contacts" onClick={closeDrawer} className="block w-full rounded-full bg-brand py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
