/**
 * MARIYA TRAVELS - FLEET ASSETS & SPECIFICATIONS
 * Contains authentic photos extracted directly from the official fleet PDF.
 */

export const FLEET_CATEGORIES = [
  { id: 'all', label: 'All Fleet' },
  { id: 'coach', label: 'Luxury Coaches' },
  { id: 'traveller', label: 'Travellers' },
  { id: 'premium', label: 'SUVs & Innova' },
];

export const VEHICLES = [
  {
    id: 'coach-21-ac',
    name: '21 Seat AC Luxury Coach',
    shortName: '21 Seat AC Coach',
    category: 'coach',
    seats: 21,
    ac: true,
    tagline: 'Flagship comfort for weddings, corporate retreats & grand tours',
    description: 'Engineered for executive group transit with individual AC vents, wide reclining push-back seating, panoramic tinted windows, illuminated butterfly ceiling, and expansive luggage bays.',
    image: '/vehicles/gallery/coach-3-front-angle.jpg',
    cutoutImage: '/vehicles/cutouts/coach-21-ac.png',
    interiorImage: '/vehicles/gallery/coach-4-cabin-interior.jpg',
    registrationNumber: 'TN 59 DB 9010',
    badge: 'Executive Flagship',
    highlights: ['Individual AC Louvers', '2x1 Luxury Pushback Seats', 'Illuminated Butterfly Ceiling', 'Hi-Fi Audio System', 'Massive Luggage Space'],
    specs: {
      capacity: '21 Passengers + 1 Driver',
      luggage: '25+ Large Bags',
      comfort: 'Full Air Suspension & Pushback',
      climate: 'High-Capacity Dual AC',
      range: 'State & Interstate Tours'
    },
    pricing: {
      dayRent: 4500,
      perKm: 25,
      hills: 2500,
      aboveLimitRate: 35,
      limitKm: 400
    },
    gallery: [
      { id: 1, label: 'Front View & Smileys', src: '/vehicles/gallery/coach-2-front-view.jpg', angle: 'Front Exterior' },
      { id: 2, label: '3/4 Front Angle View', src: '/vehicles/gallery/coach-3-front-angle.jpg', angle: 'Exterior 3/4' },
      { id: 3, label: 'Full Side Profile', src: '/vehicles/gallery/coach-1-side-profile.jpg', angle: 'Side Profile' },
      { id: 4, label: 'Illuminated Butterfly Ceiling & Seats', src: '/vehicles/gallery/coach-4-cabin-interior.jpg', angle: 'Cabin Interior' },
    ]
  },
  {
    id: 'coach-21-non-ac',
    name: '21 Seat Non-AC Coach',
    shortName: '21 Seat Non-AC Coach',
    category: 'coach',
    seats: 21,
    ac: false,
    tagline: 'Economical, airy & dependable group travel across scenic terrains',
    description: 'Perfect for pilgrimage trips, local group excursions, and budget-conscious long journeys with maximum ventilation and comfortable high-back seating.',
    image: '/vehicles/gallery/coach-1-side-profile.jpg',
    cutoutImage: '/vehicles/cutouts/coach-21-non-ac.png',
    interiorImage: '/vehicles/gallery/coach-4-cabin-interior.jpg',
    registrationNumber: 'TN 59 DB 9010',
    badge: 'Popular Group Saver',
    highlights: ['Airy Panoramic Windows', 'Comfortable High-Back Seats', 'Spacious Legroom', 'Heavy Duty Suspension', 'Ample Boot Storage'],
    specs: {
      capacity: '21 Passengers + 1 Driver',
      luggage: '20+ Bags',
      comfort: 'Cushioned High-Back Seating',
      climate: 'Natural Fresh Air Cross-Ventilation',
      range: 'Regional & Hill Excursions'
    },
    pricing: {
      dayRent: 3800,
      perKm: 18,
      hills: 2500,
      aboveLimitRate: 28,
      limitKm: 400
    },
    gallery: [
      { id: 1, label: 'Full Side Profile', src: '/vehicles/gallery/coach-1-side-profile.jpg', angle: 'Side Profile' },
      { id: 2, label: 'Front Direct View', src: '/vehicles/gallery/coach-2-front-view.jpg', angle: 'Front Exterior' },
      { id: 3, label: '3/4 Front Angle', src: '/vehicles/gallery/coach-3-front-angle.jpg', angle: 'Exterior 3/4' },
      { id: 4, label: 'Cabin Seating & Ceiling', src: '/vehicles/gallery/coach-4-cabin-interior.jpg', angle: 'Cabin Interior' },
    ]
  },
  {
    id: 'traveller-18',
    name: '18 Seat Force Traveller',
    shortName: '18 Seat Traveller',
    category: 'traveller',
    seats: 18,
    ac: true,
    tagline: 'The gold standard for medium group tours and hill station getaways',
    description: 'The preferred choice for family vacations and hill excursions to Ooty, Kodaikanal, and Munnar. High ground clearance, plush RGB mood-lit interiors, and smooth ride quality.',
    image: '/vehicles/gallery/traveller18-1-front-view.jpg',
    cutoutImage: '/vehicles/cutouts/traveller-18.png',
    interiorImage: '/vehicles/gallery/traveller18-5-cabin-lighting.jpg',
    registrationNumber: 'TN 59 DF 1249',
    badge: 'Hill Station Favorite',
    highlights: ['RGB Mood Lighting Ceiling', 'Mariya Badge Illumination', 'Reclining Pushback Seats', 'Hi-Fi Audio System', 'Dual AC Vents'],
    specs: {
      capacity: '18 Passengers + 1 Driver',
      luggage: '18 Suitcases + Overhead',
      comfort: 'Semi-Sleeper / Pushback',
      climate: 'Roof-Mounted AC',
      range: 'Hill Stations & Coastal Circuits'
    },
    pricing: {
      dayRent: 3900,
      perKm: 19,
      hills: 2000,
      aboveLimitRate: 30,
      limitKm: 400
    },
    gallery: [
      { id: 1, label: 'Front View (Garland & LED)', src: '/vehicles/gallery/traveller18-1-front-view.jpg', angle: 'Front View' },
      { id: 2, label: 'Left Side Profile with Decals', src: '/vehicles/gallery/traveller18-2-side-left.jpg', angle: 'Left Side' },
      { id: 3, label: 'Right Side Profile View', src: '/vehicles/gallery/traveller18-3-side-right.jpg', angle: 'Right Side' },
      { id: 4, label: 'Rear View & Rooftop Ladder', src: '/vehicles/gallery/traveller18-4-rear-view.jpg', angle: 'Rear Exterior' },
      { id: 5, label: 'RGB Ambient Mood Lighting Cabin', src: '/vehicles/gallery/traveller18-5-cabin-lighting.jpg', angle: 'Cabin Lighting' },
      { id: 6, label: 'Full Cabin Seating & Pioneer Audio', src: '/vehicles/gallery/traveller18-6-cabin-wide.jpg', angle: 'Cabin Seats' },
    ]
  },
  {
    id: 'traveller-14',
    name: '14 Seat Force Traveller',
    shortName: '14 Seat Traveller',
    category: 'traveller',
    seats: 14,
    ac: true,
    tagline: 'Compact luxury for intimate family trips & airport transfers',
    description: 'Agile navigation through city traffic and narrow mountain hairpins while maintaining supreme cabin comfort with geometric backlit ceiling and rear sleeper deck option.',
    image: '/vehicles/gallery/traveller14-1-front-view.jpg',
    cutoutImage: '/vehicles/cutouts/traveller-14.png',
    interiorImage: '/vehicles/gallery/traveller14-6-ceiling-lighting.jpg',
    registrationNumber: 'TN 59 DK 8670',
    badge: 'Family Tour Prime',
    highlights: ['Geometric Backlit Ceiling', 'Rear Sleeper Deck Option', 'Quilted Captain Leatherette', 'Pioneer Audio Setup', 'Chilled AC Vents'],
    specs: {
      capacity: '14 Passengers + 1 Driver',
      luggage: '14 Medium Bags',
      comfort: 'Individual Armrests & Pushback',
      climate: 'Front & Rear Chilled Air Con',
      range: 'City, Airport & Mountain Runs'
    },
    pricing: {
      dayRent: 2800,
      perKm: 18,
      hills: 2000,
      aboveLimitRate: 24,
      limitKm: 400
    },
    gallery: [
      { id: 1, label: 'Front Direct View', src: '/vehicles/gallery/traveller14-1-front-view.jpg', angle: 'Front View' },
      { id: 2, label: 'Left Side Profile with Decal', src: '/vehicles/gallery/traveller14-2-side-left.jpg', angle: 'Left Side' },
      { id: 3, label: 'Right Side Profile View', src: '/vehicles/gallery/traveller14-3-side-right.jpg', angle: 'Right Side' },
      { id: 4, label: 'Rear Sleeper Deck Configuration', src: '/vehicles/gallery/traveller14-4-sleeper-deck.jpg', angle: 'Sleeper Deck' },
      { id: 5, label: 'Quilted Diamond Captain Seats', src: '/vehicles/gallery/traveller14-5-cabin-seats.jpg', angle: 'Interior Seats' },
      { id: 6, label: 'Geometric Backlit Warm Ceiling', src: '/vehicles/gallery/traveller14-6-ceiling-lighting.jpg', angle: 'Ceiling Artwork' },
      { id: 7, label: 'Blue Neon Mood Ambient Cabin', src: '/vehicles/gallery/traveller14-7-ceiling-wide.jpg', angle: 'Night Cabin' },
    ]
  },
  {
    id: 'innova',
    name: 'Toyota Innova',
    shortName: 'Innova',
    category: 'premium',
    seats: 7,
    ac: true,
    tagline: 'Timeless reliability and smooth long-distance cruising',
    description: 'Renowned world-over for bulletproof dependability and couch-like highway comfort. Ideal for business trips, small families, and seamless interstate journeys.',
    image: '/vehicles/gallery/innova-1-front-angle.jpg',
    cutoutImage: '/vehicles/cutouts/innova.png',
    interiorImage: '/vehicles/gallery/innova-4-interior-seats.jpg',
    registrationNumber: 'TN 63 AT 1234',
    badge: 'Reliability Icon',
    highlights: ['Diamond-Stitched Tan Leather', 'Dual AC with Rear Blowers', 'Deep Boot Space', 'Ergonomic Captain Seats', 'Quiet Cabin Noise Isolation'],
    specs: {
      capacity: '7 Passengers + 1 Driver',
      luggage: '4 Large Bags',
      comfort: 'Plush Captain / Bench Seats',
      climate: 'Dual Zone Air Conditioning',
      range: 'Outstation Express & Airport Runs'
    },
    pricing: {
      dayRent: 2300,
      perKm: 13,
      hills: 1500,
      aboveLimitRate: 18,
      limitKm: 300
    },
    gallery: [
      { id: 1, label: 'Front 3/4 Angle (TN 63 AT 1234)', src: '/vehicles/gallery/innova-1-front-angle.jpg', angle: 'Front 3/4' },
      { id: 2, label: 'Left Side Exterior Profile', src: '/vehicles/gallery/innova-2-side-left.jpg', angle: 'Left Side' },
      { id: 3, label: 'Right Side Exterior Profile', src: '/vehicles/gallery/innova-3-side-right.jpg', angle: 'Right Side' },
      { id: 4, label: 'Tan Diamond-Stitched Leather Interior', src: '/vehicles/gallery/innova-4-interior-seats.jpg', angle: 'Leather Seats' },
      { id: 5, label: 'Front Direct Chrome Grille View', src: '/vehicles/gallery/innova-5-front-direct.jpg', angle: 'Front Direct' },
    ]
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    shortName: 'Innova Crysta',
    category: 'premium',
    seats: 7,
    ac: true,
    tagline: 'Modern luxury, commanding road presence and first-class seating',
    description: 'The pinnacle of premium MUV travel. Rich ambient styling, acoustic glass, superior ride refinement, and plush white bucket leatherette seating for elite travellers.',
    image: '/vehicles/gallery/crysta-2-front-angle-left.jpg',
    cutoutImage: '/vehicles/cutouts/innova-crysta.png',
    interiorImage: '/vehicles/gallery/crysta-7-interior-seats.jpg',
    registrationNumber: 'TN 59 CS 8383',
    badge: 'First-Class SUV',
    highlights: ['Pristine White Bucket Seats', 'Rear Automatic Climate Control', 'Touchscreen Infotainment', 'One-Touch Tumble Seats', 'Executive Chauffeur Service'],
    specs: {
      capacity: '7 Passengers + 1 Driver',
      luggage: '5 Medium Bags',
      comfort: 'Executive Captain Seats',
      climate: 'Automatic Climate Control',
      range: 'VIP Chauffeur & Luxury Outstation'
    },
    pricing: {
      dayRent: 2700,
      perKm: 17,
      hills: 1500,
      aboveLimitRate: 23,
      limitKm: 300
    },
    gallery: [
      { id: 1, label: 'Front Direct Grille View (TN 59 CS 8383)', src: '/vehicles/gallery/crysta-1-front-direct.jpg', angle: 'Front Direct' },
      { id: 2, label: 'Front 3/4 Left Angle Profile', src: '/vehicles/gallery/crysta-2-front-angle-left.jpg', angle: 'Front 3/4 Left' },
      { id: 3, label: 'Front 3/4 Right Angle Profile', src: '/vehicles/gallery/crysta-3-front-angle-right.jpg', angle: 'Front 3/4 Right' },
      { id: 4, label: 'Rear 3/4 Left View & Footstep', src: '/vehicles/gallery/crysta-4-rear-angle-left.jpg', angle: 'Rear 3/4 Left' },
      { id: 5, label: 'Rear 3/4 Right Profile View', src: '/vehicles/gallery/crysta-5-rear-angle-right.jpg', angle: 'Rear 3/4 Right' },
      { id: 6, label: 'Rear Direct Tailgate & Bumper', src: '/vehicles/gallery/crysta-6-rear-direct.jpg', angle: 'Rear Direct' },
      { id: 7, label: 'Pristine White Bucket Seating Interior', src: '/vehicles/gallery/crysta-7-interior-seats.jpg', angle: 'Cabin Seats' },
    ]
  }
];
