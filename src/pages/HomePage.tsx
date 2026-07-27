import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { MapPin, Ticket, Bus } from "lucide-react";
import {
  CYCLIC_ROUTES,
  ON_DEMAND_ROUTES,
  HERO_MANIFESTO,
  MEETING_POINT,
  ABOUT,
} from "../data/siteContent";
import { RouteListItem } from "../components/RouteCard";
import { RetroButton, SectionHeading } from "../components/ui";
import { VintageVideo, VintageVideoBackground } from "../components/VintageVideo";

type HomePageProps = {
  onNavigate: (path: string) => void;
  playClick: () => void;
};

export function HomePage({ onNavigate, playClick }: HomePageProps) {
  const meetingSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: meetingSectionRef,
    offset: ["start end", "end start"],
  });
  const meetingBgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      <section className="relative min-h-[calc(100dvh-4rem)] flex items-center justify-center overflow-hidden">
        <VintageVideoBackground src="/videos/autosan-wer-2.mp4" />

        <div className="relative z-10 text-center px-4 max-w-4xl py-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-sm uppercase tracking-widest text-prl-gray mb-4"
          >
            {HERO_MANIFESTO.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-display text-6xl md:text-8xl text-prl-ink uppercase leading-[0.88] tracking-tighter mb-6"
          >
            Wsiądź do <br />
            <span className="text-prl-red">Historii Śląska</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="font-sans text-lg md:text-xl text-prl-gray max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            {HERO_MANIFESTO.lead}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="font-sans text-base text-prl-ink/80 max-w-2xl mx-auto mb-10 italic"
          >
            {HERO_MANIFESTO.pitch}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <RetroButton onClick={() => { playClick(); onNavigate("trasy"); }}>
              Rozkład jazdy 200%
            </RetroButton>
            <RetroButton variant="outline" onClick={() => { playClick(); onNavigate("na-zamowienie"); }}>
              Na zamówienie
            </RetroButton>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-6 hidden xl:block"
        >
          <div className="pks-schedule w-72 rotate-[-2deg]">
            <div className="border-b border-prl-ink pb-2 mb-2 flex justify-between items-center">
              <span className="font-bold text-xs">KARTA ZAOPATRZENIA</span>
              <Ticket size={16} />
            </div>
            <p className="text-[10px] leading-snug opacity-90">
              Bilet normalny (cykliczny): 40 zł · Ulgowy: 30 zł · Rajza rodzinna 2+2: 120 zł.
              Płatność: gotówka, karta. Kołocz mile widziany, biletów nie zastępuje.
            </p>
          </div>
        </motion.div>
      </section>

      <section ref={meetingSectionRef} className="relative py-20 text-prl-cream overflow-hidden">
        <motion.img
          src="/images/brick-wall-meeting-point.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-[118%] object-cover will-change-transform"
          style={{ y: meetingBgY }}
        />
        <div className="absolute inset-0 bg-prl-ink/70" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-none">
              {MEETING_POINT.title}
            </h2>
            <p className="font-sans text-lg text-prl-cream/75 leading-relaxed">{MEETING_POINT.description}</p>
            <div className="flex items-start gap-3 p-4 bg-prl-cream/10 retro-border">
              <MapPin className="text-prl-mustard shrink-0 mt-1" />
              <div>
                <div className="font-mono text-[10px] uppercase opacity-60">Adres zbiórki</div>
                <div className="font-display text-2xl">{MEETING_POINT.place}</div>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-prl-gray retro-border overflow-hidden relative">
            <img
              src={MEETING_POINT.image}
              alt="Rynek na Nikiszu – Nikiszowiec"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-prl-red text-prl-cream px-3 py-1 font-display text-lg retro-border">
              AUTOSAN GOTOWY
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <SectionHeading subtitle="Plan wykonamy w 200% – w każdy weekend">
          Rozkład Jazdy
        </SectionHeading>

        <div className="mb-8 p-6 bg-prl-mustard/20 retro-border font-sans text-prl-ink leading-relaxed">
          <p>
            <strong className="font-display uppercase text-prl-red">Trasy cykliczne</strong> – zgodnie z
            zatwierdzonym planem pięcioletnim ruszamy w weekendy. Każda rajza startuje z Rynku na Nikiszu.
            Docelowo sprzedaż biletów online – na razie zapisy w komitecie turystycznym (formularz na stronie).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start lg:items-stretch mb-12">
          <div className="order-2 lg:order-1 space-y-4 min-w-0">
            {CYCLIC_ROUTES.map((route, i) => (
              <RouteListItem key={route.id} route={route} index={i} />
            ))}
          </div>

          <div className="order-1 lg:order-2 flex flex-col lg:sticky lg:top-24 lg:min-h-full">
            <VintageVideo
              src="/videos/autosan-wer-2.mp4"
              label="Film dokumentalny · Autosan H9-21"
              lazy
            />
            <div className="hidden lg:flex lg:flex-1 items-center justify-center lg:py-6">
              <RetroButton variant="secondary" onClick={() => { playClick(); onNavigate("trasy"); }}>
                Pełne opisy tras i przystanki
              </RetroButton>
            </div>
          </div>

          <div className="order-3 lg:hidden flex justify-center pt-2">
            <RetroButton variant="secondary" onClick={() => { playClick(); onNavigate("trasy"); }}>
              Pełne opisy tras i przystanki
            </RetroButton>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 bg-prl-olive/5">
        <SectionHeading subtitle="Zamówienia specjalne i czyny społeczne – dla grup">
          Na Zamówienie
        </SectionHeading>

        <div className="mb-8 p-6 bg-prl-brick/15 retro-border font-sans text-prl-ink leading-relaxed">
          <p>
            <strong className="font-display uppercase text-prl-brick">Oferta „Ekstra”</strong> – dla
            kolektywów zakładowych, szkół i grup zorganizowanych. Wąskotorówka, Jura, zamki, grzybobranie
            w ortalionach – albo własny pomysł: wesela, urodziny, integracje. Autosan pomieści wszystkich
            towarzyszy!
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {ON_DEMAND_ROUTES.map((route, i) => (
            <RouteListItem key={route.id} route={route} index={i} />
          ))}
        </div>

        <div className="text-center">
          <RetroButton variant="secondary" onClick={() => { playClick(); onNavigate("na-zamowienie"); }}>
            Propozycje dodatkowe i eventy
          </RetroButton>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <img
          src="/images/brick-wall-meeting-point.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-prl-ink/70" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <Bus className="w-12 h-12 text-prl-red mx-auto" />
          <p className="font-sans text-lg leading-relaxed text-prl-cream/90">{ABOUT.bus}</p>
          <p className="font-display text-2xl uppercase text-prl-red">{HERO_MANIFESTO.cta}</p>
          <p className="font-mono text-xs uppercase text-prl-cream/70">{HERO_MANIFESTO.note}</p>
        </div>
      </section>
    </>
  );
}
