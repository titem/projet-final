conn = new Mongo();
db = conn.getDB("nursery-app");

db.nurseries.insertMany(
  [
    {
      "name": "Hélicie",
      "img": "",
      "email": "helicie@wanadoo.fr",
      "phone": "06 45 12 45 35",
      "website": "",
      "description": "Située rue du Général de Gaulle à Brumath, dans une maison de charme alsacienne, la crèche Hélicie propose trois types d’accueil : régulier, occasionnel et d’urgence. Chaque jour, notre équipe de professionnels spécialiste de la petite enfance accueille 11 enfants âgés de 10 semaines à 3 ans.",
      "staffNumber": NumberInt(12),
      "openingHours": "lundi au vendredi, de 7h30 à 18h30",
      "admissionConditions": "",
      "capacity": NumberInt(25),
      "ageLimits": "de 10 semaines à 4 ans",
      "comments": [],
      "address": {
        "city": "Brumath",
        "postalCode": NumberInt(67170),
        "street": "16 rue du Général de Gaulle"
      }
    },
    {
      "name": "Le sentier des merveilles",
      "img": "",
      "email": "le.santier@webmail.com",
      "phone": "06 73 56 31 64",
      "website": "",
      "description": "Le projet pédagogique est basé sur l’éducation sensorielle et le libre accès aux espaces de jeux.",
      "staffNumber": NumberInt(8),
      "openingHours": "lundi au vendredi, de 7h à 20h",
      "admissionConditions": "",
      "capacity": NumberInt(20),
      "ageLimits": "de 10 semaines à 4 ans",
      "comments": [],
      "address": {
        "city": "Reims",
        "postalCode": NumberInt(51100),
        "street": "3 ter Paul Fort"
      }
    },
    {
      "name": "Crèche les Acacias",
      "img": "",
      "email": "acacias-creche@orange.fr",
      "phone": "06 64 15 12 34",
      "website": "",
      "description": "",
      "staffNumber": NumberInt(5),
      "openingHours": "lundi au vendredi, de 7h30 à 19h",
      "admissionConditions": "",
      "capacity": NumberInt(18),
      "ageLimits": "de 1 à 6 ans",
      "comments": [],
      "address": {
        "city": "Rillieux-la-Pape",
        "postalCode": NumberInt(69140),
        "street": "1 place Boileau"
      }
    },
    {
      "name": "La souris verte",
      "img": "",
      "email": "souris-verte@orange.fr",
      "phone": "06 56 91 45 00",
      "website": "",
      "description": "Le multi-accueil la souris verte, crée en 1991 est une association loi 1901, qui a su évoluer et s’adapter aux nouveaux besoins et à la législation en vigueur.",
      "staffNumber": NumberInt(7),
      "openingHours": "du lundi au vendredi, 8h à 18h30",
      "admissionConditions": "",
      "capacity": NumberInt(20),
      "ageLimits": "de 2 mois et demi à 4 ans",
      "comments": [],
      "address": {
        "city": "Nancy",
        "postalCode": NumberInt(54000),
        "street": "85 avenue de Strasbourg"
      }
    }
  ]
);

