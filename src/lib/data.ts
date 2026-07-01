export interface ProductSpec {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  series: 'NT' | 'HS';
  weight: string;
  power: string;
  engine: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  specs: ProductSpec;
}

export const products: Product[] = [
  {
    id: 'nt10',
    name: 'NT10 Mini Excavator',
    series: 'NT',
    weight: '910 kg',
    power: '7 kw',
    engine: 'KOOP KD192F-1',
    description: 'Compact and agile mini excavator designed for tight spaces and light construction.',
    image: '/images/products/nt10.jpg',
    gallery: Array.from({length: 7}, (_, i) => `/images/products/nt10/${i+1}.jpg`),
    features: ['Canopy Cab', 'Rubber Track', 'Max Digging Depth: 1715mm', 'Bucket Capacity: 0.022 m³'],
    specs: {
      'Operating Weight': '910 kg',
      'Engine Brand': 'KOOP KD192F-1',
      'Rated Power': '7.0 kw / 3000 rpm',
      'Bucket Capacity': '0.022 m³',
      'Max Digging Depth': '1715 mm',
      'Max Digging Height': '2600 mm',
      'Max Dumping Height': '1830 mm',
      'Max Digging Radius': '3065 mm',
      'Max Digging Force': '7.2 kN',
      'Overall Dimensions (LxWxH)': '2876 x 880 x 2220 mm',
      'Track Type': 'Rubber Track',
      'Traveling Speed': '2 km/h'
    }
  },
  {
    id: 'nt12',
    name: 'NT12 Mini Excavator',
    series: 'NT',
    weight: '1000 kg',
    power: '11.2 kw',
    engine: 'Yanmar 3TNV74F',
    description: 'A versatile 1-ton class excavator featuring a reliable Yanmar engine for consistent performance.',
    image: '/images/products/nt12.jpg',
    gallery: Array.from({length: 5}, (_, i) => `/images/products/nt12/${i+1}.jpg`),
    features: ['High Fuel Efficiency', 'Rubber Track', 'Optimized Hydraulic System'],
    specs: {
      'Operating Weight': '1000 kg',
      'Engine Brand': 'Yanmar 3TNV74F',
      'Rated Power': '11.2 kw',
      'Bucket Capacity': '0.025 m³',
      'Max Digging Depth': '1800 mm',
      'Track Type': 'Rubber Track'
    }
  },
  {
    id: 'nt12ev',
    name: 'NT12EV Electric Excavator',
    series: 'NT',
    weight: '1000 kg',
    power: '6.2 kw',
    engine: 'Pure Electric Motor',
    description: 'Zero-emission, low-noise pure electric excavator, perfect for indoor operations and green zones.',
    image: '/images/products/nt12ev.jpg',
    gallery: Array.from({length: 4}, (_, i) => `/images/products/nt12ev/${i+1}.jpg`),
    features: ['Zero Emissions', 'Low Noise', 'Lithium Battery Power', 'Indoor Capable'],
    specs: {
      'Operating Weight': '1000 kg',
      'Power Source': '72V-150AH-240AH Lithium Battery',
      'Rated Power': '6.2 kw',
      'Max Digging Depth': '1800 mm',
      'Noise Level': 'Low / Indoor Compliant',
      'Emissions': 'Zero Emission'
    }
  },
  {
    id: 'hs12u',
    name: 'HS12U Tailless Excavator',
    series: 'HS',
    weight: '1200 kg',
    power: '10.2 kw',
    engine: 'Kubota D722',
    description: 'Ultra-compact zero-tail swing excavator ideal for working flush against walls and in narrow alleys.',
    image: '/images/products/hs12u.jpg',
    gallery: Array.from({length: 5}, (_, i) => `/images/products/hs12u/${i+1}.jpg`),
    features: ['Zero-Tail Swing', 'Kubota Engine', 'Compact Design'],
    specs: {
      'Operating Weight': '1200 kg',
      'Engine Brand': 'Kubota D722',
      'Rated Power': '10.2 kw',
      'Swing Type': 'Zero Tail Swing',
      'Max Digging Depth': '1900 mm'
    }
  },
  {
    id: 'hs18',
    name: 'HS18 Tailless Excavator',
    series: 'HS',
    weight: '1800 kg',
    power: '11.8 kw',
    engine: 'Kubota D902 / Yanmar 3TNV80',
    description: 'A 1.8-ton zero-tail swing machine combining power with extreme maneuverability.',
    image: '/images/products/hs18.jpg',
    gallery: Array.from({length: 7}, (_, i) => `/images/products/hs18/${i+1}.jpg`),
    features: ['Zero-Tail Swing', 'Variable-displacement Pump', 'Max Digging Depth: 2326mm', 'EPA&EU-V Emission Standard'],
    specs: {
      'Operating Weight': '1800 kg',
      'Engine Brand': 'Kubota D902 / Yanmar 3TNV80',
      'Rated Power': '11.8 kw at 2200 rpm',
      'Main Pump': 'Variable-displacement pump',
      'Max Digging Depth': '2326 mm',
      'Max Digging Height': '3462 mm',
      'Minimum Slew Radius': '1372 mm',
      'Tail-Swing Radius': '660 mm',
      'Overall Dimensions (LxWxH)': '3584 x 990-1300 x 2362 mm',
      'Travel Speed': '2.6 - 4.5 km/h',
      'Emissions': 'EPA & EU-V Compliant'
    }
  },
  {
    id: 'nt18dr',
    name: 'NT18DR Mini Excavator',
    series: 'NT',
    weight: '1900 kg',
    power: '14 kw',
    engine: 'Kubota 1105 / Yanmar 3TNV80',
    description: 'Powerful nearly 2-ton excavator delivering exceptional breakout force and stability.',
    image: '/images/products/nt18dr.jpg',
    gallery: Array.from({length: 6}, (_, i) => `/images/products/nt18dr/${i+1}.jpg`),
    features: ['High Digging Force', 'Premium Import Hydraulics', 'Max Digging Depth: 2217mm', 'EATON Travel Motor'],
    specs: {
      'Operating Weight': '1900 kg',
      'Engine Brand': 'Kubota 1105 / Yanmar 3TNV80',
      'Rated Power': '14 kw',
      'Hydraulic Pump': 'SHIMADZU',
      'Travel Motor': 'Import EATON',
      'Max Digging Depth': '2217 mm',
      'Max Digging Height': '3050 mm',
      'Max Dumping Height': '1820 mm',
      'Overall Width': '1060 mm'
    }
  },
  {
    id: 'nt25',
    name: 'NT25 Mini Excavator',
    series: 'NT',
    weight: '2500 kg',
    power: '20.3 kw',
    engine: 'Yanmar 3TNV88F',
    description: 'The heaviest of the NT series, offering robust performance for tough terrains and heavy loads.',
    image: '/images/products/nt25.jpg',
    gallery: Array.from({length: 2}, (_, i) => `/images/products/nt25/${i+1}.jpg`),
    features: ['Heavy Duty Design', 'Yanmar High Power Engine', 'Superior Breakout Force'],
    specs: {
      'Operating Weight': '2500 kg',
      'Engine Brand': 'Yanmar 3TNV88F',
      'Rated Power': '20.3 kw',
      'Max Digging Depth': '2500 mm',
      'Bucket Capacity': '0.06 m³'
    }
  },
  {
    id: 'hs27',
    name: 'HS27 Mini Excavator',
    series: 'HS',
    weight: '2700 kg',
    power: '15.2 kw',
    engine: 'Yanmar 3TNV80F',
    description: 'A 2.7-ton machine offering enhanced reach and depth, equipped with a Yanmar engine and high-flow hydraulics.',
    image: '/images/products/hs27.jpg',
    gallery: Array.from({length: 7}, (_, i) => `/images/products/hs27/${i+1}.jpg`),
    features: ['Max Digging Depth: 2800mm', 'Bucket Capacity: 0.08 m³', 'Track Gauge: 1250mm', 'High Torque Engine'],
    specs: {
      'Operating Weight': '2700 kg',
      'Engine Brand': 'Yanmar 3TNV80F',
      'Rated Power': '15.2 kw / 2500 rpm',
      'Bucket Capacity': '0.08 m³',
      'Bucket Digging Force': '20 KN',
      'Arm Digging Force': '14.2 KN',
      'Max Digging Depth': '2800 mm',
      'Max Digging Height': '4132 mm',
      'Max Dumping Height': '2742 mm',
      'Tail Swing Radius': '775 mm',
      'Overall Dimensions (LxWxH)': '4159 x 1550 x 2560 mm',
      'Working Pressure': '24.5 Mpa',
      'Max Flow': '72 L/min'
    }
  },
  {
    id: 'hs37',
    name: 'HS37 Mini Excavator',
    series: 'HS',
    weight: '3700 kg',
    power: '18.2 kw',
    engine: 'Yanmar 3TNV88F',
    description: 'The flagship of the HS series, providing maximum digging power and depth for serious excavation projects.',
    image: '/images/products/hs37.jpg',
    gallery: Array.from({length: 7}, (_, i) => `/images/products/hs37/${i+1}.jpg`),
    features: ['Max Digging Depth: 3105mm', 'Bucket Digging Force: 30.4 KN', 'Fuel Tank: 50L', 'Professional Grade Performance'],
    specs: {
      'Operating Weight': '3700 kg',
      'Engine Brand': 'Yanmar 3TNV88F',
      'Rated Power': '18.2 kw / 2200 rpm',
      'Bucket Digging Force': '30.4 KN',
      'Arm Digging Force': '18.2 KN',
      'Max Digging Depth': '3105 mm',
      'Max Digging Height': '4855 mm',
      'Max Dumping Height': '3460 mm',
      'Tail Swing Radius': '860 mm',
      'Overall Dimensions (LxWxH)': '4920 x 1720 x 2550 mm',
      'Fuel Tank': '50 L',
      'Travel Speed': '2.2 - 4.2 km/h'
    }
  }
];
