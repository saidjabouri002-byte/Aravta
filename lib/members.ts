// Member agencies and bureau. Leave `logo` / `photo` empty to show a placeholder
// until the file is added under /public.

export type Member = {
  agency: string;
  owner?: string;
  role?: string;
  city: string;
  description: string;
  website?: string;
  phone?: string;
  email?: string;
  logo?: string;
  photo?: string;
};

export const members: Member[] = [
  {
    agency: "Hit Voyages",
    owner: "Mohamed El Hitmi",
    role: "Président de l'ARAVTTA",
    city: "Tanger",
    description:
      "Agence de voyages reconnue au cœur de Tanger, fondée en 1989 : voyages nationaux et internationaux, billetterie aérienne et maritime, et séjours officiels pour le Hajj et l'Omra.",
    phone: "+212 5399-36877",
    email: "hitvoyages@hotmail.fr",
    logo: "/images/members/hit-voyages-logo.jpg",
    photo: "/images/members/mohamed-el-hitmi.jpg",
  },
  {
    agency: "VIP Africa",
    owner: "Aziz Benammi",
    role: "Fondateur",
    city: "Tanger",
    description:
      "Conciergerie de voyage haut de gamme basée à Tanger : séjours sur mesure, organisation d'événements, chauffeurs privés, location de yachts et de jets, avec une équipe multilingue disponible 24h/24.",
    website: "https://www.vipafrica.com/",
    logo: "/images/members/vip-africa-logo.png",
    photo: "/images/members/aziz-benami.jpg",
  },
  {
    agency: "SAVA Travel",
    city: "Tanger",
    description:
      "Spécialiste des séjours de pèlerinage avec vols directs depuis Tanger vers Médine et La Mecque, circuits au Maroc, vacances à l'étranger, billetterie aérienne et maritime et réservations hôtelières.",
    website: "https://savatravelbooking.com/",
    phone: "+212 5 39 71 38 11",
    logo: "/images/members/sava-travel-logo.png",
  },
  {
    agency: "Fantasy Travel",
    owner: "Khalid Talidi",
    city: "Tanger",
    description: "Agence de voyages membre du réseau ARAVTTA.",
    website: "https://www.fantasy-travel.net",
    logo: "/images/members/fantasy-travel-logo.jpeg",
    photo: "/images/members/khalid-talidi.jpeg",
  },
];

export type BureauMember = {
  name: string;
  role: string;
  photo?: string;
};

// Bureau de l'association 2024 – 2027.
export const bureau: BureauMember[] = [
  { name: "Mohamed El Hitmi", role: "Président", photo: "/images/members/mohamed-el-hitmi.jpg" },
  { name: "Monsef Toub", role: "1er Vice-Président", photo: "/images/members/monsef-toub.jpg" },
  { name: "Taha Bnainou", role: "2e Vice-Président", photo: "/images/members/taha-bnainou.jpeg" },
  { name: "Aziz Lamrani El Gharib", role: "3e Vice-Président" },
  { name: "Abdelaziz Benammi", role: "Secrétaire Général", photo: "/images/members/aziz-benami.jpg" },
  { name: "Asmae Fatihi", role: "Secrétaire Générale Adjointe" },
  { name: "Noureddine Bahid", role: "Trésorier" },
  { name: "Mahdia Tikert", role: "Trésorière Adjointe" },
  { name: "Mohamed Mourad Chioua", role: "Conseiller" },
  { name: "Ikram Tassi", role: "Conseillère" },
  { name: "Asmae Outmani", role: "Conseillère" },
  { name: "Mohamed Said Zoubair", role: "Conseiller" },
  { name: "Abdelmajid Benjelloun", role: "Conseiller", photo: "/images/presidents/abdelmajid-benjelloun.jpg" },
];
