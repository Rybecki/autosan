import { CYCLIC_ROUTES, MEETING_POINT } from "../data/siteContent";
import { RouteCard } from "../components/RouteCard";
import { DocStamp, SectionHeading } from "../components/ui";

export function RoutesPage() {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4">
      <SectionHeading subtitle="Harmonogram czynów turystycznych – trasy weekendowe">
        Trasy Cykliczne
      </SectionHeading>

      <div className="mb-10 space-y-4 text-center">
        <DocStamp>Załącznik do planu pięcioletniego</DocStamp>
        <p className="font-sans text-prl-gray leading-relaxed">
          Obywatele! Poniżej szczegółowy opis rajz realizowanych przez Autosan H9-21. Zapnijcie pasy – w
          „dziewiątce” ich nie ma, więc trzymajcie się rurek! Start: <strong>{MEETING_POINT.place}</strong>.
        </p>
      </div>

      <div className="space-y-10">
        {CYCLIC_ROUTES.map((route, i) => (
          <RouteCard key={route.id} route={route} index={i} showStops />
        ))}
      </div>

      <p className="mt-12 text-center font-mono text-[11px] uppercase text-prl-gray">
        Kto rano wstaje, ten mo miejsce przi oknie (i lepszy widok na familoki)!
      </p>
    </div>
  );
}
