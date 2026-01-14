export const designerInfo = {
  name: "Itodo dominic olumide",
  title: "Principal Architect & Interior Designer",
  bio: "With over 15 years of experience fusing contemporary African aesthetics with modern design principles, I create spaces that tell stories. My work reflects Nigeria's rich cultural heritage while embracing global design trends.",
  qualifications: [
    "M.Arch - University of Lagos",
    "Registered Architect (NIA)",
    "LEED Accredited Professional",
    "Certified Interior Designer (CID)"
  ],
  awards: [
    "African Architecture Award 2022",
    "Nigeria Design Excellence 2021",
    "Lagos Interior Design Award 2020",
    "West African Sustainable Design Prize 2019"
  ],
  contact: {
    email: "studio@Itododominicolumide.com",
    phone: "+234 801 234 5678",
    address: "Victoria Island, Lagos, Nigeria",
    social: {
      instagram: "https://instagram.com/Itododominicolumide",
      linkedin: "https://linkedin.com/in/Itododominicolumide",
      twitter: "https://twitter.com/Itododominicolumide"
    }
  }
};

export const services = [
  {
    id: 1,
    title: "Architectural Design",
    description: "Comprehensive architectural solutions from concept to completion",
    icon: "🏛️",
    features: [
      "Residential & Commercial Design",
      "3D Visualization & Renderings",
      "Building Information Modeling",
      "Sustainable Design Solutions"
    ]
  },
  {
    id: 2,
    title: "Interior Design",
    description: "Creating functional and aesthetically pleasing interior spaces",
    icon: "🛋️",
    features: [
      "Space Planning & Layout",
      "Custom Furniture Design",
      "Material & Finish Selection",
      "Lighting Design"
    ]
  },
  {
    id: 3,
    title: "Project Management",
    description: "End-to-end project supervision and coordination",
    icon: "📋",
    features: [
      "Contractor Coordination",
      "Budget Management",
      "Timeline Supervision",
      "Quality Control"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Lagos Sky Villa",
    category: "Architecture",
    location: "Victoria Island, Lagos",
    year: "2023",
    description: "Modern luxury villa with panoramic ocean views",
    fullDescription: "The Lagos Sky Villa is a testament to contemporary African luxury living. This residential masterpiece features 6 bedrooms, an infinity pool overlooking the Atlantic Ocean, and sustainable design elements including solar panels and rainwater harvesting systems. The design incorporates traditional Yoruba architectural elements with modern minimalism.",
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000",
    featured: true,
    services: ["Architectural Design", "Interior Design"],
    specs: {
      area: "850 sqm",
      bedrooms: "6",
      bathrooms: "7",
      floors: "3",
      duration: "18 months"
    },
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200"
    ],
    challenges: [
      "Complex oceanfront site with erosion concerns",
      "Integrating traditional Nigerian design elements with modern architecture",
      "Sustainable energy solutions for Lagos power grid challenges"
    ],
    solutions: [
      "Engineered foundation system for coastal stability",
      "Use of local materials like Iroko wood and Nigerian granite",
      "Hybrid solar system with battery backup"
    ]
  },
  {
    id: 2,
    title: "Abuja Corporate Tower",
    category: "Commercial",
    location: "Central Business District, Abuja",
    year: "2022",
    description: "45-story sustainable office building",
    fullDescription: "A landmark corporate tower in Nigeria's capital, featuring state-of-the-art sustainable technologies and smart building systems. The design incorporates traditional Hausa architectural patterns in a modern interpretation, with energy-efficient facades and communal spaces that encourage collaboration.",
    imageUrl: "https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1000",
    featured: true,
    services: ["Architectural Design", "Project Management"],
    specs: {
      area: "25,000 sqm",
      floors: "45",
      offices: "120",
      parking: "300 spaces",
      duration: "36 months"
    },
    gallery: [
      "https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200"
    ],
    challenges: [
      "Meeting international green building standards in Abuja",
      "Integrating cultural identity in a corporate environment",
      "Managing large-scale construction in central business district"
    ],
    solutions: [
      "LEED Platinum certification strategy",
      "Traditional Nigerian motifs in facade design",
      "Phased construction to minimize business disruption"
    ]
  },
  {
    id: 3,
    title: "Ibadan Heritage Residence",
    category: "Interior",
    location: "Bodija, Ibadan",
    year: "2023",
    description: "Traditional Nigerian motifs meet contemporary living",
    fullDescription: "This interior design project transforms a traditional Ibadan home into a modern living space while preserving its cultural heritage. We worked with local artisans to create custom furniture and incorporated traditional Adire and Aso Oke textiles in contemporary applications.",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000",
    featured: true,
    services: ["Interior Design"],
    specs: {
      area: "450 sqm",
      rooms: "8",
      customFurniture: "22 pieces",
      duration: "6 months"
    },
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200"
    ],
    challenges: [
      "Preserving historical elements while modernizing",
      "Sourcing authentic local materials",
      "Creating functional spaces for multi-generational living"
    ],
    solutions: [
      "Restoration of original architectural features",
      "Collaboration with local craftsmen and weavers",
      "Flexible room configurations for family dynamics"
    ]
  },
  {
    id: 4,
    title: "Port Harcourt Art Gallery",
    category: "Commercial",
    location: "GRA, Port Harcourt",
    year: "2021",
    description: "Cultural space showcasing contemporary African art",
    fullDescription: "A dedicated space for contemporary African art in Nigeria's oil capital. The gallery features flexible exhibition spaces, artist studios, and community workshop areas. The design uses local materials like Port Harcourt clay and incorporates natural light strategies to showcase artwork optimally.",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000",
    featured: false,
    services: ["Architectural Design", "Interior Design"],
    specs: {
      area: "1,200 sqm",
      gallerySpaces: "5",
      studios: "3",
      capacity: "200 people",
      duration: "12 months"
    },
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200"
    ],
    challenges: [
      "Creating optimal lighting conditions for diverse artworks",
      "Budget constraints for cultural projects",
      "Engaging local community in design process"
    ],
    solutions: [
      "Adjustable LED lighting system with natural light integration",
      "Use of cost-effective local materials creatively",
      "Community workshops during design phase"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Amina Bello",
    role: "CEO",
    company: "Kano Industries",
    content: "Dominic transformed our corporate headquarters into a masterpiece that perfectly blends functionality with Nigerian elegance.",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?auto=format&fit=crop&w=500"
  },
  {
    id: 2,
    name: "Emeka Okoro",
    role: "Managing Director",
    company: "Pan-African Holdings",
    content: "Working with Dominic was exceptional. His attention to detail and understanding of African aesthetics is unparalleled.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500"
  }
];