// Mock data for the Pantry Management App

// Pantry Products
export const pantryProducts = [
  {
    id: '1',
    name: 'Organic Milk',
    quantity: '1 Gallon',
    manufacturingDate: '2025-01-15',
    expiryDate: '2025-02-15',
  },
  {
    id: '2',
    name: 'Whole Wheat Bread',
    quantity: '1 Loaf',
    manufacturingDate: '2025-01-20',
    expiryDate: '2025-01-27',
  },
  {
    id: '3',
    name: 'Eggs',
    quantity: '12 Count',
    manufacturingDate: '2025-01-18',
    expiryDate: '2025-02-08',
  },
  {
    id: '4',
    name: 'Cheddar Cheese',
    quantity: '8 oz',
    manufacturingDate: '2025-01-10',
    expiryDate: '2025-02-20',
  },
  {
    id: '5',
    name: 'Chicken Breast',
    quantity: '2 lbs',
    manufacturingDate: '2025-01-22',
    expiryDate: '2025-01-26',
  },
  {
    id: '6',
    name: 'Spinach',
    quantity: '1 Bunch',
    manufacturingDate: '2025-01-21',
    expiryDate: '2025-01-28',
  },
  {
    id: '7',
    name: 'Greek Yogurt',
    quantity: '32 oz',
    manufacturingDate: '2025-01-15',
    expiryDate: '2025-02-05',
  },
  {
    id: '8',
    name: 'Pasta',
    quantity: '16 oz',
    manufacturingDate: '2024-12-10',
    expiryDate: '2025-12-10',
  },
];

// Shopping List Items
export const shoppingListItems = [
  {
    id: '1',
    name: 'Almond Milk',
    quantity: '1 Gallon',
    isCompleted: false,
  },
  {
    id: '2',
    name: 'Bananas',
    quantity: '1 Bunch',
    isCompleted: true,
  },
  {
    id: '3',
    name: 'Oatmeal',
    quantity: '18 oz',
    isCompleted: false,
  },
  {
    id: '4',
    name: 'Tomatoes',
    quantity: '4 Count',
    isCompleted: false,
  },
  {
    id: '5',
    name: 'Olive Oil',
    quantity: '16 oz',
    isCompleted: true,
  },
];

// AI-Generated Shopping List
export const aiGeneratedItems = [
  {
    id: '1',
    name: 'Apples',
    quantity: '6 Count',
    reason: 'Based on your weekly consumption',
  },
  {
    id: '2',
    name: 'Ground Turkey',
    quantity: '1 lb',
    reason: 'For your taco recipe',
  },
  {
    id: '3',
    name: 'Brown Rice',
    quantity: '2 lb bag',
    reason: "You're running low",
  },
  {
    id: '4',
    name: 'Broccoli',
    quantity: '1 Head',
    reason: 'Pairs with your planned chicken',
  },
  {
    id: '5',
    name: 'Almond Butter',
    quantity: '16 oz',
    reason: 'Almost out based on usage pattern',
  },
];

// Shops
export const shops = [
  {
    id: '1',
    name: 'Whole Foods Market',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    distance: '0.8 miles',
    address: '123 Green St, Anytown, USA',
    coordinates: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: '2',
    name: 'Trader Joe\'s',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    distance: '1.2 miles',
    address: '456 Market St, Anytown, USA',
    coordinates: {
      latitude: 37.7896,
      longitude: -122.4368,
    },
  },
  {
    id: '3',
    name: 'Farmers Market',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    distance: '1.5 miles',
    address: '789 Farm Rd, Anytown, USA',
    coordinates: {
      latitude: 37.7912,
      longitude: -122.4265,
    },
  },
  {
    id: '4',
    name: 'Local Grocery',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    distance: '0.5 miles',
    address: '321 Main St, Anytown, USA',
    coordinates: {
      latitude: 37.7854,
      longitude: -122.4292,
    },
  },
  {
    id: '5',
    name: 'Organic Market',
    image: 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    distance: '2.1 miles',
    address: '555 Organic Way, Anytown, USA',
    coordinates: {
      latitude: 37.7831,
      longitude: -122.4221,
    },
  },
];

// Recipes
export const recipes = [
  {
    id: '1',
    title: 'Spinach and Feta Omelette',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    prepTime: '15 min',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '4 eggs',
      '1 cup spinach',
      '1/4 cup feta cheese',
      'Salt and pepper to taste',
    ],
    instructions: [
      'Whisk eggs in a bowl.',
      'Heat a non-stick pan over medium heat.',
      'Add spinach and cook until wilted.',
      'Pour eggs over spinach and cook until almost set.',
      'Sprinkle feta cheese on top and fold omelette.',
      'Season with salt and pepper.',
    ],
  },
  {
    id: '2',
    title: 'Chicken Stir Fry',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    prepTime: '25 min',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '1 lb chicken breast, sliced',
      '2 cups mixed vegetables',
      '3 tbsp soy sauce',
      '1 tbsp sesame oil',
      '2 cloves garlic, minced',
    ],
    instructions: [
      'Heat oil in a wok or large skillet.',
      'Add garlic and cook until fragrant.',
      'Add chicken and cook until no longer pink.',
      'Add vegetables and stir-fry until tender-crisp.',
      'Add soy sauce and sesame oil.',
      'Serve over rice.',
    ],
  },
  {
    id: '3',
    title: 'Greek Yogurt Parfait',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    prepTime: '10 min',
    servings: 1,
    difficulty: 'Easy',
    ingredients: [
      '1 cup Greek yogurt',
      '1/4 cup granola',
      '1/2 cup mixed berries',
      '1 tbsp honey',
    ],
    instructions: [
      'Layer half of the yogurt in a glass.',
      'Add half of the granola and berries.',
      'Repeat layers.',
      'Drizzle with honey.',
    ],
  },
  {
    id: '4',
    title: 'Pasta Primavera',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    prepTime: '30 min',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '8 oz pasta',
      '2 cups mixed vegetables',
      '2 tbsp olive oil',
      '2 cloves garlic, minced',
      '1/4 cup Parmesan cheese',
    ],
    instructions: [
      'Cook pasta according to package directions.',
      'Heat oil in a large skillet.',
      'Add garlic and cook until fragrant.',
      'Add vegetables and cook until tender.',
      'Toss with pasta and Parmesan cheese.',
    ],
  },
];

// Sustainability Tips
export const sustainabilityTips = [
  {
    id: '1',
    title: 'Proper Food Storage',
    description: 'Store fruits and vegetables in appropriate conditions to extend their shelf life. Keep potatoes, onions, and garlic in a cool, dark place, and most fruits and vegetables in the refrigerator.',
    category: 'Food Storage',
  },
  {
    id: '2',
    title: 'Meal Planning',
    description: 'Plan your meals for the week before shopping to avoid buying excess food that might go to waste. Make a shopping list and stick to it.',
    category: 'Shopping',
  },
  {
    id: '3',
    title: 'Use Leftovers Creatively',
    description: 'Transform leftovers into new meals. For example, use leftover chicken in a salad or sandwich, or blend overripe fruits into smoothies.',
    category: 'Cooking',
  },
  {
    id: '4',
    title: 'Composting',
    description: 'Start a compost bin for food scraps to reduce waste and create nutrient-rich soil for your garden.',
    category: 'Waste Reduction',
  },
  {
    id: '5',
    title: 'Understand Expiration Dates',
    description: '"Best by" and "use by" dates are often about quality, not safety. Many foods are still safe to eat after these dates. Use your senses to determine if food is still good.',
    category: 'Food Safety',
  },
];

// Filter Options
export const sortOptions = [
  { id: 'name_asc', label: 'Name (A-Z)' },
  { id: 'name_desc', label: 'Name (Z-A)' },
  { id: 'expiry_asc', label: 'Expiry Date (Earliest First)' },
  { id: 'expiry_desc', label: 'Expiry Date (Latest First)' },
  { id: 'mfg_asc', label: 'Manufacturing Date (Earliest First)' },
  { id: 'mfg_desc', label: 'Manufacturing Date (Latest First)' },
];

// User Profile
export const userProfile = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  preferences: {
    dietaryRestrictions: ['Vegetarian'],
    allergies: ['Nuts', 'Shellfish'],
    favoriteStores: ['Whole Foods', 'Trader Joe\'s'],
  },
};

// Notifications
export const notifications = [
  {
    id: '1',
    title: 'Expiring Soon',
    message: 'Your milk will expire in 2 days.',
    date: '2025-01-23',
    read: false,
  },
  {
    id: '2',
    title: 'Shopping Reminder',
    message: 'Don\'t forget to buy items on your shopping list today.',
    date: '2025-01-22',
    read: true,
  },
  {
    id: '3',
    title: 'New Recipe Available',
    message: 'Check out the new recipe using ingredients in your pantry.',
    date: '2025-01-20',
    read: true,
  },
  {
    id: '4',
    title: 'Farmers Market Today',
    message: 'Your favorite farmers market is open today from 8am to 1pm.',
    date: '2025-01-18',
    read: true,
  },
];