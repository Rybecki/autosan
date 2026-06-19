import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Maximize2, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useState,
  type CSSProperties,
  type FC,
  type KeyboardEvent,
} from "react";

const PEEK_WIDTH = 52;

type RoutePosterRevealProps = {
  src: string;
  alt: string;
  isExpanded: boolean;
  onExpandChange: (expanded: boolean) => void;
};

export const RoutePosterReveal: FC<RoutePosterRevealProps> = ({
  src,
  alt,
  isExpanded,
  onExpandChange,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => {
    setIsLightboxOpen(true);
    onExpandChange(false);
  }, [onExpandChange]);

  const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isExpanded && !isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-[calc(var(--peek-width)+10px)] top-1/2 -translate-y-1/2 z-[38] flex items-center gap-1.5 pointer-events-none"
            style={{ "--peek-width": `${PEEK_WIDTH}px` } as CSSProperties}
            aria-hidden
          >
            <span className="font-mono text-[10px] uppercase tracking-wide text-prl-ink/80 whitespace-nowrap">
              Zobacz trasę
            </span>
            <motion.span
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-prl-red"
            >
              <ArrowRight size={16} strokeWidth={2.5} />
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute top-0 right-0 bottom-0 z-[36] overflow-hidden border-l-2 border-prl-ink bg-prl-cream shadow-[-8px_0_20px_rgba(26,26,26,0.15)]"
        initial={false}
        animate={{ width: isExpanded ? "100%" : PEEK_WIDTH }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={() => onExpandChange(true)}
        onMouseLeave={() => {
          if (!isLightboxOpen) onExpandChange(false);
        }}
      >
        <button
          type="button"
          className="absolute inset-0 z-10 w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-prl-red focus-visible:ring-inset"
          onClick={openLightbox}
          onKeyDown={onKeyDown}
          aria-label={`Powiększ mapę trasy: ${alt}`}
        />

        <img
          src={src}
          alt=""
          aria-hidden
          className={`absolute top-0 h-full max-w-none pointer-events-none ${
            isExpanded
              ? "left-1/2 -translate-x-1/2 w-full object-contain object-center"
              : "right-0 w-auto object-cover object-right"
          }`}
          style={isExpanded ? { height: "100%" } : { minWidth: "140%" }}
          draggable={false}
        />

        {!isExpanded && (
          <>
            <div
              className="absolute inset-y-0 left-0 w-6 pointer-events-none z-[1]"
              style={{
                background: "linear-gradient(to right, rgba(242,232,213,0.95), transparent)",
              }}
            />
            <div className="absolute inset-y-0 left-1.5 flex items-center z-[1] pointer-events-none">
              <span
                className="font-mono text-[8px] uppercase tracking-[0.2em] text-prl-ink/60 whitespace-nowrap"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                Mapa trasy
              </span>
            </div>
          </>
        )}

        {isExpanded && (
          <div className="absolute bottom-3 right-3 z-[2] flex items-center gap-1.5 bg-prl-ink/90 text-prl-cream px-2 py-1 font-mono text-[10px] uppercase pointer-events-none">
            <Maximize2 size={12} />
            Kliknij — powiększ
          </div>
        )}
      </motion.div>

      <PosterLightbox src={src} alt={alt} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </>
  );
};

export const ROUTE_POSTER_PEEK = PEEK_WIDTH;

function PosterLightbox({
  src,
  alt,
  isOpen,
  onClose,
}: {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-10 bg-prl-ink/92"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            className="absolute top-4 right-4 p-3 bg-prl-cream text-prl-ink retro-border hover:bg-prl-mustard transition-colors z-[310] flex items-center gap-2 font-display text-sm uppercase"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Zamknij powiększenie"
          >
            <X size={22} />
            Zamknij
          </button>
          <motion.img
            src={src}
            alt={alt}
            className="max-w-full max-h-[88vh] w-auto h-auto object-contain retro-border border-2 border-prl-cream pointer-events-none"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const RoutePosterMobile: FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);

  return (
    <>
      <div className="mt-4 border-t border-prl-ink/10 pt-4 md:hidden">
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="w-full retro-border overflow-hidden bg-prl-cream text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-prl-red"
        >
          <img src={src} alt={alt} className="w-full h-auto object-contain" draggable={false} />
          <p className="font-mono text-[10px] uppercase text-center py-2.5 bg-prl-ink/5 text-prl-gray flex items-center justify-center gap-1.5">
            <Maximize2 size={12} />
            Kliknij — powiększ mapę
          </p>
        </button>
      </div>
      <PosterLightbox src={src} alt={alt} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </>
  );
};
