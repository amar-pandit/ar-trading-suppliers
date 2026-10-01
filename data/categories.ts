export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  sizes: string[];
  colors: string[];
  fabric: string;
  customization: string[];
  images: string[];
};

const makeImages = (folder: string, prefix: string) => [
  `/images/products/${folder}/${prefix}-01.png`,
  `/images/products/${folder}/${prefix}-02.png`,
  `/images/products/${folder}/${prefix}-03.png`,
  `/images/products/${folder}/${prefix}-04.png`,
];

export const products: Product[] = [
  // =========================
  // MEN'S WEAR
  // =========================
  {
    id: "mens-001",
    slug: "mens-wear-01",
    name: "Men's Wear Collection 01",
    category: "mens",
    categoryLabel: "Men's Wear",
    description:
      "Quality men's garment suitable for wholesale and bulk requirements.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "White", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("mens", "mens"),
  },
  {
    id: "mens-002",
    slug: "mens-wear-02",
    name: "Men's Wear Collection 02",
    category: "mens",
    categoryLabel: "Men's Wear",
    description:
      "Quality men's garment suitable for wholesale and bulk requirements.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("mens", "mens"),
  },
  {
    id: "mens-003",
    slug: "mens-wear-03",
    name: "Men's Wear Collection 03",
    category: "mens",
    categoryLabel: "Men's Wear",
    description:
      "Quality men's garment suitable for wholesale and bulk requirements.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Olive", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("mens", "mens"),
  },
  {
    id: "mens-004",
    slug: "mens-wear-04",
    name: "Men's Wear Collection 04",
    category: "mens",
    categoryLabel: "Men's Wear",
    description:
      "Quality men's garment suitable for wholesale and bulk requirements.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("mens", "mens"),
  },

  // =========================
  // WOMEN'S WEAR
  // =========================
  {
    id: "womens-001",
    slug: "womens-wear-01",
    name: "Women's Wear Collection 01",
    category: "womens",
    categoryLabel: "Women's Wear",
    description:
      "Women's garment collection suitable for wholesale and bulk orders.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Pink", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("womens", "womens"),
  },
  {
    id: "womens-002",
    slug: "womens-wear-02",
    name: "Women's Wear Collection 02",
    category: "womens",
    categoryLabel: "Women's Wear",
    description:
      "Women's garment collection suitable for wholesale and bulk orders.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Blue", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("womens", "womens"),
  },
  {
    id: "womens-003",
    slug: "womens-wear-03",
    name: "Women's Wear Collection 03",
    category: "womens",
    categoryLabel: "Women's Wear",
    description:
      "Women's garment collection suitable for wholesale and bulk orders.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Red", "White", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("womens", "womens"),
  },
  {
    id: "womens-004",
    slug: "womens-wear-04",
    name: "Women's Wear Collection 04",
    category: "womens",
    categoryLabel: "Women's Wear",
    description:
      "Women's garment collection suitable for wholesale and bulk orders.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Pink", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("womens", "womens"),
  },

  // =========================
  // KIDS
  // =========================
  {
    id: "kids-001",
    slug: "kids-wear-01",
    name: "Kids Wear Collection 01",
    category: "kids",
    categoryLabel: "Kids",
    description:
      "Kids garment collection suitable for wholesale and bulk supply.",
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["Black", "White", "Blue", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("kids", "kids"),
  },
  {
    id: "kids-002",
    slug: "kids-wear-02",
    name: "Kids Wear Collection 02",
    category: "kids",
    categoryLabel: "Kids",
    description:
      "Kids garment collection suitable for wholesale and bulk supply.",
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["Black", "White", "Red", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("kids", "kids"),
  },
  {
    id: "kids-003",
    slug: "kids-wear-03",
    name: "Kids Wear Collection 03",
    category: "kids",
    categoryLabel: "Kids",
    description:
      "Kids garment collection suitable for wholesale and bulk supply.",
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["Blue", "White", "Green", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("kids", "kids"),
  },
  {
    id: "kids-004",
    slug: "kids-wear-04",
    name: "Kids Wear Collection 04",
    category: "kids",
    categoryLabel: "Kids",
    description:
      "Kids garment collection suitable for wholesale and bulk supply.",
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["Black", "Blue", "Yellow", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("kids", "kids"),
  },

  // =========================
  // PLUS SIZE
  // =========================
  {
    id: "plus-001",
    slug: "plus-size-01",
    name: "Plus Size Collection 01",
    category: "plus-size",
    categoryLabel: "Plus Size",
    description:
      "Plus-size garment collection suitable for wholesale and bulk supply.",
    sizes: ["XL", "XXL", "3XL", "4XL", "5XL"],
    colors: ["Black", "Navy", "Grey", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("plus-size", "plus-size"),
  },
  {
    id: "plus-002",
    slug: "plus-size-02",
    name: "Plus Size Collection 02",
    category: "plus-size",
    categoryLabel: "Plus Size",
    description:
      "Plus-size garment collection suitable for wholesale and bulk supply.",
    sizes: ["XL", "XXL", "3XL", "4XL", "5XL"],
    colors: ["Black", "White", "Olive", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("plus-size", "plus-size"),
  },
  {
    id: "plus-003",
    slug: "plus-size-03",
    name: "Plus Size Collection 03",
    category: "plus-size",
    categoryLabel: "Plus Size",
    description:
      "Plus-size garment collection suitable for wholesale and bulk supply.",
    sizes: ["XL", "XXL", "3XL", "4XL", "5XL"],
    colors: ["Black", "Navy", "White", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("plus-size", "plus-size"),
  },
  {
    id: "plus-004",
    slug: "plus-size-04",
    name: "Plus Size Collection 04",
    category: "plus-size",
    categoryLabel: "Plus Size",
    description:
      "Plus-size garment collection suitable for wholesale and bulk supply.",
    sizes: ["XL", "XXL", "3XL", "4XL", "5XL"],
    colors: ["Black", "Grey", "Navy", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("plus-size", "plus-size"),
  },

  // =========================
  // JACKETS
  // =========================
  {
    id: "jacket-001",
    slug: "jacket-01",
    name: "Jacket Collection 01",
    category: "jackets",
    categoryLabel: "Jackets",
    description:
      "Jacket collection suitable for wholesale and bulk garment requirements.",
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    colors: ["Black", "Navy", "Olive", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("jackets", "jacket"),
  },
  {
    id: "jacket-002",
    slug: "jacket-02",
    name: "Jacket Collection 02",
    category: "jackets",
    categoryLabel: "Jackets",
    description:
      "Jacket collection suitable for wholesale and bulk garment requirements.",
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    colors: ["Black", "Navy", "Grey", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("jackets", "jacket"),
  },
  {
    id: "jacket-003",
    slug: "jacket-03",
    name: "Jacket Collection 03",
    category: "jackets",
    categoryLabel: "Jackets",
    description:
      "Jacket collection suitable for wholesale and bulk garment requirements.",
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    colors: ["Black", "Olive", "Navy", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("jackets", "jacket"),
  },
  {
    id: "jacket-004",
    slug: "jacket-04",
    name: "Jacket Collection 04",
    category: "jackets",
    categoryLabel: "Jackets",
    description:
      "Jacket collection suitable for wholesale and bulk garment requirements.",
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    colors: ["Black", "Grey", "Navy", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("jackets", "jacket"),
  },

  // =========================
  // HOODIES
  // =========================
  {
    id: "hoodie-001",
    slug: "hoodie-01",
    name: "Hoodie Collection 01",
    category: "hoodies",
    categoryLabel: "Hoodies",
    description:
      "Hoodie collection suitable for wholesale and bulk garment orders.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom print"],
    images: makeImages("hoodies", "hoodie"),
  },
  {
    id: "hoodie-002",
    slug: "hoodie-02",
    name: "Hoodie Collection 02",
    category: "hoodies",
    categoryLabel: "Hoodies",
    description:
      "Hoodie collection suitable for wholesale and bulk garment orders.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom print"],
    images: makeImages("hoodies", "hoodie"),
  },
  {
    id: "hoodie-003",
    slug: "hoodie-03",
    name: "Hoodie Collection 03",
    category: "hoodies",
    categoryLabel: "Hoodies",
    description:
      "Hoodie collection suitable for wholesale and bulk garment orders.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Olive", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom print"],
    images: makeImages("hoodies", "hoodie"),
  },
  {
    id: "hoodie-004",
    slug: "hoodie-04",
    name: "Hoodie Collection 04",
    category: "hoodies",
    categoryLabel: "Hoodies",
    description:
      "Hoodie collection suitable for wholesale and bulk garment orders.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Red", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom print"],
    images: makeImages("hoodies", "hoodie"),
  },

  // =========================
  // T-SHIRTS
  // =========================
  {
    id: "tshirt-001",
    slug: "tshirt-01",
    name: "T-Shirt Collection 01",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    description:
      "T-shirt collection suitable for wholesale and bulk garment requirements.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom print"],
    images: makeImages("tshirts", "tshirts"),
  },
  {
    id: "tshirt-002",
    slug: "tshirt-02",
    name: "T-Shirt Collection 02",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    description:
      "T-shirt collection suitable for wholesale and bulk garment requirements.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom print"],
    images: makeImages("tshirts", "tshirts"),
  },
  {
    id: "tshirt-003",
    slug: "tshirt-03",
    name: "T-Shirt Collection 03",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    description:
      "T-shirt collection suitable for wholesale and bulk garment requirements.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Red", "White", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom print"],
    images: makeImages("tshirts", "tshirts"),
  },
  {
    id: "tshirt-004",
    slug: "tshirt-04",
    name: "T-Shirt Collection 04",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    description:
      "T-shirt collection suitable for wholesale and bulk garment requirements.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Green", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom print"],
    images: makeImages("tshirts", "tshirts"),
  },

  // =========================
  // PANTS
  // =========================
  {
    id: "pants-001",
    slug: "pants-01",
    name: "Pants Collection 01",
    category: "pants",
    categoryLabel: "Pants",
    description:
      "Pants collection suitable for wholesale and bulk garment requirements.",
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    colors: ["Black", "Navy", "Grey", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("pants", "pants"),
  },
  {
    id: "pants-002",
    slug: "pants-02",
    name: "Pants Collection 02",
    category: "pants",
    categoryLabel: "Pants",
    description:
      "Pants collection suitable for wholesale and bulk garment requirements.",
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    colors: ["Black", "Blue", "Grey", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("pants", "pants"),
  },
  {
    id: "pants-003",
    slug: "pants-03",
    name: "Pants Collection 03",
    category: "pants",
    categoryLabel: "Pants",
    description:
      "Pants collection suitable for wholesale and bulk garment requirements.",
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    colors: ["Black", "Navy", "Olive", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("pants", "pants"),
  },
  {
    id: "pants-004",
    slug: "pants-04",
    name: "Pants Collection 04",
    category: "pants",
    categoryLabel: "Pants",
    description:
      "Pants collection suitable for wholesale and bulk garment requirements.",
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    colors: ["Black", "Grey", "Khaki", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("pants", "pants"),
  },

  // =========================
  // OUTERWEAR / WINDCHEATER
  // =========================
  {
    id: "windcheater-001",
    slug: "windcheater-01",
    name: "Windcheater Collection 01",
    category: "windcheater",
    categoryLabel: "Outerwear",
    description:
      "Outerwear collection suitable for wholesale and bulk garment supply.",
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    colors: ["Black", "Navy", "Grey", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("windcheater", "windcheater"),
  },
  {
    id: "windcheater-002",
    slug: "windcheater-02",
    name: "Windcheater Collection 02",
    category: "windcheater",
    categoryLabel: "Outerwear",
    description:
      "Outerwear collection suitable for wholesale and bulk garment supply.",
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    colors: ["Black", "White", "Navy", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("windcheater", "windcheater"),
  },
  {
    id: "windcheater-003",
    slug: "windcheater-03",
    name: "Windcheater Collection 03",
    category: "windcheater",
    categoryLabel: "Outerwear",
    description:
      "Outerwear collection suitable for wholesale and bulk garment supply.",
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    colors: ["Black", "Olive", "Grey", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("windcheater", "windcheater"),
  },
  {
    id: "windcheater-004",
    slug: "windcheater-04",
    name: "Windcheater Collection 04",
    category: "windcheater",
    categoryLabel: "Outerwear",
    description:
      "Outerwear collection suitable for wholesale and bulk garment supply.",
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    colors: ["Black", "Navy", "Grey", "Custom"],
    fabric: "Available based on requirement",
    customization: ["Custom color", "Custom size", "Custom design"],
    images: makeImages("windcheater", "windcheater"),
  },
];