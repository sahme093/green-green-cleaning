// ===== Fill in each cleaner's details here =====
export const BIZ = {
  name: "Green Green Cleaning",
  logo: "/logo-icon.png",
  area: "Canyon Lake & surrounding area",
  tagline: "A spotless home, the eco-friendly way.",
  intro: "Green Green Cleaning cleans homes and businesses in Canyon Lake and nearby with 100% eco-friendly products. We're on time, friendly, and thorough, and we'll get back to you with a quote within 24 hours.",
  phone: "(951) 528-8513",
  phoneRaw: "9515288513",
  email: "",
  address: "29553 Naranja Dr, Canyon Lake, CA 92587",
  hours: "Sun–Fri, 9am–6pm · Closed Saturday",
  responseTime: "We'll get back to you within 24 hours.",
  towns: ["Canyon Lake", "Lake Elsinore", "Menifee", "Sun City", "Wildomar", "Murrieta", "Temecula", "Perris"],
  // ZIP codes you serve, used by the ZIP checker
  zips: [
    "92587", // Canyon Lake
    "92530", "92532", // Lake Elsinore
    "92584", "92585", "92586", // Menifee, Sun City
    "92595", // Wildomar
    "92562", "92563", // Murrieta
    "92590", "92591", "92592", // Temecula
    "92570", "92571", // Perris
  ],
  rating: "", // e.g. "5.0", shown next to the stars when set
  reviewCount: "",
  googleUrl: "", // link to the Google Business profile
  yelpUrl: "https://www.yelp.com/search?find_desc=Green+Green+Cleaning&find_loc=Canyon+Lake%2C+CA", // TODO: swap for the exact /biz/ listing URL
  services: [
    { name: "Regular home cleaning", short: "Weekly or every two weeks", recurring: true },
    { name: "Deep cleaning", short: "First visit or full reset" },
    { name: "Maid services", short: "Day-to-day tidying and upkeep" },
    { name: "Move-in or move-out cleaning", short: "Empty home, ready for keys" },
    { name: "Post-construction cleaning", short: "Dust and debris cleared after a remodel" },
    { name: "Commercial standard cleaning", short: "Routine cleaning for offices and businesses" },
    { name: "Commercial deep cleaning", short: "A top-to-bottom clean for your business" },
    { name: "Commercial move-in or move-out cleaning", short: "Spaces ready for a new tenant" },
  ],
  // Only add real Google reviews, with the client's permission.
  reviews: [
    {
      name: "Heather L.",
      when: "2021",
      text: "I have elderly parents and I requested a quote for weekly cleaning of their home. I received a response within 24 hrs. At a great price! They showed up on time and were friendly and efficient! My parents loved it!",
    },
  ],
  beforeAfterCaption: "",
  // Photos: put files in /public and set paths like "/hero.jpg". Leave hero empty to show the logo instead.
  photos: {
    hero: "",
    before: "",
    after: "",
  },
  // Trust badges: set to false to hide one.
  badges: {
    ecoFriendly: false,
    insured: false,
    bonded: false,
    backgroundChecked: false,
  },
  // Sections: set to false to hide.
  showReviews: true,
  showBeforeAfter: false,
};
