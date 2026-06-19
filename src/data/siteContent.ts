export type RouteStop = { label: string; note?: string };

export type TourRoute = {
  id: string;
  title: string;
  shortTitle: string;
  era: string;
  schedule: string;
  category: "cykliczna" | "zamowienie" | "propozycja";
  colorClass: string;
  badgeClass: string;
  summary: string;
  climate: string;
  stops: RouteStop[];
  posterImage?: string;
};

export const MEETING_POINT = {
  title: "Miejsce Zbiórki: Serce Robotniczego Śląska",
  place: "Rynek na Nikiszu (Nikiszowiec), Katowice",
  image: "/images/nikiszowiec.png",
  description:
    "Każdo naszo wyprawa zaczyno sie tam, kaj czerwono cegła godo do nos historią. Pod czujnym okiem wież kopalnianych Autosan H9-21 furgocze silnikiem, czekając na pasażerów gotowych poznać śląsko dusza.",
};

export const CONTACT_PHONE = {
  display: "+48 794-997-714",
  displayNav: "794-997-714",
  tel: "+48794997714",
};

export const CYCLIC_ROUTES: TourRoute[] = [
  {
    id: "olowiane-prawdziwe",
    title: "Szlakiem Prawdziwych Ołowianych Dzieci",
    shortTitle: "Prawdziwe Ołowiki",
    era: "Trasa z lat 70.",
    schedule: "Weekendy – sobota i niedziela (plan pięcioletni)",
    category: "cykliczna",
    colorClass: "border-l-prl-red",
    badgeClass: "bg-prl-red text-prl-cream",
    summary:
      "Lekcja historii o dr Jolancie Wadowskiej-Król i walce o zdrowie tysięcy dzieci narażonych na pylicę i ołowicę w cieniu Huty Metali Nieżelaznych w Szopienicach.",
    climate: "Poważny, dokumentalny, pełen szacunku do trudnej przeszłości.",
    posterImage: "/images/szlak-prawdziwych-olowianych.png",
    stops: [
      { label: "START", note: "Rynek na Nikiszu – krótka prezentacja historii Nikiszowca" },
      { label: "Familoki w Szopienicach", note: "Robotnicze budynki mieszkalne „ołowianych domów”" },
      { label: "Teren dawnej huty", note: "Pozostałości industrialnego giganta" },
      { label: "Przychodnia dr Wadowskiej-Król", note: "Historyczny budynek „lekarki ołowianych dzieci”" },
      { label: "Pomnik Ołowianych Dzieci", note: "Chwila zadumy przy rzeźbie upamiętniającej ofiary" },
      { label: "KONIEC", note: "Cmentarz Szopienicki" },
    ],
  },
  {
    id: "olowiane-filmowe",
    title: "Szlakiem Filmowych Ołowianych Dzieci",
    shortTitle: "Filmowe Ołowiki",
    era: "Trasa z lat 80.",
    schedule: "Weekendy – sobota i niedziela",
    category: "cykliczna",
    colorClass: "border-l-prl-ink",
    badgeClass: "bg-prl-ink text-prl-cream",
    summary:
      "Hołd dla autentyczności – lokacje serialu, porównanie kadrów z filmu z rzeczywistością. Tu nie ma dekoracji z dykty!",
    climate: "Nostalgiczny, filmowy, z nutką kinowej magii i śląskiego realizmu.",
    posterImage: "/images/szlakiem-filmowych-olowianych-dzieci.png",
    stops: [
      { label: "START", note: "Nikisz – tradycyjne miejsce zbiórki" },
      { label: "Dworzec Szopienice Północ (WYJAZD)", note: "Pierwsze spojrzenie bohatera na inną rzeczywistość" },
      { label: "Kamienica Grażyny (DOM RODZINNY)", note: "Fasada z ekranizacji" },
      { label: "Huta Józef (MIEJSCE PRACY)", note: "Surowy klimat hutniczych dzielnic" },
      { label: "Kościół św. Jadwigi", note: "Zabytek z kluczowych scen" },
      { label: "KONIEC", note: "Cmentarz Szopienice" },
    ],
  },
  {
    id: "cztery-dzielnice",
    title: "Najbardziej Śląskie 4 Dzielnice",
    shortTitle: "Wielka Czwórka",
    era: "Trasa z lat 90.",
    schedule: "Weekendy – sobota i niedziela",
    category: "cykliczna",
    colorClass: "border-l-prl-olive",
    badgeClass: "bg-prl-olive text-prl-cream",
    summary:
      "Janów-Nikiszowiec, Szopienice, Giszowiec, Bogucice – esencja regionu w jeden dzień, bez familoki w tle – z familokami w pierwszym planie.",
    climate: "Rodzinny, pełen śląskiej godki i zapachu niedzielnego obiadu z okien.",
    posterImage: "/images/najbardziej-slaskie-4-dzielnice.png",
    stops: [
      { label: "START", note: "Nikiszowiec – serce śląskiej tradycji" },
      { label: "Janów", note: "Familoki i wieże kopalniane Grupy Janowskiej" },
      { label: "Szopienice", note: "Industrialny kontrast z Nikiszowcem" },
      { label: "Giszowiec", note: "Miasto-ogród i harmonia osiedla" },
      { label: "Bogucice", note: "Dzielnica z duszą i kościelnymi wieżami" },
    ],
  },
  {
    id: "katowice-pigulka",
    title: "Katowice w Pigułce",
    shortTitle: "Katowice w Pigułce",
    era: "Trasa z lat 00.",
    schedule: "Weekendy – sobota i niedziela",
    category: "cykliczna",
    colorClass: "border-l-prl-mustard",
    badgeClass: "bg-prl-mustard text-prl-ink",
    summary:
      "Od socrealizmu bez Spodka aż po nowoczesność – wartki przejazd przez stolicę regionu, metamorfoza z „czarnego” w „zielone”.",
    climate: "Dynamiczny, miejski, pokazujący metamorfozę aglomeracji.",
    posterImage: "/images/katowice-w-pigulce.png",
    stops: [
      { label: "START", note: "Nikisz" },
      { label: "Dworzec Główny", note: "Tętniące centrum komunikacyjne" },
      { label: "Spodek Arena", note: "Zobaczysz, że naprawdę odlatuje!" },
      { label: "Strefa Kultury", note: "MCK, NOSPR, Muzeum Śląskie" },
    ],
  },
];

export const ON_DEMAND_ROUTES: TourRoute[] = [
  {
    id: "zelazne-drogi",
    title: "Szlakiem Żelaznych Dróg",
    shortTitle: "Żelazne Drogi",
    era: "Na zamówienie",
    schedule: "Dla kolektywów, szkół i grup",
    category: "zamowienie",
    colorClass: "border-l-prl-brick",
    badgeClass: "bg-prl-brick text-prl-cream",
    summary:
      "Autosanem do wąskotorówki w Bytomiu, potem cugiem do podziemi Kopalni Srebra w Tarnowskich Górach (UNESCO).",
    climate: "Logistyka XXI wieku w oprawie ubiegłego stulecia.",
    stops: [
      { label: "Przesiadka", note: "Najstarsza nieprzerwanie działająca kolej wąskotorowa na świecie" },
      { label: "Kopalnia Srebra", note: "Zjazd pod ziemię – Tarnowskie Góry" },
    ],
  },
  {
    id: "grzybobranie",
    title: "Jesienne Grzybobranie na Jurze",
    shortTitle: "Grzybobranie",
    era: "Na zamówienie",
    schedule: "Jesień – wyjazdy zakładowe",
    category: "zamowienie",
    colorClass: "border-l-prl-olive",
    badgeClass: "bg-prl-olive text-prl-cream",
    summary:
      "Wyjazd o świcie, kawa z termosu, kanapki w papierze śniadaniowym, ortaliony i poszukiwanie prawdziwków w cieniu ostańców.",
    climate: "Klimat PRL – ognisko z kartoflami i kiełbasą „zwyczajną”.",
    stops: [
      { label: "Las jurajski", note: "Wspólne czesanie lasu" },
      { label: "Ognisko", note: "Pieczonka i integracja zakładowa" },
    ],
  },
  {
    id: "wiosna-jura",
    title: "Powitanie Wiosny na Jurze",
    shortTitle: "Wiosna na Jurze",
    era: "Na zamówienie",
    schedule: "Wiosna",
    category: "zamowienie",
    colorClass: "border-l-prl-mustard",
    badgeClass: "bg-prl-mustard text-prl-ink",
    summary:
      "Topienie Marzanny w Białej Przemszy, pierwsze spacery po budzącym się lesie i poszukiwanie wiosny wśród jurajskich skałek.",
    climate: "Integracja na łonie natury po zimie.",
    stops: [
      { label: "Biała Przemsza", note: "Topienie Marzanny" },
      { label: "Jura", note: "Spacery i jurajskie skałki" },
    ],
  },
  {
    id: "zamki-jury",
    title: "Autosanem po Zamkach Jury",
    shortTitle: "Orle Gniazda",
    era: "Na zamówienie",
    schedule: "Na życzenie grupy",
    category: "zamowienie",
    colorClass: "border-l-prl-red",
    badgeClass: "bg-prl-red text-prl-cream",
    summary:
      "Szlak Orlich Gniazd z perspektywy wysokiej podłogi H9-21 – Ogrodzieniec, Bobolice, Mirów. Kremowo-pomarańczowy Autosan na tle białych wapieni wygląda wybornie!",
    climate: "Idealna trasa na zdjęcia i rodzinne wspomnienia.",
    stops: [
      { label: "Ogrodzieniec" },
      { label: "Bobolice" },
      { label: "Mirów" },
    ],
  },
];

export const PROPOSAL_ROUTES: TourRoute[] = [
  {
    id: "slaski-gigantyzm",
    title: "Śląski Gigantyzm",
    shortTitle: "Gigantyzm",
    era: "Propozycja dodatkowa",
    schedule: "Na życzenie",
    category: "propozycja",
    colorClass: "border-l-prl-gray",
    badgeClass: "bg-prl-gray text-prl-cream",
    summary:
      "Największe hałdy regionu (np. Szarlota w Rydułtowach, hałda w Kostuchnie) i gigantyczne maszyny górnicze jak z filmów sci-fi.",
    climate: "Skala mikro i makro – Śląsk z góry.",
    stops: [{ label: "Punkt widokowy", note: "Finał na hałdzie" }],
  },
  {
    id: "szychta",
    title: "Szychta po Szychcie",
    shortTitle: "Szychta",
    era: "Propozycja dodatkowa",
    schedule: "Na życzenie",
    category: "propozycja",
    colorClass: "border-l-prl-brick",
    badgeClass: "bg-prl-brick text-prl-cream",
    summary:
      "Szlak tradycji piwowarskich w Tychach połączony z opowieściami o robocie na grubie. Degustacja tylko dla pasażerów – kierowca pije oranżadę!",
    climate: "Edukacyjno-degustacyjny.",
    stops: [{ label: "Tyskie Browary Książęce" }],
  },
  {
    id: "modernizm",
    title: "Modernizm i Beton",
    shortTitle: "Modernizm",
    era: "Propozycja dodatkowa",
    schedule: "Na życzenie",
    category: "propozycja",
    colorClass: "border-l-prl-ink",
    badgeClass: "bg-prl-ink text-prl-cream",
    summary:
      "Katowicka „Beta”, kukurydze na Tysiącleciu i brutalistyczne perełki PRL w aglomeracji.",
    climate: "Architektura, która miała być symbolem nowoczesności.",
    stops: [{ label: "Aglomeracja", note: "Najambitniejsze projekty okresu PRL" }],
  },
  {
    id: "pod-gwiazdami",
    title: "Śląsk pod Gwiazdami",
    shortTitle: "Nocny Śląsk",
    era: "Propozycja dodatkowa",
    schedule: "Wieczory",
    category: "propozycja",
    colorClass: "border-l-prl-mustard",
    badgeClass: "bg-prl-mustard text-prl-ink",
    summary:
      "Nocny objazd – podświetlone szyby, neony Katowic, cisza Nikiszowca. Przystanek na tyj i kołocz.",
    climate: "Magiczna atmosfera – Autosan jako przytulny azyl.",
    stops: [{ label: "Metropolia nocą" }],
  },
  {
    id: "slaskie-hollywood",
    title: "Śląskie Hollywood – Rajza śladem Wielkiego Ekranu",
    shortTitle: "Śląskie Hollywood",
    era: "Nowość!",
    schedule: "Na życzenie",
    category: "propozycja",
    colorClass: "border-l-prl-red",
    badgeClass: "bg-prl-red text-prl-cream",
    summary:
      "Nikisz (Kutz: „Sól ziemi czarnej”, „Perła w koronie”), Katowice („Jesteś Bogiem”), Giszowiec („Paciorki jednego różańca”) – naturalny plan filmowy regionu.",
    climate: "Gratka dla kinomanów i estetów kadru.",
    stops: [
      { label: "Nikiszowiec", note: "Plac Wyzwolenia – dziesiątki ekip filmowych" },
      { label: "Katowice", note: "Paktofonika i międzynarodowe produkcje" },
      { label: "Giszowiec", note: "Miasto-ogród z ekranu" },
    ],
  },
];

export const PRICING = [
  { service: "Bilet Normalny (Cykliczny)", quota: "1 szt.", price: "40 zł", note: "Siedzenie na fotelu i patrzenie przez okno." },
  { service: "Bilet Ulgowy (Bajtle i Emeryty)", quota: "1 szt.", price: "30 zł", note: "Za okazaniem legitymacji lub odcisku palca." },
  { service: "Rajza Rodzinna (2+2)", quota: "Pakiet", price: "120 zł", note: "Promocja socjalna do gryfnych familij." },
  { service: "Wynajem Kolektywny (Event)", quota: "1 godz.", price: "Cena umowna", note: "Wymagane podanie o przydział i zgoda Rady Zakładowej." },
  { service: "Bilet „Extra” (Miejsce przy oknie)", quota: "1 szt.", price: "+ Uśmiech", note: "Kto pierwszy, tyn lepszy!" },
];

export const REGULATIONS = [
  { title: "Postanowienia ogólne", text: "Pasażer to nie wróg, ale musi znać swoje miejsce w szeregu (na fotelu). Autokar rusza punktualnie z Rynku na Nikiszu. Spóźnialscy gonią Autosan pieszo w ramach czynu społecznego." },
  { title: "Kultura osobista", text: "Całkowity zakaz marudzenia. Kto ma skwaszoną minę, siedzi na kole i trzyma zapasówkę. Chwalenie widoków i śląskiej architektury jest obowiązkowe." },
  { title: "Zasady BHP", text: "Podczas jazdy nie wystawiać rąk, nóg ani głowy przez lufciki. Autosan gna z zawrotną prędkością – fryzura ponad normę ustawową grozi." },
  { title: "Wiktuały", text: "Własny prowiant (sznitki z tyjem) dozwolony, o ile nie upaskudzisz autokaru. Dzielenie się maszkietami z kierowcą to czyn patriotyczny." },
  { title: "Bagaż", text: "Ryczki, kopalniane kilofy i gołębie pocztowe – tylko w luku bagażowym po zgłoszeniu u Konduktora." },
  { title: "Gwara", text: "Na pokładzie godomy abo mówimy. Kto nie rozumie „rajza” ani „familok”, dostanie korepetycje od kierowcy w czasie jazdy." },
];

export const EVENT_TYPES = [
  { title: "Wesela i urodziny", desc: "Autosan pomieści wszystkich towarzyszy – wesela, jubileusze, integracje." },
  { title: "Wycieczki zakładowe", desc: "Dla kolektywów zakładowych, szkół i grup zorganizowanych – oferta „Ekstra”." },
  { title: "Eventy indywidualne", desc: "Masz własny pomysł? My go zrealizujemy – trasa i czas na miarę." },
  { title: "Sesje foto i film", desc: "Zabytkowy H9-21 jako bohater drugiego planu – jak w polskich produkcjach." },
];

export const ABOUT = {
  intro:
    "My som stond! Nie przyjechali my tu w karze – tu fedrujemy w historii i pijemy tyj w cieniu kopalnianych szybów. Nasz kolektyw to śląski charakter, przekora i miłość do zapachu spalin z sanockiego autobusu.",
  owner: {
    name: "A Bo Co... Spółka z o.o.",
    role: "Właściciel Autokaru",
    text: "Odrestaurowaliśmy kultowego Autosana, by ratować techniczne dziedzictwo i pokazywać region takim, jakim jest – bez pudrowania.",
  },
  foundation: {
    name: "Fundacja JA YHYMM... Integracja Sport Turystyka Wypoczynek",
    role: "Organizator Wycieczek",
    text: "Gdy ktoś pyta, czy Śląsk jest najpiękniejszy – wystarczy „JA, YHYMM...”. Integracja mas pracujących z kulturą i zasłużonym wypoczynkiem.",
  },
  mission: [
    { title: "Autentyczność", text: "Nie pudrujemy Śląska – familoki, kopalnie, kino, które tworzyło historię." },
    { title: "Lokalność", text: "O Nikiszu opowie ktoś z Nikisza; o ołowianych dzieciach – kto czuje ten temat w sercu." },
    { title: "Humor", text: "Dystans do życia, pełna powaga do bezpieczeństwa i historii." },
  ],
  bus: "Autosan H9-21 – flagowy krążownik szos, duma sanockiej fabryki. Aktualne badania techniczne i certyfikat „Uśmiechu Pasażera”.",
};

export const HERO_MANIFESTO = {
  greeting: "Obywatele i Obywatelki! Ludu Pracujący Miast i Wsi!",
  lead:
    "Z ogromną radością ogłaszamy: Śląski Autosan wychodzi naprzeciw kulturalno-oświatowym potrzebom mas! Nasz Autosan H9-21 melduje pełną gotowość na odcinku turystyczno-krajoznawczym.",
  pitch:
    "To nie bydzie jakoś tam zwykło rajza. To prawdziwo podróż w czasie – zapach przygody i ryk silnika, co to żodnej hołdy sie nie lynko!",
  cta: "Wsiadejcie! Jademy na Nikisz, jademy w historia!",
  note: "Rezerwacje drogą elektroniczną. W autobusie nie ma „klientów” – są tylko Towarzysze Podróży!",
};

export const NAV_ITEMS = [
  { label: "Start", path: "" },
  { label: "Trasy", path: "trasy" },
  { label: "Na zamówienie", path: "na-zamowienie" },
  { label: "O nas", path: "o-nas" },
  { label: "Cennik", path: "cennik" },
  { label: "Kontakt", path: "kontakt" },
];
