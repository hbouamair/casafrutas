export const COMPANY = {
  name: "Casa Frutas",
  legalName: "CASA FRUTAS LTD",
  tagline: "House of Quality",
  email: "info@casafrutas.com",
  phone: "+44 (0) 20 8556 6919",
  phoneAlt: "+44 (0) 75 8644 8644",
  fax: "+44 (0) 20 8556 6919",
  addressLines: [
    "Office 3, Allen House New Spitalfields Market,",
    "23 Sherrin Rd,",
    "London E10 5SP",
  ],
  mapQuery: "Allen House, New Spitalfields Market, 23 Sherrin Rd, London E10 5SP",
};

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Produce" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Board" },
  { href: "/join-us", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL = [
  { name: "Facebook", href: "" },
  { name: "Instagram", href: "" },
  { name: "Pinterest", href: "" },
  { name: "YouTube", href: "" },
  { name: "TikTok", href: "" },
  { name: "LinkedIn", href: "" },
] as const;

export const ABOUT_COPY = {
  lead: "Mainly tomatoes — and everything in fresh produce.",
  grow: "We grow, grade, pack and export it.",
  network:
    "We work intensively with our partners day in, day out. We have built up an extensive network who provide us with a refreshingly wide range of greenhouse and outdoor fruit and vegetable crops.",
  aim: "We aim to be the most reliable partner to our customers all year round, with over 300 hectares dedicated to tomatoes, capsicums and courgettes, and more than 40,000 tonnes of fruit and vegetables produced each year.",
};

export const PRODUCTS = [
  {
    slug: "tomatoes",
    name: "Tomatoes",
    text: "Our core crop. Greenhouse and outdoor tomatoes, packed for retail, wholesale and foodservice, available across the season.",
    image: "/images/brand/tomatoes-icon.png",
  },
  {
    slug: "capsicums",
    name: "Capsicums",
    text: "Sweet peppers in a full colour range, graded and packed to customer specification.",
    image: "/images/stock/peppers.jpg",
  },
  {
    slug: "courgettes",
    name: "Courgettes",
    text: "Fresh courgettes from dedicated production, grown for flavour, shelf life and consistent supply.",
    image: "/images/banners/untitled-33.jpg",
  },
  {
    slug: "onions",
    name: "Onions",
    text: "Premium packed onions — including our branded CASA mesh bags — for wholesale and retail customers.",
    image: "/images/gallery/instagram.jpg",
  },
  {
    slug: "citrus",
    name: "Citrus & soft fruit",
    text: "A rotating seasonal offer of citrus, strawberries and other fruit, sourced through our grower network.",
    image: "/images/gallery/img-2907.jpg",
  },
  {
    slug: "leaf",
    name: "Leaf & salad",
    text: "Selected leafy crops and salad lines to complete a full fresh-produce programme.",
    image: "/images/stock/greenhouse.jpg",
  },
];

export const SERVICES = [
  {
    slug: "grow",
    step: "01",
    title: "Grow",
    text: "Over 300 hectares dedicated to tomatoes, capsicums and courgettes, backed by long-term grower partnerships.",
    image: "/images/banners/untitled-22.jpg",
  },
  {
    slug: "grade",
    step: "02",
    title: "Grade & pack",
    text: "Produce is graded and packed to customer specification, ready for UK wholesale, retail and foodservice.",
    image: "/images/stock/packing.jpg",
  },
  {
    slug: "move",
    step: "03",
    title: "Move",
    text: "We move fruit and vegetables from source to New Spitalfields Market and onwards to customers across the UK.",
    image: "/images/stock/truck.jpg",
  },
  {
    slug: "supply",
    step: "04",
    title: "Supply all year",
    text: "A greenhouse and outdoor network so buyers can plan programmes with confidence, all year round.",
    image: "/images/hero-farm-1.jpg",
  },
];

export const GALLERY_IMAGES = [
  { src: "/images/banners/untitled-33.jpg", alt: "Crate of tomatoes" },
  { src: "/images/gallery/instagram.jpg", alt: "CASA packed onions" },
  { src: "/images/gallery/apples.jpg", alt: "Apples" },
  { src: "/images/gallery/frutas.jpg", alt: "Harvesting grapes" },
  { src: "/images/gallery/farm.jpeg", alt: "Strawberry harvest" },
  { src: "/images/gallery/img-2907.jpg", alt: "Strawberries in the tunnel" },
  { src: "/images/gallery/img-2419.jpg", alt: "Limes on the tree" },
  { src: "/images/banners/inner-strip.png", alt: "CASA packing line" },
  { src: "/images/stock/oranges.jpg", alt: "Oranges" },
  { src: "/images/stock/packing.jpg", alt: "Wholesale packing" },
  { src: "/images/stock/peppers.jpg", alt: "Peppers" },
  { src: "/images/stock/greenhouse.jpg", alt: "Greenhouse crop" },
  { src: "/images/stock/onion.jpg", alt: "Field onions" },
  { src: "/images/banners/untitled-22.jpg", alt: "Tomato greenhouse" },
  { src: "/images/banners/untitled-33.jpg", alt: "Crate of tomatoes" },
  { src: "/images/stock/market.jpg", alt: "Produce market" },
];

export const JOB = {
  intro:
    "Here at Casa Frutas we are all about progression and career development. We encourage all of our employees to make the most out of the opportunities on offer — training, mentoring and courses — and to find a role that lets them thrive in fresh produce.",
  pitch:
    "We are looking for an ambitious and results-driven Business Sales Executive to expand Casa Frutas' customer base and strengthen relationships with existing clients. The successful candidate will identify new business opportunities, generate sales, negotiate commercial agreements, and ensure outstanding customer service while promoting our premium range of fresh fruits and vegetables.",
  ideal:
    "This role is ideal for someone with experience in B2B sales within fresh produce, FMCG, wholesale distribution, or the food industry.",
  sections: [
    {
      title: "Business Development",
      items: [
        "Identify and acquire new B2B customers including retail chains, independent retailers, fruit & vegetable wholesalers, restaurants, hotels, catering companies and food manufacturers.",
        "Develop strategic sales plans to achieve monthly and annual revenue targets.",
        "Conduct market research to identify emerging business opportunities.",
        "Build a healthy pipeline of qualified prospects.",
        "Attend industry events, food exhibitions, and networking events to generate leads.",
      ],
    },
    {
      title: "Account Management",
      items: [
        "Build and maintain long-term relationships with customers.",
        "Regularly visit customers to understand their purchasing requirements.",
        "Provide product recommendations based on seasonal availability and customer demand.",
        "Ensure high levels of customer satisfaction through proactive communication.",
        "Resolve customer issues promptly and professionally.",
      ],
    },
    {
      title: "Sales & Commercial Activities",
      items: [
        "Prepare quotations and negotiate pricing within company guidelines.",
        "Present Casa Frutas' product portfolio to prospective customers.",
        "Promote premium and seasonal produce to maximise sales opportunities.",
        "Upsell and cross-sell new products.",
        "Monitor competitor pricing and market trends.",
      ],
    },
    {
      title: "Order Management",
      items: [
        "Coordinate customer orders with procurement and warehouse teams.",
        "Ensure timely delivery of customer orders.",
        "Monitor stock availability and communicate supply updates.",
        "Follow up on deliveries and customer feedback.",
      ],
    },
    {
      title: "Market Intelligence",
      items: [
        "Monitor fruit and vegetable market trends.",
        "Track competitor activities and pricing.",
        "Provide regular market feedback to management.",
        "Identify new product opportunities.",
      ],
    },
    {
      title: "Reporting",
      items: [
        "Maintain accurate CRM records.",
        "Prepare weekly sales reports and forecast customer demand.",
        "Monitor KPIs including sales revenue, gross margin, customer acquisition, customer retention and sales pipeline.",
      ],
    },
  ],
};
