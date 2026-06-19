import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { useState, type FC } from "react";
import { TourRoute } from "../data/siteContent";
import { RoutePosterMobile, RoutePosterReveal } from "./RoutePosterReveal";

function splitSchedule(schedule: string): { main: string; note?: string } {
  const match = schedule.match(/^(.+?)\s*(\([^)]+\))\s*$/);
  if (match) return { main: match[1].trim(), note: match[2] };
  return { main: schedule };
}

function RouteSchedule({
  schedule,
  className = "",
}: {
  schedule: string;
  className?: string;
}) {
  const { main, note } = splitSchedule(schedule);

  return (
    <div
      className={`shrink-0 w-full sm:w-auto sm:max-w-[7.25rem] text-left sm:text-right font-mono text-[10px] leading-snug text-prl-gray ${className}`}
    >
      <div className="flex items-center sm:items-start sm:justify-end gap-1.5">
        <Calendar size={12} className="text-prl-mustard shrink-0 sm:mt-0.5" aria-hidden />
        <div className="min-w-0">
          <p className="uppercase tracking-tight whitespace-nowrap sm:whitespace-normal">{main}</p>
          {note && <p className="mt-0.5 text-[9px] normal-case text-prl-ink/55 whitespace-nowrap sm:whitespace-normal">{note}</p>}
        </div>
      </div>
    </div>
  );
}

type RouteCardProps = {
  route: TourRoute;
  index?: number;
  showStops?: boolean;
};

export const RouteCard: FC<RouteCardProps> = ({ route, index = 0, showStops = false }) => {
  const [isPosterExpanded, setIsPosterExpanded] = useState(false);
  const hasPoster = Boolean(route.posterImage);
  const useDesktopReveal = showStops && hasPoster;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`bg-white retro-border border-l-8 ${route.colorClass} relative overflow-visible ${
        useDesktopReveal ? "md:min-h-[320px]" : ""
      }`}
    >
      <span
        className={`route-promo-ribbon ${route.badgeClass} ${
          useDesktopReveal ? "route-promo-ribbon--with-poster" : ""
        }`}
        aria-hidden
      >
        {route.era}
      </span>

      {useDesktopReveal && route.posterImage && (
        <div className="hidden md:block absolute inset-y-0 right-0 left-0 z-[35]">
          <RoutePosterReveal
            src={route.posterImage}
            alt={`Mapa graficzna: ${route.title}`}
            isExpanded={isPosterExpanded}
            onExpandChange={setIsPosterExpanded}
          />
        </div>
      )}

      <div
        className={`relative z-10 p-6 md:p-8 space-y-4 transition-all duration-300 ${
          useDesktopReveal && isPosterExpanded ? "md:opacity-0 md:pointer-events-none" : ""
        } ${useDesktopReveal ? "md:pr-[72px]" : ""}`}
      >
        <div
          className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 pt-1 ${
            useDesktopReveal ? "pl-28 pr-2 md:pl-40 md:pr-0" : "pl-28 pr-2 sm:pl-0 sm:pr-28 md:pr-40"
          }`}
        >
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl uppercase text-prl-red leading-tight min-w-0 flex-1">
            {route.title}
          </h3>
          <RouteSchedule schedule={route.schedule} className="sm:shrink-0" />
        </div>

        <p className="font-sans text-base md:text-[1.05rem] text-prl-gray leading-relaxed">{route.summary}</p>

        <p className="font-mono text-[11px] uppercase text-prl-ink/70">
          <span className="text-prl-red font-bold">Klimat:</span> {route.climate}
        </p>

        {showStops && route.stops.length > 0 && (
          <ol className="mt-4 space-y-2 border-t border-prl-ink/10 pt-4">
            {route.stops.map((stop, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="font-mono text-prl-mustard shrink-0 w-6">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="font-bold uppercase text-xs">{stop.label}</span>
                  {stop.note && <p className="text-prl-gray text-xs mt-0.5">{stop.note}</p>}
                </div>
              </li>
            ))}
          </ol>
        )}

        {showStops && route.posterImage && (
          <RoutePosterMobile src={route.posterImage} alt={`Mapa graficzna: ${route.title}`} />
        )}
      </div>
    </motion.article>
  );
};

export const RouteListItem: FC<{ route: TourRoute; index: number }> = ({ route, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`bg-white p-5 retro-border border-l-4 ${route.colorClass} flex flex-col sm:flex-row sm:items-start justify-between gap-4 group hover:bg-prl-cream/80 transition-colors`}
    >
      <div className="min-w-0 flex-1">
        <h4 className="font-display text-xl uppercase text-prl-red">{route.shortTitle}</h4>
        <RouteSchedule schedule={route.schedule} className="mt-1.5 sm:hidden" />
        <p className="font-sans text-base text-prl-gray leading-relaxed mt-1">{route.summary}</p>
      </div>
      <RouteSchedule schedule={route.schedule} className="hidden sm:block sm:pt-1" />
    </motion.div>
  );
};
