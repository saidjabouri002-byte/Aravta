// English and Spanish translations, keyed by the French text used in the code.
// To change a translation, edit the "en" or "es" value. To add one, copy the exact French text
// as the key. Text without an entry here is shown in French.
// Names of people, cities, agencies and newspapers stay exactly as written in French in every language.

type Entry = { en: string; es: string };

export const translations: Record<string, Entry> = {
  // ─── Navigation, header and footer ───────────────────────────────────────
  "Accueil": { en: "Home", es: "Inicio" },
  "L'Association": { en: "The Association", es: "La Asociación" },
  "L'association": { en: "The association", es: "La asociación" },
  "Réseau membre": { en: "Member network", es: "Red de miembros" },
  "Partenaires": { en: "Partners", es: "Socios" },
  "La Région": { en: "The Region", es: "La Región" },
  "Actualités": { en: "News", es: "Noticias" },
  "Événements": { en: "Events", es: "Eventos" },
  "Contact": { en: "Contact", es: "Contacto" },
  "Présentation": { en: "Overview", es: "Presentación" },
  "Mot du Président": { en: "President's Message", es: "Mensaje del Presidente" },
  "Les Commissions": { en: "The Committees", es: "Las Comisiones" },
  "Plan d'Action": { en: "Action Plan", es: "Plan de Acción" },
  "Plan Stratégique": { en: "Strategic Plan", es: "Plan Estratégico" },
  "Anciens Présidents": { en: "Former Presidents", es: "Expresidentes" },
  "Devenir membre": { en: "Become a member", es: "Hazte miembro" },
  "Choisir la langue": { en: "Choose language", es: "Elegir idioma" },
  "Fermer le menu": { en: "Close menu", es: "Cerrar el menú" },
  "Ouvrir le menu": { en: "Open menu", es: "Abrir el menú" },
  "Fermer": { en: "Close", es: "Cerrar" },
  "ARAVTTA accueil": { en: "ARAVTTA home", es: "Inicio ARAVTTA" },
  "Navigation principale": { en: "Main navigation", es: "Navegación principal" },
  "Navigation mobile": { en: "Mobile navigation", es: "Navegación móvil" },
  "Navigation": { en: "Navigation", es: "Navegación" },
  "Pages de l'association": { en: "Association pages", es: "Páginas de la asociación" },
  "Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima.": {
    en: "Regional Association of Travel Agencies of Tanger-Tétouan-Al Hoceima.",
    es: "Asociación Regional de Agencias de Viajes de Tanger-Tétouan-Al Hoceima.",
  },
  "© 2026 ARAVTTA. Tous droits réservés.": {
    en: "© 2026 ARAVTTA. All rights reserved.",
    es: "© 2026 ARAVTTA. Todos los derechos reservados.",
  },
  "Mentions légales": { en: "Legal notice", es: "Aviso legal" },
  "Confidentialité": { en: "Privacy", es: "Privacidad" },
  "Haut de page": { en: "Back to top", es: "Volver arriba" },

  // ─── Cities ──────────────────────────────────────────────────────────────
  "Tanger": { en: "Tanger", es: "Tanger" },
  "Tétouan": { en: "Tétouan", es: "Tétouan" },
  "Chefchaouen": { en: "Chefchaouen", es: "Chefchaouen" },
  "Al Hoceima": { en: "Al Hoceima", es: "Al Hoceima" },
  "Assilah": { en: "Assilah", es: "Assilah" },
  "Tanger · Tétouan · Al Hoceima": { en: "Tanger · Tétouan · Al Hoceima", es: "Tanger · Tétouan · Al Hoceima" },
  "Tanger · Hôtel Farah": { en: "Tanger · Hotel Farah", es: "Tanger · Hotel Farah" },

  "Porte du détroit": { en: "Gateway to the Strait", es: "Puerta del Estrecho" },
  "Porte du détroit, entre médina, corniche et connexions. Une ville d'arrivée, de départ et d'histoires maritimes.": {
    en: "Gateway to the Strait, between medina, seafront and connections. A city of arrivals, departures and maritime stories.",
    es: "Puerta del Estrecho, entre medina, paseo marítimo y conexiones. Una ciudad de llegadas, salidas e historias marítimas.",
  },
  "Face à l'Europe, Tanger est la porte d'entrée du Maroc. Sa médina, la Kasbah, le Cap Spartel et les Grottes d'Hercule racontent des siècles d'échanges entre Atlantique et Méditerranée. Ville d'affaires et de culture, portée par Tanger Med et le TGV Al Boraq, elle concentre l'essentiel des flux touristiques du Nord.": {
    en: "Facing Europe, Tanger is Morocco's gateway. Its medina, the Kasbah, Cape Spartel and the Caves of Hercules tell centuries of exchange between the Atlantic and the Mediterranean. A city of business and culture, driven by Tanger Med and the Al Boraq high-speed train, it draws most of the North's tourist traffic.",
    es: "Frente a Europa, Tanger es la puerta de entrada a Marruecos. Su medina, la Kasba, el Cabo Espartel y las Grutas de Hércules cuentan siglos de intercambios entre el Atlántico y el Mediterráneo. Ciudad de negocios y de cultura, impulsada por Tanger Med y el tren de alta velocidad Al Boraq, concentra la mayor parte de los flujos turísticos del Norte.",
  },
  "Kasbah & médina": { en: "Kasbah & medina", es: "Kasba y medina" },
  "Cap Spartel": { en: "Cape Spartel", es: "Cabo Espartel" },
  "Grottes d'Hercule": { en: "Caves of Hercules", es: "Grutas de Hércules" },
  "Port Tanger Med": { en: "Tanger Med port", es: "Puerto Tanger Med" },

  "La colombe blanche": { en: "The white dove", es: "La paloma blanca" },
  "Patrimoine andalou, médina blanche et savoir-faire vivant. Une étape calme pour lire l'histoire du Nord.": {
    en: "Andalusian heritage, a white medina and living craftsmanship. A quiet stop to read the history of the North.",
    es: "Patrimonio andalusí, medina blanca y artesanía viva. Una parada tranquila para leer la historia del Norte.",
  },
  "Surnommée « la colombe blanche », Tétouan abrite une médina classée au patrimoine mondial de l'UNESCO, héritière directe de l'Andalousie. Artisanat, école des beaux-arts, architecture hispano-mauresque et plages de Martil, M'diq et Cabo Negro en font une destination à la fois culturelle et balnéaire.": {
    en: "Nicknamed \"the white dove\", Tétouan is home to a UNESCO World Heritage medina, a direct heir of Andalusia. Crafts, a fine-arts school, Hispano-Moorish architecture and the beaches of Martil, M'diq and Cabo Negro make it both a cultural and a seaside destination.",
    es: "Apodada «la paloma blanca», Tétouan alberga una medina declarada Patrimonio de la Humanidad por la UNESCO, heredera directa de al-Ándalus. Artesanía, escuela de bellas artes, arquitectura hispanomorisca y las playas de Martil, M'diq y Cabo Negro la convierten en un destino cultural y de playa a la vez.",
  },
  "Médina UNESCO": { en: "UNESCO medina", es: "Medina UNESCO" },
  "Héritage andalou": { en: "Andalusian heritage", es: "Herencia andalusí" },
  "Martil & Cabo Negro": { en: "Martil & Cabo Negro", es: "Martil y Cabo Negro" },
  "Artisanat": { en: "Crafts", es: "Artesanía" },

  "La perle bleue du Rif": { en: "The blue pearl of the Rif", es: "La perla azul del Rif" },
  "Ville bleue du Rif, faite de ruelles lentes et de lumière. Une icône photographique, artisanale et montagnarde.": {
    en: "The blue city of the Rif, made of slow alleys and light. A photographic, artisan and mountain icon.",
    es: "La ciudad azul del Rif, hecha de callejuelas tranquilas y de luz. Un icono fotográfico, artesano y de montaña.",
  },
  "Nichée au pied des montagnes du Rif, Chefchaouen séduit par ses ruelles peintes en bleu, sa place Outa el Hammam et sa kasbah. Point de départ idéal vers les cascades d'Akchour et le parc national de Talassemtane, elle attire voyageurs, photographes et amoureux de randonnée toute l'année.": {
    en: "Nestled at the foot of the Rif mountains, Chefchaouen charms with its blue-painted alleys, Outa el Hammam square and its kasbah. An ideal starting point for the Akchour waterfalls and Talassemtane National Park, it attracts travellers, photographers and hikers all year round.",
    es: "Situada al pie de las montañas del Rif, Chefchaouen seduce con sus callejuelas pintadas de azul, la plaza Outa el Hammam y su kasba. Punto de partida ideal hacia las cascadas de Akchour y el parque nacional de Talassemtane, atrae a viajeros, fotógrafos y amantes del senderismo durante todo el año.",
  },
  "Médina bleue": { en: "Blue medina", es: "Medina azul" },
  "Cascades d'Akchour": { en: "Akchour waterfalls", es: "Cascadas de Akchour" },
  "Parc de Talassemtane": { en: "Talassemtane park", es: "Parque de Talassemtane" },
  "Randonnée": { en: "Hiking", es: "Senderismo" },

  "La perle de la Méditerranée": { en: "The pearl of the Mediterranean", es: "La perla del Mediterráneo" },
  "Baies claires, falaises fortes et Méditerranée ouverte. Une destination de nature, de mer et de respiration.": {
    en: "Clear bays, bold cliffs and the open Mediterranean. A destination for nature, sea and fresh air.",
    es: "Bahías claras, acantilados imponentes y el Mediterráneo abierto. Un destino de naturaleza, mar y respiro.",
  },
  "Entre falaises et eaux turquoise, Al Hoceima offre parmi les plus belles baies de la Méditerranée marocaine : Quemado, Cala Iris, Sfiha. Son parc national, riche en faune marine et en paysages préservés, en fait une destination privilégiée pour le tourisme balnéaire, la plongée et l'écotourisme.": {
    en: "Between cliffs and turquoise waters, Al Hoceima has some of the finest bays on Morocco's Mediterranean coast: Quemado, Cala Iris, Sfiha. Its national park, rich in marine life and unspoilt landscapes, makes it a favourite destination for beach holidays, diving and ecotourism.",
    es: "Entre acantilados y aguas turquesa, Al Hoceima ofrece algunas de las bahías más bellas del Mediterráneo marroquí: Quemado, Cala Iris, Sfiha. Su parque nacional, rico en fauna marina y paisajes preservados, la convierte en un destino privilegiado para el turismo de playa, el buceo y el ecoturismo.",
  },
  "Plage Quemado": { en: "Quemado beach", es: "Playa Quemado" },
  "Cala Iris": { en: "Cala Iris", es: "Cala Iris" },
  "Parc national": { en: "National park", es: "Parque nacional" },
  "Plongée": { en: "Diving", es: "Buceo" },

  "La cité des arts": { en: "The city of arts", es: "La ciudad de las artes" },
  "Remparts portugais, murs blancs et fresques d'artistes. Une petite ville atlantique, calme et inspirée.": {
    en: "Portuguese ramparts, white walls and artists' murals. A small, calm and inspired Atlantic town.",
    es: "Murallas portuguesas, muros blancos y murales de artistas. Una pequeña ciudad atlántica, tranquila e inspirada.",
  },
  "Ceinte de remparts portugais face à l'Atlantique, Assilah est une petite médina blanche où les murs se couvrent de fresques chaque été lors de son célèbre Moussem culturel international. Ses plages, comme Paradise Beach, et son ambiance paisible en font une escapade prisée à 40 minutes de Tanger.": {
    en: "Surrounded by Portuguese ramparts facing the Atlantic, Assilah is a small white medina whose walls are covered with murals every summer during its famous International Cultural Moussem. Its beaches, such as Paradise Beach, and its peaceful atmosphere make it a popular getaway 40 minutes from Tanger.",
    es: "Rodeada de murallas portuguesas frente al Atlántico, Assilah es una pequeña medina blanca cuyos muros se cubren de murales cada verano durante su célebre Musem Cultural Internacional. Sus playas, como Paradise Beach, y su ambiente tranquilo la convierten en una escapada muy apreciada a 40 minutos de Tanger.",
  },
  "Remparts portugais": { en: "Portuguese ramparts", es: "Murallas portuguesas" },
  "Moussem culturel": { en: "Cultural Moussem", es: "Musem cultural" },
  "Fresques murales": { en: "Murals", es: "Murales" },
  "Paradise Beach": { en: "Paradise Beach", es: "Paradise Beach" },

  // ─── Partners ────────────────────────────────────────────────────────────
  "Office National Marocain du Tourisme": { en: "Moroccan National Tourist Office", es: "Oficina Nacional Marroquí de Turismo" },
  "Morocco — Kingdom of Light": { en: "Morocco — Kingdom of Light", es: "Marruecos — Reino de la Luz" },
  "Confédération Nationale du Tourisme": { en: "National Tourism Confederation", es: "Confederación Nacional del Turismo" },
  "Fédération Nationale des Associations des Agences de Voyages du Maroc": {
    en: "National Federation of Travel Agency Associations of Morocco",
    es: "Federación Nacional de Asociaciones de Agencias de Viajes de Marruecos",
  },
  "Conseil Régional du Tourisme Tanger-Tétouan-Al Hoceima": {
    en: "Regional Tourism Council of Tanger-Tétouan-Al Hoceima",
    es: "Consejo Regional de Turismo de Tanger-Tétouan-Al Hoceima",
  },
  "CGEM Tanger-Tétouan-Al Hoceima": { en: "CGEM Tanger-Tétouan-Al Hoceima", es: "CGEM Tanger-Tétouan-Al Hoceima" },
  "Institut Supérieur International de Tourisme de Tanger": {
    en: "International Higher Institute of Tourism of Tanger",
    es: "Instituto Superior Internacional de Turismo de Tanger",
  },

  // ─── Committees ──────────────────────────────────────────────────────────
  "Commission {n}": { en: "Committee {n}", es: "Comisión {n}" },
  "Responsables :": { en: "Leads:", es: "Responsables:" },
  "Responsable :": { en: "Lead:", es: "Responsable:" },
  "Commission Maritime": { en: "Maritime Committee", es: "Comisión Marítima" },
  "Détroit, billetterie, coordination portuaire": { en: "Strait, ticketing, port coordination", es: "Estrecho, venta de billetes, coordinación portuaria" },
  "Veiller au respect des droits des agences de voyages dans la billetterie maritime et faciliter les procédures avec les compagnies maritimes.": {
    en: "Ensure travel agencies' rights are respected in ferry ticketing and simplify procedures with shipping companies.",
    es: "Velar por el respeto de los derechos de las agencias de viajes en la venta de billetes marítimos y facilitar los trámites con las navieras.",
  },
  "Négociation de commissions fixes et équitables avec les opérateurs maritimes.": {
    en: "Negotiating fixed, fair commissions with maritime operators.",
    es: "Negociación de comisiones fijas y equitativas con los operadores marítimos.",
  },
  "Suivi des litiges liés à la billetterie et aux annulations.": {
    en: "Following up on disputes over ticketing and cancellations.",
    es: "Seguimiento de los litigios relacionados con la venta de billetes y las cancelaciones.",
  },
  "Renforcement du poids de l'association face aux acteurs du port Tanger Med.": {
    en: "Strengthening the association's weight with the players at Tanger Med port.",
    es: "Refuerzo del peso de la asociación ante los actores del puerto Tanger Med.",
  },
  "Commission Aérienne": { en: "Air Travel Committee", es: "Comisión Aérea" },
  "Compagnies, GDS, distribution": { en: "Airlines, GDS, distribution", es: "Aerolíneas, GDS, distribución" },
  "Assurer une interface fluide entre les agences et les compagnies aériennes, ainsi qu'avec les GDS (Amadeus, etc.).": {
    en: "Provide a smooth interface between agencies and airlines, as well as with GDS systems (Amadeus, etc.).",
    es: "Garantizar una relación fluida entre las agencias y las aerolíneas, así como con los GDS (Amadeus, etc.).",
  },
  "Veille sur les politiques tarifaires et les changements de règles des compagnies.": {
    en: "Monitoring airlines' fare policies and rule changes.",
    es: "Seguimiento de las políticas tarifarias y de los cambios de normas de las aerolíneas.",
  },
  "Soutien aux agences sur les questions d'émission de billets (ADM/ACM).": {
    en: "Supporting agencies on ticket issuance matters (ADM/ACM).",
    es: "Apoyo a las agencias en cuestiones de emisión de billetes (ADM/ACM).",
  },
  "Dialogue pour faciliter l'accès aux avantages partenaires.": {
    en: "Dialogue to ease access to partner benefits.",
    es: "Diálogo para facilitar el acceso a las ventajas de los socios.",
  },
  "Commission Haj / Omra": { en: "Hajj / Umrah Committee", es: "Comisión Hach / Umrah" },
  "Conformité, qualité, encadrement": { en: "Compliance, quality, supervision", es: "Conformidad, calidad, supervisión" },
  "Organiser, encadrer et protéger les intérêts des agences opérant dans le segment religieux.": {
    en: "Organise, oversee and protect the interests of agencies working in religious travel.",
    es: "Organizar, supervisar y proteger los intereses de las agencias que operan en el segmento religioso.",
  },
  "Coordination avec le Ministère pour les quotas et les autorisations.": {
    en: "Coordination with the Ministry on quotas and authorisations.",
    es: "Coordinación con el Ministerio sobre cupos y autorizaciones.",
  },
  "Standardisation de la qualité des services pour les pèlerins.": {
    en: "Standardising service quality for pilgrims.",
    es: "Normalización de la calidad de los servicios para los peregrinos.",
  },
  "Lutte contre la concurrence déloyale et les opérateurs non agréés.": {
    en: "Fighting unfair competition and unlicensed operators.",
    es: "Lucha contra la competencia desleal y los operadores no autorizados.",
  },
  "Commission Réceptif / Outgoing": { en: "Inbound / Outbound Committee", es: "Comisión Receptivo / Emisor" },
  "Circuits, production, expérience client": { en: "Tours, product, customer experience", es: "Circuitos, producción, experiencia del cliente" },
  "Dynamiser l'offre touristique régionale (Réceptif) et optimiser les ventes de forfaits à l'étranger (Outgoing).": {
    en: "Boost the regional tourism offer (Inbound) and optimise sales of packages abroad (Outbound).",
    es: "Dinamizar la oferta turística regional (Receptivo) y optimizar la venta de paquetes al extranjero (Emisor).",
  },
  "Création de produits communs et de circuits packagés valorisant la région Tanger-Tétouan-Al Hoceima.": {
    en: "Creating joint products and packaged tours that showcase the Tanger-Tétouan-Al Hoceima region.",
    es: "Creación de productos comunes y circuitos organizados que pongan en valor la región Tanger-Tétouan-Al Hoceima.",
  },
  "Networking avec des TO étrangers pour attirer plus de clients sur la région.": {
    en: "Networking with foreign tour operators to bring more clients to the region.",
    es: "Networking con turoperadores extranjeros para atraer más clientes a la región.",
  },
  "Formation sur les nouvelles tendances de voyage.": {
    en: "Training on new travel trends.",
    es: "Formación sobre las nuevas tendencias de viaje.",
  },
  "Commission MICE": { en: "MICE Committee", es: "Comisión MICE" },
  "Rencontres, événements, tourisme d'affaires": { en: "Meetings, events, business travel", es: "Encuentros, eventos, turismo de negocios" },
  "Meetings, Incentives, Conferences, Exhibitions : positionner la région comme une destination d'affaires de premier plan.": {
    en: "Meetings, Incentives, Conferences, Exhibitions: positioning the region as a leading business destination.",
    es: "Meetings, Incentives, Conferences, Exhibitions: posicionar la región como un destino de negocios de primer nivel.",
  },
  "Promotion de la région auprès des grandes entreprises et associations professionnelles nationales et internationales.": {
    en: "Promoting the region to large companies and national and international professional associations.",
    es: "Promoción de la región ante grandes empresas y asociaciones profesionales nacionales e internacionales.",
  },
  "Collaboration avec les hôtels (Fairmont La Marina et autres infrastructures) pour créer des offres « Corporate » attractives.": {
    en: "Working with hotels (Fairmont La Marina and other venues) to create attractive corporate offers.",
    es: "Colaboración con los hoteles (Fairmont La Marina y otras infraestructuras) para crear ofertas «Corporate» atractivas.",
  },
  "Standardisation de la qualité d'accueil pour les groupes d'affaires.": {
    en: "Standardising the quality of welcome for business groups.",
    es: "Normalización de la calidad de acogida para los grupos de negocios.",
  },
  "Commission des Sages": { en: "Council of Elders", es: "Comisión de Sabios" },
  "Transmission, médiation, déontologie": { en: "Mentoring, mediation, ethics", es: "Transmisión, mediación, deontología" },
  "Garantir la cohésion de l'association, la médiation et la transmission du savoir-faire.": {
    en: "Safeguard the association's cohesion, mediation and the passing on of know-how.",
    es: "Garantizar la cohesión de la asociación, la mediación y la transmisión del saber hacer.",
  },
  "Mise à jour et respect du règlement intérieur et de la déontologie.": {
    en: "Updating and upholding the internal rules and code of ethics.",
    es: "Actualización y cumplimiento del reglamento interno y de la deontología.",
  },
  "Médiation interne en cas de différend entre membres.": {
    en: "Internal mediation in disputes between members.",
    es: "Mediación interna en caso de desacuerdo entre miembros.",
  },
  "Conseil stratégique auprès du bureau exécutif.": {
    en: "Strategic advice to the executive board.",
    es: "Asesoramiento estratégico a la junta directiva.",
  },
  "Relations Publiques / Porte-Parole": { en: "Public Relations / Spokesperson", es: "Relaciones Públicas / Portavoz" },
  "Dialogue institutionnel et communication": { en: "Institutional dialogue and communication", es: "Diálogo institucional y comunicación" },
  "Porter la voix de l'ARAVTTA, valoriser l'image de la profession et gérer la communication institutionnelle.": {
    en: "Carry ARAVTTA's voice, promote the image of the profession and manage institutional communication.",
    es: "Llevar la voz de la ARAVTTA, valorizar la imagen de la profesión y gestionar la comunicación institucional.",
  },
  "Relations presse et communication sur les réseaux sociaux.": {
    en: "Press relations and social media communication.",
    es: "Relaciones con la prensa y comunicación en redes sociales.",
  },
  "Représentation officielle auprès des autorités, des élus et des médias.": {
    en: "Official representation with authorities, elected officials and the media.",
    es: "Representación oficial ante las autoridades, los cargos electos y los medios.",
  },
  "Communication de crise et gestion de l'image de marque de l'agence de voyages.": {
    en: "Crisis communication and management of the travel agency brand image.",
    es: "Comunicación de crisis y gestión de la imagen de marca de la agencia de viajes.",
  },

  // ─── Association hub cards ───────────────────────────────────────────────
  "Le message de Mohamed El Hitmi aux membres, partenaires et visiteurs.": {
    en: "Mohamed El Hitmi's message to members, partners and visitors.",
    es: "El mensaje de Mohamed El Hitmi a los miembros, socios y visitantes.",
  },
  "Sept commissions, leurs responsables, missions et axes de travail.": {
    en: "Seven committees, their leads, missions and areas of work.",
    es: "Siete comisiones, sus responsables, misiones y líneas de trabajo.",
  },
  "Les actions court et long terme du comité 2024 – 2027.": {
    en: "The short- and long-term actions of the 2024 – 2027 committee.",
    es: "Las acciones a corto y largo plazo del comité 2024 – 2027.",
  },
  "Les deux axes qui structurent la vision 2024 – 2027.": {
    en: "The two pillars shaping the 2024 – 2027 vision.",
    es: "Los dos ejes que estructuran la visión 2024 – 2027.",
  },
  "Hommage à celles et ceux qui ont construit l'association.": {
    en: "A tribute to those who built the association.",
    es: "Homenaje a quienes construyeron la asociación.",
  },

  // ─── News ────────────────────────────────────────────────────────────────
  "Presse": { en: "Press", es: "Prensa" },
  "Institutionnel": { en: "Institutional", es: "Institucional" },
  "Tourisme": { en: "Tourism", es: "Turismo" },
  "Événement": { en: "Event", es: "Evento" },
  "12 août 2024": { en: "August 12, 2024", es: "12 de agosto de 2024" },
  "19 janvier 2024": { en: "January 19, 2024", es: "19 de enero de 2024" },
  "15 janvier 2024": { en: "January 15, 2024", es: "15 de enero de 2024" },
  "30 novembre 2020": { en: "November 30, 2020", es: "30 de noviembre de 2020" },
  "3 juin 2020": { en: "June 3, 2020", es: "3 de junio de 2020" },
  "20 février 2020": { en: "February 20, 2020", es: "20 de febrero de 2020" },
  "Date à confirmer": { en: "Date to be confirmed", es: "Fecha por confirmar" },
  "Les agences de voyages en déclin en plein boom du tourisme au Maroc": {
    en: "Travel agencies in decline amid Morocco's tourism boom",
    es: "Las agencias de viajes en declive en pleno auge del turismo en Marruecos",
  },
  "Mohamed El Hitmi, président de l'ARAVTTA, dénonce les faux voyagistes et alerte sur la situation difficile des agences du nord du Royaume.": {
    en: "Mohamed El Hitmi, president of ARAVTTA, denounces fake tour operators and warns of the difficult situation of agencies in the north of the Kingdom.",
    es: "Mohamed El Hitmi, presidente de la ARAVTTA, denuncia a los falsos operadores turísticos y alerta sobre la difícil situación de las agencias del norte del Reino.",
  },
  "El Hitmi réélu à la tête des voyagistes du Nord": {
    en: "El Hitmi re-elected head of the North's travel agents",
    es: "El Hitmi reelegido al frente de los agentes de viajes del Norte",
  },
  "L'Assemblée générale élective du 15 janvier 2024 reconduit Mohammed El Hitmi (Hit Voyages) à la présidence pour 2024 – 2027, avec un nouveau bureau et un plan d'action.": {
    en: "The elective General Assembly of January 15, 2024 re-elects Mohammed El Hitmi (Hit Voyages) as president for 2024 – 2027, with a new board and an action plan.",
    es: "La Asamblea General electiva del 15 de enero de 2024 renueva a Mohammed El Hitmi (Hit Voyages) en la presidencia para 2024 – 2027, con una nueva junta y un plan de acción.",
  },
  "Mohammed El Hitmi, nouveau président de l'ARAV-TTA": {
    en: "Mohammed El Hitmi, new president of ARAV-TTA",
    es: "Mohammed El Hitmi, nuevo presidente de la ARAV-TTA",
  },
  "Mohammed El Hitmi est élu à la présidence de l'association pour un premier mandat de trois ans, de 2020 à 2023.": {
    en: "Mohammed El Hitmi is elected president of the association for a first three-year term, from 2020 to 2023.",
    es: "Mohammed El Hitmi es elegido presidente de la asociación para un primer mandato de tres años, de 2020 a 2023.",
  },
  "Tourisme : aperçu sur les offres de la région de Tanger-Tétouan pour cet été": {
    en: "Tourism: a look at the Tanger-Tétouan region's offers for this summer",
    es: "Turismo: un vistazo a las ofertas de la región de Tanger-Tétouan para este verano",
  },
  "Les associations touristiques de la région s'associent pour proposer des forfaits d'été (hébergement, repas, excursions) et limiter le recours au secteur informel.": {
    en: "The region's tourism associations join forces to offer summer packages (accommodation, meals, excursions) and limit the use of the informal sector.",
    es: "Las asociaciones turísticas de la región se unen para ofrecer paquetes de verano (alojamiento, comidas, excursiones) y limitar el recurso al sector informal.",
  },
  "Premier Forum de l'Association des agences de voyages de la région": {
    en: "First Forum of the region's Travel Agencies Association",
    es: "Primer Foro de la Asociación de agencias de viajes de la región",
  },
  "L'ARAVTTA annonce son premier Forum régional des agences, organisé avec les délégations régionales du tourisme et l'ISITT, avec l'appui du Conseil régional du tourisme.": {
    en: "ARAVTTA announces its first regional agency Forum, organised with the regional tourism delegations and ISITT, with the support of the Regional Tourism Council.",
    es: "La ARAVTTA anuncia su primer Foro regional de agencias, organizado con las delegaciones regionales de turismo y el ISITT, con el apoyo del Consejo Regional de Turismo.",
  },
  "Lire l'article": { en: "Read the article", es: "Leer el artículo" },
  "Lire l'article sur {source}": { en: "Read the article on {source}", es: "Leer el artículo en {source}" },
  "Journal de bord.": { en: "The logbook.", es: "Cuaderno de bitácora." },
  "L'ARAVTTA dans la presse : élections, forums, initiatives régionales et prises de position pour la profession.": {
    en: "ARAVTTA in the press: elections, forums, regional initiatives and stances taken for the profession.",
    es: "La ARAVTTA en la prensa: elecciones, foros, iniciativas regionales y tomas de posición en favor de la profesión.",
  },
  "Voir les événements": { en: "See the events", es: "Ver los eventos" },

  // ─── Events ──────────────────────────────────────────────────────────────
  "À venir": { en: "Upcoming", es: "Próximo" },
  "Organisé": { en: "Held", es: "Celebrado" },
  "Forum de l'Agent de Voyages — 3e édition": { en: "Travel Agent Forum — 3rd edition", es: "Foro del Agente de Viajes — 3.ª edición" },
  "Le rendez-vous annuel de la profession : tables rondes, partenaires et échanges entre agences du Nord.": {
    en: "The profession's annual gathering: round tables, partners and exchanges between agencies of the North.",
    es: "La cita anual de la profesión: mesas redondas, socios e intercambios entre agencias del Norte.",
  },
  "Séminaire de l'ARAVTTA à Tétouan": { en: "ARAVTTA seminar in Tétouan", es: "Seminario de la ARAVTTA en Tétouan" },
  "Une journée de travail autour des enjeux des agences : réglementation, digitalisation et produits communs.": {
    en: "A working day on the issues facing agencies: regulation, digitalisation and joint products.",
    es: "Una jornada de trabajo sobre los retos de las agencias: normativa, digitalización y productos comunes.",
  },
  "Rencontre des agents de voyages à Al Hoceima": { en: "Travel agents' meeting in Al Hoceima", es: "Encuentro de agentes de viajes en Al Hoceima" },
  "Fédérer les agences de la province et valoriser la destination méditerranéenne.": {
    en: "Bringing together the province's agencies and promoting the Mediterranean destination.",
    es: "Unir a las agencias de la provincia y poner en valor el destino mediterráneo.",
  },
  "Journée de réflexion": { en: "Strategy day", es: "Jornada de reflexión" },
  "Un temps collectif pour faire le point sur le plan d'action 2024 – 2027 et les priorités des commissions.": {
    en: "A collective moment to review the 2024 – 2027 action plan and the committees' priorities.",
    es: "Un momento colectivo para hacer balance del plan de acción 2024 – 2027 y de las prioridades de las comisiones.",
  },
  "Assemblée générale élective 2024": { en: "2024 elective General Assembly", es: "Asamblea General electiva 2024" },
  "Mohammed El Hitmi (Hit Voyages) est reconduit à la présidence pour le mandat 2024 – 2027. Un nouveau bureau et le plan d'action 2024 – 2027 sont présentés.": {
    en: "Mohammed El Hitmi (Hit Voyages) is re-elected president for the 2024 – 2027 term. A new board and the 2024 – 2027 action plan are presented.",
    es: "Mohammed El Hitmi (Hit Voyages) es reelegido presidente para el mandato 2024 – 2027. Se presentan una nueva junta y el plan de acción 2024 – 2027.",
  },
  "Assemblée générale élective 2020": { en: "2020 elective General Assembly", es: "Asamblea General electiva 2020" },
  "Mohammed El Hitmi est élu président de l'association pour un premier mandat de trois ans (2020 – 2023).": {
    en: "Mohammed El Hitmi is elected president of the association for a first three-year term (2020 – 2023).",
    es: "Mohammed El Hitmi es elegido presidente de la asociación para un primer mandato de tres años (2020 – 2023).",
  },
  "Se retrouver, avancer ensemble.": { en: "Meet up, move forward together.", es: "Reunirse, avanzar juntos." },
  "Forums, séminaires et rencontres : les rendez-vous de l'ARAVTTA pour les agences de voyages du Nord.": {
    en: "Forums, seminars and meetings: ARAVTTA's gatherings for travel agencies in the North.",
    es: "Foros, seminarios y encuentros: las citas de la ARAVTTA para las agencias de viajes del Norte.",
  },
  "Agenda": { en: "Agenda", es: "Agenda" },
  "Événements à venir": { en: "Upcoming events", es: "Próximos eventos" },
  "Aucun événement programmé pour le moment.": { en: "No events scheduled for now.", es: "No hay eventos programados por el momento." },
  "Archives": { en: "Archive", es: "Archivo" },
  "Événements organisés": { en: "Past events", es: "Eventos celebrados" },
  "Les premiers événements seront bientôt ajoutés.": { en: "The first events will be added soon.", es: "Los primeros eventos se añadirán pronto." },

  // ─── Homepage ────────────────────────────────────────────────────────────
  "Représenter": { en: "Represent", es: "Representar" },
  "Fédérer": { en: "Unite", es: "Unir" },
  "Accompagner": { en: "Support", es: "Acompañar" },
  "Développer": { en: "Develop", es: "Desarrollar" },
  "Défendre les intérêts professionnels, économiques et institutionnels des agences de voyages.": {
    en: "Defend the professional, economic and institutional interests of travel agencies.",
    es: "Defender los intereses profesionales, económicos e institucionales de las agencias de viajes.",
  },
  "Créer des passerelles concrètes entre les professionnels, les institutions et les opérateurs du secteur.": {
    en: "Build concrete bridges between professionals, institutions and operators in the sector.",
    es: "Crear puentes concretos entre los profesionales, las instituciones y los operadores del sector.",
  },
  "Créer des passerelles concrètes entre professionnels, institutions et opérateurs du secteur.": {
    en: "Build concrete bridges between professionals, institutions and operators in the sector.",
    es: "Crear puentes concretos entre profesionales, instituciones y operadores del sector.",
  },
  "Soutenir les membres face aux mutations réglementaires, technologiques et commerciales.": {
    en: "Support members through regulatory, technological and commercial change.",
    es: "Apoyar a los miembros ante los cambios normativos, tecnológicos y comerciales.",
  },
  "Porter une croissance touristique responsable, lisible et durable pour tout le territoire régional.": {
    en: "Drive responsible, clear and sustainable tourism growth across the whole region.",
    es: "Impulsar un crecimiento turístico responsable, claro y sostenible para todo el territorio regional.",
  },
  "Porter une croissance touristique responsable et durable pour tout le territoire régional.": {
    en: "Drive responsible and sustainable tourism growth across the whole region.",
    es: "Impulsar un crecimiento turístico responsable y sostenible para todo el territorio regional.",
  },
  "Quel est le nom de votre agence ?": { en: "What is your agency's name?", es: "¿Cómo se llama su agencia?" },
  "Ex. Voyages du Nord": { en: "e.g. Voyages du Nord", es: "Ej. Voyages du Nord" },
  "Dans quelle ville est-elle basée ?": { en: "Which city is it based in?", es: "¿En qué ciudad se encuentra?" },
  "Tanger, Tétouan, Al Hoceima...": { en: "Tanger, Tétouan, Al Hoceima...", es: "Tanger, Tétouan, Al Hoceima..." },
  "Qui est la personne à contacter ?": { en: "Who is the contact person?", es: "¿Quién es la persona de contacto?" },
  "Nom complet et fonction": { en: "Full name and position", es: "Nombre completo y cargo" },
  "Quel numéro ou email devons-nous utiliser ?": { en: "Which phone number or email should we use?", es: "¿Qué número o correo debemos usar?" },
  "+212 ... / contact@agence.ma": { en: "+212 ... / contact@agency.ma", es: "+212 ... / contacto@agencia.ma" },
  "Quel est votre agrément et votre activité principale ?": {
    en: "What is your licence and main activity?",
    es: "¿Cuál es su licencia y su actividad principal?",
  },
  "Agrément, billetterie, réceptif, Hajj & Omra...": {
    en: "Licence, ticketing, inbound, Hajj & Umrah...",
    es: "Licencia, venta de billetes, receptivo, Hach y Umrah...",
  },
  "Remplis les 5 réponses avant l'envoi.": { en: "Please answer all 5 questions before sending.", es: "Responda las 5 preguntas antes de enviar." },
  "Demande d'adhésion ARAVTTA": { en: "ARAVTTA membership request", es: "Solicitud de adhesión ARAVTTA" },
  "Bonjour ARAVTTA,": { en: "Hello ARAVTTA,", es: "Hola ARAVTTA:" },
  "Je souhaite devenir membre de l'association.": {
    en: "I would like to become a member of the association.",
    es: "Deseo hacerme miembro de la asociación.",
  },
  "Merci de me recontacter pour la suite du dossier.": {
    en: "Please get back to me about the next steps.",
    es: "Gracias por volver a contactarme para continuar con el proceso.",
  },
  "À :": { en: "To:", es: "Para:" },
  "Objet :": { en: "Subject:", es: "Asunto:" },
  "Demande prête. Si l'email ne s'ouvre pas, utilise les boutons ci-dessous.": {
    en: "Request ready. If the email doesn't open, use the buttons below.",
    es: "Solicitud lista. Si el correo no se abre, use los botones de abajo.",
  },
  "Message copié. Colle-le dans ton email à contact@aravta.org.": {
    en: "Message copied. Paste it into your email to contact@aravta.org.",
    es: "Mensaje copiado. Péguelo en su correo a contact@aravta.org.",
  },
  "Copie le message affiché ci-dessous puis envoie-le à contact@aravta.org.": {
    en: "Copy the message shown below and send it to contact@aravta.org.",
    es: "Copie el mensaje que aparece abajo y envíelo a contact@aravta.org.",
  },
  "Côte de Tanger au coucher du soleil": { en: "Tanger coast at sunset", es: "Costa de Tanger al atardecer" },
  "Association Régionale des Agences de Voyages": { en: "Regional Association of Travel Agencies", es: "Asociación Regional de Agencias de Viajes" },
  "Ensemble, faisons rayonner le Nord.": { en: "Together, let's make the North shine.", es: "Juntos, hagamos brillar el Norte." },
  "Sept tables. Une profession.": { en: "Seven tables. One profession.", es: "Siete mesas. Una profesión." },
  "Ensemble, faisons": { en: "Together, let's", es: "Juntos, hagamos" },
  "rayonner le Nord.": { en: "make the North shine.", es: "brillar el Norte." },
  "L'ARAVTTA fédère les agences de voyages de Tanger-Tétouan-Al Hoceima autour d'une industrie touristique forte, responsable et visible.": {
    en: "ARAVTTA brings together the travel agencies of Tanger-Tétouan-Al Hoceima around a strong, responsible and visible tourism industry.",
    es: "La ARAVTTA reúne a las agencias de viajes de Tanger-Tétouan-Al Hoceima en torno a una industria turística fuerte, responsable y visible.",
  },
  "Commissions": { en: "Committees", es: "Comisiones" },
  "Détroit / Rif / Méditerranée": { en: "Strait / Rif / Mediterranean", es: "Estrecho / Rif / Mediterráneo" },
  "Partenaires ARAVTTA": { en: "ARAVTTA partners", es: "Socios de la ARAVTTA" },
  "Nos partenaires": { en: "Our partners", es: "Nuestros socios" },
  "Notre territoire": { en: "Our territory", es: "Nuestro territorio" },
  "Une région. Cinq escales.": { en: "One region. Five stops.", es: "Una región. Cinco escalas." },
  "Le territoire se lit par contrastes : ports, médinas blanches, villes bleues, falaises méditerranéennes. Cliquez sur une ville pour la découvrir.": {
    en: "The territory reads in contrasts: ports, white medinas, blue towns, Mediterranean cliffs. Click a city to discover it.",
    es: "El territorio se lee por contrastes: puertos, medinas blancas, ciudades azules, acantilados mediterráneos. Haga clic en una ciudad para descubrirla.",
  },
  "Tanger et son littoral": { en: "Tanger and its coastline", es: "Tanger y su litoral" },
  "{city}, destination régionale": { en: "{city}, regional destination", es: "{city}, destino regional" },
  "Toute la région": { en: "The whole region", es: "Toda la región" },
  "Une voix commune pour le voyage.": { en: "One shared voice for travel.", es: "Una voz común para el viaje." },
  "L'Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima rassemble et représente les professionnels du tourisme régional.": {
    en: "The Regional Association of Travel Agencies of Tanger-Tétouan-Al Hoceima brings together and represents the region's tourism professionals.",
    es: "La Asociación Regional de Agencias de Viajes de Tanger-Tétouan-Al Hoceima reúne y representa a los profesionales del turismo regional.",
  },
  "Elle agit comme interlocuteur privilégié entre agences, pouvoirs publics et acteurs de l'écosystème touristique.": {
    en: "It acts as the key point of contact between agencies, public authorities and players in the tourism ecosystem.",
    es: "Actúa como interlocutor privilegiado entre agencias, poderes públicos y actores del ecosistema turístico.",
  },
  "Port historique de Tanger": { en: "Tanger's historic port", es: "Puerto histórico de Tanger" },
  "Représenter. Structurer. Projeter.": { en: "Represent. Structure. Look ahead.", es: "Representar. Estructurar. Proyectar." },
  "Mission": { en: "Mission", es: "Misión" },
  "Nos missions": { en: "Our missions", es: "Nuestras misiones" },
  "Agir,": { en: "Act,", es: "Actuar," },
  "pas décorer.": { en: "not decorate.", es: "no decorar." },
  "Grotte d'Hercule à Tanger": { en: "Cave of Hercules in Tanger", es: "Gruta de Hércules en Tanger" },
  "Assilah, sur la côte atlantique": { en: "Assilah, on the Atlantic coast", es: "Assilah, en la costa atlántica" },
  "Associations touristiques à Tanger": { en: "Tourism associations in Tanger", es: "Asociaciones turísticas en Tanger" },
  "Impact": { en: "Impact", es: "Impacto" },
  "Réseau": { en: "Network", es: "Red" },
  "Agences membres": { en: "Member agencies", es: "Agencias miembro" },
  "Façades maritimes": { en: "Coastlines", es: "Fachadas marítimas" },
  "Vision commune": { en: "Shared vision", es: "Visión común" },
  "Nos expertises": { en: "Our expertise", es: "Nuestra experiencia" },
  "Sept tables.": { en: "Seven tables.", es: "Siete mesas." },
  "Une profession.": { en: "One profession.", es: "Una profesión." },
  "Sept commissions thématiques portent les dossiers de la profession : transport, pèlerinage, réceptif, tourisme d'affaires, médiation et communication.": {
    en: "Seven thematic committees carry the profession's key issues: transport, pilgrimage, inbound travel, business tourism, mediation and communication.",
    es: "Siete comisiones temáticas llevan los asuntos de la profesión: transporte, peregrinación, receptivo, turismo de negocios, mediación y comunicación.",
  },
  "Voir le détail": { en: "See details", es: "Ver detalle" },
  "Voir toutes les commissions": { en: "See all committees", es: "Ver todas las comisiones" },
  "Phare du Cap Spartel à Tanger": { en: "Cape Spartel lighthouse in Tanger", es: "Faro del Cabo Espartel en Tanger" },
  "Entre deux mers.": { en: "Between two seas.", es: "Entre dos mares." },
  "De Tanger à Al Hoceima, la région Tanger-Tétouan-Al Hoceima assemble littoral atlantique, Méditerranée, villes historiques, Rif et destinations emblématiques.": {
    en: "From Tanger to Al Hoceima, the Tanger-Tétouan-Al Hoceima region brings together the Atlantic coast, the Mediterranean, historic cities, the Rif and iconic destinations.",
    es: "De Tanger a Al Hoceima, la región Tanger-Tétouan-Al Hoceima reúne litoral atlántico, Mediterráneo, ciudades históricas, el Rif y destinos emblemáticos.",
  },
  "Explorer la région": { en: "Explore the region", es: "Explorar la región" },
  "Journal": { en: "The", es: "Cuaderno" },
  "de bord.": { en: "logbook.", es: "de bitácora." },
  "Actualités & événements": { en: "News & events", es: "Noticias y eventos" },
  "Un traitement magazine : une grande une, deux brèves visuelles, et une lecture immédiate des sujets qui font avancer la profession.": {
    en: "Magazine-style: one lead story, two visual briefs, and a quick read of the topics moving the profession forward.",
    es: "Estilo revista: una gran portada, dos breves visuales y una lectura inmediata de los temas que hacen avanzar la profesión.",
  },
  "Toutes les actualités": { en: "All news", es: "Todas las noticias" },
  "Nos événements": { en: "Our events", es: "Nuestros eventos" },
  "Un écosystème en mouvement.": { en: "An ecosystem on the move.", es: "Un ecosistema en movimiento." },
  "L'ARAVTTA travaille avec les institutions, écoles, fédérations et opérateurs pour renforcer la compétitivité touristique du Nord.": {
    en: "ARAVTTA works with institutions, schools, federations and operators to strengthen the North's tourism competitiveness.",
    es: "La ARAVTTA trabaja con instituciones, escuelas, federaciones y operadores para reforzar la competitividad turística del Norte.",
  },
  "Tous nos partenaires": { en: "All our partners", es: "Todos nuestros socios" },
  "Plage d'Al Hoceima et eau méditerranéenne": { en: "Al Hoceima beach and Mediterranean water", es: "Playa de Al Hoceima y agua mediterránea" },
  "Événement MICE à Tanger": { en: "MICE event in Tanger", es: "Evento MICE en Tanger" },
  "Adhésion": { en: "Membership", es: "Adhesión" },
  "Rejoignez le réseau qui avance.": { en: "Join the network that moves forward.", es: "Únase a la red que avanza." },
  "Vous êtes une agence de voyages ou un acteur du secteur touristique ? Parlons représentation, coopération et développement régional.": {
    en: "Are you a travel agency or a player in the tourism sector? Let's talk representation, cooperation and regional development.",
    es: "¿Es usted una agencia de viajes o un actor del sector turístico? Hablemos de representación, cooperación y desarrollo regional.",
  },
  "5 questions": { en: "5 questions", es: "5 preguntas" },
  "Demande d'adhésion agence": { en: "Agency membership request", es: "Solicitud de adhesión de agencia" },
  "Envoyer la demande": { en: "Send request", es: "Enviar solicitud" },
  "Appeler directement": { en: "Call us directly", es: "Llamar directamente" },
  "L'email sera préparé automatiquement avec vos réponses.": {
    en: "The email will be prepared automatically with your answers.",
    es: "El correo se preparará automáticamente con sus respuestas.",
  },
  "Ouvrir l'email": { en: "Open the email", es: "Abrir el correo" },
  "Copier le message": { en: "Copy the message", es: "Copiar el mensaje" },
  "Message d'adhésion préparé": { en: "Prepared membership message", es: "Mensaje de adhesión preparado" },

  // ─── Association pages ───────────────────────────────────────────────────
  "L'ARAVTTA rassemble et représente les agences de voyages de Tanger, Tétouan et Al Hoceima.": {
    en: "ARAVTTA brings together and represents the travel agencies of Tanger, Tétouan and Al Hoceima.",
    es: "La ARAVTTA reúne y representa a las agencias de viajes de Tanger, Tétouan y Al Hoceima.",
  },
  "Qui sommes-nous": { en: "Who we are", es: "Quiénes somos" },
  "L'interlocuteur des agences du Nord.": { en: "The voice of the North's agencies.", es: "El interlocutor de las agencias del Norte." },
  "L'Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima rassemble et représente les professionnels du tourisme régional. Elle agit comme interlocuteur privilégié entre agences, pouvoirs publics et acteurs de l'écosystème touristique.": {
    en: "The Regional Association of Travel Agencies of Tanger-Tétouan-Al Hoceima brings together and represents the region's tourism professionals. It acts as the key point of contact between agencies, public authorities and players in the tourism ecosystem.",
    es: "La Asociación Regional de Agencias de Viajes de Tanger-Tétouan-Al Hoceima reúne y representa a los profesionales del turismo regional. Actúa como interlocutor privilegiado entre agencias, poderes públicos y actores del ecosistema turístico.",
  },
  "Guidée par l'étude des enjeux du secteur, la défense des intérêts de ses membres et la promotion de l'industrie touristique marocaine, l'ARAVTTA œuvre à structurer, soutenir et moderniser la profession.": {
    en: "Guided by the study of the sector's challenges, the defence of its members' interests and the promotion of Morocco's tourism industry, ARAVTTA works to structure, support and modernise the profession.",
    es: "Guiada por el estudio de los retos del sector, la defensa de los intereses de sus miembros y la promoción de la industria turística marroquí, la ARAVTTA trabaja para estructurar, apoyar y modernizar la profesión.",
  },
  "Mohamed El Hitmi, Président de l'ARAVTTA": { en: "Mohamed El Hitmi, President of ARAVTTA", es: "Mohamed El Hitmi, Presidente de la ARAVTTA" },
  "Ensemble, faisons rayonner le tourisme régional.": {
    en: "Together, let's make regional tourism shine.",
    es: "Juntos, hagamos brillar el turismo regional.",
  },
  "Président de l'ARAVTTA": { en: "President of ARAVTTA", es: "Presidente de la ARAVTTA" },
  "Lire le mot du Président": { en: "Read the President's message", es: "Leer el mensaje del Presidente" },
  "Organisation": { en: "Organisation", es: "Organización" },
  "Découvrir l'association.": { en: "Discover the association.", es: "Descubrir la asociación." },
  "Voir la page": { en: "View page", es: "Ver la página" },

  "Mot du Président.": { en: "President's Message.", es: "Mensaje del Presidente." },
  "Un message aux confrères, partenaires et visiteurs de l'ARAVTTA.": {
    en: "A message to ARAVTTA's colleagues, partners and visitors.",
    es: "Un mensaje a los colegas, socios y visitantes de la ARAVTTA.",
  },
  "Chers confrères, chères consœurs, partenaires et visiteurs,": {
    en: "Dear colleagues, partners and visitors,",
    es: "Estimados colegas, socios y visitantes:",
  },
  "Bienvenue sur le portail officiel de l'Association Régionale des Agences de Voyages de Tanger-Tétouan-Al Hoceima (ARAVTTA).": {
    en: "Welcome to the official portal of the Regional Association of Travel Agencies of Tanger-Tétouan-Al Hoceima (ARAVTTA).",
    es: "Bienvenidos al portal oficial de la Asociación Regional de Agencias de Viajes de Tanger-Tétouan-Al Hoceima (ARAVTTA).",
  },
  "C'est avec une immense fierté que nous inaugurons cet espace numérique, véritable vitrine du savoir-faire et du dynamisme des agences de voyages de notre région. Plus qu'un simple outil de communication, ce site est le reflet de notre ambition commune : renforcer la visibilité de nos membres et offrir une meilleure lisibilité de notre offre touristique auprès du grand public et des professionnels.": {
    en: "It is with immense pride that we launch this digital space, a true showcase of the expertise and drive of our region's travel agencies. More than a simple communication tool, this website reflects our shared ambition: to increase our members' visibility and make our tourism offer clearer to the general public and to professionals.",
    es: "Con inmenso orgullo inauguramos este espacio digital, auténtico escaparate del saber hacer y del dinamismo de las agencias de viajes de nuestra región. Más que una simple herramienta de comunicación, este sitio refleja nuestra ambición común: reforzar la visibilidad de nuestros miembros y ofrecer una mejor lectura de nuestra oferta turística al gran público y a los profesionales.",
  },
  "L'ARAVTTA est guidée par des objectifs clairs, axés sur l'étude des enjeux, la défense des intérêts de nos membres et la promotion de l'industrie touristique marocaine.": {
    en: "ARAVTTA is guided by clear objectives, focused on studying the challenges, defending our members' interests and promoting Morocco's tourism industry.",
    es: "La ARAVTTA se guía por objetivos claros, centrados en el estudio de los retos, la defensa de los intereses de nuestros miembros y la promoción de la industria turística marroquí.",
  },
  "Dans un contexte en constante mutation, notre mission est de structurer, de soutenir et de moderniser notre profession. En misant sur la digitalisation, l'excellence du service client et la formation continue, nous œuvrons chaque jour pour positionner la région de Tanger-Tétouan-Al Hoceima comme une destination incontournable et exemplaire.": {
    en: "In a constantly changing environment, our mission is to structure, support and modernise our profession. By focusing on digitalisation, excellent customer service and continuous training, we work every day to position the Tanger-Tétouan-Al Hoceima region as an essential and exemplary destination.",
    es: "En un contexto en constante cambio, nuestra misión es estructurar, apoyar y modernizar nuestra profesión. Apostando por la digitalización, la excelencia en el servicio al cliente y la formación continua, trabajamos cada día para posicionar la región de Tanger-Tétouan-Al Hoceima como un destino imprescindible y ejemplar.",
  },
  "Je tiens à exprimer ma gratitude à l'ensemble des membres du bureau et à tous nos adhérents pour leur confiance et leur implication sans faille. C'est par notre solidarité, notre engagement et notre éthique professionnelle que nous continuerons à valoriser le patrimoine touristique de notre pays et à bâtir un avenir prospère pour notre secteur.": {
    en: "I would like to thank all the members of the board and all our members for their trust and unwavering commitment. Through our solidarity, our dedication and our professional ethics, we will keep promoting our country's tourism heritage and building a prosperous future for our sector.",
    es: "Quiero expresar mi gratitud a todos los miembros de la junta y a todos nuestros asociados por su confianza y su implicación constante. Gracias a nuestra solidaridad, nuestro compromiso y nuestra ética profesional, seguiremos poniendo en valor el patrimonio turístico de nuestro país y construyendo un futuro próspero para nuestro sector.",
  },
  "Je vous invite à parcourir ce site, à découvrir la richesse de nos services et à rester connectés avec l'actualité de notre Association.": {
    en: "I invite you to browse this website, discover the range of our services and stay up to date with our Association's news.",
    es: "Les invito a recorrer este sitio, descubrir la riqueza de nuestros servicios y mantenerse al día de la actualidad de nuestra Asociación.",
  },
  "Sincères salutations,": { en: "Kind regards,", es: "Atentamente," },

  "Les Commissions.": { en: "The Committees.", es: "Las Comisiones." },
  "Feuille de route 2024 – 2027 : sept commissions, leurs responsables, missions et axes de travail.": {
    en: "2024 – 2027 roadmap: seven committees, their leads, missions and areas of work.",
    es: "Hoja de ruta 2024 – 2027: siete comisiones, sus responsables, misiones y líneas de trabajo.",
  },
  "Photo à venir": { en: "Photo coming soon", es: "Foto próximamente" },
  "Logo à venir": { en: "Logo coming soon", es: "Logo próximamente" },
  "Axes de travail": { en: "Areas of work", es: "Líneas de trabajo" },

  "Plan d'Action.": { en: "Action Plan.", es: "Plan de Acción." },
  "Comité 2024 – 2027 : les actions court et long terme portées par l'ARAVTTA.": {
    en: "2024 – 2027 committee: the short- and long-term actions led by ARAVTTA.",
    es: "Comité 2024 – 2027: las acciones a corto y largo plazo impulsadas por la ARAVTTA.",
  },
  "Court terme": { en: "Short term", es: "Corto plazo" },
  "Long terme": { en: "Long term", es: "Largo plazo" },
  "Actions immédiates": { en: "Immediate actions", es: "Acciones inmediatas" },
  "Commissions à activer": { en: "Committees to activate", es: "Comisiones por activar" },
  "Construire l'avenir": { en: "Building the future", es: "Construir el futuro" },
  "Créer des produits communs à l'export.": { en: "Create joint products for export.", es: "Crear productos comunes para la exportación." },
  "Travailler et collaborer de concert avec la Délégation du Tourisme, la FNAAVM, le CRTTA, l'ISITT, l'ISTAHT, Amadeus, etc., dans le cadre de la régionalisation avancée.": {
    en: "Work hand in hand with the Tourism Delegation, FNAAVM, CRTTA, ISITT, ISTAHT, Amadeus, etc., as part of advanced regionalisation.",
    es: "Trabajar y colaborar conjuntamente con la Delegación de Turismo, la FNAAVM, el CRTTA, el ISITT, el ISTAHT, Amadeus, etc., en el marco de la regionalización avanzada.",
  },
  "Assister et conseiller les nouvelles agences.": { en: "Assist and advise new agencies.", es: "Asistir y asesorar a las nuevas agencias." },
  "Créer le site web de l'ARAVTTA.": { en: "Create the ARAVTTA website.", es: "Crear el sitio web de la ARAVTTA." },
  "Organiser une journée de réflexion.": { en: "Organise a strategy day.", es: "Organizar una jornada de reflexión." },
  "Forum de l'Agent de Voyages (3e édition).": { en: "Travel Agent Forum (3rd edition).", es: "Foro del Agente de Viajes (3.ª edición)." },
  "Commission des Sages (règlement intérieur)": { en: "Council of Elders (internal rules)", es: "Comisión de Sabios (reglamento interno)" },
  "Commission de l'Aérien": { en: "Air Travel Committee", es: "Comisión Aérea" },
  "Commission des Affaires Litiges Fiscaux": { en: "Tax Disputes Committee", es: "Comisión de Litigios Fiscales" },
  "Commission Sociale": { en: "Social Committee", es: "Comisión Social" },
  "Digitalisation des agences (logiciel actualisé).": { en: "Digitalisation of agencies (updated software).", es: "Digitalización de las agencias (software actualizado)." },
  "Fédérer les agences en instance d'adhésion.": { en: "Bring in agencies whose membership is pending.", es: "Integrar a las agencias en proceso de adhesión." },
  "Continuer le combat sur la question maritime (commission).": {
    en: "Keep up the fight on the maritime issue (committee).",
    es: "Continuar la lucha en la cuestión marítima (comisión).",
  },
  "Rehausser l'image de marque de l'agence de voyages auprès du public, des administrations et des élus de notre région.": {
    en: "Raise the travel agency's brand image with the public, government bodies and elected officials in our region.",
    es: "Realzar la imagen de marca de la agencia de viajes ante el público, las administraciones y los cargos electos de nuestra región.",
  },
  "Participer aux actions promotionnelles touristiques et sociales de la région.": {
    en: "Take part in the region's tourism and social promotion activities.",
    es: "Participar en las acciones de promoción turística y social de la región.",
  },
  "Dynamiser les commissions sectorielles de l'ARAVTTA.": { en: "Energise ARAVTTA's sector committees.", es: "Dinamizar las comisiones sectoriales de la ARAVTTA." },
  "Organiser un séminaire à Tétouan.": { en: "Organise a seminar in Tétouan.", es: "Organizar un seminario en Tétouan." },
  "Organiser la rencontre des agents de voyages à Al Hoceima.": {
    en: "Organise the travel agents' meeting in Al Hoceima.",
    es: "Organizar el encuentro de agentes de viajes en Al Hoceima.",
  },

  "Plan Stratégique.": { en: "Strategic Plan.", es: "Plan Estratégico." },
  "2024 – 2027 : deux axes pour professionnaliser le métier et renforcer l'influence des agences du Nord.": {
    en: "2024 – 2027: two pillars to professionalise the trade and strengthen the influence of the North's agencies.",
    es: "2024 – 2027: dos ejes para profesionalizar el oficio y reforzar la influencia de las agencias del Norte.",
  },
  "Axe": { en: "Pillar", es: "Eje" },
  "Objectif :": { en: "Objective:", es: "Objetivo:" },
  "Professionnalisation et développement": { en: "Professionalisation and development", es: "Profesionalización y desarrollo" },
  "Renforcer la structure interne et la compétitivité des agences membres.": {
    en: "Strengthen the internal structure and competitiveness of member agencies.",
    es: "Reforzar la estructura interna y la competitividad de las agencias miembro.",
  },
  "Valorisation de l'offre": { en: "Enhancing the offer", es: "Valorización de la oferta" },
  "Création de produits communs destinés à l'exportation pour renforcer le positionnement international.": {
    en: "Creating joint products for export to strengthen international positioning.",
    es: "Creación de productos comunes destinados a la exportación para reforzar el posicionamiento internacional.",
  },
  "Partenariats stratégiques": { en: "Strategic partnerships", es: "Alianzas estratégicas" },
  "Consolidation des collaborations avec les acteurs clés (Délégation du Tourisme, FNAAVM, CRTTA, ISITT, ISTAHT, Amadeus, etc.) dans une démarche de régionalisation avancée.": {
    en: "Consolidating partnerships with key players (Tourism Delegation, FNAAVM, CRTTA, ISITT, ISTAHT, Amadeus, etc.) as part of advanced regionalisation.",
    es: "Consolidación de las colaboraciones con los actores clave (Delegación de Turismo, FNAAVM, CRTTA, ISITT, ISTAHT, Amadeus, etc.) en un enfoque de regionalización avanzada.",
  },
  "Accompagnement métier": { en: "Professional support", es: "Acompañamiento profesional" },
  "Mise en place d'un programme d'assistance et de conseil dédié aux nouvelles agences de voyages.": {
    en: "Setting up an assistance and advice programme for new travel agencies.",
    es: "Puesta en marcha de un programa de asistencia y asesoramiento dedicado a las nuevas agencias de viajes.",
  },
  "Transformation digitale & communication": { en: "Digital transformation & communication", es: "Transformación digital y comunicación" },
  "Lancement du site web officiel de l'ARAVTTA comme vitrine institutionnelle.": {
    en: "Launching ARAVTTA's official website as an institutional showcase.",
    es: "Lanzamiento del sitio web oficial de la ARAVTTA como escaparate institucional.",
  },
  "Gouvernance & organisation": { en: "Governance & organisation", es: "Gobernanza y organización" },
  "Journée de réflexion stratégique et 3e édition du « Forum de l'Agent de Voyages ».": {
    en: "A strategy day and the 3rd edition of the \"Travel Agent Forum\".",
    es: "Jornada de reflexión estratégica y 3.ª edición del «Foro del Agente de Viajes».",
  },
  "Commissions actives": { en: "Active committees", es: "Comisiones activas" },
  "Commission des Sages (mise à jour du règlement intérieur), Commissions Aérien, Maritime, Réceptif/Outgoing, MICE, Sociale, et Affaires Litiges Fiscaux.": {
    en: "Council of Elders (updating the internal rules), and the Air Travel, Maritime, Inbound/Outbound, MICE, Social and Tax Disputes committees.",
    es: "Comisión de Sabios (actualización del reglamento interno) y las comisiones Aérea, Marítima, Receptivo/Emisor, MICE, Social y Litigios Fiscales.",
  },
  "Pérennisation et influence": { en: "Sustainability and influence", es: "Perdurabilidad e influencia" },
  "Moderniser le secteur, accroître la représentativité et renforcer l'image de marque.": {
    en: "Modernise the sector, increase representation and strengthen the brand image.",
    es: "Modernizar el sector, aumentar la representatividad y reforzar la imagen de marca.",
  },
  "Digitalisation sectorielle": { en: "Sector digitalisation", es: "Digitalización sectorial" },
  "Accompagnement des agences vers la transition numérique via le déploiement de solutions logicielles actualisées.": {
    en: "Guiding agencies through the digital transition by rolling out updated software solutions.",
    es: "Acompañamiento de las agencias hacia la transición digital mediante el despliegue de soluciones de software actualizadas.",
  },
  "Renforcement du réseau": { en: "Strengthening the network", es: "Refuerzo de la red" },
  "Stratégie de fédération active pour attirer et intégrer les agences en instance d'adhésion.": {
    en: "An active outreach strategy to attract and bring in agencies whose membership is pending.",
    es: "Estrategia activa de federación para atraer e integrar a las agencias en proceso de adhesión.",
  },
  "Défense des intérêts": { en: "Defending interests", es: "Defensa de los intereses" },
  "Poursuite du plaidoyer sur les dossiers critiques, notamment la question maritime.": {
    en: "Continued advocacy on critical issues, especially the maritime question.",
    es: "Continuación de la defensa en los asuntos críticos, en particular la cuestión marítima.",
  },
  "Rayonnement institutionnel": { en: "Institutional outreach", es: "Proyección institucional" },
  "Rehausser l'image de marque de l'agence de voyages auprès du grand public, des administrations et des élus régionaux, et participer activement aux initiatives de promotion touristique et sociale de la région.": {
    en: "Raise the travel agency's brand image with the general public, government bodies and regional elected officials, and take an active part in the region's tourism and social promotion initiatives.",
    es: "Realzar la imagen de marca de la agencia de viajes ante el gran público, las administraciones y los cargos electos regionales, y participar activamente en las iniciativas de promoción turística y social de la región.",
  },
  "Dynamisation du réseau régional": { en: "Energising the regional network", es: "Dinamización de la red regional" },
  "Optimisation de l'efficacité des commissions sectorielles et organisation d'événements de cohésion (séminaire à Tétouan, rencontre des agents de voyages à Al Hoceima).": {
    en: "Making the sector committees more effective and organising team-building events (seminar in Tétouan, travel agents' meeting in Al Hoceima).",
    es: "Optimización de la eficacia de las comisiones sectoriales y organización de eventos de cohesión (seminario en Tétouan, encuentro de agentes de viajes en Al Hoceima).",
  },

  "Anciens Présidents.": { en: "Former Presidents.", es: "Expresidentes." },
  "Hommage à celles et ceux qui ont bâti l'ARAVTTA et porté la voix des agences de voyages du Nord.": {
    en: "A tribute to those who built ARAVTTA and carried the voice of the North's travel agencies.",
    es: "Homenaje a quienes construyeron la ARAVTTA y llevaron la voz de las agencias de viajes del Norte.",
  },
  "En leur honneur": { en: "In their honour", es: "En su honor" },
  "Par leur engagement, leur vision et leur dévouement, nos anciens présidents ont posé les fondations d'une association forte et respectée. L'ARAVTTA leur exprime sa profonde reconnaissance.": {
    en: "Through their commitment, vision and dedication, our former presidents laid the foundations of a strong and respected association. ARAVTTA expresses its deep gratitude to them.",
    es: "Con su compromiso, su visión y su dedicación, nuestros expresidentes sentaron las bases de una asociación fuerte y respetada. La ARAVTTA les expresa su profundo agradecimiento.",
  },
  "Ancien Président": { en: "Former President", es: "Expresidente" },

  // ─── Members ─────────────────────────────────────────────────────────────
  "Nos membres.": { en: "Our members.", es: "Nuestros miembros." },
  "Le bureau 2024 – 2027 et les agences de voyages qui font avancer le tourisme à Tanger, Tétouan et Al Hoceima.": {
    en: "The 2024 – 2027 board and the travel agencies driving tourism forward in Tanger, Tétouan and Al Hoceima.",
    es: "La junta 2024 – 2027 y las agencias de viajes que hacen avanzar el turismo en Tanger, Tétouan y Al Hoceima.",
  },
  "Bureau 2024 – 2027": { en: "Board 2024 – 2027", es: "Junta 2024 – 2027" },
  "Le bureau de l'association.": { en: "The association's board.", es: "La junta de la asociación." },
  "Treize agents de voyages élus pour représenter la profession et conduire le plan d'action de l'ARAVTTA.": {
    en: "Thirteen elected travel agents who represent the profession and lead ARAVTTA's action plan.",
    es: "Trece agentes de viajes elegidos para representar a la profesión y llevar a cabo el plan de acción de la ARAVTTA.",
  },
  "Nos agences.": { en: "Our agencies.", es: "Nuestras agencias." },
  "Votre agence n'apparaît pas encore ? Rejoignez le réseau ARAVTTA.": {
    en: "Your agency isn't listed yet? Join the ARAVTTA network.",
    es: "¿Su agencia aún no aparece? Únase a la red ARAVTTA.",
  },
  "Visiter {host}": { en: "Visit {host}", es: "Visitar {host}" },
  "Président": { en: "President", es: "Presidente" },
  "1er Vice-Président": { en: "1st Vice-President", es: "1.er Vicepresidente" },
  "2e Vice-Président": { en: "2nd Vice-President", es: "2.º Vicepresidente" },
  "3e Vice-Président": { en: "3rd Vice-President", es: "3.er Vicepresidente" },
  "Secrétaire Général": { en: "Secretary General", es: "Secretario General" },
  "Secrétaire Générale Adjointe": { en: "Deputy Secretary General", es: "Secretaria General Adjunta" },
  "Trésorier": { en: "Treasurer", es: "Tesorero" },
  "Trésorière Adjointe": { en: "Deputy Treasurer", es: "Tesorera Adjunta" },
  "Conseiller": { en: "Advisor", es: "Consejero" },
  "Conseillère": { en: "Advisor", es: "Consejera" },
  "Fondateur": { en: "Founder", es: "Fundador" },
  "Agence de voyages reconnue au cœur de Tanger, fondée en 1989 : voyages nationaux et internationaux, billetterie aérienne et maritime, et séjours officiels pour le Hajj et l'Omra.": {
    en: "A well-known travel agency in the heart of Tanger, founded in 1989: domestic and international travel, air and ferry ticketing, and official Hajj and Umrah trips.",
    es: "Agencia de viajes reconocida en el corazón de Tanger, fundada en 1989: viajes nacionales e internacionales, billetes de avión y de barco, y estancias oficiales para el Hach y la Umrah.",
  },
  "Conciergerie de voyage haut de gamme basée à Tanger : séjours sur mesure, organisation d'événements, chauffeurs privés, location de yachts et de jets, avec une équipe multilingue disponible 24h/24.": {
    en: "A high-end travel concierge based in Tanger: tailor-made stays, event planning, private drivers, yacht and jet charter, with a multilingual team available 24/7.",
    es: "Conserjería de viajes de alta gama con sede en Tanger: estancias a medida, organización de eventos, chóferes privados, alquiler de yates y jets, con un equipo multilingüe disponible 24 h.",
  },
  "Spécialiste des séjours de pèlerinage avec vols directs depuis Tanger vers Médine et La Mecque, circuits au Maroc, vacances à l'étranger, billetterie aérienne et maritime et réservations hôtelières.": {
    en: "A specialist in pilgrimage trips with direct flights from Tanger to Medina and Mecca, tours in Morocco, holidays abroad, air and ferry ticketing and hotel bookings.",
    es: "Especialista en viajes de peregrinación con vuelos directos desde Tanger a Medina y La Meca, circuitos por Marruecos, vacaciones en el extranjero, billetes de avión y de barco y reservas de hotel.",
  },
  "Agence de voyages membre du réseau ARAVTTA.": { en: "A travel agency in the ARAVTTA network.", es: "Agencia de viajes miembro de la red ARAVTTA." },

  // ─── Partners page ───────────────────────────────────────────────────────
  "Institutions, fédérations, écoles et organismes de promotion : ils accompagnent l'ARAVTTA pour renforcer le tourisme du Nord.": {
    en: "Institutions, federations, schools and promotion bodies: they support ARAVTTA in strengthening tourism in the North.",
    es: "Instituciones, federaciones, escuelas y organismos de promoción: acompañan a la ARAVTTA para reforzar el turismo del Norte.",
  },
  "Visiter le site": { en: "Visit website", es: "Visitar el sitio" },
  "Lien bientôt disponible": { en: "Link coming soon", es: "Enlace próximamente" },
  "Vous souhaitez devenir partenaire de l'ARAVTTA ? Parlons-en.": {
    en: "Would you like to become an ARAVTTA partner? Let's talk.",
    es: "¿Desea ser socio de la ARAVTTA? Hablemos.",
  },
  "Nous contacter": { en: "Contact us", es: "Contáctenos" },

  // ─── Region page ─────────────────────────────────────────────────────────
  "De l'Atlantique à la Méditerranée, cinq destinations qui font la richesse de Tanger-Tétouan-Al Hoceima. Cliquez sur une ville pour la découvrir.": {
    en: "From the Atlantic to the Mediterranean, five destinations that make Tanger-Tétouan-Al Hoceima so rich. Click a city to discover it.",
    es: "Del Atlántico al Mediterráneo, cinco destinos que hacen la riqueza de Tanger-Tétouan-Al Hoceima. Haga clic en una ciudad para descubrirla.",
  },
  "Découvrir": { en: "Discover", es: "Descubrir" },
  "Découvrir {city}": { en: "Discover {city}", es: "Descubrir {city}" },
  // ─── Browser tab titles ──────────────────────────────────────────────────
  "ARAVTTA | Tourisme régional Tanger-Tétouan-Al Hoceima": {
    en: "ARAVTTA | Regional tourism Tanger-Tétouan-Al Hoceima",
    es: "ARAVTTA | Turismo regional Tanger-Tétouan-Al Hoceima",
  },
  "L'Association | ARAVTTA": { en: "The Association | ARAVTTA", es: "La Asociación | ARAVTTA" },
  "Mot du Président | ARAVTTA": { en: "President's Message | ARAVTTA", es: "Mensaje del Presidente | ARAVTTA" },
  "Les Commissions | ARAVTTA": { en: "The Committees | ARAVTTA", es: "Las Comisiones | ARAVTTA" },
  "Plan d'Action | ARAVTTA": { en: "Action Plan | ARAVTTA", es: "Plan de Acción | ARAVTTA" },
  "Plan Stratégique | ARAVTTA": { en: "Strategic Plan | ARAVTTA", es: "Plan Estratégico | ARAVTTA" },
  "Anciens Présidents | ARAVTTA": { en: "Former Presidents | ARAVTTA", es: "Expresidentes | ARAVTTA" },
  "Réseau membre | ARAVTTA": { en: "Member network | ARAVTTA", es: "Red de miembros | ARAVTTA" },
  "Partenaires | ARAVTTA": { en: "Partners | ARAVTTA", es: "Socios | ARAVTTA" },
  "La Région | ARAVTTA": { en: "The Region | ARAVTTA", es: "La Región | ARAVTTA" },
  "Actualités | ARAVTTA": { en: "News | ARAVTTA", es: "Noticias | ARAVTTA" },
  "Événements | ARAVTTA": { en: "Events | ARAVTTA", es: "Eventos | ARAVTTA" },
};
