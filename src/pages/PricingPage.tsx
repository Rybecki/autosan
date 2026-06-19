import { PRICING, REGULATIONS } from "../data/siteContent";
import { DocStamp, RetroButton, SectionHeading } from "../components/ui";

type PricingPageProps = {
  onNavigate: (path: string) => void;
  playClick: () => void;
};

export function PricingPage({ onNavigate, playClick }: PricingPageProps) {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4">
      <SectionHeading subtitle="Załącznik nr 1 – Karta Zaopatrzenia Turystycznego">
        Cennik
      </SectionHeading>

      <p className="text-center font-mono text-xs uppercase text-prl-gray mb-8">
        Obowiązuje do odwołania lub do wyczerpania zapasów paliwa „Andoria”
      </p>

      <div className="bg-white retro-border overflow-hidden mb-16">
        <table className="w-full font-mono text-sm">
          <thead className="bg-prl-ink text-prl-cream font-display text-lg uppercase">
            <tr>
              <th className="p-4 text-left">Rodzaj usługi</th>
              <th className="p-4 text-center hidden sm:table-cell">Kontyngent</th>
              <th className="p-4 text-right">Cena</th>
              <th className="p-4 text-center">Bilet</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-prl-ink/10">
            {PRICING.map((row) => (
              <tr key={row.service} className="hover:bg-prl-mustard/10">
                <td className="p-4">
                  <div className="font-bold uppercase text-xs md:text-sm">{row.service}</div>
                  <div className="text-[10px] text-prl-gray mt-1 font-sans normal-case">{row.note}</div>
                </td>
                <td className="p-4 text-center hidden sm:table-cell text-prl-gray">{row.quota}</td>
                <td className="p-4 text-right text-prl-red font-bold whitespace-nowrap">{row.price}</td>
                <td className="p-4 text-center">
                  <RetroButton
                    variant="primary"
                    className="px-3 py-1.5 text-[10px] sm:text-xs tracking-wide whitespace-nowrap"
                    onClick={() => {
                      playClick();
                      onNavigate("kontakt");
                    }}
                  >
                    Kup bilet
                  </RetroButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 bg-prl-mustard/20 text-[10px] font-mono uppercase text-center">
          Płatność: gotówka, karta lub w naturze (kołocz śląski mile widziany, biletów nie zastępuje).
        </div>
      </div>

      <SectionHeading subtitle="Podpisano: Naczelnik Wydziału Ruchu i Zabawy">
        Regulamin Przewozu
      </SectionHeading>

      <DocStamp>Autosan H9-21 · Regulamin obowiązujący</DocStamp>

      <div className="mt-8 space-y-6">
        {REGULATIONS.map((rule) => (
          <div key={rule.title} className="bg-white p-6 retro-border">
            <h4 className="font-display text-xl uppercase text-prl-red mb-2">{rule.title}</h4>
            <p className="font-sans text-prl-gray leading-relaxed">{rule.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center font-sans text-prl-gray">
        Obywatelu! Twoja obecność na pokładzie to wkład w budowanie turystycznej potęgi regionu.{" "}
        <strong className="text-prl-ink">Niech żyje wspólna turystyka!</strong>
      </p>
      <p className="mt-2 text-center font-mono text-[10px] uppercase text-prl-gray">
        Podpisano: Zespół Zarządzający ds. Nostalgii i Retro-Turystyki
      </p>
    </div>
  );
}
