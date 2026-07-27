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
        <div className="relative overflow-hidden retro-border bg-prl-ink text-prl-cream p-6 sm:p-8 space-y-8 lg:sticky lg:top-24">
          <img
            src="/images/brick-wall-meeting-point.png"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-prl-ink/70" aria-hidden />

          <p className="relative z-[1] font-sans text-lg text-prl-cream/90 leading-relaxed">
            Obywatelu! Nie zwlekaj – ilość miejsc w Autosanie jest ograniczona. Wypełnij kartę
            zgłoszeniową według wzoru biura – plan musi zostać wykonany w 200%!
          </p>

          <div className="relative z-[1] space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-prl-red text-prl-cream flex items-center justify-center retro-border shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-prl-cream/70">
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
                <div className="font-mono text-[10px] uppercase text-prl-cream/70">Telefon</div>
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
                <div className="font-mono text-[10px] uppercase text-prl-cream/70">Zbiórka</div>
                <div className="font-display text-xl">{MEETING_POINT.place}</div>
              </div>
            </div>
          </div>

          <p className="relative z-[1] font-mono text-[10px] uppercase text-prl-cream/70 border-t border-prl-cream/20 pt-4">
            Certyfikat „Uśmiechu Pasażera” · Aktualne badania techniczne · www.slaskiautosan.pl
          </p>
        </div>

        <TravelCardForm routeOptions={routeOptions} />
      </div>
    </div>
  );
}
