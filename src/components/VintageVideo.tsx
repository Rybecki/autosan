import { useEffect, useRef, useState } from "react";

type VintageVideoProps = {
  src: string;
  label?: string;
  className?: string;
  lazy?: boolean;
};

const BASE_VIDEO_PROPS = {
  muted: true,
  loop: true,
  playsInline: true,
} as const;

export function VintageVideoBackground({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <video
        className="vintage-video absolute inset-0 w-full h-full object-cover opacity-45"
        src={src}
        {...BASE_VIDEO_PROPS}
        autoPlay
        preload="metadata"
      />
      <div className="vintage-video-scanlines absolute inset-0" />
      <div className="vintage-video-vignette absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-prl-cream/60 via-prl-cream/35 to-prl-cream" />
    </div>
  );
}

export function VintageVideo({ src, label = "Materiał filmowy", className = "", lazy = false }: VintageVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(!lazy);

  useEffect(() => {
    if (!lazy || shouldLoad) return;
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [lazy, shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;
    videoRef.current?.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <div ref={wrapRef} className={`vintage-video-wrap retro-border ${className}`}>
      <video
        ref={videoRef}
        className="vintage-video"
        src={shouldLoad ? src : undefined}
        {...BASE_VIDEO_PROPS}
        autoPlay={shouldLoad}
        preload={lazy ? "none" : "metadata"}
      />
      <div className="vintage-video-scanlines" aria-hidden />
      <div className="vintage-video-vignette" aria-hidden />
      <div
        className="absolute top-3 left-3 z-10 flex items-center gap-1.5 pointer-events-none"
        aria-hidden
      >
        <span className="vintage-video-rec-dot size-2 shrink-0 rounded-full bg-prl-red" />
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-prl-red drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
          Rec
        </span>
      </div>
      {label && (
        <div className="absolute bottom-3 left-3 right-3 z-10 flex justify-between items-end gap-2 pointer-events-none">
          <span className="bg-prl-ink/80 text-prl-cream px-2 py-1 font-mono text-[10px] uppercase">
            {label}
          </span>
          <span className="bg-prl-red text-prl-cream px-2 py-0.5 font-display text-xs retro-border">
            na żywo ze śląska
          </span>
        </div>
      )}
    </div>
  );
}
