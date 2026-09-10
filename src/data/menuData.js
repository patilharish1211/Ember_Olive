export const categories = [
  { id: 'all', name: 'All Dishes' },
  { id: 'starters', name: 'Starters' },
  { id: 'soups', name: 'Soups & Salads' },
  { id: 'mains', name: 'Signature Mains' },
  { id: 'pasta', name: 'Artisanal Pasta & Pizza' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'beverages', name: 'Craft Beverages' }
];

export const menuItems = [
  // Starters
  {
    id: 's1',
    name: 'Charcoal Paneer Tikka',
    category: 'starters',
    price: 349,
    description: 'Smoky tandoori cottage cheese cubes marinated in aromatic spices, served with fresh mint chutney & charred shallots.',
    tags: ['Chef Special', 'Vegetarian'],
    image: '/images/paneer-tikka.jpg',
    featured: true
  },
  {
    id: 's2',
    name: 'Truffle & Edamame Dumplings',
    category: 'starters',
    price: 389,
    description: 'Hand-folded delicate dumplings stuffed with crushed edamame, white truffle oil essence, and ponzu drizzle.',
    tags: ['Vegetarian', 'Vegan'],
    featured: false
  },
  {
    id: 's3',
    name: 'Crispy Lotus Stem in Honey Chilli',
    category: 'starters',
    price: 329,
    description: 'Thin slice crunch lotus root tossed in sesame oil, kaffir lime leaf, and organic wild honey.',
    tags: ['Vegetarian'],
    featured: false
  },
  {
    id: 's4',
    name: 'Wild Mushroom Arancini',
    category: 'starters',
    price: 369,
    description: 'Golden fried risotto balls stuffed with smoked mozzarella & porcini mushroom ragù with garlic aioli.',
    tags: ['Vegetarian', 'Chef Special'],
    featured: false
  },

  // Soups & Salads
  {
    id: 'so1',
    name: 'Roasted Pumpkin & Sage Bisque',
    category: 'soups',
    price: 279,
    description: 'Velvety roasted butternut squash, toasted pumpkin seeds, coconut cream, and brown butter sage crisp.',
    tags: ['Vegetarian', 'Gluten Free'],
    featured: false
  },
  {
    id: 'so2',
    name: 'Burrata & Heirloom Tomato Salad',
    category: 'soups',
    price: 429,
    description: 'Creamy Italian burrata, heirloom tomatoes, aged balsamic reduction, pine nuts, and fresh basil oil.',
    tags: ['Vegetarian', 'Gluten Free'],
    featured: false
  },
  {
    id: 'so3',
    name: 'Smoked Garlic & Wild Greens Soup',
    category: 'soups',
    price: 259,
    description: 'Slow-simmered garlic broth infused with baby spinach, kale, and toasted sourdough croutons.',
    tags: ['Vegan'],
    featured: false
  },

  // Mains
  {
    id: 'm1',
    name: 'Ember Signature Biryani',
    category: 'mains',
    price: 449,
    description: 'Aged long-grain basmati rice cooked dum-style with aromatic spices, caramelized onions, saffron, and seasonal vegetables.',
    tags: ['Chef Special', 'Vegetarian'],
    image: '/images/biryani.jpg',
    featured: true
  },
  {
    id: 'm2',
    name: 'Smoky Dal Ember',
    category: 'mains',
    price: 329,
    description: '24-hour slow-cooked black lentils enriched with churned white butter, whole spices, and charcoal smoke aroma.',
    tags: ['Vegetarian', 'Gluten Free'],
    featured: false
  },
  {
    id: 'm3',
    name: 'Kashmiri Saffron Paneer Gravy',
    category: 'mains',
    price: 399,
    description: 'Cottage cheese simmered in a rich almond and saffron gravy garnished with toasted melon seeds & rose petals.',
    tags: ['Chef Special', 'Vegetarian'],
    featured: false
  },
  {
    id: 'm4',
    name: 'Wild Mushroom & Truffle Risotto',
    category: 'mains',
    price: 489,
    description: 'Carnaroli rice cooked with wild shiitake, porcini mushrooms, parmesan shavings, and black truffle butter.',
    tags: ['Vegetarian', 'Gluten Free'],
    featured: false
  },

  // Pasta & Pizza
  {
    id: 'p1',
    name: 'Truffle Mushroom Pasta',
    category: 'pasta',
    price: 499,
    description: 'House-made fettuccine tossed in a rich parmesan & wild mushroom reduction topped with fresh shaved black truffles.',
    tags: ['Chef Special', 'Vegetarian'],
    image: '/images/truffle-pasta.jpg',
    featured: true
  },
  {
    id: 'p2',
    name: 'Neapolitan Wood-Fired Margherita',
    category: 'pasta',
    price: 429,
    description: 'San Marzano tomato base, fresh buffalo mozzarella, extra virgin olive oil, and sweet basil leaves.',
    tags: ['Vegetarian'],
    featured: false
  },
  {
    id: 'p3',
    name: 'Pesto Genovese Penne',
    category: 'pasta',
    price: 419,
    description: 'Artisanal penne coated in vibrant pine nut & basil pesto, sun-dried tomatoes, and parmesan crisp.',
    tags: ['Vegetarian'],
    featured: false
  },
  {
    id: 'p4',
    name: 'Quattro Formaggi Pizza',
    category: 'pasta',
    price: 479,
    description: 'Four cheese blend of Gorgonzola, Mozzarella, Parmesan, and Fontina finished with wild honey drizzle.',
    tags: ['Chef Special', 'Vegetarian'],
    featured: false
  },

  // Desserts
  {
    id: 'd1',
    name: 'Deconstructed Smoked Chocolate Tart',
    category: 'desserts',
    price: 349,
    description: '70% Valrhona dark chocolate ganache, sea salt crystals, hazelnut praline, and gold leaf finish.',
    tags: ['Chef Special', 'Vegetarian'],
    featured: false
  },
  {
    id: 'd2',
    name: 'Saffron & Cardamom Panna Cotta',
    category: 'desserts',
    price: 299,
    description: 'Silky smooth cream infused with Kashmiri saffron, pistachios, and edible organic rose dust.',
    tags: ['Vegetarian', 'Gluten Free'],
    featured: false
  },
  {
    id: 'd3',
    name: 'Warm Pistachio Lava Cake',
    category: 'desserts',
    price: 329,
    description: 'Molten Sicilian pistachio core with artisanal Madagascar vanilla bean ice cream.',
    tags: ['Vegetarian'],
    featured: false
  },

  // Beverages
  {
    id: 'b1',
    name: 'Smoked Rosemary & Passionfruit Spritz',
    category: 'beverages',
    price: 249,
    description: 'Cold-pressed passionfruit, torched rosemary sprig, sparkling tonic, and elderflower mist.',
    tags: ['Non-Alcoholic'],
    featured: false
  },
  {
    id: 'b2',
    name: 'Hibiscus & Rose Cold Brew Tea',
    category: 'beverages',
    price: 199,
    description: 'Organic hibiscus flowers infused with Damask rose water, citrus zest, and agave nectar.',
    tags: ['Non-Alcoholic', 'Vegan'],
    featured: false
  },
  {
    id: 'b3',
    name: 'Artisanal Charcoal Latte',
    category: 'beverages',
    price: 229,
    description: 'Activated charcoal blend with espresso, steamed oat milk, and vanilla bean syrup.',
    tags: ['Non-Alcoholic', 'Vegan'],
    featured: false
  }
];
