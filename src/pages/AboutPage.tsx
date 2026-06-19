import { ABOUT } from "../data/siteContent";
import { DocStamp, SectionHeading } from "../components/ui";

export function AboutPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4">
      <SectionHeading subtitle="Kolektyw Śląskiego Autosana – My som stond!">
        O Nas
      </SectionHeading>

      <div className="space-y-10">
        <div className="bg-white p-8 retro-border">
          <DocStamp>Komunikat zarządu</DocStamp>
          <p className="mt-4 font-sans text-lg text-prl-gray leading-relaxed">{ABOUT.intro}</p>
          <p className="mt-4 font-display text-xl uppercase text-prl-red">
            Często pytacie: „A fto to tak gryfnie organizuje te rajzy?” – My som stond!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-prl-ink text-prl-cream p-8 retro-border space-y-4">
            <span className="font-mono text-[10px] uppercase text-prl-mustard">{ABOUT.owner.role}</span>
            <h3 className="font-display text-3xl uppercase text-prl-mustard">{ABOUT.owner.name}</h3>
            <p className="font-sans text-prl-cream/80 leading-relaxed">{ABOUT.owner.text}</p>
          </article>

          <article className="bg-prl-mustard/30 p-8 retro-border space-y-4">
            <span className="font-mono text-[10px] uppercase">{ABOUT.foundation.role}</span>
            <h3 className="font-display text-2xl uppercase leading-tight">{ABOUT.foundation.name}</h3>
            <p className="font-sans text-prl-gray leading-relaxed">{ABOUT.foundation.text}</p>
          </article>
        </div>

        <div>
          <h3 className="font-display text-3xl uppercase text-prl-red mb-6 text-center">
            Misja – Plan wykonamy w 200%!
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {ABOUT.mission.map((item) => (
              <div key={item.title} className="bg-white p-6 retro-border text-center">
                <h4 className="font-display text-xl uppercase text-prl-red mb-2">{item.title}</h4>
                <p className="font-sans text-sm text-prl-gray">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="border-l-4 border-prl-red pl-6 py-2 font-sans text-lg italic text-prl-gray">
          Zapraszamy do naszego świata. Nieważne, czy godocie, czy mówicie – w Autosanie kożdy jest u siebie.
          „A Bo Co...” zmienia się w zachwyt, a „Ja, Yhymm...” w odpowiedź na: „Czy warto było z nami jechać?”
        </blockquote>

        <p className="text-center font-mono text-xs uppercase text-prl-gray">
          Z turystycznym pozdrowieniem – Zarząd i Kierowcy Śląskiego Autosana · Wspierając nas, wspierasz „My som stond”
        </p>
      </div>
    </div>
  );
}
