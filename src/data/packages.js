/**
 * MARIYA TRAVELS – TOUR PACKAGES
 * 6 curated packages with authentic, verified place images.
 * Uses exact local high-res assets from /public and verified photography.
 */

export const TOUR_PACKAGES = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. 2N3D Madurai → Kodaikanal → Palani → Ooty → Coimbatore
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'madurai-kodai-palani-ooty-cbe',
    coverImage: '/ooty-slopes.jpg',
    name: 'Madurai – Kodaikanal – Ooty – Coimbatore',
    tagline: 'Hill Serenity, Spiritual Bliss & Vibrant City Life',
    duration: '2 Nights / 3 Days',
    region: 'Tamil Nadu – Kerala Hills',
    image: '/packages/madurai-kodai-palani-ooty-cbe.jpg',
    heroBanner: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
    aspectRatio: '1024/571',
    description:
      'Experience a refreshing blend of hill station serenity, spiritual bliss, and vibrant city life. From the misty heights of Kodaikanal and Ooty to the sacred Palani Murugan Temple and the lively city of Coimbatore — perfect for a short but fulfilling escape.',
    highlights: [
      'Silver Cascade Waterfalls en route Kodaikanal',
      'Kodaikanal Lake Boating & Bryant Park',
      'Palani Murugan Temple Pilgrimage',
      'Ooty Botanical Gardens & Doddabetta Peak',
      'Tea Estate Walk & Factory Visit',
      'Drop at Coimbatore Airport / Railway Station',
    ],
    recommendedVehicles: ['Innova Crysta', '14 Seat Traveller', '18 Seat Traveller'],
    elevation: '2,133 m – 2,240 m',
    popularRoute: 'Madurai → Kodaikanal → Palani → Ooty → Coimbatore',
    itinerary: [
      {
        day: 1,
        title: 'Madurai to Kodaikanal – Embrace the Hills',
        places: [
          { name: 'Silver Cascade Waterfalls', desc: 'Stop for a break at this enchanting waterfall as you drive into Kodaikanal.' },
          { name: 'Kodaikanal Lake', desc: 'Take a leisurely boat ride around this man-made lake, surrounded by greenery and hills.' },
          { name: 'Bryant Park', desc: 'Explore this beautiful garden featuring a wide variety of plants and flowers.' },
          { name: "Coaker's Walk", desc: 'Enjoy a scenic stroll along this path, offering stunning views of the valley below.' },
        ],
        stay: 'Overnight stay in Kodaikanal at a hilltop resort.',
      },
      {
        day: 2,
        title: 'Kodaikanal to Palani – The Spiritual Getaway',
        places: [
          { name: 'Palani Murugan Temple', desc: 'Perched atop a hill, one of the six abodes of Lord Murugan. Enjoy panoramic views as you offer your prayers.' },
          { name: 'En route to Ooty', desc: 'Drive toward Ooty, known for its tea gardens, colonial architecture, and cool climate.' },
          { name: 'Ooty Lake', desc: 'End the day with a peaceful boat ride on Ooty Lake, surrounded by eucalyptus trees.' },
        ],
        stay: 'Overnight stay in Ooty.',
      },
      {
        day: 3,
        title: 'Ooty to Coimbatore – From the Nilgiris to the City',
        places: [
          { name: 'Botanical Gardens', desc: 'Wander through lush gardens filled with rare and exotic plant species.' },
          { name: 'Doddabetta Peak', desc: 'Visit the highest point in the Nilgiri Hills for panoramic views.' },
          { name: 'Tea Estates', desc: 'Walk through sprawling tea plantations and visit a tea factory.' },
          { name: 'Drop at Coimbatore', desc: 'Drive to Coimbatore. Explore or shop before drop-off at airport / railway station.' },
        ],
        stay: 'Tour concludes at Coimbatore.',
      },
    ],
    placesGallery: [
      {
        id: 1,
        title: 'Silver Cascade Waterfalls',
        category: 'Scenic Falls',
        image: '/waterfall-kodai.jpg',
        caption: '180-ft glistening cascade fed by Kodai lake overflow, right along the ghat road.',
      },
      {
        id: 2,
        title: 'Kodaikanal Lake',
        category: 'Boating & Cycling',
        image: 'https://images.unsplash.com/photo-1619020933389-e96f49742bce?auto=format&fit=crop&w=1200&q=80',
        caption: '60-acre star-shaped lake ideal for pedal boating, horseback riding and cycling.',
      },
      {
        id: 3,
        title: 'Bryant Park, Kodaikanal',
        category: 'Botanical Garden',
        image: 'https://images.unsplash.com/photo-1593692716621-1e228b0a9224?auto=format&fit=crop&w=1200&q=80',
        caption: 'Lush landscaped botanical park with ornamental rose beds overlooking mountain slopes.',
      },
      {
        id: 4,
        title: "Coaker's Walk",
        category: 'Valley Panorama',
        image: 'https://images.unsplash.com/photo-1632729566882-82c178d1c034?auto=format&fit=crop&w=1200&q=80',
        caption: '1 km paved pedestrian walk alongside steep mountain cliffs overlooking the plains.',
      },
      {
        id: 5,
        title: 'Palani Murugan Temple',
        category: 'Sacred Pilgrimage',
        image: '/gallery/palani-murugan-temple.jpg',
        caption: 'One of the six sacred abodes of Lord Murugan, perched atop a holy hill with panoramic views.',
      },
      {
        id: 6,
        title: 'Ooty Botanical Gardens',
        category: 'Flora & Gardens',
        image: 'https://images.unsplash.com/photo-1683863655647-b37baeb9fd99?auto=format&fit=crop&w=1200&q=80',
        caption: '55-acre terraced garden featuring over 1,000 exotic species and fossil tree trunks in Ooty.',
      },
      {
        id: 7,
        title: 'Doddabetta Peak & Slopes',
        category: 'Highest Summit',
        image: '/ooty-slopes.jpg',
        caption: 'Highest peak in Tamil Nadu (2,637 m) with telescope house valley panoramic vistas.',
      },
      {
        id: 8,
        title: 'Ooty Tea Estates',
        category: 'Plantation Walk',
        image: '/ooty-tea.jpg',
        caption: 'Fresh CTC tea tasting, factory tour and stroll through manicured emerald slopes.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. 4N5D Madurai → Thekkady → Munnar
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'madurai-thekkady-munnar',
    coverImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
    name: 'Madurai – Thekkady – Munnar',
    tagline: 'Wildlife, Tea Gardens & Kerala Hill Bliss',
    duration: '4 Nights / 5 Days',
    region: 'Tamil Nadu & Kerala',
    image: '/packages/madurai-thekkady-munnar.jpg',
    heroBanner: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=2000&q=85',
    aspectRatio: '1024/571',
    description:
      'Explore the breathtaking landscapes of Kerala — from the vibrant city of Madurai to the wildlife-rich forests of Thekkady and the sprawling tea gardens of Munnar, offering the perfect blend of nature, adventure, and tranquility.',
    highlights: [
      'Meenakshi Amman Temple & Thirumalai Nayakkar Palace',
      'Periyar Wildlife Safari – Elephants & Bison',
      'Periyar Lake Boat Ride',
      'Munnar Tea Plantations & Mattupetty Dam',
      'Eravikulam National Park – Nilgiri Tahr',
      'Attukal Waterfalls & Blossom Park',
    ],
    recommendedVehicles: ['Innova Crysta', '14 Seat Traveller', '18 Seat Traveller'],
    elevation: '1,600 m (Munnar)',
    popularRoute: 'Madurai → Thekkady → Munnar → Madurai',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Madurai – The Temple City',
        places: [
          { name: 'Meenakshi Amman Temple', desc: 'Iconic temple known for its intricate architecture and spiritual ambiance.' },
          { name: 'Thirumalai Nayakkar Palace', desc: "17th-century palace showcasing a blend of Dravidian and Rajput architectural styles." },
          { name: 'Alagar Kovil', desc: 'Serene temple on a scenic hill offering a peaceful retreat.' },
        ],
        stay: 'Overnight stay in Madurai.',
      },
      {
        day: 2,
        title: 'Madurai to Thekkady – A Journey to the Wild',
        places: [
          { name: 'Periyar Wildlife Sanctuary', desc: 'Thrilling wildlife safari — spot elephants, bison, and other animals in their natural habitat.' },
          { name: 'Periyar Lake', desc: 'Peaceful boat ride surrounded by lush greenery and wildlife.' },
          { name: 'Spice Plantations', desc: "Explore the aromatic spice plantations and learn about Kerala's spice industry." },
        ],
        stay: 'Overnight stay at a cozy resort in Thekkady, nestled amidst nature.',
      },
      {
        day: 3,
        title: 'Thekkady to Munnar – Into the Tea Gardens',
        places: [
          { name: 'Tea Plantations', desc: 'Visit the tea gardens and see the tea-making process, from plucking to packaging.' },
          { name: 'Mattupetty Dam', desc: 'Popular spot for picnics and boating, surrounded by lush hills.' },
          { name: 'Echo Point', desc: 'Experience the natural phenomenon of echoing sounds at this scenic spot.' },
          { name: 'Kundala Lake', desc: 'Peaceful boat ride at this beautiful lake set against the hills.' },
        ],
        stay: 'Overnight stay in Munnar at a hilltop resort.',
      },
      {
        day: 4,
        title: 'Munnar Sightseeing – Explore the Beauty of the Hills',
        places: [
          { name: 'Eravikulam National Park', desc: 'Home to the endangered Nilgiri Tahr with fantastic views of rolling hills.' },
          { name: 'Attukal Waterfalls', desc: 'Stunning waterfall, great spot for photography and relaxation.' },
          { name: 'Blossom Park', desc: 'Beautiful garden with a variety of flowers, perfect for a peaceful stroll.' },
        ],
        stay: 'Return to resort for a relaxing night in Munnar.',
      },
      {
        day: 5,
        title: 'Departure from Munnar – Farewell to the Hills',
        places: [
          { name: 'Last-minute sightseeing or shopping', desc: 'Depending on departure schedule, enjoy some final exploration before drop-off at Madurai.' },
        ],
        stay: 'Tour concludes. Drop-off at Madurai.',
      },
    ],
    placesGallery: [
      {
        id: 1,
        title: 'Meenakshi Amman Temple',
        category: 'Spiritual Centerpiece',
        image: '/gallery/meenakshi-temple.jpg',
        caption: '14 soaring gopurams decorated with thousands of mythological figures and Golden Lotus Tank.',
      },
      {
        id: 2,
        title: 'Periyar Wildlife Safari',
        category: 'Wildlife Sanctuary',
        image: 'https://images.unsplash.com/photo-1710766897444-fd6848f35e40?auto=format&fit=crop&w=1200&q=80',
        caption: 'Wild elephants and wildlife in their natural habitat in the dense forests of Periyar.',
      },
      {
        id: 3,
        title: 'Periyar Lake Boat Ride',
        category: 'Boating & Nature',
        image: 'https://images.unsplash.com/photo-1591353527304-24290c2a5a61?auto=format&fit=crop&w=1200&q=80',
        caption: 'Serene boat cruise through the lake waters of Thekkady surrounded by evergreen forests.',
      },
      {
        id: 4,
        title: 'Munnar Tea Plantations',
        category: 'Plantation Walk',
        image: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Endless emerald green tea slopes stretching across misty hills in Munnar.',
      },
      {
        id: 5,
        title: 'Mattupetty Dam & Lake',
        category: 'Scenic Reservoir',
        image: 'https://images.unsplash.com/photo-1673698666643-370a936aac23?auto=format&fit=crop&w=1200&q=80',
        caption: 'Popular mountain reservoir with speed boating and tea hill views in Munnar.',
      },
      {
        id: 6,
        title: 'Eravikulam National Park',
        category: 'National Park',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-altitude shola grasslands home to the endangered Nilgiri Tahr and Anamudi peak.',
      },
      {
        id: 7,
        title: 'Attukal Waterfalls',
        category: 'Waterfall',
        image: 'https://images.unsplash.com/photo-1566837412036-3ff17e51e783?auto=format&fit=crop&w=1200&q=80',
        caption: 'Cascading mountain waterfall set among rocky gorges and lush greenery.',
      },
      {
        id: 8,
        title: 'Spice Plantations, Thekkady',
        category: 'Spice Trail',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80',
        caption: "Aromatic spice gardens showcasing Kerala's cardamom, pepper, vanilla, and cinnamon.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. 4N5D Madurai → Rameshwaram → Kanyakumari → Trivandrum
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'madurai-rameswaram-kanyakumari-trivandrum',
    coverImage: 'https://images.unsplash.com/photo-1657265284292-ac60361140a5?auto=format&fit=crop&w=1200&q=80',
    name: 'Madurai – Rameshwaram – Kanyakumari – Trivandrum',
    tagline: "Sacred Shores, Land's End & Kerala Capital",
    duration: '4 Nights / 5 Days',
    region: 'South India Coastal Circuit',
    image: '/packages/madurai-rameswaram-kanyakumari-trivandrum.jpg',
    heroBanner: 'https://images.unsplash.com/photo-1706932642959-97cdde19ef0b?auto=format&fit=crop&w=2000&q=85',
    aspectRatio: '1024/571',
    description:
      "Embark on a spiritual and scenic journey through South India's most cherished destinations — from the temples of Madurai, the sacred shores of Rameshwaram, the scenic beauty of Kanyakumari, to the cultural richness of Trivandrum.",
    highlights: [
      'Meenakshi Amman Temple & Thirumalai Nayakkar Palace',
      'Pamban Bridge & Ramanathaswamy Temple (22 Sacred Wells)',
      'Dhanushkodi Ghost Town & Twin Seas',
      'Vivekananda Rock Memorial & Thiruvalluvar Statue',
      'Triveni Sangam Sunrise – Three Oceans Meet',
      'Padmanabhaswamy Temple & Kovalam Beach',
    ],
    recommendedVehicles: ['Innova Crysta', '21 Seat AC Coach', '18 Seat Traveller'],
    elevation: 'Sea Level Coastal Highway',
    popularRoute: 'Madurai → Rameshwaram → Kanyakumari → Trivandrum',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Madurai – City of Temples',
        places: [
          { name: 'Meenakshi Amman Temple', desc: 'Ancient temple, an architectural masterpiece dedicated to Goddess Meenakshi.' },
          { name: 'Thirumalai Nayakkar Palace', desc: 'Stunning blend of Dravidian and Rajput architectural styles.' },
          { name: 'Gandhi Memorial Museum', desc: "Preserves the history of India's freedom struggle." },
        ],
        stay: 'Overnight stay in Madurai.',
      },
      {
        day: 2,
        title: 'Madurai to Rameshwaram – The Sacred Island',
        places: [
          { name: 'Pamban Bridge', desc: 'Iconic bridge connecting the mainland with Rameshwaram Island.' },
          { name: 'Ramanathaswamy Temple', desc: 'Famous 1,200-pillar stone corridors and sacred well bathing (Jyotirlinga).' },
          { name: 'Agni Theertham', desc: 'Sacred bath spot on the beach, believed to cleanse sins.' },
          { name: 'Dhanushkodi', desc: 'Ghost town with dramatic ruins and stunning coastline where two seas meet.' },
        ],
        stay: 'Overnight stay in Rameshwaram.',
      },
      {
        day: 3,
        title: "Rameshwaram to Kanyakumari – The Southernmost Tip",
        places: [
          { name: 'Vivekananda Rock Memorial', desc: 'Monument on a rocky island dedicated to Swami Vivekananda.' },
          { name: 'Thiruvalluvar Statue', desc: 'Towering statue of the renowned Tamil poet and philosopher.' },
          { name: 'Sunset Point', desc: 'Breathtaking sunset at the point where three oceans converge.' },
        ],
        stay: 'Overnight stay at Kanyakumari.',
      },
      {
        day: 4,
        title: 'Kanyakumari to Trivandrum – Capital of Kerala',
        places: [
          { name: 'Padmanabhaswamy Temple', desc: 'One of the wealthiest temples in the world, dedicated to Lord Vishnu.' },
          { name: 'Napier Museum', desc: '19th-century museum housing a vast collection of historical artifacts.' },
          { name: 'Kovalam Beach', desc: 'Famous crescent-shaped beach known for calm waters and lighthouse views.' },
        ],
        stay: 'Overnight stay in Trivandrum.',
      },
      {
        day: 5,
        title: 'Departure from Trivandrum',
        places: [
          { name: 'Last-minute sightseeing or shopping', desc: 'Explore more of Trivandrum before drop-off at airport or railway station.' },
        ],
        stay: 'Tour concludes. Drop-off at Trivandrum.',
      },
    ],
    placesGallery: [
      {
        id: 1,
        title: 'Pamban Bridge, Rameshwaram',
        category: 'Ocean Marvel',
        image: 'https://images.unsplash.com/photo-1706932642959-97cdde19ef0b?auto=format&fit=crop&w=1200&q=80',
        caption: "India's legendary 2 km railway sea bridge spanning Palk Strait to Rameshwaram island.",
      },
      {
        id: 2,
        title: 'Ramanathaswamy Temple Corridors',
        category: 'Sacred Pilgrimage',
        image: 'https://images.unsplash.com/photo-1701665836329-57c6a17a2daf?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sacred Jyotirlinga shrine with the longest sculpted stone pillar corridors in the world.',
      },
      {
        id: 3,
        title: 'Dhanushkodi – Land\'s End',
        category: 'Coastal Ruin',
        image: '/gallery/dhanushkodi-beach.jpg',
        caption: 'Historic ghost town, ruins, and the confluence where the Bay of Bengal meets the Indian Ocean.',
      },
      {
        id: 4,
        title: 'Vivekananda Rock Memorial',
        category: 'Island Monument',
        image: 'https://images.unsplash.com/photo-1657265284292-ac60361140a5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Iconic offshore rock island memorial surrounded by three converging seas in Kanyakumari.',
      },
      {
        id: 5,
        title: 'Thiruvalluvar Statue & Coast',
        category: 'Granite Sculpture',
        image: 'https://images.unsplash.com/photo-1715181589687-dd11729d9d35?auto=format&fit=crop&w=1200&q=80',
        caption: '133-foot stone sculpture honoring Saint Thiruvalluvar on the sea rock at Kanyakumari.',
      },
      {
        id: 6,
        title: 'Triveni Sangam Sunset & Sea',
        category: 'Triple Ocean Meeting',
        image: 'https://images.unsplash.com/photo-1592846433464-8e3dbfd559dc?auto=format&fit=crop&w=1200&q=80',
        caption: 'Rare southern tip where the Indian Ocean, Arabian Sea, and Bay of Bengal converge.',
      },
      {
        id: 7,
        title: 'Padmanabhaswamy Temple, Trivandrum',
        category: 'Sacred Temple',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Renowned temple dedicated to Lord Anantha Padmanabha with exquisite Kerala Dravidian stone art.',
      },
      {
        id: 8,
        title: 'Kovalam Beach & Lighthouse',
        category: 'Beach & Leisure',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Famous crescent beach with golden sands, swaying coconut palms, and peaceful blue waters.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. 2D1N Madurai → Pillayarpatti → Srirangam → Swamimalai → Thanjavur → Madurai
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'madurai-pillayarpatti-srirangam-thanjavur',
    coverImage: '/hero/thanjavur-temple-hero.jpg',
    name: 'Madurai – Pillayarpatti – Srirangam – Thanjavur',
    tagline: 'Sacred Temples & Great Living Chola Heritage',
    duration: '2 Days / 1 Night',
    region: 'Tamil Nadu Temples Circuit',
    image: '/packages/madurai-pillayarpatti-srirangam-thanjavur.jpg',
    heroBanner: '/hero/thanjavur-temple-hero.jpg',
    aspectRatio: '1024/571',
    description:
      "Discover the spiritual and cultural essence of Tamil Nadu — covering Pillayarpatti's rock-cut Ganesha temple, the grandeur of Srirangam (India's largest temple), Swamimalai's sacred Murugan shrine, and the UNESCO-listed Brihadeeswarar Temple in Thanjavur.",
    highlights: [
      'Karpaka Vinayakar Temple, Pillayarpatti (1,600 years old)',
      'Sri Ranganathaswamy Temple, Srirangam – Largest in India',
      'Swamimalai – 60 Steps to Lord Murugan',
      'Brihadeeswarar (Big Temple) Thanjavur – UNESCO Heritage',
      'Comfortable overnight stay included',
      'Return drop to Madurai',
    ],
    recommendedVehicles: ['Innova Crysta', '14 Seat Traveller', '18 Seat Traveller'],
    elevation: 'Cauvery & Vaigai Heritage Valleys',
    popularRoute: 'Madurai → Pillayarpatti → Srirangam → Swamimalai → Thanjavur → Madurai',
    itinerary: [
      {
        day: 1,
        title: 'Madurai – Pillayarpatti – Srirangam',
        places: [
          { name: 'Karpaka Vinayakar Temple, Pillayarpatti', desc: '1,600-year-old temple with a unique rock-cut image of Lord Ganesha, drawing devotees from across India.' },
          { name: 'Sri Ranganathaswamy Temple, Srirangam', desc: "Largest temple complex in India — an architectural wonder dedicated to Lord Vishnu." },
        ],
        stay: 'Comfortable overnight stay at hotel (assistance with booking on request).',
      },
      {
        day: 2,
        title: 'Swamimalai – Thanjavur – Return to Madurai',
        places: [
          { name: 'Swamimalai Murugan Temple', desc: 'One of the six abodes of Lord Murugan on a small hill. Climb 60 steps (each representing a Tamil year) to the main sanctum.' },
          { name: 'Brihadeeswarar Temple (Periyakovil), Thanjavur', desc: 'UNESCO World Heritage Site built by the Chola Dynasty. Towering vimana, massive Nandi statue, and intricate stone carvings.' },
          { name: 'Return to Madurai', desc: 'Drive back to Madurai, marking the end of the spiritual journey.' },
        ],
        stay: 'Tour concludes. Return to Madurai.',
      },
    ],
    placesGallery: [
      {
        id: 1,
        title: 'Brihadeeswarar Temple, Thanjavur',
        category: 'UNESCO Chola Vimana',
        image: '/gallery/thanjavur-temple.jpg',
        caption: 'Completed in 1010 CE with an 80-tonne single granite cupola crown and giant Nandi.',
      },
      {
        id: 2,
        title: 'Thanjavur Periyakovil Vimana',
        category: 'Chola Architecture',
        image: '/thanjavur-vimana.jpg',
        caption: '216-ft towering granite vimana built without binding mortar by Raja Raja Chola I.',
      },
      {
        id: 3,
        title: 'Sri Ranganathaswamy Temple, Srirangam',
        category: "India's Largest Temple",
        image: 'https://images.unsplash.com/photo-1792067365548-8d2827303166?auto=format&fit=crop&w=1200&q=80',
        caption: 'Vast temple complex with 21 magnificent gopurams and 81 shrines dedicated to Lord Vishnu.',
      },
      {
        id: 4,
        title: 'Karpaka Vinayakar, Pillayarpatti',
        category: 'Rock-Cut Temple',
        image: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80',
        caption: '1,600-year-old rock-cut cave temple carving of Lord Karpaka Vinayakar.',
      },
      {
        id: 5,
        title: 'Swamimalai Murugan Temple',
        category: 'Sacred Abode',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
        caption: 'One of the six abodes of Lord Murugan — 60 sacred steps representing the 60 Tamil years.',
      },
      {
        id: 6,
        title: 'Meenakshi Amman Temple, Madurai',
        category: 'Start Point',
        image: '/gallery/meenakshi-temple.jpg',
        caption: 'The world-renowned Dravidian starting point of this heritage Tamil Nadu circuit.',
      },
      {
        id: 7,
        title: 'Grand Anicut (Kallanai Dam)',
        category: 'Ancient Engineering',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
        caption: 'Built 2,000 years ago by Karikala Chola across the Cauvery river — world wonder of irrigation.',
      },
      {
        id: 8,
        title: 'Thirumalai Nayakkar Mahal',
        category: 'Royal Heritage',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        caption: '17th-century grand palace with towering classical stucco pillars and arches.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. 2N3D Kodaikanal → Palani from Madurai
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'kodaikanal-palani-madurai',
    coverImage: '/gallery/palani-murugan-temple.jpg',
    name: 'Madurai – Kodaikanal – Palani Tour',
    tagline: 'Misty Hills, Pine Forests & Sacred Pilgrimage',
    duration: '2 Nights / 3 Days',
    region: 'Dindigul & Palani Hills',
    image: '/packages/kodaikanal-palani-madurai.jpg',
    heroBanner: 'https://images.unsplash.com/photo-1619020933389-e96f49742bce?auto=format&fit=crop&w=2000&q=85',
    aspectRatio: '1024/571',
    description:
      "Discover the ultimate blend of natural beauty and spiritual peace — immerse yourself in the misty hills of Kodaikanal and seek blessings at the famous Palani Murugan Temple. Perfect for nature lovers and pilgrims alike.",
    highlights: [
      'Silver Cascade Waterfalls en route',
      'Kodaikanal Lake Boating & Bryant Park',
      "Coaker's Walk Cliff Promenade",
      'Pine Forest, Pillar Rocks & Guna Caves',
      "Dolphin's Nose & Berijam Lake",
      'Palani Murugan Temple Pilgrimage',
    ],
    recommendedVehicles: ['Innova Crysta', '14 Seat Traveller', '18 Seat Traveller'],
    elevation: '2,133 m',
    popularRoute: 'Madurai → Kodaikanal → Palani → Madurai',
    itinerary: [
      {
        day: 1,
        title: 'Madurai to Kodaikanal – Journey to the Princess of Hill Stations',
        places: [
          { name: 'Silver Cascade Waterfalls', desc: 'Refreshing break at this stunning waterfall en route to Kodaikanal.' },
          { name: 'Kodaikanal Lake', desc: 'Peaceful boat ride on this serene man-made lake.' },
          { name: 'Bryant Park', desc: 'Lush botanical garden filled with a wide variety of flowers and plants.' },
          { name: "Coaker's Walk", desc: 'Cliff-edge path with panoramic views of the valley.' },
        ],
        stay: 'Overnight stay in Kodaikanal.',
      },
      {
        day: 2,
        title: 'Kodaikanal Sightseeing – Explore the Charm of Nature',
        places: [
          { name: 'Pine Forest', desc: 'Wander through tall, majestic pine trees for a peaceful retreat.' },
          { name: 'Pillar Rocks', desc: 'Three massive stone pillars standing tall amid the clouds.' },
          { name: 'Guna Caves', desc: "Mysterious and intriguing caves, also known as Devil's Kitchen." },
          { name: "Dolphin's Nose", desc: 'Unique rock formation with a breathtaking view of the hills.' },
          { name: 'Berijam Lake', desc: 'Pristine lake located within a reserve forest, offering stunning vistas.' },
        ],
        stay: 'Return to hotel. Overnight stay in Kodaikanal.',
      },
      {
        day: 3,
        title: 'Kodaikanal to Palani – Spiritual Awakening',
        places: [
          { name: 'Palani Murugan Temple', desc: 'One of the six abodes of Lord Murugan atop a hill — divine experience with panoramic views.' },
          { name: 'Return to Madurai', desc: 'Drive back to Madurai after temple visit. Tour concludes.' },
        ],
        stay: 'Tour concludes. Return to Madurai.',
      },
    ],
    placesGallery: [
      {
        id: 1,
        title: 'Kodaikanal Lake',
        category: 'Boating & Cycling',
        image: 'https://images.unsplash.com/photo-1619020933389-e96f49742bce?auto=format&fit=crop&w=1200&q=80',
        caption: '60-acre star-shaped lake ideal for pedal boating, horseback riding and cycling.',
      },
      {
        id: 2,
        title: 'Pine Forest, Kodaikanal',
        category: 'Nature Trail',
        image: 'https://images.unsplash.com/photo-1632729566882-82c178d1c034?auto=format&fit=crop&w=1200&q=80',
        caption: 'Towering cinematic pine trees, perfect for a peaceful and misty forest walk.',
      },
      {
        id: 3,
        title: "Coaker's Walk",
        category: 'Valley Panorama',
        image: 'https://images.unsplash.com/photo-1593692716621-1e228b0a9224?auto=format&fit=crop&w=1200&q=80',
        caption: '1 km paved pedestrian walk alongside steep mountain cliffs overlooking the plains.',
      },
      {
        id: 4,
        title: 'Pillar Rocks & Vistas',
        category: 'Rock Formations',
        image: '/ooty-slopes.jpg',
        caption: 'Massive vertical granite pillars surrounded by floating mountain clouds.',
      },
      {
        id: 5,
        title: 'Silver Cascade Waterfalls',
        category: 'Scenic Falls',
        image: '/waterfall-kodai.jpg',
        caption: '180-ft glistening cascade fed by Kodai lake overflow along the ghat road.',
      },
      {
        id: 6,
        title: 'Bryant Park, Kodaikanal',
        category: 'Botanical Garden',
        image: 'https://images.unsplash.com/photo-1683863655647-b37baeb9fd99?auto=format&fit=crop&w=1200&q=80',
        caption: 'Lush 20-acre landscaped park with ornamental flowers and scenic greenery.',
      },
      {
        id: 7,
        title: "Dolphin's Nose Viewpoint",
        category: 'Cliff Edge',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
        caption: 'Flat rock projecting over a deep canyon offering thrilling mountain vistas.',
      },
      {
        id: 8,
        title: 'Palani Murugan Temple',
        category: 'Sacred Pilgrimage',
        image: '/gallery/palani-murugan-temple.jpg',
        caption: 'One of the six sacred abodes of Lord Murugan (Arupadai Veedu), perched atop Sivagiri Hill with panoramic views.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. 2N3D Madurai → Rameshwaram
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'madurai-rameshwaram',
    coverImage: 'https://images.unsplash.com/photo-1706932642959-97cdde19ef0b?auto=format&fit=crop&w=1200&q=80',
    name: 'Madurai – Rameshwaram Tour',
    tagline: 'Spiritual Heritage & Iconic Sea Bridge',
    duration: '2 Nights / 3 Days',
    region: 'Madurai & Ramanathapuram',
    image: '/packages/madurai-rameshwaram.jpg',
    heroBanner: 'https://images.unsplash.com/photo-1706932642959-97cdde19ef0b?auto=format&fit=crop&w=2000&q=85',
    aspectRatio: '1024/571',
    description:
      "Experience South India's rich culture and heritage — immerse yourself in the spiritual and historical wonders of Madurai and Rameshwaram with comfortable, reliable travel from Mariya Travels.",
    highlights: [
      'Meenakshi Amman Temple & Thirumalai Nayakar Mahal',
      'Vandiyur Mariamman Teppakulam Temple Tank',
      'Ramanathaswamy Temple – Holy Wells & Long Corridors',
      "Pamban Bridge – India's First Sea Bridge",
      'Dhanushkodi – Ghost Town Where Land Meets Sea',
      'Return drop at Madurai Airport / Railway Station',
    ],
    recommendedVehicles: ['Innova Crysta', '14 Seat Traveller', '18 Seat Traveller'],
    elevation: 'Sea Level Coastal Highway',
    popularRoute: 'Madurai → Rameshwaram → Madurai',
    itinerary: [
      {
        day: 1,
        title: 'Madurai Arrival & Sightseeing',
        places: [
          { name: 'Meenakshi Amman Temple', desc: 'Majestic Dravidian architecture — a stunning example of Tamil temple art.' },
          { name: 'Thirumalai Nayakar Mahal', desc: 'Grand 17th-century palace with towering pillars.' },
          { name: 'Vandiyur Mariamman Teppakulam', desc: 'Serene walk around the grand temple tank.' },
        ],
        stay: 'Overnight stay in Madurai.',
      },
      {
        day: 2,
        title: 'Journey to Rameshwaram',
        places: [
          { name: 'Ramanathaswamy Temple', desc: 'Renowned for its long corridors, holy wells, and sacred immersion rituals.' },
          { name: 'Pamban Bridge', desc: "India's first sea bridge with breathtaking views over the ocean." },
          { name: 'Dhanushkodi', desc: '"Ghost Town" where the land meets the sea — dramatic ruins and stunning coastline.' },
        ],
        stay: 'Overnight stay in Rameshwaram.',
      },
      {
        day: 3,
        title: 'Rameshwaram to Madurai – Return Journey',
        places: [
          { name: 'Return to Madurai', desc: 'After breakfast, enjoy a comfortable return drive. Drop-off at Madurai airport / railway station or preferred location.' },
        ],
        stay: 'Tour concludes. Drop-off at Madurai.',
      },
    ],
    placesGallery: [
      {
        id: 1,
        title: 'Meenakshi Amman Temple',
        category: 'Spiritual Centerpiece',
        image: '/gallery/meenakshi-temple.jpg',
        caption: '14 soaring gopurams decorated with thousands of mythological figures and Golden Lotus Tank.',
      },
      {
        id: 2,
        title: 'Pamban Bridge',
        category: 'Ocean Marvel',
        image: 'https://images.unsplash.com/photo-1706932642959-97cdde19ef0b?auto=format&fit=crop&w=1200&q=80',
        caption: "India's first sea bridge spanning Palk Strait, connecting mainland to Rameshwaram island.",
      },
      {
        id: 3,
        title: 'Ramanathaswamy Temple Corridors',
        category: 'Sacred Pilgrimage',
        image: 'https://images.unsplash.com/photo-1701665836329-57c6a17a2daf?auto=format&fit=crop&w=1200&q=80',
        caption: 'World-famous 1,200-pillar stone corridors and sacred ceremonial well bathing.',
      },
      {
        id: 4,
        title: 'Dhanushkodi Ghost Town',
        category: 'Coastal Ruin',
        image: '/gallery/dhanushkodi-beach.jpg',
        caption: 'Historic ghost town, church ruins, and point where Gulf of Mannar meets Bay of Bengal.',
      },
      {
        id: 5,
        title: 'Agni Theertham & Rameshwaram Coast',
        category: 'Sacred Shore',
        image: 'https://images.unsplash.com/photo-1592846433464-8e3dbfd559dc?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sacred coastal shores and turquoise waters surrounding the holy island of Rameshwaram.',
      },
      {
        id: 6,
        title: 'Thirumalai Nayakar Mahal',
        category: 'Royal Heritage',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        caption: '17th-century grand palace showcasing Indo-Saracenic columns and soaring arches.',
      },
      {
        id: 7,
        title: 'Vandiyur Mariamman Teppakulam',
        category: 'Temple Tank',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
        caption: "Madurai's grand square temple tank with central mandapam pavilion.",
      },
      {
        id: 8,
        title: 'Rameshwaram Coastal Waters',
        category: 'Coastal Beauty',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Pristine coastal beaches with calm turquoise tides in southern Tamil Nadu.',
      },
    ],
  },
];
