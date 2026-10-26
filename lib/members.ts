export type Member = {
  agency: string;
  owner: string;
  role: string;
  city: string;
  description: string;
  website: string;
  // Paths under /public. Leave empty to show initials until the file is provided.
  logo?: string;
  photo?: string;
};

export const members: Member[] = [
  {
    agency: "VIP Africa",
    owner: "Aziz Benami",
    role: "Fondateur",
    city: "Tanger",
    description:
      "Conciergerie de voyage haut de gamme basée à Tanger : séjours sur mesure, organisation d'événements, chauffeurs privés, location de yachts et de jets, avec une équipe multilingue disponible 24h/24.",
    website: "https://www.vipafrica.com/",
    logo: "/images/members/vip-africa-logo.png",
    photo: "/images/members/aziz-benami.jpg",
  },
];
