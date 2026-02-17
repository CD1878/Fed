import { MenuSectionData, Product } from './types';

export const MENU_SECTIONS: MenuSectionData[] = [
  {
    title: "Schalen",
    items: [
      { title: "ANTIPASTI SCHAAL", description: "mix van vlees, kaas en andere delicatesse", price: "€7,95" },
      { title: "BRESAOLA CARPACCIO", description: "gedroogde ossenhaas, rucola, Parmezaanse kaas en pijnboompitten", price: "€6,95" },
      { title: "VITELLO TONNATO", description: "gebakken kalfsmuis, tonnato, rucola en kappertjes", price: "€5,95" },
    ],
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imagePosition: 'left'
  },
  {
    title: "Pasta's 350 gr per portie",
    items: [
      { title: "LASAGNE BOLOGNESE", description: "bolognese saus en mortadella", price: "€9,95" },
      { title: "LASAGNE VEGA", description: "tomatensaus, truffel champignons, ricotta, mozzarella en gegrilde groenten", price: "€10,95" },
      { title: "MELANZANE ALLA PARMIGIANA", description: "aubergine, tomatensaus en parmezaanse kaas", price: "€9,95" },
    ],
    image: "https://images.unsplash.com/photo-1574868726880-87779d723707?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imagePosition: 'right'
  },
  {
    title: "Pasta's 350 gr per portie",
    subtitle: "(vervolg)",
    items: [
      { title: "PENNE SALSICCIA", description: "witte wijn roomsaus met funghi porcini en Italiaanse worst", price: "€9,95" },
      { title: "A'MATRICIANA", description: "tomatensaus met parmaham en pancetta", price: "€9,95" },
      { title: "SPAGHETTI AGLIO OLIO E PEPERONCINO", description: "knoflook, ui, tomaat en olie", price: "€9,95" },
      { title: "CASARECCIA PISTACCHIO", description: "pistache roomsaus", price: "€9,95" },
      { title: "BOLOGNESE", description: "bolognese saus met bechamel", price: "€9,95" },
    ],
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imagePosition: 'left'
  },
   {
    title: "Salades 250g per portie",
    items: [
      { title: "VENKEL SALADE", description: "balsamico azijn, Parmezaanse kaas en rucola", price: "€9,95" },
      { title: "CAPRESE SALADE", description: "cherry tomaat, zongedroogde tomaat, Buffel mozzarella en salsa verde dressing", price: "€9,95" },
      { title: "ESTIVA SALADE", description: "haricovert, asperges, zongedroogde tomaat, artisjok, cherry tomaat, ui, bleekselderij en salsa verde dressing", price: "€9,95" },
    ],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imagePosition: 'right'
  },
  {
    title: "Vlees 250g per portie",
    items: [
      { title: "POLLO", description: "kippendijen, pesto rosso, witte wijn en salie", price: "€7,50" },
      { title: "POLPETTE", description: "half om half gehakt, venkelzaad met tomatensaus", price: "€7,50" },
      { title: "PLATTE POLPETTE", description: "half om half gehakt, spinazie en taleggio kaas", price: "€7,95" },
    ],
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imagePosition: 'left'
  },
   {
    title: "Desserts",
    items: [
      { title: "TORTA DELLA NONNA", description: "citroentaart", price: "€3,95" },
      { title: "CANNOLO", description: "gefrituurd pannenkoekje met zoete ricotta", price: "€4,50" },
      { title: "TIRAMISU", description: "zoete marsala, lange vingers met cacao", price: "€4,50" },
      { title: "TIRAMISU LIMONCELLO", description: "limoncello, lange vingers en nougat", price: "€4,50" },
    ],
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imagePosition: 'right'
  },
  {
    title: "Sides 250g per portie",
    items: [
      { title: "ARTISJOK ALLA ROMANA (100gr)", description: "citroen, peterselie en salsa verde", price: "€3,95" },
      { title: "BROCCOLI GRATIN", description: "bechamelsaus, knoflook en Parmezaanse kaas", price: "€6,95" },
      { title: "ROSEVAL AARDAPPELS", description: "Parmezaanse kaas en peterselie", price: "€6,95" },
      { title: "WILDE SPINAZIE", description: "knoflook en rode peper", price: "€6,95" },
    ],
    image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    imagePosition: 'left'
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'PORCHETTA',
    description: 'Speenvarken, rucola en Parmezaanse kaas',
    price: '€ 10,00',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'POLPETTE',
    description: 'Gehaktballen met tomatensaus, rucola en Parmezaanse kaas',
    price: '€ 10,00',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'POLLO',
    description: 'Kippendijen met pesto rosso, salie, witte wijn, rucola en Parmezaanse kaas',
    price: '€ 10,00',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'ELBA VEGAN',
    description: 'Artisjok en Zongedroogde Tomaat',
    price: '€ 9,50',
    image: 'https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'ELBA',
    description: 'Mozzarella, Rucola, Gegrilde Aubergine, Gegrilde Courgette',
    price: '€ 9,50',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'GORGONZOLA',
    description: 'Blauwschimmel Kaas met Spinazie en Knoflook-champignons',
    price: '€ 9,50',
    image: 'https://images.unsplash.com/photo-1509722747715-491c9818958c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    title: 'MORTADELLA',
    description: 'Citroen en Balsamico-azijn',
    price: '€ 9,50',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    title: 'BRESAOLA',
    description: 'Gedroogde Ossenhaas met Rucola, Parmezaanse Kaas',
    price: '€ 9,50',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
    {
    id: '9',
    title: 'VITELLO',
    description: 'Kalfsvlees met Tonijnmayonaise, Rucola en Kappertjes',
    price: '€ 9,50',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10',
    title: 'SALMONE',
    description: 'Gerookte Zalm, Kruiden-room Kaas en Rucola',
    price: '€ 9,00',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e3b4430f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
    {
    id: '11',
    title: 'SPECIALE',
    description: 'Mozzarella met Parmaham, Tomaat en Basilicum Pesto',
    price: '€ 9,00',
    image: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
    {
    id: '12',
    title: 'FEDUZZI',
    description: 'Mozzarella met Gegrilde Aubergine en Basilicumpesto',
    price: '€ 8,50',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];
