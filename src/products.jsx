// Mock product database - comprehensive catalog for AI recommendations
export const products = [
  // Smartphones
  { 
    id: 1, 
    name: 'iPhone 15 Pro', 
    category: 'smartphone', 
    price: 999, 
    rating: 4.8, 
    brand: 'Apple', 
    description: 'Latest iPhone with titanium design and A17 Pro chip', 
    features: ['A17 Pro chip', '128GB storage', 'Pro camera system', '5G', 'Titanium build'], 
    specs: { screen: '6.1"', battery: '3274mAh', camera: '48MP', os: 'iOS 17' }
  },
  { 
    id: 2, 
    name: 'Samsung Galaxy S24', 
    category: 'smartphone', 
    price: 799, 
    rating: 4.7, 
    brand: 'Samsung', 
    description: 'Android flagship with AI features', 
    features: ['Snapdragon 8 Gen 3', '256GB storage', 'AI camera', '5G', 'S Pen support'], 
    specs: { screen: '6.2"', battery: '4000mAh', camera: '50MP', os: 'Android 14' }
  },
  { 
    id: 3, 
    name: 'Google Pixel 8', 
    category: 'smartphone', 
    price: 699, 
    rating: 4.6, 
    brand: 'Google', 
    description: 'Pure Android experience with best-in-class camera AI', 
    features: ['Tensor G3', '128GB storage', 'Magic Eraser', '5G', 'Pure Android'], 
    specs: { screen: '6.2"', battery: '4575mAh', camera: '50MP', os: 'Android 14' }
  },
  { 
    id: 4, 
    name: 'OnePlus 12', 
    category: 'smartphone', 
    price: 649, 
    rating: 4.5, 
    brand: 'OnePlus', 
    description: 'Fast charging flagship with premium design', 
    features: ['Snapdragon 8 Gen 3', '256GB storage', '100W charging', '5G', 'OxygenOS'], 
    specs: { screen: '6.82"', battery: '5400mAh', camera: '50MP', os: 'OxygenOS 14' }
  },
  { 
    id: 5, 
    name: 'iPhone SE 3rd Gen', 
    category: 'smartphone', 
    price: 429, 
    rating: 4.3, 
    brand: 'Apple', 
    description: 'Affordable iPhone with flagship performance', 
    features: ['A15 Bionic', '64GB storage', 'Touch ID', '5G', 'Compact design'], 
    specs: { screen: '4.7"', battery: '2018mAh', camera: '12MP', os: 'iOS 17' }
  },

  // Laptops
  { 
    id: 6, 
    name: 'MacBook Pro 14"', 
    category: 'laptop', 
    price: 1999, 
    rating: 4.9, 
    brand: 'Apple', 
    description: 'Professional laptop with M3 Pro chip', 
    features: ['M3 Pro chip', '512GB SSD', '18GB RAM', 'Liquid Retina XDR', '14-core GPU'], 
    specs: { processor: 'M3 Pro', ram: '18GB', storage: '512GB SSD', screen: '14.2" Liquid Retina XDR' }
  },
  { 
    id: 7, 
    name: 'Dell XPS 15', 
    category: 'laptop', 
    price: 1599, 
    rating: 4.7, 
    brand: 'Dell', 
    description: 'Premium Windows laptop for creators', 
    features: ['Intel i7-13700H', '1TB SSD', '32GB RAM', '4K OLED', 'RTX 4060'], 
    specs: { processor: 'Intel i7-13700H', ram: '32GB', storage: '1TB SSD', screen: '15.6" 4K OLED' }
  },
  { 
    id: 8, 
    name: 'ASUS ROG Strix G16', 
    category: 'laptop', 
    price: 1299, 
    rating: 4.6, 
    brand: 'ASUS', 
    description: 'Gaming laptop with high refresh display', 
    features: ['Intel i7-13650HX', '1TB SSD', '16GB RAM', '165Hz display', 'RTX 4070'], 
    specs: { processor: 'Intel i7-13650HX', ram: '16GB', storage: '1TB SSD', screen: '16" 165Hz QHD' }
  },
  { 
    id: 9, 
    name: 'Lenovo ThinkPad X1 Carbon', 
    category: 'laptop', 
    price: 1399, 
    rating: 4.8, 
    brand: 'Lenovo', 
    description: 'Business ultrabook with enterprise security', 
    features: ['Intel i7-1365U', '512GB SSD', '16GB RAM', 'Carbon fiber', 'Enterprise security'], 
    specs: { processor: 'Intel i7-1365U', ram: '16GB', storage: '512GB SSD', screen: '14" 2.8K OLED' }
  },
  { 
    id: 10, 
    name: 'HP Pavilion 15', 
    category: 'laptop', 
    price: 699, 
    rating: 4.3, 
    brand: 'HP', 
    description: 'Affordable laptop for everyday tasks', 
    features: ['AMD Ryzen 5 7520U', '256GB SSD', '8GB RAM', 'Full HD', 'Long battery'], 
    specs: { processor: 'AMD Ryzen 5 7520U', ram: '8GB', storage: '256GB SSD', screen: '15.6" Full HD' }
  },

  // Headphones
  { 
    id: 11, 
    name: 'Sony WH-1000XM5', 
    category: 'headphones', 
    price: 399, 
    rating: 4.9, 
    brand: 'Sony', 
    description: 'Industry-leading noise canceling headphones', 
    features: ['Industry-leading ANC', '30h battery', 'Hi-Res Audio', 'Touch controls', 'V1 processor'], 
    specs: { driver: '30mm', battery: '30h', connectivity: 'Bluetooth 5.2', weight: '250g' }
  },
  { 
    id: 12, 
    name: 'Apple AirPods Pro 2', 
    category: 'headphones', 
    price: 249, 
    rating: 4.8, 
    brand: 'Apple', 
    description: 'Premium true wireless with spatial audio', 
    features: ['Adaptive ANC', '6h battery', 'Spatial Audio', 'MagSafe case', 'H2 chip'], 
    specs: { driver: 'Custom', battery: '6h + 24h case', connectivity: 'Bluetooth 5.3', weight: '5.3g each' }
  },
  { 
    id: 13, 
    name: 'Bose QuietComfort 45', 
    category: 'headphones', 
    price: 329, 
    rating: 4.7, 
    brand: 'Bose', 
    description: 'Comfortable over-ear with excellent ANC', 
    features: ['Quiet Mode', '24h battery', 'Bose EQ', 'Comfortable design', 'Voice assistant'], 
    specs: { driver: '40mm', battery: '24h', connectivity: 'Bluetooth 5.1', weight: '238g' }
  },
  { 
    id: 14, 
    name: 'JBL Live 770NC', 
    category: 'headphones', 
    price: 149, 
    rating: 4.4, 
    brand: 'JBL', 
    description: 'Budget-friendly ANC headphones', 
    features: ['Adaptive ANC', '65h battery', 'JBL sound', 'Voice assistant', 'Fast charge'], 
    specs: { driver: '40mm', battery: '65h', connectivity: 'Bluetooth 5.3', weight: '220g' }
  },

  // Cameras
  { 
    id: 15, 
    name: 'Canon EOS R8', 
    category: 'camera', 
    price: 1499, 
    rating: 4.7, 
    brand: 'Canon', 
    description: 'Full-frame mirrorless for enthusiasts', 
    features: ['24.2MP full-frame', '4K 60p video', 'RF mount', 'DIGIC X processor', 'Compact body'], 
    specs: { sensor: '24.2MP Full-frame', video: '4K 60p', iso: '100-102400', weight: '461g' }
  },
  { 
    id: 16, 
    name: 'Sony α7 IV', 
    category: 'camera', 
    price: 2499, 
    rating: 4.8, 
    brand: 'Sony', 
    description: 'Professional hybrid camera', 
    features: ['33MP full-frame', '4K 60p video', 'Real-time Eye AF', 'BIONZ XR processor', 'Dual card slots'], 
    specs: { sensor: '33MP Full-frame', video: '4K 60p', iso: '100-51200', weight: '658g' }
  },

  // Smartwatches
  { 
    id: 17, 
    name: 'Apple Watch Series 9', 
    category: 'smartwatch', 
    price: 399, 
    rating: 4.8, 
    brand: 'Apple', 
    description: 'Most advanced Apple Watch', 
    features: ['S9 SiP', 'Double Tap', 'Always-on Retina', 'Health sensors', 'WatchOS 10'], 
    specs: { display: '45mm Always-On Retina', battery: '18h', connectivity: 'GPS + Cellular', sensors: 'ECG, Blood Oxygen' }
  },
  { 
    id: 18, 
    name: 'Samsung Galaxy Watch 6', 
    category: 'smartwatch', 
    price: 329, 
    rating: 4.6, 
    brand: 'Samsung', 
    description: 'Android smartwatch with health focus', 
    features: ['Exynos W930', 'Body composition', 'Sleep tracking', 'Wear OS 4', '40h battery'], 
    specs: { display: '44mm Super AMOLED', battery: '40h', connectivity: 'Bluetooth 5.3', sensors: 'BioActive Sensor' }
  },

  // Tablets
  { 
    id: 19, 
    name: 'iPad Pro 12.9"', 
    category: 'tablet', 
    price: 1099, 
    rating: 4.9, 
    brand: 'Apple', 
    description: 'Professional tablet with M2 chip', 
    features: ['M2 chip', '128GB storage', 'Liquid Retina XDR', 'Apple Pencil support', 'Magic Keyboard'], 
    specs: { processor: 'M2 8-core', display: '12.9" Liquid Retina XDR', storage: '128GB', connectivity: 'Wi-Fi 6E + 5G' }
  },
  { 
    id: 20, 
    name: 'Samsung Galaxy Tab S9+', 
    category: 'tablet', 
    price: 999, 
    rating: 4.7, 
    brand: 'Samsung', 
    description: 'Premium Android tablet', 
    features: ['Snapdragon 8 Gen 2', '256GB storage', 'S Pen included', 'AMOLED display', 'DeX mode'], 
    specs: { processor: 'Snapdragon 8 Gen 2', display: '12.4" Dynamic AMOLED 2X', storage: '256GB', connectivity: 'Wi-Fi 6E + 5G' }
  }
];
