import { ON_DEMAND_ROUTES, PROPOSAL_ROUTES, EVENT_TYPES } from "../data/siteContent";
import { RouteCard } from "../components/RouteCard";
import { RetroButton, SectionHeading } from "../components/ui";
import { Bus, Calendar, Camera, Users } from "lucide-react";

const EVENT_ICONS = [Users, Camera, Calendar, Bus];

type OnDemandPageProps = {
  onNavigate: (path: string) => void;
  playClick: () => void;
};

export function OnDemandPage({ onNavigate, playClick }: OnDemandPageProps) {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading subtitle="Dla kolektywów, szkół i grup zorganizowanych">
          Zamówienia Specjalne
        </SectionHeading>

        <p className="text-center font-sans text-prl-gray mb-12 leading-relaxed max-w-2xl mx-auto">
          Oferta „Ekstra” dla zakładów pracy – wąskotorówka, Jura, zamki, grzybobranie w ortalionach.
          Eventy indywidualne: wesela, urodziny, wycieczki zakładowe – Autosan pomieści wszystkich towarzyszy!
        </p>

        <div className="space-y-10 mb-20">
          {ON_DEMAND_ROUTES.map((route, i) => (
            <RouteCard key={route.id} route={route} index={i} showStops />
          ))}
        </div>
      </div>

      <section className="py-16 bg-prl-olive/10">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading subtitle="Przekraczamy normę – plan turystyczny ponad wymagania">
            Nowe Propozycje
          </SectionHeading>

          <div className="space-y-10">
            {PROPOSAL_ROUTES.map((route, i) => (
              <RouteCard key={route.id} route={route} index={i} showStops />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionHeading subtitle="Autobus na każdą okazję">Eventy i Czyny Społeczne</SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {EVENT_TYPES.map((event, i) => {
            const Icon = EVENT_ICONS[i] ?? Bus;
            return (
              <div key={event.title} className="bg-white p-6 retro-border text-center space-y-3">
                <div className="w-14 h-14 bg-prl-red text-prl-cream flex items-center justify-center rounded-full mx-auto">
                  <Icon size={24} />
                </div>
                <h4 className="font-display text-xl uppercase">{event.title}</h4>
                <p className="font-sans text-sm text-prl-gray">{event.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-prl-red text-prl-cream p-8 md:p-10 retro-border flex flex-col md:flex-row items-center gap-6">
          <div className="flex-grow space-y-3">
            <h3 className="font-display text-3xl uppercase">Masz własny pomysł na trasę?</h3>
            <p className="font-sans opacity-90">
              Nasza oferta jest elastyczna jak materiał na siedzeniach Autosana. Wynajem kolektywny – cena
              umowna, wymagane podanie o przydział.
            </p>
          </div>
          <RetroButton
            variant="secondary"
            className="whitespace-nowrap shrink-0"
            onClick={() => {
              playClick();
              onNavigate("kontakt");
            }}
          >
            Zapytaj o termin
          </RetroButton>
        </div>
      </section>
    </div>
  );
}
