import type { Unit } from '../types/units';

export const BUILT_IN_UNITS: Unit[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  WEIGHT  (base unit: kg)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // -- Standard --
  { id: 'gram', name: 'Gram', emoji: '', category: 'weight', baseUnitValue: 0.001, isCustom: false },
  { id: 'oz', name: 'Ounce', emoji: '', category: 'weight', baseUnitValue: 0.0283495, isCustom: false },
  { id: 'lb', name: 'Pound', emoji: '', category: 'weight', baseUnitValue: 0.453592, isCustom: false },
  { id: 'kg', name: 'Kilogram', emoji: '', category: 'weight', baseUnitValue: 1, isCustom: false },
  { id: 'stone', name: 'Stone', emoji: '', category: 'weight', baseUnitValue: 6.35029, isCustom: false },
  { id: 'tonne', name: 'Metric Tonne', emoji: '', category: 'weight', baseUnitValue: 1000, isCustom: false },

  // -- Tiny things --
  { id: 'grain-of-rice', name: 'Grain of Rice', emoji: '', category: 'weight', baseUnitValue: 0.000025, isCustom: false, description: '~0.025 g' },
  { id: 'paperclip', name: 'Paper Clip', emoji: '', category: 'weight', baseUnitValue: 0.001, isCustom: false, description: '~1 g' },
  { id: 'penny', name: 'US Penny', emoji: '', category: 'weight', baseUnitValue: 0.0025, isCustom: false, description: '~2.5 g' },
  { id: 'aa-battery', name: 'AA Battery', emoji: '', category: 'weight', baseUnitValue: 0.023, isCustom: false, description: '~23 g' },
  { id: 'ant', name: 'Ant', emoji: '', category: 'weight', baseUnitValue: 0.000001, isCustom: false, description: '~1 mg' },
  { id: 'golf-ball', name: 'Golf Ball', emoji: '', category: 'weight', baseUnitValue: 0.046, isCustom: false, description: '~46 g' },

  // -- Food --
  { id: 'donut', name: 'Donut', emoji: '', category: 'weight', baseUnitValue: 0.05, isCustom: false, description: '~50 g' },
  { id: 'egg', name: 'Chicken Egg', emoji: '', category: 'weight', baseUnitValue: 0.06, isCustom: false, description: '~60 g' },
  { id: 'stick-of-butter', name: 'Stick of Butter', emoji: '', category: 'weight', baseUnitValue: 0.113, isCustom: false, description: '~113 g' },
  { id: 'banana-w', name: 'Banana', emoji: '', category: 'weight', baseUnitValue: 0.12, isCustom: false, description: '~120 g' },
  { id: 'big-mac', name: 'Big Mac', emoji: '', category: 'weight', baseUnitValue: 0.215, isCustom: false, description: '~215 g' },
  { id: 'can-of-soda', name: 'Can of Soda (full)', emoji: '', category: 'weight', baseUnitValue: 0.368, isCustom: false, description: '~368 g' },
  { id: 'whole-pizza', name: 'Whole Pizza', emoji: '', category: 'weight', baseUnitValue: 1, isCustom: false, description: '~1 kg' },
  { id: 'thanksgiving-turkey', name: 'Thanksgiving Turkey', emoji: '', category: 'weight', baseUnitValue: 7, isCustom: false, description: '~7 kg / 15 lbs' },
  { id: 'watermelon', name: 'Watermelon', emoji: '', category: 'weight', baseUnitValue: 5, isCustom: false, description: '~5 kg' },

  // -- Gadgets & objects --
  { id: 'iphone', name: 'iPhone', emoji: '', category: 'weight', baseUnitValue: 0.175, isCustom: false, description: '~175 g' },
  { id: 'basketball', name: 'Basketball', emoji: '', category: 'weight', baseUnitValue: 0.623, isCustom: false, description: '~623 g' },
  { id: 'laptop', name: 'Laptop', emoji: '', category: 'weight', baseUnitValue: 1.5, isCustom: false, description: '~1.5 kg' },
  { id: 'bowling-ball', name: 'Bowling Ball', emoji: '', category: 'weight', baseUnitValue: 6.35, isCustom: false, description: '~6.35 kg / 14 lbs' },
  { id: 'bag-of-cement', name: 'Bag of Cement', emoji: '', category: 'weight', baseUnitValue: 42.6, isCustom: false, description: '~42.6 kg / 94 lbs' },
  { id: 'grand-piano', name: 'Grand Piano', emoji: '', category: 'weight', baseUnitValue: 480, isCustom: false, description: '~480 kg' },

  // -- Animals --
  { id: 'hamster', name: 'Hamster', emoji: '', category: 'weight', baseUnitValue: 0.03, isCustom: false, description: '~30 g' },
  { id: 'mouse', name: 'Mouse', emoji: '', category: 'weight', baseUnitValue: 0.02, isCustom: false, description: '~20 g' },
  { id: 'chicken', name: 'Chicken', emoji: '', category: 'weight', baseUnitValue: 3, isCustom: false, description: '~3 kg' },
  { id: 'chihuahua', name: 'Chihuahua', emoji: '', category: 'weight', baseUnitValue: 2.5, isCustom: false, description: '~2.5 kg' },
  { id: 'housecat', name: 'House Cat', emoji: '', category: 'weight', baseUnitValue: 4.5, isCustom: false, description: '~4.5 kg' },
  { id: 'corgi', name: 'Corgi', emoji: '', category: 'weight', baseUnitValue: 12, isCustom: false, description: '~12 kg' },
  { id: 'golden-retriever', name: 'Golden Retriever', emoji: '', category: 'weight', baseUnitValue: 30, isCustom: false, description: '~30 kg' },
  { id: 'average-human', name: 'Average Human', emoji: '', category: 'weight', baseUnitValue: 70, isCustom: false, description: '~70 kg / 154 lbs' },
  { id: 'giant-panda', name: 'Giant Panda', emoji: '', category: 'weight', baseUnitValue: 100, isCustom: false, description: '~100 kg' },
  { id: 'sumo-wrestler', name: 'Sumo Wrestler', emoji: '', category: 'weight', baseUnitValue: 150, isCustom: false, description: '~150 kg' },
  { id: 'gorilla', name: 'Silverback Gorilla', emoji: '', category: 'weight', baseUnitValue: 160, isCustom: false, description: '~160 kg' },
  { id: 'polar-bear', name: 'Polar Bear', emoji: '', category: 'weight', baseUnitValue: 450, isCustom: false, description: '~450 kg' },
  { id: 'horse', name: 'Horse', emoji: '', category: 'weight', baseUnitValue: 500, isCustom: false, description: '~500 kg' },
  { id: 'cow', name: 'Cow', emoji: '', category: 'weight', baseUnitValue: 700, isCustom: false, description: '~700 kg' },
  { id: 'giraffe-w', name: 'Giraffe', emoji: '', category: 'weight', baseUnitValue: 1200, isCustom: false, description: '~1,200 kg' },
  { id: 'hippo', name: 'Hippopotamus', emoji: '', category: 'weight', baseUnitValue: 1500, isCustom: false, description: '~1,500 kg' },
  { id: 'elephant', name: 'African Elephant', emoji: '', category: 'weight', baseUnitValue: 6000, isCustom: false, description: '~6,000 kg' },
  { id: 't-rex', name: 'T-Rex (estimated)', emoji: '', category: 'weight', baseUnitValue: 8000, isCustom: false, description: '~8,000 kg' },

  // -- Big stuff --
  { id: 'smart-car', name: 'Smart Car', emoji: '', category: 'weight', baseUnitValue: 750, isCustom: false, description: '~750 kg' },
  { id: 'school-bus-w', name: 'Loaded School Bus', emoji: '', category: 'weight', baseUnitValue: 10886, isCustom: false, description: '~10,886 kg' },
  { id: 'bluewhale-w', name: 'Blue Whale', emoji: '', category: 'weight', baseUnitValue: 150000, isCustom: false, description: '~150,000 kg' },
  { id: 'statue-of-liberty', name: 'Statue of Liberty', emoji: '', category: 'weight', baseUnitValue: 204000, isCustom: false, description: '~204,000 kg (copper + steel)' },
  { id: 'jumbojet', name: 'Boeing 747 (loaded)', emoji: '', category: 'weight', baseUnitValue: 412775, isCustom: false, description: '~412,775 kg' },
  { id: 'iss', name: 'International Space Station', emoji: '', category: 'weight', baseUnitValue: 420000, isCustom: false, description: '~420,000 kg' },
  { id: 'eiffel-tower-w', name: 'Eiffel Tower', emoji: '', category: 'weight', baseUnitValue: 7300000, isCustom: false, description: '~7,300 tonnes' },
  { id: 'great-pyramid', name: 'Great Pyramid of Giza', emoji: '', category: 'weight', baseUnitValue: 6000000000, isCustom: false, description: '~6 billion kg' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  LENGTH  (base unit: m)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // -- Standard --
  { id: 'mm', name: 'Millimetre', emoji: '', category: 'length', baseUnitValue: 0.001, isCustom: false },
  { id: 'cm', name: 'Centimetre', emoji: '', category: 'length', baseUnitValue: 0.01, isCustom: false },
  { id: 'inch', name: 'Inch', emoji: '', category: 'length', baseUnitValue: 0.0254, isCustom: false },
  { id: 'ft', name: 'Foot', emoji: '', category: 'length', baseUnitValue: 0.3048, isCustom: false },
  { id: 'yard', name: 'Yard', emoji: '', category: 'length', baseUnitValue: 0.9144, isCustom: false },
  { id: 'm', name: 'Metre', emoji: '', category: 'length', baseUnitValue: 1, isCustom: false },
  { id: 'km', name: 'Kilometre', emoji: '', category: 'length', baseUnitValue: 1000, isCustom: false },
  { id: 'mile', name: 'Mile', emoji: '', category: 'length', baseUnitValue: 1609.34, isCustom: false },

  // -- Tiny --
  { id: 'human-hair', name: 'Human Hair (width)', emoji: '', category: 'length', baseUnitValue: 0.00007, isCustom: false, description: '~0.07 mm' },
  { id: 'grain-of-sand-l', name: 'Grain of Sand', emoji: '', category: 'length', baseUnitValue: 0.0005, isCustom: false, description: '~0.5 mm' },
  { id: 'ant-l', name: 'Ant (length)', emoji: '', category: 'length', baseUnitValue: 0.002, isCustom: false, description: '~2 mm' },
  { id: 'grain-of-rice-l', name: 'Grain of Rice', emoji: '', category: 'length', baseUnitValue: 0.006, isCustom: false, description: '~6 mm' },
  { id: 'lego-brick', name: 'LEGO Brick', emoji: '', category: 'length', baseUnitValue: 0.032, isCustom: false, description: '~3.2 cm' },
  { id: 'paperclip-l', name: 'Paper Clip', emoji: '', category: 'length', baseUnitValue: 0.032, isCustom: false, description: '~3.2 cm' },
  { id: 'golf-tee', name: 'Golf Tee', emoji: '', category: 'length', baseUnitValue: 0.054, isCustom: false, description: '~5.4 cm' },
  { id: 'credit-card-l', name: 'Credit Card', emoji: '', category: 'length', baseUnitValue: 0.086, isCustom: false, description: '~8.6 cm long' },

  // -- Everyday --
  { id: 'dollar-bill', name: 'Dollar Bill', emoji: '', category: 'length', baseUnitValue: 0.156, isCustom: false, description: '~15.6 cm' },
  { id: 'banana', name: 'Banana', emoji: '', category: 'length', baseUnitValue: 0.178, isCustom: false, description: '~17.8 cm' },
  { id: 'pencil', name: 'Pencil', emoji: '', category: 'length', baseUnitValue: 0.19, isCustom: false, description: '~19 cm' },
  { id: 'subway-footlong', name: 'Subway Footlong', emoji: '', category: 'length', baseUnitValue: 0.305, isCustom: false, description: '~30.5 cm (supposedly)' },
  { id: 'guitar', name: 'Guitar', emoji: '', category: 'length', baseUnitValue: 1, isCustom: false, description: '~1 m' },
  { id: 'baseball-bat', name: 'Baseball Bat', emoji: '', category: 'length', baseUnitValue: 1.07, isCustom: false, description: '~1.07 m / 42 in' },
  { id: 'shopping-cart', name: 'Shopping Cart', emoji: '', category: 'length', baseUnitValue: 1.05, isCustom: false, description: '~1.05 m long' },
  { id: 'golden-retriever-l', name: 'Golden Retriever (nose to tail)', emoji: '', category: 'length', baseUnitValue: 1.1, isCustom: false, description: '~1.1 m' },
  { id: 'king-size-bed', name: 'King-Size Bed', emoji: '', category: 'length', baseUnitValue: 2.03, isCustom: false, description: '~2.03 m / 80 in' },

  // -- Medium --
  { id: 'king-cobra', name: 'King Cobra (length)', emoji: '', category: 'length', baseUnitValue: 4, isCustom: false, description: '~4 m' },
  { id: 'giraffe', name: 'Giraffe (height)', emoji: '', category: 'length', baseUnitValue: 5.5, isCustom: false, description: '~5.5 m' },
  { id: 'schoolbus', name: 'School Bus', emoji: '', category: 'length', baseUnitValue: 10.67, isCustom: false, description: '~10.67 m / 35 ft' },
  { id: 'london-bus', name: 'London Double-Decker', emoji: '', category: 'length', baseUnitValue: 11.3, isCustom: false, description: '~11.3 m' },
  { id: 'bowling-lane', name: 'Bowling Lane', emoji: '', category: 'length', baseUnitValue: 18.29, isCustom: false, description: '~18.29 m / 60 ft' },
  { id: 'tennis-court-l', name: 'Tennis Court', emoji: '', category: 'length', baseUnitValue: 23.77, isCustom: false, description: '~23.77 m' },
  { id: 'basketball-court-l', name: 'Basketball Court', emoji: '', category: 'length', baseUnitValue: 28.65, isCustom: false, description: '~28.65 m / 94 ft' },
  { id: 'bluewhale-l', name: 'Blue Whale', emoji: '', category: 'length', baseUnitValue: 30, isCustom: false, description: '~30 m' },
  { id: 'olympic-pool-l', name: 'Olympic Pool (length)', emoji: '', category: 'length', baseUnitValue: 50, isCustom: false, description: '~50 m' },
  { id: 'football-field', name: 'Football Field', emoji: '', category: 'length', baseUnitValue: 91.44, isCustom: false, description: '~91.44 m / 100 yards' },

  // -- Tall stuff --
  { id: 'statue-of-liberty-l', name: 'Statue of Liberty', emoji: '', category: 'length', baseUnitValue: 93, isCustom: false, description: '~93 m (with pedestal)' },
  { id: 'big-ben', name: 'Big Ben', emoji: '', category: 'length', baseUnitValue: 96, isCustom: false, description: '~96 m' },
  { id: 'eiffel', name: 'Eiffel Tower', emoji: '', category: 'length', baseUnitValue: 330, isCustom: false, description: '~330 m' },
  { id: 'empire-state', name: 'Empire State Building', emoji: '', category: 'length', baseUnitValue: 443, isCustom: false, description: '~443 m (to roof)' },
  { id: 'burj-khalifa', name: 'Burj Khalifa', emoji: '', category: 'length', baseUnitValue: 828, isCustom: false, description: '~828 m' },
  { id: 'golden-gate', name: 'Golden Gate Bridge', emoji: '', category: 'length', baseUnitValue: 2737, isCustom: false, description: '~2,737 m span' },

  // -- Huge --
  { id: 'marathon', name: 'Marathon', emoji: '', category: 'length', baseUnitValue: 42195, isCustom: false, description: '42.195 km' },
  { id: 'mt-everest', name: 'Mount Everest (height)', emoji: '', category: 'length', baseUnitValue: 8849, isCustom: false, description: '~8,849 m' },
  { id: 'mariana-trench', name: 'Mariana Trench (depth)', emoji: '', category: 'length', baseUnitValue: 10994, isCustom: false, description: '~10,994 m' },
  { id: 'earth-diameter', name: 'Earth (diameter)', emoji: '', category: 'length', baseUnitValue: 12742000, isCustom: false, description: '~12,742 km' },
  { id: 'moon-distance', name: 'Earth-to-Moon Distance', emoji: '', category: 'length', baseUnitValue: 384400000, isCustom: false, description: '~384,400 km' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  VOLUME  (base unit: L)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // -- Standard --
  { id: 'ml', name: 'Millilitre', emoji: '', category: 'volume', baseUnitValue: 0.001, isCustom: false },
  { id: 'teaspoon', name: 'Teaspoon', emoji: '', category: 'volume', baseUnitValue: 0.005, isCustom: false, description: '~5 mL' },
  { id: 'tablespoon', name: 'Tablespoon', emoji: '', category: 'volume', baseUnitValue: 0.015, isCustom: false, description: '~15 mL' },
  { id: 'fl-oz', name: 'Fluid Ounce', emoji: '', category: 'volume', baseUnitValue: 0.0295735, isCustom: false },
  { id: 'cup', name: 'Cup', emoji: '', category: 'volume', baseUnitValue: 0.237, isCustom: false, description: '~237 mL' },
  { id: 'pint', name: 'Pint (US)', emoji: '', category: 'volume', baseUnitValue: 0.473, isCustom: false, description: '~473 mL' },
  { id: 'litre', name: 'Litre', emoji: '', category: 'volume', baseUnitValue: 1, isCustom: false },
  { id: 'gallon', name: 'US Gallon', emoji: '', category: 'volume', baseUnitValue: 3.78541, isCustom: false },

  // -- Tiny --
  { id: 'eyedrop', name: 'Eyedrop', emoji: '', category: 'volume', baseUnitValue: 0.00005, isCustom: false, description: '~0.05 mL' },
  { id: 'thimble', name: 'Thimble', emoji: '', category: 'volume', baseUnitValue: 0.001, isCustom: false, description: '~1 mL' },
  { id: 'ketchup-packet', name: 'Ketchup Packet', emoji: '', category: 'volume', baseUnitValue: 0.009, isCustom: false, description: '~9 mL' },

  // -- Drinks --
  { id: 'espresso', name: 'Espresso Shot', emoji: '', category: 'volume', baseUnitValue: 0.03, isCustom: false, description: '~30 mL' },
  { id: 'shot-glass', name: 'Shot Glass', emoji: '', category: 'volume', baseUnitValue: 0.044, isCustom: false, description: '~44 mL / 1.5 fl oz' },
  { id: 'champagne-flute', name: 'Champagne Flute', emoji: '', category: 'volume', baseUnitValue: 0.18, isCustom: false, description: '~180 mL' },
  { id: 'soda-can', name: 'Soda Can', emoji: '', category: 'volume', baseUnitValue: 0.355, isCustom: false, description: '~355 mL / 12 fl oz' },
  { id: 'coffee-mug', name: 'Coffee Mug', emoji: '', category: 'volume', baseUnitValue: 0.35, isCustom: false, description: '~350 mL' },
  { id: 'water-bottle', name: 'Water Bottle', emoji: '', category: 'volume', baseUnitValue: 0.5, isCustom: false, description: '~500 mL' },
  { id: 'wine-bottle', name: 'Wine Bottle', emoji: '', category: 'volume', baseUnitValue: 0.75, isCustom: false, description: '~750 mL' },

  // -- Body --
  { id: 'human-bladder', name: 'Human Bladder', emoji: '', category: 'volume', baseUnitValue: 0.5, isCustom: false, description: '~500 mL (full)' },
  { id: 'human-stomach', name: 'Human Stomach', emoji: '', category: 'volume', baseUnitValue: 1, isCustom: false, description: '~1 L (stretched)' },

  // -- Around the house --
  { id: 'milk-jug', name: 'Milk Jug (US gallon)', emoji: '', category: 'volume', baseUnitValue: 3.785, isCustom: false, description: '~3.785 L' },
  { id: 'bucket', name: 'Bucket', emoji: '', category: 'volume', baseUnitValue: 10, isCustom: false, description: '~10 L' },
  { id: 'fishbowl', name: 'Fishbowl', emoji: '', category: 'volume', baseUnitValue: 15, isCustom: false, description: '~15 L' },
  { id: 'fish-tank', name: 'Fish Tank (10 gal)', emoji: '', category: 'volume', baseUnitValue: 37.85, isCustom: false, description: '~37.85 L' },
  { id: 'beer-keg', name: 'Beer Keg', emoji: '', category: 'volume', baseUnitValue: 58.67, isCustom: false, description: '~58.67 L / 15.5 gal' },
  { id: 'kiddie-pool', name: 'Kiddie Pool', emoji: '', category: 'volume', baseUnitValue: 200, isCustom: false, description: '~200 L' },
  { id: 'bathtub', name: 'Bathtub', emoji: '', category: 'volume', baseUnitValue: 300, isCustom: false, description: '~300 L' },
  { id: 'waterbed', name: 'Waterbed', emoji: '', category: 'volume', baseUnitValue: 750, isCustom: false, description: '~750 L' },
  { id: 'hot-tub', name: 'Hot Tub', emoji: '', category: 'volume', baseUnitValue: 1500, isCustom: false, description: '~1,500 L' },

  // -- Big --
  { id: 'dumpster', name: 'Dumpster', emoji: '', category: 'volume', baseUnitValue: 3400, isCustom: false, description: '~3,400 L' },
  { id: 'cement-mixer', name: 'Cement Mixer Truck', emoji: '', category: 'volume', baseUnitValue: 9000, isCustom: false, description: '~9,000 L' },
  { id: 'school-bus-interior', name: 'School Bus (interior)', emoji: '', category: 'volume', baseUnitValue: 42000, isCustom: false, description: '~42,000 L' },
  { id: 'swimming-pool', name: 'Olympic Swimming Pool', emoji: '', category: 'volume', baseUnitValue: 2500000, isCustom: false, description: '~2,500,000 L' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  AREA  (base unit: m²)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // -- Standard --
  { id: 'sqcm', name: 'Square Centimetre', emoji: '', category: 'area', baseUnitValue: 0.0001, isCustom: false },
  { id: 'sqin', name: 'Square Inch', emoji: '', category: 'area', baseUnitValue: 0.00064516, isCustom: false },
  { id: 'sqft', name: 'Square Foot', emoji: '', category: 'area', baseUnitValue: 0.092903, isCustom: false },
  { id: 'sqm', name: 'Square Metre', emoji: '', category: 'area', baseUnitValue: 1, isCustom: false },
  { id: 'acre', name: 'Acre', emoji: '', category: 'area', baseUnitValue: 4046.86, isCustom: false },
  { id: 'hectare', name: 'Hectare', emoji: '', category: 'area', baseUnitValue: 10000, isCustom: false },
  { id: 'sqkm', name: 'Square Kilometre', emoji: '', category: 'area', baseUnitValue: 1000000, isCustom: false },
  { id: 'sqmile', name: 'Square Mile', emoji: '', category: 'area', baseUnitValue: 2590000, isCustom: false },

  // -- Tiny --
  { id: 'postage-stamp', name: 'Postage Stamp', emoji: '', category: 'area', baseUnitValue: 0.00058, isCustom: false, description: '~5.8 cm²' },
  { id: 'playing-card', name: 'Playing Card', emoji: '', category: 'area', baseUnitValue: 0.0045, isCustom: false, description: '~45 cm²' },
  { id: 'credit-card-a', name: 'Credit Card', emoji: '', category: 'area', baseUnitValue: 0.0046, isCustom: false, description: '~46 cm²' },
  { id: 'dollar-bill-a', name: 'Dollar Bill', emoji: '', category: 'area', baseUnitValue: 0.0103, isCustom: false, description: '~103 cm²' },
  { id: 'sheet-of-paper', name: 'Sheet of Paper (A4)', emoji: '', category: 'area', baseUnitValue: 0.0624, isCustom: false, description: '~624 cm²' },
  { id: 'ipad-screen', name: 'iPad Screen', emoji: '', category: 'area', baseUnitValue: 0.0476, isCustom: false, description: '~476 cm²' },

  // -- Medium --
  { id: 'large-pizza-a', name: 'Large Pizza', emoji: '', category: 'area', baseUnitValue: 0.1642, isCustom: false, description: '~18 in / 1,642 cm²' },
  { id: 'bath-towel', name: 'Bath Towel', emoji: '', category: 'area', baseUnitValue: 0.84, isCustom: false, description: '~70 × 120 cm' },
  { id: 'yoga-mat', name: 'Yoga Mat', emoji: '', category: 'area', baseUnitValue: 1.67, isCustom: false, description: '~1.67 m²' },
  { id: 'king-bed-a', name: 'King-Size Bed', emoji: '', category: 'area', baseUnitValue: 3.72, isCustom: false, description: '~3.72 m²' },
  { id: 'parking-space', name: 'Parking Space', emoji: '', category: 'area', baseUnitValue: 12.5, isCustom: false, description: '~12.5 m²' },
  { id: 'boxing-ring', name: 'Boxing Ring', emoji: '', category: 'area', baseUnitValue: 37.2, isCustom: false, description: '~37.2 m² (6.1 m per side)' },
  { id: 'squash-court', name: 'Squash Court', emoji: '', category: 'area', baseUnitValue: 62.4, isCustom: false, description: '~62.4 m²' },

  // -- Sports --
  { id: 'tennis-court', name: 'Tennis Court', emoji: '', category: 'area', baseUnitValue: 260.87, isCustom: false, description: '~260.87 m²' },
  { id: 'basketball-court', name: 'Basketball Court', emoji: '', category: 'area', baseUnitValue: 436.6, isCustom: false, description: '~436.6 m²' },
  { id: 'ice-hockey-rink', name: 'Ice Hockey Rink', emoji: '', category: 'area', baseUnitValue: 1516, isCustom: false, description: '~1,516 m²' },
  { id: 'football-pitch', name: 'Football Pitch', emoji: '', category: 'area', baseUnitValue: 7140, isCustom: false, description: '~7,140 m²' },

  // -- Buildings & landmarks --
  { id: 'white-house-a', name: 'White House (floor space)', emoji: '', category: 'area', baseUnitValue: 5100, isCustom: false, description: '~5,100 m²' },
  { id: 'nyc-block', name: 'NYC City Block', emoji: '', category: 'area', baseUnitValue: 20234, isCustom: false, description: '~20,234 m²' },
  { id: 'buckingham-palace', name: 'Buckingham Palace', emoji: '', category: 'area', baseUnitValue: 77000, isCustom: false, description: '~77,000 m²' },
  { id: 'vatican-city', name: 'Vatican City', emoji: '', category: 'area', baseUnitValue: 440000, isCustom: false, description: '~0.44 km²' },
  { id: 'central-park', name: 'Central Park', emoji: '', category: 'area', baseUnitValue: 3410000, isCustom: false, description: '~3.41 km²' },

  // -- Big --
  { id: 'monaco', name: 'Monaco', emoji: '', category: 'area', baseUnitValue: 2020000, isCustom: false, description: '~2.02 km²' },
  { id: 'manhattan', name: 'Manhattan', emoji: '', category: 'area', baseUnitValue: 59100000, isCustom: false, description: '~59.1 km²' },
  { id: 'disney-world', name: 'Walt Disney World', emoji: '', category: 'area', baseUnitValue: 110000000, isCustom: false, description: '~110 km²' },
  { id: 'rhode-island', name: 'Rhode Island', emoji: '', category: 'area', baseUnitValue: 4001000000, isCustom: false, description: '~4,001 km²' },
  { id: 'texas', name: 'Texas', emoji: '', category: 'area', baseUnitValue: 696241000000, isCustom: false, description: '~696,241 km²' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  TIME  (base unit: s)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // -- Standard --
  { id: 'millisecond', name: 'Millisecond', emoji: '', category: 'time', baseUnitValue: 0.001, isCustom: false },
  { id: 'second', name: 'Second', emoji: '', category: 'time', baseUnitValue: 1, isCustom: false },
  { id: 'minute', name: 'Minute', emoji: '', category: 'time', baseUnitValue: 60, isCustom: false },
  { id: 'hour', name: 'Hour', emoji: '', category: 'time', baseUnitValue: 3600, isCustom: false },
  { id: 'day', name: 'Day', emoji: '', category: 'time', baseUnitValue: 86400, isCustom: false },
  { id: 'week', name: 'Week', emoji: '', category: 'time', baseUnitValue: 604800, isCustom: false },
  { id: 'month', name: 'Month (avg)', emoji: '', category: 'time', baseUnitValue: 2629800, isCustom: false, description: '~30.44 days' },
  { id: 'year', name: 'Year', emoji: '', category: 'time', baseUnitValue: 31557600, isCustom: false, description: '~365.25 days' },
  { id: 'decade', name: 'Decade', emoji: '', category: 'time', baseUnitValue: 315576000, isCustom: false },

  // -- Blink-and-you-miss-it --
  { id: 'blink', name: 'Blink of an Eye', emoji: '', category: 'time', baseUnitValue: 0.3, isCustom: false, description: '~300 ms' },
  { id: 'sneeze', name: 'Sneeze', emoji: '', category: 'time', baseUnitValue: 0.5, isCustom: false, description: '~500 ms' },
  { id: 'heartbeat', name: 'Heartbeat', emoji: '', category: 'time', baseUnitValue: 0.8, isCustom: false, description: '~800 ms' },
  { id: 'camera-flash', name: 'Camera Flash', emoji: '', category: 'time', baseUnitValue: 0.002, isCustom: false, description: '~2 ms' },
  { id: 'lightning-bolt', name: 'Lightning Flash', emoji: '', category: 'time', baseUnitValue: 0.0002, isCustom: false, description: '~0.2 ms' },

  // -- Short activities --
  { id: 'elevator-ride', name: 'Elevator Ride', emoji: '', category: 'time', baseUnitValue: 30, isCustom: false, description: '~30 s' },
  { id: 'microwave-minute', name: 'Microwave Minute', emoji: '', category: 'time', baseUnitValue: 60, isCustom: false, description: '60 s (feels like 10 min)' },
  { id: 'traffic-light', name: 'Red Traffic Light', emoji: '', category: 'time', baseUnitValue: 90, isCustom: false, description: '~90 s' },
  { id: 'teeth-brushing', name: 'Brushing Your Teeth', emoji: '', category: 'time', baseUnitValue: 120, isCustom: false, description: '~2 min (if you do it right)' },
  { id: 'commercial-break', name: 'Commercial Break', emoji: '', category: 'time', baseUnitValue: 180, isCustom: false, description: '~3 min' },
  { id: 'pop-song', name: 'Average Pop Song', emoji: '', category: 'time', baseUnitValue: 210, isCustom: false, description: '~3.5 min' },
  { id: 'tiktok-max', name: 'Max-Length TikTok', emoji: '', category: 'time', baseUnitValue: 600, isCustom: false, description: '~10 min' },
  { id: 'boiled-egg', name: 'Soft-Boiling an Egg', emoji: '', category: 'time', baseUnitValue: 360, isCustom: false, description: '~6 min' },

  // -- Medium activities --
  { id: 'nap', name: 'Power Nap', emoji: '', category: 'time', baseUnitValue: 1200, isCustom: false, description: '~20 min' },
  { id: 'ted-talk', name: 'TED Talk', emoji: '', category: 'time', baseUnitValue: 1080, isCustom: false, description: '~18 min' },
  { id: 'sitcom', name: 'Sitcom Episode', emoji: '', category: 'time', baseUnitValue: 1320, isCustom: false, description: '~22 min (without ads)' },
  { id: 'halftime-show', name: 'Super Bowl Halftime', emoji: '', category: 'time', baseUnitValue: 1800, isCustom: false, description: '~30 min' },
  { id: 'football-match', name: 'Football Match', emoji: '', category: 'time', baseUnitValue: 5400, isCustom: false, description: '~90 min' },
  { id: 'movie', name: 'Average Movie', emoji: '', category: 'time', baseUnitValue: 7200, isCustom: false, description: '~2 hours' },

  // -- Long activities --
  { id: 'transatlantic-flight', name: 'Transatlantic Flight', emoji: '', category: 'time', baseUnitValue: 28800, isCustom: false, description: '~8 hours' },
  { id: 'full-night-sleep', name: "Full Night's Sleep", emoji: '', category: 'time', baseUnitValue: 28800, isCustom: false, description: '~8 hours' },
  { id: 'lotr-extended', name: 'LOTR Extended Trilogy', emoji: '', category: 'time', baseUnitValue: 40680, isCustom: false, description: '~11 hours 19 min' },
  { id: 'binge-stranger-things', name: 'Binge All of Stranger Things', emoji: '', category: 'time', baseUnitValue: 139500, isCustom: false, description: '~38.75 hours (all seasons)' },

  // -- Cultural --
  { id: 'dog-year', name: 'Dog Year', emoji: '', category: 'time', baseUnitValue: 220903200, isCustom: false, description: '~7 human years' },
  { id: 'olympiad', name: 'Olympiad', emoji: '', category: 'time', baseUnitValue: 126230400, isCustom: false, description: '~4 years' },
  { id: 'us-presidential-term', name: 'US Presidential Term', emoji: '', category: 'time', baseUnitValue: 126230400, isCustom: false, description: '~4 years' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  SPEED  (base unit: m/s)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // -- Standard --
  { id: 'ms', name: 'Metres/second', emoji: '', category: 'speed', baseUnitValue: 1, isCustom: false },
  { id: 'kmh', name: 'km/h', emoji: '', category: 'speed', baseUnitValue: 0.277778, isCustom: false },
  { id: 'mph', name: 'mph', emoji: '', category: 'speed', baseUnitValue: 0.44704, isCustom: false },
  { id: 'knot', name: 'Knot', emoji: '', category: 'speed', baseUnitValue: 0.514444, isCustom: false },

  // -- Slow --
  { id: 'snail', name: 'Garden Snail', emoji: '', category: 'speed', baseUnitValue: 0.001, isCustom: false, description: '~0.001 m/s' },
  { id: 'sloth', name: 'Sloth (top speed)', emoji: '', category: 'speed', baseUnitValue: 0.03, isCustom: false, description: '~0.03 m/s' },
  { id: 'tortoise', name: 'Tortoise', emoji: '', category: 'speed', baseUnitValue: 0.07, isCustom: false, description: '~0.07 m/s' },
  { id: 'walking-pace', name: 'Human Walking Pace', emoji: '', category: 'speed', baseUnitValue: 1.4, isCustom: false, description: '~5 km/h' },
  { id: 'escalator', name: 'Escalator', emoji: '', category: 'speed', baseUnitValue: 0.5, isCustom: false, description: '~0.5 m/s' },

  // -- Animals --
  { id: 'chicken-run', name: 'Chicken (running)', emoji: '', category: 'speed', baseUnitValue: 4, isCustom: false, description: '~14.4 km/h' },
  { id: 'squirrel', name: 'Squirrel', emoji: '', category: 'speed', baseUnitValue: 8.9, isCustom: false, description: '~32 km/h' },
  { id: 't-rex-speed', name: 'T-Rex (estimated)', emoji: '', category: 'speed', baseUnitValue: 8, isCustom: false, description: '~29 km/h' },
  { id: 'house-cat-sprint', name: 'House Cat (sprint)', emoji: '', category: 'speed', baseUnitValue: 13.4, isCustom: false, description: '~48 km/h' },
  { id: 'usain-bolt', name: 'Usain Bolt (top speed)', emoji: '', category: 'speed', baseUnitValue: 12.27, isCustom: false, description: '~44.17 km/h' },
  { id: 'greyhound', name: 'Greyhound', emoji: '', category: 'speed', baseUnitValue: 17.7, isCustom: false, description: '~63.7 km/h' },
  { id: 'horse-gallop', name: 'Horse (gallop)', emoji: '', category: 'speed', baseUnitValue: 17.88, isCustom: false, description: '~64.4 km/h' },
  { id: 'lion', name: 'Lion', emoji: '', category: 'speed', baseUnitValue: 22.2, isCustom: false, description: '~80 km/h' },
  { id: 'cheetah', name: 'Cheetah', emoji: '', category: 'speed', baseUnitValue: 33.33, isCustom: false, description: '~120 km/h' },
  { id: 'peregrine-falcon', name: 'Peregrine Falcon (diving)', emoji: '', category: 'speed', baseUnitValue: 108.3, isCustom: false, description: '~390 km/h' },

  // -- Human-powered sport --
  { id: 'olympic-swimmer', name: 'Olympic Swimmer', emoji: '', category: 'speed', baseUnitValue: 2.29, isCustom: false, description: '~8.2 km/h' },
  { id: 'cyclist-tour', name: 'Tour de France Cyclist', emoji: '', category: 'speed', baseUnitValue: 11.2, isCustom: false, description: '~40 km/h avg' },

  // -- Vehicles & objects --
  { id: 'school-zone', name: 'School Zone Speed Limit', emoji: '', category: 'speed', baseUnitValue: 8.94, isCustom: false, description: '~32 km/h / 20 mph' },
  { id: 'baseball-pitch', name: 'Fastball Pitch', emoji: '', category: 'speed', baseUnitValue: 44.7, isCustom: false, description: '~161 km/h / 100 mph' },
  { id: 'tennis-serve', name: 'Pro Tennis Serve', emoji: '', category: 'speed', baseUnitValue: 69.4, isCustom: false, description: '~250 km/h' },
  { id: 'speed-of-sound', name: 'Speed of Sound', emoji: '', category: 'speed', baseUnitValue: 343, isCustom: false, description: '~1,235 km/h / Mach 1' },
  { id: 'bullet-9mm', name: '9mm Bullet', emoji: '', category: 'speed', baseUnitValue: 370, isCustom: false, description: '~1,332 km/h' },
  { id: 'concorde', name: 'Concorde', emoji: '', category: 'speed', baseUnitValue: 604, isCustom: false, description: '~2,180 km/h / Mach 2' },
  { id: 'iss-orbit', name: 'ISS (orbital speed)', emoji: '', category: 'speed', baseUnitValue: 7660, isCustom: false, description: '~27,576 km/h' },
  { id: 'speed-of-light', name: 'Speed of Light', emoji: '', category: 'speed', baseUnitValue: 299792458, isCustom: false, description: '~299,792 km/s' },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  DATA  (base unit: bytes)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // -- Standard --
  { id: 'bit', name: 'Bit', emoji: '', category: 'data', baseUnitValue: 0.125, isCustom: false, description: '1/8 of a byte' },
  { id: 'nibble', name: 'Nibble', emoji: '', category: 'data', baseUnitValue: 0.5, isCustom: false, description: '4 bits' },
  { id: 'byte', name: 'Byte', emoji: '', category: 'data', baseUnitValue: 1, isCustom: false, description: '8 bits' },
  { id: 'kilobyte', name: 'Kilobyte (KB)', emoji: '', category: 'data', baseUnitValue: 1024, isCustom: false, description: '1,024 bytes' },
  { id: 'megabyte', name: 'Megabyte (MB)', emoji: '', category: 'data', baseUnitValue: 1048576, isCustom: false, description: '1,024 KB' },
  { id: 'gigabyte', name: 'Gigabyte (GB)', emoji: '', category: 'data', baseUnitValue: 1073741824, isCustom: false, description: '1,024 MB' },
  { id: 'terabyte', name: 'Terabyte (TB)', emoji: '', category: 'data', baseUnitValue: 1099511627776, isCustom: false, description: '1,024 GB' },
  { id: 'petabyte', name: 'Petabyte (PB)', emoji: '', category: 'data', baseUnitValue: 1125899906842624, isCustom: false, description: '1,024 TB' },

  // -- Retro storage --
  { id: 'punch-card', name: 'Punch Card', emoji: '', category: 'data', baseUnitValue: 80, isCustom: false, description: '~80 bytes (80 columns)' },
  { id: 'floppy-8in', name: '8" Floppy Disk', emoji: '', category: 'data', baseUnitValue: 81920, isCustom: false, description: '~80 KB — the OG floppy' },
  { id: 'floppy-525', name: '5.25" Floppy Disk', emoji: '', category: 'data', baseUnitValue: 368640, isCustom: false, description: '~360 KB' },
  { id: 'floppy-35', name: '3.5" Floppy Disk', emoji: '', category: 'data', baseUnitValue: 1474560, isCustom: false, description: '~1.44 MB — the classic' },
  { id: 'zip-disk', name: 'Zip Disk', emoji: '', category: 'data', baseUnitValue: 104857600, isCustom: false, description: '~100 MB' },
  { id: 'cd-rom', name: 'CD-ROM', emoji: '', category: 'data', baseUnitValue: 737280000, isCustom: false, description: '~700 MB' },
  { id: 'dvd', name: 'DVD', emoji: '', category: 'data', baseUnitValue: 4700000000, isCustom: false, description: '~4.7 GB' },
  { id: 'blu-ray', name: 'Blu-ray Disc', emoji: '', category: 'data', baseUnitValue: 25000000000, isCustom: false, description: '~25 GB' },
  { id: 'minidisc', name: 'MiniDisc', emoji: '', category: 'data', baseUnitValue: 177000000, isCustom: false, description: '~177 MB (data mode)' },
  { id: 'jazz-drive', name: 'Jaz Drive', emoji: '', category: 'data', baseUnitValue: 1073741824, isCustom: false, description: '~1 GB — Iomega\'s dream' },
  { id: 'laserdisc', name: 'LaserDisc', emoji: '', category: 'data', baseUnitValue: 600000000, isCustom: false, description: '~600 MB per side' },

  // -- Text & documents --
  { id: 'tweet-old', name: 'Old Tweet (140 chars)', emoji: '', category: 'data', baseUnitValue: 140, isCustom: false, description: '~140 bytes (ASCII)' },
  { id: 'tweet-new', name: 'Modern Tweet (280 chars)', emoji: '', category: 'data', baseUnitValue: 280, isCustom: false, description: '~280 bytes (ASCII)' },
  { id: 'text-message', name: 'SMS Text Message', emoji: '', category: 'data', baseUnitValue: 160, isCustom: false, description: '~160 bytes (GSM)' },
  { id: 'page-of-text', name: 'Page of Text', emoji: '', category: 'data', baseUnitValue: 2000, isCustom: false, description: '~2 KB (~250 words)' },
  { id: 'short-email', name: 'Short Email', emoji: '', category: 'data', baseUnitValue: 5000, isCustom: false, description: '~5 KB' },
  { id: 'novel-avg', name: 'Average Novel', emoji: '', category: 'data', baseUnitValue: 500000, isCustom: false, description: '~500 KB (~80,000 words)' },
  { id: 'war-and-peace', name: 'War and Peace', emoji: '', category: 'data', baseUnitValue: 3200000, isCustom: false, description: '~3.2 MB (~580,000 words)' },
  { id: 'encyclopedia-britannica', name: 'Encyclopedia Britannica', emoji: '', category: 'data', baseUnitValue: 300000000, isCustom: false, description: '~300 MB (text only)' },
  { id: 'wikipedia-text', name: 'All of Wikipedia (text)', emoji: '', category: 'data', baseUnitValue: 22000000000, isCustom: false, description: '~22 GB (English, text only)' },
  { id: 'library-of-congress', name: 'Library of Congress (text)', emoji: '', category: 'data', baseUnitValue: 15000000000000, isCustom: false, description: '~15 TB of text' },

  // -- Photos & media --
  { id: 'nokia-photo', name: 'Nokia 3310 Photo', emoji: '', category: 'data', baseUnitValue: 15000, isCustom: false, description: '~15 KB — pixel art vibes' },
  { id: 'iphone-photo', name: 'iPhone Photo', emoji: '', category: 'data', baseUnitValue: 5000000, isCustom: false, description: '~5 MB (HEIC)' },
  { id: 'mp3-song', name: 'MP3 Song (avg)', emoji: '', category: 'data', baseUnitValue: 4000000, isCustom: false, description: '~4 MB (~4 min at 128 kbps)' },
  { id: 'flac-song', name: 'FLAC Song (lossless)', emoji: '', category: 'data', baseUnitValue: 30000000, isCustom: false, description: '~30 MB — audiophile edition' },
  { id: 'netflix-hour-sd', name: 'Netflix Hour (SD)', emoji: '', category: 'data', baseUnitValue: 700000000, isCustom: false, description: '~700 MB' },
  { id: 'netflix-hour-4k', name: 'Netflix Hour (4K)', emoji: '', category: 'data', baseUnitValue: 7000000000, isCustom: false, description: '~7 GB' },
  { id: 'youtube-cat-vid', name: 'YouTube Cat Video (2 min)', emoji: '', category: 'data', baseUnitValue: 20000000, isCustom: false, description: '~20 MB at 720p' },
  { id: 'tiktok-video', name: 'TikTok Video (60s)', emoji: '', category: 'data', baseUnitValue: 15000000, isCustom: false, description: '~15 MB' },

  // -- Games & software --
  { id: 'nes-cartridge', name: 'NES Cartridge', emoji: '', category: 'data', baseUnitValue: 262144, isCustom: false, description: '~256 KB (Super Mario Bros)' },
  { id: 'snes-cartridge', name: 'SNES Cartridge', emoji: '', category: 'data', baseUnitValue: 4194304, isCustom: false, description: '~4 MB max' },
  { id: 'n64-cartridge', name: 'N64 Cartridge', emoji: '', category: 'data', baseUnitValue: 67108864, isCustom: false, description: '~64 MB max' },
  { id: 'ps1-memory-card', name: 'PS1 Memory Card', emoji: '', category: 'data', baseUnitValue: 131072, isCustom: false, description: '~128 KB — guard it with your life' },
  { id: 'minecraft-world', name: 'Minecraft World (avg)', emoji: '', category: 'data', baseUnitValue: 500000000, isCustom: false, description: '~500 MB' },
  { id: 'cod-warzone', name: 'Call of Duty Install', emoji: '', category: 'data', baseUnitValue: 150000000000, isCustom: false, description: '~150 GB — RIP your hard drive' },
  { id: 'windows95', name: 'Windows 95', emoji: '', category: 'data', baseUnitValue: 50000000, isCustom: false, description: '~50 MB — fit on floppies!' },
  { id: 'windows11', name: 'Windows 11', emoji: '', category: 'data', baseUnitValue: 27000000000, isCustom: false, description: '~27 GB' },

  // -- Absurd & fun --
  { id: 'human-dna', name: 'Human Genome (text)', emoji: '', category: 'data', baseUnitValue: 750000000, isCustom: false, description: '~750 MB if stored as text' },
  { id: 'human-brain', name: 'Human Brain (estimated)', emoji: '', category: 'data', baseUnitValue: 2500000000000000, isCustom: false, description: '~2.5 PB — allegedly' },
  { id: 'internet-daily', name: 'Daily Internet Traffic', emoji: '', category: 'data', baseUnitValue: 4.5e+18, isCustom: false, description: '~4.5 exabytes/day' },
  { id: 'google-search', name: 'One Google Search', emoji: '', category: 'data', baseUnitValue: 500000, isCustom: false, description: '~500 KB of data processed' },
  { id: 'apollo-11-computer', name: 'Apollo 11 Computer (RAM)', emoji: '', category: 'data', baseUnitValue: 4096, isCustom: false, description: '~4 KB — got us to the moon' },
];
