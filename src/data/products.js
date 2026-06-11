export const products = [
  { cat: 'Technology', name: 'Camera & Laptop', img: 'High-performance laptops', id: 'camera-laptop', pic: '1496181133206-80ce9b88a853' },
  { cat: 'Office', name: 'Furniture', img: 'Modern office furniture', id: 'furniture', pic: '1524758631624-e2822e304c36' },
  { cat: 'Branding', name: 'Corporate Gifts', img: 'Branded corporate gifts', id: 'corporate-gifts', pic: '1549465220-1a8b9238cd48' },
  { cat: 'Outdoors', name: 'Paddle Board', img: 'Paddle board', id: 'paddle-board', pic: '1517176118179-65244903d13c' },
  { cat: 'Technology', name: 'Laptop Screen Extender', img: 'ZEV screen extender', id: 'screen-extender', pic: '1517336714731-489689fd1ca8' },
  { cat: 'Automotive', name: 'ZEV Tire Protection', img: 'Tire protection', id: 'tire-protection', pic: '1580273916550-e323be2ae537' },
  { cat: 'Hospitality', name: 'Hospitality Equipment', img: 'Bar & hospitality', id: 'hospitality', pic: '1514933651103-005eec06c04b' },
  { cat: 'Protection', name: 'Safety', img: 'PPE & safety gear', id: 'safety', pic: '1504307651254-35680f356dfd' },
  { cat: 'Lifestyle', name: 'Portable Coffee Maker', img: 'Portable coffee maker', id: 'coffee-maker', pic: '1442512595331-e89e73853f31' },
  { cat: 'Workspace', name: 'Soundproof Office Booth', img: 'Silent office booth', id: 'booth', pic: '1497366754035-f200968a6e72', href: '/soundproof-booth' },
];

export const cats = [
  { id: 'camera-laptop', cat: 'Technology', name: 'Camera & Laptop', pic: '1496181133206-80ce9b88a853', note: 'High-performance laptops, professional cameras, printers and CCTV — authorized reseller for Lenovo, HP, Dell, Acer, Sony and Canon.' },
  { id: 'furniture', cat: 'Office', name: 'Furniture', pic: '1524758631624-e2822e304c36', note: 'Exquisite office and outdoor furniture curated for hotels, restaurants and corporate spaces.' },
  { id: 'corporate-gifts', cat: 'Branding', name: 'Corporate Gifts', pic: '1549465220-1a8b9238cd48', note: 'Curated premium gifts and branded merchandise. We also supply based on your own design.' },
  { id: 'paddle-board', cat: 'Outdoors', name: 'Paddle Board', pic: '1517176118179-65244903d13c', note: 'Paddle boards, kayaks and fishing boards for all skill levels across UAE waters.' },
  { id: 'screen-extender', cat: 'Technology', name: 'Laptop Screen Extender', pic: '1517336714731-489689fd1ca8', note: 'Portable dual-monitor extender — productivity on the move, no drivers required.' },
  { id: 'tire-protection', cat: 'Automotive', name: 'ZEV Tire Protection', pic: '1580273916550-e323be2ae537', note: 'Self-repairing nano technology that seals punctures instantly — drive with peace of mind.' },
  { id: 'hospitality', cat: 'Hospitality', name: 'Hospitality Equipment', pic: '1514933651103-005eec06c04b', note: 'Premium equipment for hotels, restaurants and coffee shops tailored to your requirements.' },
  { id: 'safety', cat: 'Protection', name: 'Safety', pic: '1504307651254-35680f356dfd', note: 'Comprehensive safety products for all industries — PPE, protective wear and compliance solutions.' },
  { id: 'coffee-maker', cat: 'Lifestyle', name: 'Portable Coffee Maker', pic: '1442512595331-e89e73853f31', note: 'Battery-powered espresso machine with NS capsule & ground coffee support — perfect for travel and corporate gifting.' },
];

export const sectors = [
  { name: 'Technical Solutions', pic: '1496181133206-80ce9b88a853', note: 'Hardware, computers and integrated systems.', href: '/products/camera-laptop' },
  { name: 'Hospitality Equipment', pic: '1514933651103-005eec06c04b', note: 'Bar, kitchen and front-of-house supply.', href: '/products/hospitality' },
  { name: 'Cameras', pic: '1502920917128-1aa500764cbd', note: 'Professional imaging and capture gear.', href: '/products/camera-laptop' },
  { name: 'Office Furnishings', pic: '1524758631624-e2822e304c36', note: 'Workspaces, seating and fit-out.', href: '/products/furniture' },
  { name: 'Computers', pic: '1517336714731-489689fd1ca8', note: 'Business-grade laptops and desktops.', href: '/products/camera-laptop' },
  { name: 'Bags & Corporate Gifts', pic: '1549465220-1a8b9238cd48', note: 'Custom branded merchandise and gifting.', href: '/products/corporate-gifts' },
  { name: 'Marketing', pic: '1600880292203-757bb62b4baf', note: 'Campaign collateral and brand assets.', href: '/products' },
  { name: 'Events', pic: '1556761175-5973dc0f32e7', note: 'Exhibition stands and event packages.', href: '/products' },
];

export const brands = ['Lenovo', 'Dell', 'ASUS', 'Canon', 'HP', 'Epson', 'Brother', 'IBM'];

export const boothGallery = [
  { t: 'Booth exterior', p: '1497366754035-f200968a6e72' },
  { t: 'Meeting room', p: '1431540015161-0bf868a2d407' },
  { t: 'Open office', p: '1604328698692-f76ea9498e76' },
  { t: 'Office lounge', p: '1556761175-5973dc0f32e7' },
  { t: 'Modern workspace', p: '1524758631624-e2822e304c36' },
  { t: 'Collaboration', p: '1522071820081-009f0129c71c' },
  { t: 'Glass partition', p: '1497366216548-37526070297c' },
  { t: 'Focus zone', p: '1573164713988-8665fc963095' },
];

export const productPages = {
  'camera-laptop': {
    cat: 'Technology',
    title: 'High-Performance Laptops & Advanced Cameras',
    badge: 'Authorized reseller',
    pic: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=404,fit=crop/mp83Oby8KKTL0rqW/standard-quality-control-concept-m-1-YD08xx72qRHbqkkW.jpg',
    desc: [
      'A wide range of technical solutions to streamline business operations. Through partnerships with leading providers, we deliver high-quality computers, TVs and screens, programs, software, IT solutions, cutting-edge cameras, and accessories.',
      'Our expertise ensures seamless integration and secure operations for our clients across the UAE.',
    ],
    feats: [
      'Laptops, desktops, servers, workstations & all-in-ones',
      'Cameras & computer accessories — Sony, Canon',
      'Printers & peripherals — HP, Brother and more',
      'CCTV cameras for commercial, home & school security',
      'IT solutions, software & technical integration',
    ],
    values: [
      { icon: 'shield', title: 'Authorized Reseller', desc: 'Accredited reseller for Lenovo, HP, Dell, Acer, Sony, Canon and Brother — genuine products with full warranty.' },
      { icon: 'clock', title: 'Full Tech Range', desc: 'Laptops, cameras, printers and CCTV — every technology need covered under one supplier.' },
      { icon: 'sliders', title: 'Expert Engineers', desc: 'Our engineers guide you in selecting the ideal system tailored to your specific requirements.' },
    ],
    subcatsEyebrow: 'What We Supply',
    subcatsTitle: 'Our Tech Services',
    subcats: [
      {
        name: 'Laptops and Computers',
        desc: 'ZEV serves as an accredited reseller with a focus on renowned technology brands, such as Lenovo, HP, Dell, Acer, and various others. Our extensive product selection covers a diverse spectrum, encompassing laptops, desktops, servers, workstations, all-in-ones, monitors, keyboards, printers, and a variety of peripherals.',
        img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=404,fit=crop/mp83Oby8KKTL0rqW/standard-quality-control-concept-m-1-YD08xx72qRHbqkkW.jpg',
        brands: ['Lenovo', 'HP', 'Dell', 'Acer'],
      },
      {
        name: 'Cameras & Computer Accessories',
        desc: 'Your trusted authorized reseller offers premium technology solutions featuring top brands like Sony and Canon. Discover high-performance cameras and computer accessories in our diverse product range. Elevate your tech experience with ZEV — your go-to destination for quality products and seamless service.',
        img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=404,fit=crop/mp83Oby8KKTL0rqW/pexels-ricky-esquivel-4011762-YNqOZXKoGNH970Lz.jpg',
        brands: ['Sony', 'Canon'],
      },
      {
        name: 'Printers',
        desc: 'ZEV functions as an authorized reseller, specializing in leading technology brands including HP, Brother, and various others. Our broad product portfolio spans a wide spectrum, featuring printers and related peripherals. Explore our comprehensive range of top-tier solutions tailored to meet your specific needs.',
        img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=404,fit=crop/mp83Oby8KKTL0rqW/woman-work-office-using-printer-1-YD0DPVvp9Eib7QG3.jpg',
        brands: ['HP', 'Brother'],
      },
      {
        name: 'CCTV Cameras',
        desc: 'ZEV provides top-tier CCTV cameras in the UAE, catering to the security needs of commercial organizations, homes, and schools. Rely on our expert engineers to guide you in selecting the ideal CCTV system tailored to your specific requirements. Elevate your security standards with ZEV.',
        img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=404,fit=crop/mp83Oby8KKTL0rqW/cctv-security-technology-with-lock-icon-digital-remix-YyvPWjZ2O4FzgzOM.jpg',
        brands: [],
      },
    ],
    gallery: [
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=404,fit=crop/mp83Oby8KKTL0rqW/standard-quality-control-concept-m-1-YD08xx72qRHbqkkW.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=404,fit=crop/mp83Oby8KKTL0rqW/pexels-ricky-esquivel-4011762-YNqOZXKoGNH970Lz.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=404,fit=crop/mp83Oby8KKTL0rqW/woman-work-office-using-printer-1-YD0DPVvp9Eib7QG3.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=404,fit=crop/mp83Oby8KKTL0rqW/cctv-security-technology-with-lock-icon-digital-remix-YyvPWjZ2O4FzgzOM.jpg',
    ],
    galleryAlts: ['Laptops and computers', 'Cameras & accessories', 'Printers', 'CCTV cameras'],
    related: [
      { id: 'furniture', cat: 'Office', name: 'Furniture', pic: '1524758631624-e2822e304c36' },
      { id: 'screen-extender', cat: 'Technology', name: 'Laptop Screen Extender', pic: '1517336714731-489689fd1ca8' },
      { id: 'corporate-gifts', cat: 'Branding', name: 'Corporate Gifts', pic: '1549465220-1a8b9238cd48' },
    ],
    ctaTitle: 'Looking for laptops, cameras or IT solutions?',
    ctaDesc: 'Tell us your requirements and our team will prepare a tailored quote with genuine, warrantied products.',
  },

  'furniture': {
    cat: 'Office & Outdoor',
    title: 'Office & Outdoor Furniture',
    badge: 'Design to installation',
    pic: '1524758631624-e2822e304c36',
    desc: [
      'Discover exquisite office and outdoor furniture at ZEV, curated to match your taste and character. Our selection caters to hotels and restaurants, offering comfort and dream-worthy quality.',
      'Elevate your space with ZEV\'s premium furniture solutions, blending style and functionality seamlessly. Experience the epitome of comfort and quality tailored to your preferences.',
    ],
    feats: [
      'Ergonomic task & executive office seating',
      'Desks, workstations & meeting tables',
      'Outdoor furniture for hotels & restaurants',
      'Lounge, breakout & collaborative settings',
      'Space planning, sourcing & installation',
    ],
    values: [
      { icon: 'shield', title: 'Ergonomic', desc: 'Seating and desks curated for all-day comfort.' },
      { icon: 'sliders', title: 'Tailored Fit-out', desc: 'Furnishings matched to your floor plan and brand palette.' },
      { icon: 'clock', title: 'Durable Quality', desc: 'Commercial-grade pieces built to serve for years.' },
    ],
    subcatsEyebrow: 'Our Collections',
    subcatsTitle: 'Indoor & Outdoor Furniture',
    subcats: [
      {
        name: 'Outdoor Furniture',
        desc: 'Discover our premium outdoor furniture collection at ZEV — curated for hotels, restaurants, resorts and outdoor hospitality spaces. Our pieces combine style and durability, designed to complement any exterior setting while standing up to the UAE climate.',
        img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=800,fit=crop/mp83Oby8KKTL0rqW/screenshot-2024-10-04-130649-mP4nLwg15OfWx6oO.png',
        brands: [],
      },
    ],
    gallery: [
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/mp83Oby8KKTL0rqW/elegance-luxury-modern-home-interior-generated-by-ai-AoPZg8GMxxHJl1gq.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/mp83Oby8KKTL0rqW/empty-modern-office-comfortable-armchair-leather-elegance-generated-by-ai-AE02QN4l93SVZvMq.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/mp83Oby8KKTL0rqW/pexels-myhqworkspaces-5444180-Aq2ez0VyDKc1qMOO.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/mp83Oby8KKTL0rqW/modern-luxury-living-room-design-illuminated-night-generated-by-ai-m2WBN2Q7VzIM202D.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/mp83Oby8KKTL0rqW/pexels-frans-van-heerden-633269-YrD1zLVzBrCEOvKa.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/mp83Oby8KKTL0rqW/dreamlike-surrealistic-landscape-purplish-tones-mxBl6P3kjxHPBaz1.jpg',
    ],
    galleryAlts: [
      'Luxury modern home interior',
      'Executive leather office seating',
      'Modern office workspace',
      'Luxury living room at night',
      'Furniture showcase',
      'Outdoor furniture setting',
    ],
    related: [
      { id: 'corporate-gifts', cat: 'Branding', name: 'Corporate Gifts', pic: '1549465220-1a8b9238cd48' },
      { id: 'hospitality', cat: 'Hospitality', name: 'Hospitality Equipment', pic: '1514933651103-005eec06c04b' },
      { id: 'screen-extender', cat: 'Technology', name: 'Laptop Screen Extender', pic: '1517336714731-489689fd1ca8' },
    ],
    ctaTitle: 'Furnishing an office or hospitality space?',
    ctaDesc: 'Share your floor plan and preferences — our team will put together a tailored furniture proposal.',
  },

  'corporate-gifts': {
    cat: 'Branding',
    title: 'Corporate Gifts & Branded Merchandise',
    badge: 'Custom branding',
    pic: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/mp83Oby8KKTL0rqW/vecteezy_law-firm-logo-design-lawyer-logo-vector-template-free-vector_18885241-mk380LVxLji7Nyrz.jpg',
    desc: [
      'Explore a world of thoughtful gestures and professional elegance with our corporate gifts at ZEV. We offer a curated selection of premium items that make for ideal business presents.',
      'Choose from our range of sophisticated and meaningful corporate gifts to leave a lasting impression. We also provide products based on your design — elevate your gifting experience with ZEV.',
    ],
    feats: [
      'Curated premium corporate gift sets',
      'Custom branding — logo printing & engraving',
      'Products designed to your own specification',
      'Branded bags, stationery & accessories',
      'Bulk orders for events, campaigns & seasons',
    ],
    values: [
      { icon: 'shield', title: 'On Brand', desc: 'From logo printing to products built entirely around your own design.' },
      { icon: 'sliders', title: 'Curated Range', desc: 'Sophisticated and meaningful gifts that leave a lasting impression.' },
      { icon: 'clock', title: 'Delivered On Time', desc: 'Reliable fulfillment for events, campaigns and gifting seasons.' },
    ],
    catalog: {
      thumb: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=122,fit=crop/mp83Oby8KKTL0rqW/catalogue-A85pkWRJEluve8QQ.png',
      url: 'https://drive.google.com/file/d/1twtLaNMfUikFuDOjhWI6ZWmov4OykpTb/view?usp=sharing',
      label: 'Corporate Gifts Catalogue',
      note: 'Browse our full range of corporate gifts and branded merchandise. We also supply products based on your own design.',
    },
    gallery: [
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/mp83Oby8KKTL0rqW/whatsapp-image-2024-08-28-at-15.16.25-1-YrDNEy2n2Vig2PrL.jpeg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/mp83Oby8KKTL0rqW/whatsapp-image-2024-08-28-at-15.16.23-1-m5Kb5ByVgBsQyxgx.jpeg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/mp83Oby8KKTL0rqW/whatsapp-image-2024-08-28-at-15.16.24-A854vxNolzhpvo0w.jpeg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/mp83Oby8KKTL0rqW/whatsapp-image-2024-08-28-at-15.16.21-mePnD7BM7xUJeNOL.jpeg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/mp83Oby8KKTL0rqW/whatsapp-image-2024-08-28-at-15.16.22-Aq2o59nEpLIjV3RM.jpeg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/mp83Oby8KKTL0rqW/whatsapp-image-2024-08-28-at-15.16.22-1-mePnD7BlBaieKJXE.jpeg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/mp83Oby8KKTL0rqW/whatsapp-image-2024-08-28-at-15.16.23-YX4bqM5K31FlZxr5.jpeg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/mp83Oby8KKTL0rqW/whatsapp-image-2024-08-28-at-15.16.24-1-AwvkNVZ7ZZsZWL8K.jpeg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/mp83Oby8KKTL0rqW/whatsapp-image-2024-08-28-at-15.16.21-1-AMq4B0GNy4i54GQP.jpeg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/mp83Oby8KKTL0rqW/whatsapp-image-2024-08-28-at-15.16.25-YrDNEy2nknsLBMe5.jpeg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/mp83Oby8KKTL0rqW/772_r1igvklwidmxodctmjy-Yan632VOqvu3Dylw.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=431,fit=crop/mp83Oby8KKTL0rqW/1538824_5021-m6LPRRzepehlX1Dp.jpg',
    ],
    galleryAlts: [
      'Corporate gift 1', 'Corporate gift 2', 'Corporate gift 3', 'Corporate gift 4',
      'Corporate gift 5', 'Corporate gift 6', 'Corporate gift 7', 'Corporate gift 8',
      'Corporate gift 9', 'Corporate gift 10', 'Branded merchandise', 'Gift collection',
    ],
    related: [
      { id: 'paddle-board', cat: 'Outdoors', name: 'Paddle Board', pic: '1517176118179-65244903d13c' },
      { id: 'screen-extender', cat: 'Technology', name: 'Laptop Screen Extender', pic: '1517336714731-489689fd1ca8' },
      { id: 'tire-protection', cat: 'Automotive', name: 'ZEV Tire Protection', pic: '1580273916550-e323be2ae537' },
    ],
    ctaTitle: 'Interested in Corporate Gifts?',
    ctaDesc: 'Tell us your budget, audience and branding requirements — we\'ll suggest the perfect gift range.',
  },

  'paddle-board': {
    cat: 'Outdoors',
    title: 'Paddle Boards, Kayaks & Fishing Boards',
    badge: 'Resort & event ready',
    pic: '1517176118179-65244903d13c',
    desc: [
      'Your go-to spot for paddle boards, kayaks, and fishing paddle boards in the UAE. Discover premium boards in Dubai and Abu Dhabi — stable and lightweight for all skill levels.',
      'From inflatable SUPs for easy storage to rigid boards for high performance, we offer complete packages with paddles, leashes and accessories. Extra stability, space and safety with full accessories for fishing boards.',
    ],
    feats: [
      'Inflatable paddle boards — easy storage & transport',
      'Rigid SUP boards — high performance',
      'All-around paddle boards for beginners',
      'Kayaks — durable, perfect for UAE sea conditions',
      'Fishing paddle boards — extra stability, space & safety with full accessories',
    ],
    values: [
      { icon: 'shield', title: 'All Skill Levels', desc: 'Beginner to performance-grade boards — stable and lightweight for UAE waters.' },
      { icon: 'sliders', title: 'Full Range', desc: 'Paddle boards, kayaks and fishing boards with complete accessories bundled.' },
      { icon: 'clock', title: '150+ Reviews', desc: 'Top-rated by customers across Dubai and Abu Dhabi.' },
    ],
    gallery: ['1517176118179-65244903d13c', '1502933691298-84fc14542831', '1531722569936-825d3dd91b15'],
    galleryAlts: ['Paddle boarding UAE', 'Open water SUP', 'Stand-up paddle board'],
    faqs: [
      { q: 'What boards do you offer?', a: 'We have paddle boards, kayaks and fishing boards suited for all skill levels.' },
      { q: 'Can I try before buying?', a: 'Yes — you can try for free. Rental options are also available.' },
      { q: 'Where can I use the boards?', a: 'Our boards are designed for the open sea and fishing spots around the UAE — built for stability in all weather conditions.' },
      { q: 'Do you offer beginner lessons?', a: 'Yes, we provide beginner-friendly lessons to get you started safely, for free.' },
      { q: 'How do I place an order?', a: 'Booking is easy through our website or by contacting our customer support team.' },
    ],
    related: [
      { id: 'screen-extender', cat: 'Technology', name: 'Laptop Screen Extender', pic: '1517336714731-489689fd1ca8' },
      { id: 'tire-protection', cat: 'Automotive', name: 'ZEV Tire Protection', pic: '1580273916550-e323be2ae537' },
      { id: 'hospitality', cat: 'Hospitality', name: 'Hospitality Equipment', pic: '1514933651103-005eec06c04b' },
    ],
    ctaTitle: 'Ready to start your water adventure?',
    ctaDesc: 'Contact us for board recommendations, bulk pricing and delivery across the UAE.',
  },

  'screen-extender': {
    cat: 'Technology',
    title: 'Portable Laptop Screen Extender for Dual Monitors',
    badge: 'Productivity on the move',
    pic: '1517336714731-489689fd1ca8',
    desc: [
      'Dual screens, anywhere. The ZEV portable laptop screen extender attaches in seconds and gives mobile workers the display real estate of a full desk setup — without the desk.',
      'Perfect for hybrid teams, remote workers and frequent travellers who need full productivity on the move. Compatible with most 13–16-inch laptops, no drivers or software required.',
    ],
    feats: [
      'Folds flat — fits in any laptop bag',
      'Dual Full HD display output',
      'Plug-and-play — no drivers or software needed',
      'Compatible with most 13–16-inch laptops',
      'Available in bulk for corporate team rollouts',
    ],
    values: [
      { icon: 'shield', title: 'Compact', desc: 'Slim enough to slip into any laptop bag alongside your computer.' },
      { icon: 'sliders', title: 'Plug & Play', desc: 'No software, no configuration — connect and work instantly.' },
      { icon: 'clock', title: 'Giftable', desc: 'Premium finish that makes it an ideal corporate gift or team kit item.' },
    ],
    gallery: ['1517336714731-489689fd1ca8', '1496181133206-80ce9b88a853', '1525547719571-a2d4ac8945e2'],
    galleryAlts: ['Screen extender setup', 'Dual screen laptop', 'Mobile workspace'],
    related: [
      { id: 'tire-protection', cat: 'Automotive', name: 'ZEV Tire Protection', pic: '1580273916550-e323be2ae537' },
      { id: 'hospitality', cat: 'Hospitality', name: 'Hospitality Equipment', pic: '1514933651103-005eec06c04b' },
      { id: 'safety', cat: 'Protection', name: 'Safety', pic: '1504307651254-35680f356dfd' },
    ],
    ctaTitle: 'Interested in the Laptop Screen Extender?',
    ctaDesc: 'Get a bulk quote for screen extenders for your entire workforce or as a corporate gift.',
  },

  'tire-protection': {
    cat: 'Automotive',
    title: 'ZEV Tire Protection',
    badge: 'Self-repairing technology',
    pic: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/mp83Oby8KKTL0rqW/screenshot_2024-03-21_132625-removebg-preview-A85rBNQ555SMKO0v.png',
    desc: [
      'Explore our new ZEV Tire Protection which is tailored to suit all cars. At ZEV, we offer professional solutions — new technology core self-repairing without feeling a thing. Drive with peace of mind with ZEV Tire Protection.',
      'Our novel composite nano-vinyl acetate copolymer sealing pad provides buffering and support, avoiding instantaneous explosive air leakage. Polymer nano-memory glue automatically repairs and fills tire leaks up to 3mm diameter.',
    ],
    feats: [
      'Safety explosion-proof — reduces tyre puncture impact within tolerable range',
      'Silent sound wave principle — absorbs road noise through microporous structure',
      'Nano-vinyl acetate copolymer gasket — handles sharp objects up to 1.2cm diameter',
      'Polymer nano-memory glue — auto-repairs punctures up to 3mm, no more than 10cm length',
      'High & low-temperature resistant — extremely lightweight for all car types',
    ],
    values: [
      { icon: 'shield', title: 'Instant Repair', desc: 'Automatically repairs and fills tire leaks — no stops, no hassle.' },
      { icon: 'sliders', title: 'Safer Drive', desc: 'Eliminates blowout risk and improves driving comfort by reducing tire noise.' },
      { icon: 'clock', title: 'Fits All Cars', desc: 'Tailored to suit all vehicles — lightweight and temperature resistant.' },
    ],
    howToUse: {
      intro: 'Explore our new ZEV Tire Protection which is tailored to suit all cars. At ZEV, we offer professional solutions — new technology core self-repairing without feeling, driving with peace of mind with ZEV Tire Protection.',
      features: [
        {
          label: 'A. Safety Explosion-Proof',
          desc: 'Within the tolerable range, tyre puncture can be effectively reduced. In addition to the tolerable damage range, the novel composite nano-vinyl acetate copolymer sealing pad can play a buffering and supporting role, and can avoid instantaneous explosive air leakage.',
          img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=435,fit=crop/mp83Oby8KKTL0rqW/picture1-AVLJwJzaR9iqGJlo.jpg',
        },
        {
          label: 'A. Silent Sound Wave Principle',
          desc: 'When the sound wave generated by the tire hitting the ground passes through the new composite nano-vinyl acetate copolymer material with microporous structure, the vibration generated by the sound wave enters the interior of the material and rubs against the complex internal bubbles, and the energy is attenuated, showing the absorption of the sound wave by the material, thus fundamentally solving the noise of the tire and improving the comfort of driving.',
          img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=600,fit=crop/mp83Oby8KKTL0rqW/screenshot-2024-06-10-174922-m5KvVv28pksQLxxx.jpg',
        },
        {
          label: 'Novel Composite Nano Vinyl Acetate Copolymerization — Enlarged View of Material',
          img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=580,fit=crop/mp83Oby8KKTL0rqW/screenshot-2024-06-27-132026-mv0jEjNEeWH3QZK7.jpg',
        },
        {
          label: 'A. Novel Composite Nano Vinyl Acetate Copolymer Gasket',
          desc: 'A new type of composite nano-vinyl acetate copolymer gasket has the characteristics of high and low-temperature resistance and is extremely lightweight. A sharp object with a diameter of 1.2CM and a length of less than 3CM, so that the nail can be driven in and out without air leakage.',
          img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=686,fit=crop/mp83Oby8KKTL0rqW/screenshot-2024-06-27-131801-mv0jEjG0v1hD5Dxa.jpg',
        },
        {
          label: 'B. Polymer Nano-Memory Glue',
          desc: 'Polymer nano-memory glue can automatically repair and fill tire leaks, and also has the characteristics of high and low temperature resistance. Sharp objects with puncture resistance less than 3MM in diameter and no more than 10CM in length will not leak whether nails or iron sheets are inserted or pulled out.',
        },
      ],
      bullets: [
        {
          text: 'By utilizing a specially designed adhesive sealing layer on the inner side of the tire tread',
          img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=334,fit=crop/mp83Oby8KKTL0rqW/screenshot-2-dWxlXlwLKVi6nBN7.png',
        },
        {
          text: 'Effectively avoiding air leakage and deflation',
          img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=334,fit=crop/mp83Oby8KKTL0rqW/screenshot-1717145650346-AE0pBpMvv6tkqalZ.png',
        },
        {
          text: 'Eliminating the hassle of changing and repairing tires on the way and the safety hazards of tire blowouts',
          img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=334,fit=crop/mp83Oby8KKTL0rqW/screenshot-2024-06-10-174458-AE0pBpvoBNhRM9Q3.png',
        },
        {
          text: 'It can instantly and automatically repair punctured and damaged tyre tread',
        },
      ],
    },
    gallery: [
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=435,fit=crop/mp83Oby8KKTL0rqW/picture1-AVLJwJzaR9iqGJlo.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=600,fit=crop/mp83Oby8KKTL0rqW/screenshot-2024-06-10-174922-m5KvVv28pksQLxxx.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=580,fit=crop/mp83Oby8KKTL0rqW/screenshot-2024-06-27-132026-mv0jEjNEeWH3QZK7.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=686,fit=crop/mp83Oby8KKTL0rqW/screenshot-2024-06-27-131801-mv0jEjG0v1hD5Dxa.jpg',
    ],
    galleryAlts: [
      'Tire protection product',
      'Silent sound wave principle',
      'Nano material enlarged view',
      'Composite nano vinyl acetate copolymer gasket',
    ],
    related: [
      { id: 'hospitality', cat: 'Hospitality', name: 'Hospitality Equipment', pic: '1514933651103-005eec06c04b' },
      { id: 'safety', cat: 'Protection', name: 'Safety', pic: '1504307651254-35680f356dfd' },
      { id: 'coffee-maker', cat: 'Lifestyle', name: 'Portable Coffee Maker', pic: '1442512595331-e89e73853f31' },
    ],
    ctaTitle: 'Interested in ZEV Tire Protection?',
    ctaDesc: 'Tell us your requirements and our team will prepare a tailored quote for your organization.',
  },

  'hospitality': {
    cat: 'Hospitality',
    title: 'Hospitality Equipment for Hotels, Restaurants & Coffee Shops',
    badge: 'Hotel & restaurant grade',
    pic: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/side-view-coffee-machine-YBgl5oK100TQWWyG.jpg',
    desc: [
      'Discover premium hospitality equipment tailored to the unique needs of hotels, restaurants, and coffee shops at ZEV. Our high-quality solutions are designed to elevate your establishment\'s operations and meet your specific requirements.',
      'Elevate your hospitality experience with our top-notch equipment — sourced, delivered and installed across the UAE.',
    ],
    feats: [
      'Professional bar & beverage equipment',
      'Kitchen appliances & catering supplies',
      'Coffee shop equipment & accessories',
      'Front-of-house furnishings & tableware',
      'Supply for hotels, restaurants & resorts',
    ],
    values: [
      { icon: 'shield', title: 'Service Ready', desc: 'Equipment chosen for high-pace hospitality environments.' },
      { icon: 'clock', title: 'Commercial Grade', desc: 'Sourced for daily commercial use, not domestic.' },
      { icon: 'sliders', title: 'One Supplier', desc: 'Bar, kitchen and front-of-house — all in one order.' },
    ],
    gallery: [
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/side-view-coffee-machine-YBgl5oK100TQWWyG.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/nafinia-putra-kwdp-0pok-i-unsplash-ALpBDXrD9que79a0.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/front-view-professional-kitchen-mjEP0LV8kWfVl16O.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/bar-concept-Y4LO3E0oP7Fo4wBY.jpg',
    ],
    galleryAlts: ['Side view coffee machine', 'Restaurant dining setting', 'Professional kitchen', 'Bar concept'],
    related: [
      { id: 'safety', cat: 'Protection', name: 'Safety', pic: '1504307651254-35680f356dfd' },
      { id: 'coffee-maker', cat: 'Lifestyle', name: 'Portable Coffee Maker', pic: '1442512595331-e89e73853f31' },
      { id: 'camera-laptop', cat: 'Technology', name: 'Camera & Laptop', pic: '1496181133206-80ce9b88a853' },
    ],
    ctaTitle: 'Equipping a hospitality operation?',
    ctaDesc: 'Tell us your venue type and we\'ll prepare a tailored equipment list and quote.',
  },

  'safety': {
    cat: 'Protection',
    title: 'Safety Products & Personal Protective Equipment',
    badge: 'Standards compliant',
    pic: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/factory-workers-with-face-masks-protected-against-corona-virus-doing-quality-control-production-factory-A3QPLRDyV2fjDExY.jpg',
    desc: [
      'Explore a comprehensive range of safety products at ZEV. Our offerings ensure top-notch protection and compliance across various industries.',
      'Trust ZEV for reliable safety solutions designed to meet your specific needs and enhance workplace safety.',
    ],
    feats: [
      'Face masks, respirators & eye protection',
      'Firefighter & industrial protective gloves',
      'High-visibility vests & reflective safety wear',
      'PPE flat sets — head-to-toe protection',
      'Safety signage, floor markings & first aid',
    ],
    values: [
      { icon: 'shield', title: 'Compliant', desc: 'PPE sourced to recognised safety standards across industries.' },
      { icon: 'sliders', title: 'Full Range', desc: 'Head-to-toe protection for any site or environment.' },
      { icon: 'clock', title: 'Dependable', desc: 'Consistent supply your teams and sites can rely on.' },
    ],
    gallery: [
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/factory-workers-with-face-masks-protected-against-corona-virus-doing-quality-control-production-factory-A3QPLRDyV2fjDExY.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/unrecognizable-bearded-firefighter-wearing-leather-protective-gloves-Yg2aZNJE2WHB15Nb.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/side-view-specialist-holding-safety-first-sign-Aq2654pRvPcP6qGE.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/builder-uniform-wooden-background-flat-lay-A3QPLRDykVFly9xJ.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/29128075_2201.q713.031.f.m012.c5.personal-protective-equipment-ppe-flat-set-A1a1GG62BaF332lM.jpg',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/2209.i211.014.f.m012.c9.fp-vest-realistic-set-AzG8J2w14DCWljzz.jpg',
    ],
    galleryAlts: ['Factory workers with face masks', 'Firefighter protective gloves', 'Safety first sign', 'Builder PPE flat lay', 'Personal protective equipment set', 'High-visibility vest set'],
    related: [
      { id: 'coffee-maker', cat: 'Lifestyle', name: 'Portable Coffee Maker', pic: '1442512595331-e89e73853f31' },
      { id: 'camera-laptop', cat: 'Technology', name: 'Camera & Laptop', pic: '1496181133206-80ce9b88a853' },
      { id: 'furniture', cat: 'Office', name: 'Furniture', pic: '1524758631624-e2822e304c36' },
    ],
    ctaTitle: 'Need safety equipment?',
    ctaDesc: 'Contact us for a site assessment and bulk procurement quote.',
  },

  'coffee-maker': {
    cat: 'Lifestyle',
    title: 'Portable Coffee Maker with Battery, Coffee Powder and NS Capsules — Self-Heating Espresso Machine with Carrying Case for Travel Campers',
    badge: 'Office & travel ready',
    pic: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/screenshot-2025-01-03-134347-mv029NXX9NhaaMao.png',
    desc: [
      'Introducing the Portable Coffee Maker with Battery — supports Coffee Powder and NS Capsules for a self-heating espresso experience. Comes with an EVA carrying case, perfect for travel and campers.',
      'Fast-heating ceramic technology brews espresso in just 3–4 minutes at 80℃/176℉ with run-dry protection and heat-insulated design — wherever you are.',
    ],
    feats: [
      'Fast-heating & automatic extraction: ceramic heating technology brews espresso (80℃/176℉) in 3~4 minutes',
      'Portable EVA material bag — convenient for camping, mountaineering and self-driving travel',
      'Built-in 12,500mAh battery — brews 7~9 cups (50ml) or 7~8 cups (80ml) per charge',
      'Easy to use: add hot water & double press, or add cold water & hold 2 seconds to extract directly',
      'Run-dry protection when no water detected, plus heat-insulated design',
    ],
    values: [
      { icon: 'shield', title: '20 Bar Pressure', desc: 'Rich crema and full aroma — café-quality espresso anywhere.' },
      { icon: 'sliders', title: 'Dual Compatible', desc: 'Works with both NS capsules and ground coffee powder.' },
      { icon: 'clock', title: 'All-Day Battery', desc: '12,500mAh built-in battery charges in 3–3.5 hours, brews 7–9 cups per charge.' },
    ],
    subcatsEyebrow: "What's Included",
    subcatsTitle: 'Accessories & Specifications',
    subcats: [
      {
        img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200/mp83Oby8KKTL0rqW/screenshot-2025-01-03-130728-AR0MnwnbKntpeEQy.png',
        name: 'Accessory',
        desc: 'Complete accessory kit included with every unit — EVA carrying case and all essentials for travel and outdoor use.',
        contain: true,
      },
      {
        img: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200/mp83Oby8KKTL0rqW/screenshot-2025-01-03-140759-YD0Baxo8kkUW0wjq.png',
        name: 'Specifications',
        desc: 'Full technical specifications for the portable espresso machine.',
        contain: true,
      },
    ],
    gallery: [
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/screenshot-2025-01-03-134347-mv029NXX9NhaaMao.png',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/screenshot-2025-01-03-130728-AR0MnwnbKntpeEQy.png',
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,fit=crop/mp83Oby8KKTL0rqW/screenshot-2025-01-03-140759-YD0Baxo8kkUW0wjq.png',
    ],
    galleryAlts: ['Portable coffee maker product', 'Accessories included', 'Technical specifications'],
    related: [
      { id: 'camera-laptop', cat: 'Technology', name: 'Camera & Laptop', pic: '1496181133206-80ce9b88a853' },
      { id: 'furniture', cat: 'Office', name: 'Furniture', pic: '1524758631624-e2822e304c36' },
      { id: 'corporate-gifts', cat: 'Branding', name: 'Corporate Gifts', pic: '1549465220-1a8b9238cd48' },
    ],
    ctaTitle: 'Interested in the Portable Coffee Maker?',
    ctaDesc: 'Perfect for corporate gifting, travel kits and office use — contact us for pricing and bulk orders.',
  },
};
