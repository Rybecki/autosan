import { CONTACT_PHONE, MEETING_POINT } from "../data/siteContent";
import { CYCLIC_ROUTES, ON_DEMAND_ROUTES } from "../data/siteContent";
import { SectionHeading } from "../components/ui";
import { TravelCardForm } from "../components/TravelCardForm";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactPage() {
  const routeOptions = [
    ...CYCLIC_ROUTES.map((r) => r.shortTitle),
    ...ON_DEMAND_ROUTES.map((r) => r.shortTitle),
    "Śląskie Hollywood",
    "Event / wynajem kolektywny",
    "Inne",
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <SectionHeading subtitle="Komitet turystyczny przyjmuje zapisy drogą elektroniczną">
        Kontakt
      </SectionHeading>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div className="space-y-8 lg:sticky lg:top-24">
          <p className="font-sans text-lg text-prl-gray leading-relaxed">
            Obywatelu! Nie zwlekaj – ilość miejsc w Autosanie jest ograniczona. Wypełnij kartę
            zgłoszeniową według wzoru biura – plan musi zostać wykonany w 200%!
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-prl-red text-prl-cream flex items-center justify-center retro-border shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-prl-gray">
                  E-mail (nie Radiostacja Gliwice)
                </div>
                <a href="mailto:kontakt@slaskiautosan.pl" className="font-display text-xl hover:text-prl-red">
                  kontakt@slaskiautosan.pl
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-prl-red text-prl-cream flex items-center justify-center retro-border shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-prl-gray">Telefon</div>
                <a href={`tel:${CONTACT_PHONE.tel}`} className="font-display text-xl hover:text-prl-red transition-colors">
                  {CONTACT_PHONE.display}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-prl-red text-prl-cream flex items-center justify-center retro-border shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-prl-gray">Zbiórka</div>
                <div className="font-display text-xl">{MEETING_POINT.place}</div>
              </div>
            </div>
          </div>

          <p className="font-mono text-[10px] uppercase text-prl-gray border-t border-prl-ink/20 pt-4">
            Certyfikat „Uśmiechu Pasażera” · Aktualne badania techniczne · www.slaskiautosan.pl
          </p>
        </div>

        <TravelCardForm routeOptions={routeOptions} />
      </div>
    </div>
  );
}
