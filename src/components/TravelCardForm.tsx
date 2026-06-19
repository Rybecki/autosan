import { Bus } from "lucide-react";
import { MEETING_POINT } from "../data/siteContent";
import { RetroButton } from "./ui";

type TravelCardFormProps = {
  routeOptions: string[];
};

const INSTRUCTIONS = [
  "Niniejszą kartę należy wypełnić czytelnie – najlepiej drukiem urzędowym lub na maszynie.",
  "Zabrania się marudzenia na brak klimatyzacji (w „dziewiątce” jej nie ma).",
  "Za podanie fałszywych danych grozi przesadzenie na tylne siedzenie przy silniku.",
];

export function TravelCardForm({ routeOptions }: TravelCardFormProps) {
  const cardYear = new Date().getFullYear();

  return (
    <form
      className="travel-card relative p-5 sm:p-7 md:p-8 font-typewriter text-[#2a2218] max-w-xl mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <img
        src="/images/pieczatka-skasowano.png"
        alt=""
        className="travel-card-skasowano-bg"
        aria-hidden
      />
      <div className="relative z-[1] flex items-start justify-between gap-3 mb-4 pb-3 border-b-2 border-[#3d3428]">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-12 h-12 border-2 border-[#3d3428] rounded-full flex items-center justify-center bg-[#efe6d4]/60">
            <Bus className="w-7 h-7 text-prl-ink" strokeWidth={1.5} />
          </div>
          <span className="font-display text-[10px] uppercase leading-tight hidden sm:block">
            Autosan
            <br />
            H9-21
          </span>
        </div>

        <div className="text-center flex-1 min-w-0">
          <p className="font-display text-xs sm:text-sm uppercase leading-tight tracking-wide">
            Fundacja „JA YHYMM...”
          </p>
          <p className="font-display text-[10px] sm:text-xs uppercase leading-tight mt-0.5">
            Zakład Transportu Turystycznego
          </p>
          <p className="font-display text-[10px] sm:text-xs uppercase">w Katowicach</p>
        </div>

        <div
          className="travel-card-stamp w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] flex items-center justify-center text-center text-[7px] sm:text-[8px] leading-tight shrink-0"
          aria-hidden
        >
          Zatwierdzono
          <br />
          Wydział
          <br />
          Kultury
        </div>
      </div>

      <div className="relative z-[1] mb-4">
        <h3 className="font-display text-lg sm:text-xl uppercase tracking-wide leading-tight">
          Karta Zgłoszeniowa Nr: — / {cardYear}
        </h3>
        <p className="font-display text-sm sm:text-base uppercase mt-1 text-prl-gray">
          Seria: „Lista Pasażerów Autosanu”
        </p>
      </div>

      <div className="relative z-[1] space-y-4 mb-5">
        <label className="travel-card-field block">
          <span className="travel-card-label">Obywatel (pasażer)</span>
          <input type="text" name="name" placeholder="Imię i nazwisko" autoComplete="name" />
        </label>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="travel-card-field block">
            <span className="travel-card-label">Telefon kontaktowy</span>
            <input type="tel" name="phone" placeholder="+48 ..." autoComplete="tel" />
          </label>
          <label className="travel-card-field block">
            <span className="travel-card-label">Data wyjazdu</span>
            <input type="date" name="date" />
          </label>
        </div>

        <label className="travel-card-field block">
          <span className="travel-card-label">Adres ewidencyjny (e-mail)</span>
          <input type="email" name="email" placeholder="obywatel@example.pl" autoComplete="email" />
        </label>

        <label className="travel-card-field block">
          <span className="travel-card-label">Seria (wybrana trasa)</span>
          <select name="route" defaultValue="">
            <option value="" disabled>
              Wybierz rajzę...
            </option>
            {routeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>

        <div className="travel-card-field">
          <span className="travel-card-label">Miejsce zbiórki</span>
          <p className="text-sm py-1 border-b border-dashed border-prl-ink/35">{MEETING_POINT.place}</p>
        </div>

        <label className="travel-card-field block">
          <span className="travel-card-label">Przydział miejsca / uwagi</span>
          <textarea
            name="notes"
            rows={2}
            placeholder="Liczba towarzyszy, bilet normalny/ulgowy, miejsce przy oknie..."
            className="resize-none"
          />
        </label>
      </div>

      <div className="relative z-[1] grid sm:grid-cols-[1fr_auto] gap-4 items-end border-t border-[#3d3428]/25 pt-4">
        <div>
          <h4 className="font-display text-sm uppercase text-prl-red mb-2">Instrukcja dla Obywatela</h4>
          <ol className="text-[11px] sm:text-xs space-y-1.5 list-decimal list-inside leading-relaxed text-prl-gray">
            {INSTRUCTIONS.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
        </div>

        <div className="relative shrink-0 mx-auto sm:mx-0">
          <div className="border-2 border-prl-ink p-2 bg-white w-[88px] h-[88px] relative overflow-hidden">
            <div className="travel-card-qr absolute inset-2" aria-hidden />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[8px] uppercase text-prl-ink/40 text-center leading-tight">
                Security
                <br />
                ewidencja
              </span>
            </div>
            <span className="travel-card-kasowano top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              Kasowano
            </span>
          </div>
          <p className="font-mono text-[9px] text-center mt-1 text-prl-gray">nr ew. —</p>
        </div>
      </div>

      <RetroButton type="submit" variant="primary" className="relative z-[1] w-full mt-6 text-lg">
        Złóż wniosek do komitetu
      </RetroButton>
    </form>
  );
}
