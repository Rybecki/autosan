import { AnimatePresence, motion } from "motion/react";
import { Bus, Menu, Phone, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { CONTACT_PHONE, NAV_ITEMS } from "../data/siteContent";
import { GrainOverlay, CRTOverlay } from "./ui";

type LayoutProps = {
  children: ReactNode;
  path: string;
  navigate: (to: string) => void;
};

export function Layout({ children, path, navigate }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const go = (to: string) => {
    navigate(to);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen overflow-x-hidden paper-texture">
      <GrainOverlay />
      <CRTOverlay />

      <header className="fixed top-0 left-0 w-full z-[220] bg-prl-cream/95 backdrop-blur-sm border-b-2 border-prl-ink">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => go("")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity min-w-0"
          >
            <Bus className="text-prl-red w-8 h-8 shrink-0" />
            <span className="font-display text-lg sm:text-xl md:text-2xl tracking-tighter uppercase truncate">
              Śląski Autosan
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-5 font-display text-sm uppercase tracking-wide">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => go(item.path)}
                className={`hover:text-prl-red transition-colors relative group ${
                  path === item.path ? "text-prl-red" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-prl-red transition-all ${
                    path === item.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
            <a
              href={`tel:${CONTACT_PHONE.tel}`}
              className="retro-border bg-prl-red text-prl-cream font-mono text-xs tracking-wide px-3 py-2 hover:bg-prl-brick transition-all duration-200 ease-out hover:scale-[1.04] whitespace-nowrap shrink-0 inline-flex items-center gap-1.5"
            >
              <Phone size={15} className="shrink-0" aria-hidden />
              {CONTACT_PHONE.displayNav}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href={`tel:${CONTACT_PHONE.tel}`}
              className="retro-border bg-prl-red text-prl-cream font-mono text-[10px] sm:text-xs tracking-wide px-2.5 py-1.5 sm:px-3 sm:py-2 hover:bg-prl-brick transition-colors whitespace-nowrap inline-flex items-center gap-1.5"
            >
              <Phone size={14} className="shrink-0" aria-hidden />
              {CONTACT_PHONE.displayNav}
            </a>
            <button
              type="button"
              className="p-2 relative z-[230]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-prl-ink/50 lg:hidden cursor-default"
              aria-label="Zamknij menu"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="fixed left-0 right-0 top-16 bottom-0 z-[210] lg:hidden bg-prl-cream border-t-2 border-prl-ink overflow-y-auto overscroll-contain"
              aria-label="Menu główne"
            >
              <ul className="flex flex-col gap-2 p-4 pb-10 max-w-lg mx-auto">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <button
                      type="button"
                      onClick={() => go(item.path)}
                      className={`w-full text-left font-display text-2xl sm:text-3xl uppercase py-4 px-5 retro-border transition-colors ${
                        path === item.path
                          ? "bg-prl-red text-prl-cream"
                          : "bg-white hover:bg-prl-mustard/30"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href={`tel:${CONTACT_PHONE.tel}`}
                    className="w-full flex items-center justify-center gap-2 font-mono text-sm tracking-wide py-4 px-5 retro-border bg-prl-red text-prl-cream hover:bg-prl-brick transition-colors"
                  >
                    <Phone size={18} aria-hidden />
                    {CONTACT_PHONE.displayNav}
                  </a>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <main className="relative z-0 pt-16">{children}</main>

      <footer className="relative z-0 py-12 bg-prl-ink text-prl-cream/40 border-t border-prl-cream/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Bus className="w-6 h-6" />
            <span className="font-display text-lg uppercase tracking-tighter">Śląski Autosan © H9-21</span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-center md:text-right max-w-md">
            <span className="text-prl-cream">A Bo Co... Sp. z o.o.</span>
            {" · "}
            <span className="text-prl-cream">Fundacja JA YHYMM...</span>
            {" · Start zawsze: Rynek na Nikiszu · Niech żyje śląsko przygoda!"}
          </p>
        </div>
        <div className="mt-8 text-center font-mono text-[10px] uppercase tracking-widest text-prl-cream/30 space-y-1">
          <p>Zaprojektowoł i wykonoł:</p>
          <a
            href="https://patryktomczyk.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-[10px] uppercase tracking-widest text-prl-red underline underline-offset-2 hover:text-prl-brick transition-colors"
          >
            patryktomczyk.dev
          </a>
        </div>
      </footer>
    </div>
  );
}
