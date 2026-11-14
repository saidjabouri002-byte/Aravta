// Central content for ARAVTTA pages. Edit text, images and links here.

export type City = {
  slug: string;
  name: string;
  tagline: string;
  line: string;
  paragraph: string;
  highlights: string[];
  image: string;
};

export const cities: City[] = [
  {
    slug: "tanger",
    name: "Tanger",
    tagline: "Porte du détroit",
    line: "Porte du détroit, entre médina, corniche et connexions. Une ville d'arrivée, de départ et d'histoires maritimes.",
    paragraph:
      "Face à l'Europe, Tanger est la porte d'entrée du Maroc. Sa médina, la Kasbah, le Cap Spartel et les Grottes d'Hercule racontent des siècles d'échanges entre Atlantique et Méditerranée. Ville d'affaires et de culture, portée par Tanger Med et le TGV Al Boraq, elle concentre l'essentiel des flux touristiques du Nord.",
    highlights: ["Kasbah & médina", "Cap Spartel", "Grottes d'Hercule", "Port Tanger Med"],
    image: "/images/region/tanger.avif",
  },
  {
    slug: "tetouan",
    name: "Tétouan",
    tagline: "La colombe blanche",
    line: "Patrimoine andalou, médina blanche et savoir-faire vivant. Une étape calme pour lire l'histoire du Nord.",
    paragraph:
      "Surnommée « la colombe blanche », Tétouan abrite une médina classée au patrimoine mondial de l'UNESCO, héritière directe de l'Andalousie. Artisanat, école des beaux-arts, architecture hispano-mauresque et plages de Martil, M'diq et Cabo Negro en font une destination à la fois culturelle et balnéaire.",
    highlights: ["Médina UNESCO", "Héritage andalou", "Martil & Cabo Negro", "Artisanat"],
    image: "/images/region/tetouan.avif",
  },
  {
    slug: "chefchaouen",
    name: "Chefchaouen",
    tagline: "La perle bleue du Rif",
    line: "Ville bleue du Rif, faite de ruelles lentes et de lumière. Une icône photographique, artisanale et montagnarde.",
    paragraph:
      "Nichée au pied des montagnes du Rif, Chefchaouen séduit par ses ruelles peintes en bleu, sa place Outa el Hammam et sa kasbah. Point de départ idéal vers les cascades d'Akchour et le parc national de Talassemtane, elle attire voyageurs, photographes et amoureux de randonnée toute l'année.",
    highlights: ["Médina bleue", "Cascades d'Akchour", "Parc de Talassemtane", "Randonnée"],
    image: "/images/region/chefchaouen.avif",
  },
  {
    slug: "al-hoceima",
    name: "Al Hoceima",
    tagline: "La perle de la Méditerranée",
    line: "Baies claires, falaises fortes et Méditerranée ouverte. Une destination de nature, de mer et de respiration.",
    paragraph:
      "Entre falaises et eaux turquoise, Al Hoceima offre parmi les plus belles baies de la Méditerranée marocaine : Quemado, Cala Iris, Sfiha. Son parc national, riche en faune marine et en paysages préservés, en fait une destination privilégiée pour le tourisme balnéaire, la plongée et l'écotourisme.",
    highlights: ["Plage Quemado", "Cala Iris", "Parc national", "Plongée"],
    image: "/images/region/al-hoceima.jpg",
  },
  {
    slug: "assilah",
    name: "Assilah",
    tagline: "La cité des arts",
    line: "Remparts portugais, murs blancs et fresques d'artistes. Une petite ville atlantique, calme et inspirée.",
    paragraph:
      "Ceinte de remparts portugais face à l'Atlantique, Assilah est une petite médina blanche où les murs se couvrent de fresques chaque été lors de son célèbre Moussem culturel international. Ses plages, comme Paradise Beach, et son ambiance paisible en font une escapade prisée à 40 minutes de Tanger.",
    highlights: ["Remparts portugais", "Moussem culturel", "Fresques murales", "Paradise Beach"],
    image: "/images/region/assilah.jpg",
  },
];

export type Partner = {
  name: string;
  short: string;
  logo: string;
  website?: string; // Leave empty until the link is confirmed.
};

export const partners: Partner[] = [
  {
    name: "Office National Marocain du Tourisme",
    short: "ONMT",
    logo: "/images/partners/onmt.png",
    website: "https://www.onmt.ma",
  },
  {
    name: "Morocco — Kingdom of Light",
    short: "Visit Morocco",
    logo: "/images/partners/kingdom-of-light.png",
    website: "https://www.visitmorocco.com",
  },
  {
    name: "Confédération Nationale du Tourisme",
    short: "CNT",
    logo: "/images/partners/cnt.png",
    website: "https://www.cnt.ma",
  },
  {
    name: "Fédération Nationale des Associations des Agences de Voyages du Maroc",
    short: "FNAAVM",
    logo: "/images/partners/fnaavm.png",
  },
  {
    name: "Conseil Régional du Tourisme Tanger-Tétouan-Al Hoceima",
    short: "CRT TTA",
    logo: "/images/partners/crt-tanger.png",
  },
  {
    name: "CGEM Tanger-Tétouan-Al Hoceima",
    short: "CGEM TTA",
    logo: "/images/partners/cgem-tth.png",
    website: "https://www.cgem.ma",
  },
  {
    name: "Institut Supérieur International de Tourisme de Tanger",
    short: "ISITT",
    logo: "/images/partners/isitt.png",
    website: "https://www.isitt.ma",
  },
];

export type Commission = {
  number: string;
  title: string;
  scope: string;
  leads: string[];
  mission: string;
  axes: string[];
  image?: string; // Photo path under /public.
};

export const commissions: Commission[] = [
  {
    number: "01",
    title: "Commission Maritime",
    scope: "Détroit, billetterie, coordination portuaire",
    image: "/images/commissions/transport-maritime.jpg",
    leads: ["M. Jamal Ben Abdessadak"],
    mission:
      "Veiller au respect des droits des agences de voyages dans la billetterie maritime et faciliter les procédures avec les compagnies maritimes.",
    axes: [
      "Négociation de commissions fixes et équitables avec les opérateurs maritimes.",
      "Suivi des litiges liés à la billetterie et aux annulations.",
      "Renforcement du poids de l'association face aux acteurs du port Tanger Med.",
    ],
  },
  {
    number: "02",
    title: "Commission Aérienne",
    scope: "Compagnies, GDS, distribution",
    image: "/images/commissions/transport-aerien.jpg",
    leads: ["M. Mustapha El Broji"],
    mission:
      "Assurer une interface fluide entre les agences et les compagnies aériennes, ainsi qu'avec les GDS (Amadeus, etc.).",
    axes: [
      "Veille sur les politiques tarifaires et les changements de règles des compagnies.",
      "Soutien aux agences sur les questions d'émission de billets (ADM/ACM).",
      "Dialogue pour faciliter l'accès aux avantages partenaires.",
    ],
  },
  {
    number: "03",
    title: "Commission Haj / Omra",
    scope: "Conformité, qualité, encadrement",
    image: "/images/commissions/hajj-omra.jpeg",
    leads: ["M. Said Tassi", "M. Med Said Zoubair"],
    mission:
      "Organiser, encadrer et protéger les intérêts des agences opérant dans le segment religieux.",
    axes: [
      "Coordination avec le Ministère pour les quotas et les autorisations.",
      "Standardisation de la qualité des services pour les pèlerins.",
      "Lutte contre la concurrence déloyale et les opérateurs non agréés.",
    ],
  },
  {
    number: "04",
    title: "Commission Réceptif / Outgoing",
    scope: "Circuits, production, expérience client",
    image: "/images/commissions/receptif-outgoing.jpg",
    leads: ["M. Taha Bnainou", "M. Moudad Chioua"],
    mission:
      "Dynamiser l'offre touristique régionale (Réceptif) et optimiser les ventes de forfaits à l'étranger (Outgoing).",
    axes: [
      "Création de produits communs et de circuits packagés valorisant la région Tanger-Tétouan-Al Hoceima.",
      "Networking avec des TO étrangers pour attirer plus de clients sur la région.",
      "Formation sur les nouvelles tendances de voyage.",
    ],
  },
  {
    number: "05",
    title: "Commission MICE",
    scope: "Rencontres, événements, tourisme d'affaires",
    image: "/images/commissions/mice.jpg",
    leads: ["M. Aziz Benammi", "Mme Asmae Outmani"],
    mission:
      "Meetings, Incentives, Conferences, Exhibitions : positionner la région comme une destination d'affaires de premier plan.",
    axes: [
      "Promotion de la région auprès des grandes entreprises et associations professionnelles nationales et internationales.",
      "Collaboration avec les hôtels (Fairmont La Marina et autres infrastructures) pour créer des offres « Corporate » attractives.",
      "Standardisation de la qualité d'accueil pour les groupes d'affaires.",
    ],
  },
  {
    number: "06",
    title: "Commission des Sages",
    scope: "Transmission, médiation, déontologie",
    image: "/images/commissions/conseil-sages.jpg",
    leads: ["M. Aziz Lamrani", "M. Noureddine Bahid", "M. Abdelmajid Benjelloun"],
    mission:
      "Garantir la cohésion de l'association, la médiation et la transmission du savoir-faire.",
    axes: [
      "Mise à jour et respect du règlement intérieur et de la déontologie.",
      "Médiation interne en cas de différend entre membres.",
      "Conseil stratégique auprès du bureau exécutif.",
    ],
  },
  {
    number: "07",
    title: "Relations Publiques / Porte-Parole",
    scope: "Dialogue institutionnel et communication",
    image: "/images/commissions/relations-publiques.webp",
    leads: ["M. Mohamed El Hitmi", "M. Moncef Tob", "M. Aziz Lamrani"],
    mission:
      "Porter la voix de l'ARAVTTA, valoriser l'image de la profession et gérer la communication institutionnelle.",
    axes: [
      "Relations presse et communication sur les réseaux sociaux.",
      "Représentation officielle auprès des autorités, des élus et des médias.",
      "Communication de crise et gestion de l'image de marque de l'agence de voyages.",
    ],
  },
];

export type FormerPresident = {
  name: string;
  photo: string;
  term?: string;
};

// Ordre repris de la brochure officielle de l'ARAVTTA.
export const formerPresidents: FormerPresident[] = [
  { name: "Ahmed Hantout", photo: "/images/presidents/ahmed-hantout.jpg" },
  { name: "Driss Benjelloun", photo: "/images/presidents/driss-benjelloun.jpg" },
  { name: "Brahim Hantout", photo: "/images/presidents/brahim-hantout.jpg" },
  { name: "Fouad Mesmoudi", photo: "/images/presidents/fouad-mesmoudi.jpg" },
  { name: "Abdelmajid Benjelloun", photo: "/images/presidents/abdelmajid-benjelloun.jpg" },
  { name: "José Estevez", photo: "/images/presidents/jose-estevez.jpg" },
  { name: "Abderrahmane El Alaoui", photo: "/images/presidents/abderrahmane-el-alaoui.jpg" },
  { name: "Mohammed Chioua", photo: "/images/presidents/mohammed-chioua.jpg", term: "2017 – 2020" },
];

export const associationPages = [
  {
    href: "/association/mot-du-president",
    label: "Mot du Président",
    copy: "Le message de Mohamed El Hitmi aux membres, partenaires et visiteurs.",
  },
  {
    href: "/association/commissions",
    label: "Les Commissions",
    copy: "Sept commissions, leurs responsables, missions et axes de travail.",
  },
  {
    href: "/association/plan-action",
    label: "Plan d'Action",
    copy: "Les actions court et long terme du comité 2024 – 2027.",
  },
  {
    href: "/association/plan-strategique",
    label: "Plan Stratégique",
    copy: "Les deux axes qui structurent la vision 2024 – 2027.",
  },
  {
    href: "/association/anciens-presidents",
    label: "Anciens Présidents",
    copy: "Hommage à celles et ceux qui ont construit l'association.",
  },
];

export type NewsItem = {
  slug: string;
  category: string;
  date: string; // Display date, e.g. "15 janvier 2026".
  title: string;
  copy: string; // Short summary used on cards.
  body?: string[]; // Optional longer text shown on the Actualités page.
  image: string;
  source?: string; // Publication the article comes from.
  url?: string; // Link to the original article.
  imagePosition?: string; // CSS object-position, e.g. "50% 15%" for portraits.
};

// Press articles about the ARAVTTA, newest first. The homepage shows the first three.
export const news: NewsItem[] = [
  {
    slug: "agences-de-voyages-en-declin",
    category: "Presse",
    date: "12 août 2024",
    title: "Les agences de voyages en déclin en plein boom du tourisme au Maroc",
    copy: "Mohamed El Hitmi, président de l'ARAVTTA, dénonce les faux voyagistes et alerte sur la situation difficile des agences du nord du Royaume.",
    image: "/images/region/tanger-tourism-associations.webp",
    source: "Le Matin",
    url: "https://lematin.ma/economie/les-agences-de-voyages-en-declin-en-plein-boom-du-tourisme-au-maroc/238845",
  },
  {
    slug: "el-hitmi-reelu-2024",
    category: "Institutionnel",
    date: "19 janvier 2024",
    title: "El Hitmi réélu à la tête des voyagistes du Nord",
    copy: "L'Assemblée générale élective du 15 janvier 2024 reconduit Mohammed El Hitmi (Hit Voyages) à la présidence pour 2024 – 2027, avec un nouveau bureau et un plan d'action.",
    image: "/images/members/mohamed-el-hitmi.jpg",
    imagePosition: "50% 12%",
    source: "Premiumtravelnews",
    url: "https://premiumtravelnews.com/2024/01/19/el-hitmi-reelu-a-la-tete-des-voyagistes-du-nord/",
  },
  {
    slug: "el-hitmi-nouveau-president-2020",
    category: "Institutionnel",
    date: "2020",
    title: "Mohammed El Hitmi, nouveau président de l'ARAV-TTA",
    copy: "Mohammed El Hitmi est élu à la présidence de l'association pour un premier mandat de trois ans, de 2020 à 2023.",
    image: "/images/region/tanger.avif",
    source: "Aujourd'hui le Maroc",
    url: "https://aujourdhui.ma/economie/agences-de-voyages-mohammed-el-hitmi-nouveau-president-de-larav-tta",
  },
  {
    slug: "offres-ete-2020",
    category: "Tourisme",
    date: "3 juin 2020",
    title: "Tourisme : aperçu sur les offres de la région de Tanger-Tétouan pour cet été",
    copy: "Les associations touristiques de la région s'associent pour proposer des forfaits d'été (hébergement, repas, excursions) et limiter le recours au secteur informel.",
    image: "/images/region/chefchaouen.avif",
    source: "Médias24",
    url: "https://medias24.com/2020/06/03/tourisme-apercu-sur-les-offres-de-la-region-de-tanger-tetouan-pour-cet-ete",
  },
  {
    slug: "premier-forum-2020",
    category: "Événement",
    date: "20 février 2020",
    title: "Premier Forum de l'Association des agences de voyages de la région",
    copy: "L'ARAVTTA annonce son premier Forum régional des agences, organisé avec les délégations régionales du tourisme et l'ISITT, avec l'appui du Conseil régional du tourisme.",
    image: "/images/commissions/mice-event-tanger.webp",
    source: "Le Matin",
    url: "https://lematin.ma/journal/2020/premier-forum-lassociation-agences-voyages-region/332076.html",
  },
];

export type EventItem = {
  slug: string;
  status: "upcoming" | "past";
  title: string;
  date: string; // Display date, or "Date à confirmer".
  city?: string;
  copy: string;
  image: string;
  source?: string; // Press article about the event.
  url?: string;
};

// Move an event from "upcoming" to "past" once it has taken place.
export const events: EventItem[] = [
  {
    slug: "forum-agent-de-voyages-3",
    status: "upcoming",
    title: "Forum de l'Agent de Voyages — 3e édition",
    date: "Date à confirmer",
    copy: "Le rendez-vous annuel de la profession : tables rondes, partenaires et échanges entre agences du Nord.",
    image: "/images/commissions/mice-event-tanger.webp",
  },
  {
    slug: "seminaire-tetouan",
    status: "upcoming",
    title: "Séminaire de l'ARAVTTA à Tétouan",
    date: "Date à confirmer",
    city: "Tétouan",
    copy: "Une journée de travail autour des enjeux des agences : réglementation, digitalisation et produits communs.",
    image: "/images/region/tetouan.avif",
  },
  {
    slug: "rencontre-al-hoceima",
    status: "upcoming",
    title: "Rencontre des agents de voyages à Al Hoceima",
    date: "Date à confirmer",
    city: "Al Hoceima",
    copy: "Fédérer les agences de la province et valoriser la destination méditerranéenne.",
    image: "/images/region/al-hoceima.jpg",
  },
  {
    slug: "journee-de-reflexion",
    status: "upcoming",
    title: "Journée de réflexion",
    date: "Date à confirmer",
    copy: "Un temps collectif pour faire le point sur le plan d'action 2024 – 2027 et les priorités des commissions.",
    image: "/images/region/tanger-tourism-associations.webp",
  },
  {
    slug: "assemblee-generale-elective-2024",
    status: "past",
    title: "Assemblée générale élective 2024",
    date: "15 janvier 2024",
    city: "Tanger · Hôtel Farah",
    copy: "Mohammed El Hitmi (Hit Voyages) est reconduit à la présidence pour le mandat 2024 – 2027. Un nouveau bureau et le plan d'action 2024 – 2027 sont présentés.",
    image: "/images/members/mohamed-el-hitmi.jpg",
    source: "Premiumtravelnews",
    url: "https://premiumtravelnews.com/2024/01/19/el-hitmi-reelu-a-la-tete-des-voyagistes-du-nord/",
  },
  {
    slug: "assemblee-generale-elective-2020",
    status: "past",
    title: "Assemblée générale élective 2020",
    date: "30 novembre 2020",
    city: "Tanger · Hôtel Farah",
    copy: "Mohammed El Hitmi est élu président de l'association pour un premier mandat de trois ans (2020 – 2023).",
    image: "/images/region/tanger.avif",
    source: "Aujourd'hui le Maroc",
    url: "https://aujourdhui.ma/economie/agences-de-voyages-mohammed-el-hitmi-nouveau-president-de-larav-tta",
  },
];
