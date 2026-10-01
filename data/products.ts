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

const createProduct = ({
  id,
  slug,
  name,
  category,
  categoryLabel,
  image,
}: {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  image: string;
}): Product => ({
  id,
  slug,
  name,
  category,
  categoryLabel,
  description:
    "Quality garment suitable for wholesale, bulk orders and custom requirements.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Black", "White", "Navy", "Custom"],
  fabric: "Available based on requirement",
  customization: [
    "Custom color",
    "Custom size",
    "Custom design",
  ],
  images: [image],
});

export const products: Product[] = [
  // =====================================================
  // MEN'S WEAR - JPEG
  // =====================================================

  createProduct({
    id: "mens-jpg-01",
    slug: "mens-wear-jpg-01",
    name: "Men's Wear 01",
    category: "mens",
    categoryLabel: "Men's Wear",
    image: "/images/products/mens/mens-01.jpeg",
  }),

  createProduct({
    id: "mens-jpg-02",
    slug: "mens-wear-jpg-02",
    name: "Men's Wear 02",
    category: "mens",
    categoryLabel: "Men's Wear",
    image: "/images/products/mens/mens-02.jpeg",
  }),

  createProduct({
    id: "mens-jpg-03",
    slug: "mens-wear-jpg-03",
    name: "Men's Wear 03",
    category: "mens",
    categoryLabel: "Men's Wear",
    image: "/images/products/mens/mens-03.jpeg",
  }),

  createProduct({
    id: "mens-jpg-04",
    slug: "mens-wear-jpg-04",
    name: "Men's Wear 04",
    category: "mens",
    categoryLabel: "Men's Wear",
    image: "/images/products/mens/mens-04.jpeg",
  }),

  // MEN'S WEAR - PNG

  createProduct({
    id: "mens-png-01",
    slug: "mens-wear-png-01",
    name: "Men's Wear 05",
    category: "mens",
    categoryLabel: "Men's Wear",
    image: "/images/products/mens/mens-01.png",
  }),

  createProduct({
    id: "mens-png-02",
    slug: "mens-wear-png-02",
    name: "Men's Wear 06",
    category: "mens",
    categoryLabel: "Men's Wear",
    image: "/images/products/mens/mens-02.png",
  }),

  createProduct({
    id: "mens-png-03",
    slug: "mens-wear-png-03",
    name: "Men's Wear 07",
    category: "mens",
    categoryLabel: "Men's Wear",
    image: "/images/products/mens/mens-03.png",
  }),

  createProduct({
    id: "mens-png-04",
    slug: "mens-wear-png-04",
    name: "Men's Wear 08",
    category: "mens",
    categoryLabel: "Men's Wear",
    image: "/images/products/mens/mens-04.png",
  }),

  // =====================================================
  // WOMEN'S WEAR - PNG
  // =====================================================

  createProduct({
    id: "womens-01",
    slug: "womens-wear-01",
    name: "Women's Wear 01",
    category: "womens",
    categoryLabel: "Women's Wear",
    image: "/images/products/womens/womens-01.png",
  }),

  createProduct({
    id: "womens-02",
    slug: "womens-wear-02",
    name: "Women's Wear 02",
    category: "womens",
    categoryLabel: "Women's Wear",
    image: "/images/products/womens/womens-02.png",
  }),

  createProduct({
    id: "womens-03",
    slug: "womens-wear-03",
    name: "Women's Wear 03",
    category: "womens",
    categoryLabel: "Women's Wear",
    image: "/images/products/womens/womens-03.png",
  }),

  createProduct({
    id: "womens-04",
    slug: "womens-wear-04",
    name: "Women's Wear 04",
    category: "womens",
    categoryLabel: "Women's Wear",
    image: "/images/products/womens/womens-04.png",
  }),

  // =====================================================
  // KIDS - PNG
  // =====================================================

  createProduct({
    id: "kids-01",
    slug: "kids-wear-01",
    name: "Kids Wear 01",
    category: "kids",
    categoryLabel: "Kids",
    image: "/images/products/kids/kids-01.png",
  }),

  createProduct({
    id: "kids-02",
    slug: "kids-wear-02",
    name: "Kids Wear 02",
    category: "kids",
    categoryLabel: "Kids",
    image: "/images/products/kids/kids-02.png",
  }),

  createProduct({
    id: "kids-03",
    slug: "kids-wear-03",
    name: "Kids Wear 03",
    category: "kids",
    categoryLabel: "Kids",
    image: "/images/products/kids/kids-03.png",
  }),

  createProduct({
    id: "kids-04",
    slug: "kids-wear-04",
    name: "Kids Wear 04",
    category: "kids",
    categoryLabel: "Kids",
    image: "/images/products/kids/kids-04.png",
  }),

  // =====================================================
  // PLUS SIZE - PNG
  // =====================================================

  createProduct({
    id: "plus-01",
    slug: "plus-size-01",
    name: "Plus Size 01",
    category: "plus-size",
    categoryLabel: "Plus Size",
    image: "/images/products/plus-size/plus-size-01.png",
  }),

  createProduct({
    id: "plus-02",
    slug: "plus-size-02",
    name: "Plus Size 02",
    category: "plus-size",
    categoryLabel: "Plus Size",
    image: "/images/products/plus-size/plus-size-02.png",
  }),

  createProduct({
    id: "plus-03",
    slug: "plus-size-03",
    name: "Plus Size 03",
    category: "plus-size",
    categoryLabel: "Plus Size",
    image: "/images/products/plus-size/plus-size-03.png",
  }),

  createProduct({
    id: "plus-04",
    slug: "plus-size-04",
    name: "Plus Size 04",
    category: "plus-size",
    categoryLabel: "Plus Size",
    image: "/images/products/plus-size/plus-size-04.png",
  }),

  // =====================================================
  // JACKETS - JPEG
  // =====================================================

  createProduct({
    id: "jacket-jpg-01",
    slug: "jacket-01",
    name: "Jacket 01",
    category: "jackets",
    categoryLabel: "Jackets",
    image: "/images/products/jackets/jacket-01.jpeg",
  }),

  createProduct({
    id: "jacket-jpg-02",
    slug: "jacket-02",
    name: "Jacket 02",
    category: "jackets",
    categoryLabel: "Jackets",
    image: "/images/products/jackets/jacket-02.jpeg",
  }),

  createProduct({
    id: "jacket-jpg-03",
    slug: "jacket-03",
    name: "Jacket 03",
    category: "jackets",
    categoryLabel: "Jackets",
    image: "/images/products/jackets/jacket-03.jpeg",
  }),

  createProduct({
    id: "jacket-jpg-04",
    slug: "jacket-04",
    name: "Jacket 04",
    category: "jackets",
    categoryLabel: "Jackets",
    image: "/images/products/jackets/jacket-04.jpeg",
  }),

  createProduct({
    id: "jacket-jpg-05",
    slug: "jacket-05",
    name: "Jacket 05",
    category: "jackets",
    categoryLabel: "Jackets",
    image: "/images/products/jackets/jacket-05.jpeg",
  }),

  createProduct({
    id: "jacket-jpg-06",
    slug: "jacket-06",
    name: "Jacket 06",
    category: "jackets",
    categoryLabel: "Jackets",
    image: "/images/products/jackets/jacket-06.jpeg",
  }),

  // JACKETS - EXISTING ROOT PNG

  createProduct({
    id: "jacket-png-front",
    slug: "premium-jacket-front",
    name: "Premium Jacket Front",
    category: "jackets",
    categoryLabel: "Jackets",
    image: "/images/jacket-front.png",
  }),

  createProduct({
    id: "jacket-png-back",
    slug: "premium-jacket-back",
    name: "Premium Jacket Back",
    category: "jackets",
    categoryLabel: "Jackets",
    image: "/images/jacket-back.png",
  }),

  createProduct({
    id: "jacket-png-detail",
    slug: "premium-jacket-detail",
    name: "Premium Jacket Detail",
    category: "jackets",
    categoryLabel: "Jackets",
    image: "/images/jacket-detail.png",
  }),

  // =====================================================
  // HOODIES - PNG
  // =====================================================

  createProduct({
    id: "hoodie-01",
    slug: "hoodie-01",
    name: "Hoodie 01",
    category: "hoodies",
    categoryLabel: "Hoodies",
    image: "/images/products/hoodies/hoodie-01.png",
  }),

  createProduct({
    id: "hoodie-02",
    slug: "hoodie-02",
    name: "Hoodie 02",
    category: "hoodies",
    categoryLabel: "Hoodies",
    image: "/images/products/hoodies/hoodie-02.png",
  }),

  createProduct({
    id: "hoodie-03",
    slug: "hoodie-03",
    name: "Hoodie 03",
    category: "hoodies",
    categoryLabel: "Hoodies",
    image: "/images/products/hoodies/hoodie-03.png",
  }),

  createProduct({
    id: "hoodie-04",
    slug: "hoodie-04",
    name: "Hoodie 04",
    category: "hoodies",
    categoryLabel: "Hoodies",
    image: "/images/products/hoodies/hoodie-04.png",
  }),

  // =====================================================
  // T-SHIRTS - JPEG
  // =====================================================

  createProduct({
    id: "tshirt-jpg-01",
    slug: "tshirt-01",
    name: "T-Shirt 01",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    image: "/images/products/tshirts/tshirts-01.jpeg",
  }),

  createProduct({
    id: "tshirt-jpg-02",
    slug: "tshirt-02",
    name: "T-Shirt 02",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    image: "/images/products/tshirts/tshirts-02.jpeg",
  }),

  createProduct({
    id: "tshirt-jpg-03",
    slug: "tshirt-03",
    name: "T-Shirt 03",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    image: "/images/products/tshirts/tshirts-03.jpeg",
  }),

  createProduct({
    id: "tshirt-jpg-04",
    slug: "tshirt-04",
    name: "T-Shirt 04",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    image: "/images/products/tshirts/tshirts-04.jpeg",
  }),

  createProduct({
    id: "tshirt-jpg-05",
    slug: "tshirt-05",
    name: "T-Shirt 05",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    image: "/images/products/tshirts/tshirts-05.jpeg",
  }),

  createProduct({
    id: "tshirt-jpg-06",
    slug: "tshirt-06",
    name: "T-Shirt 06",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    image: "/images/products/tshirts/tshirts-06.jpeg",
  }),

  // T-SHIRTS - PNG

  createProduct({
    id: "tshirt-png-01",
    slug: "tshirt-png-01",
    name: "T-Shirt 07",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    image: "/images/products/tshirts/tshirts-01.png",
  }),

  createProduct({
    id: "tshirt-png-02",
    slug: "tshirt-png-02",
    name: "T-Shirt 08",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    image: "/images/products/tshirts/tshirts-02.png",
  }),

  createProduct({
    id: "tshirt-png-03",
    slug: "tshirt-png-03",
    name: "T-Shirt 09",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    image: "/images/products/tshirts/tshirts-03.png",
  }),

  createProduct({
    id: "tshirt-png-04",
    slug: "tshirt-png-04",
    name: "T-Shirt 10",
    category: "tshirts",
    categoryLabel: "T-Shirts",
    image: "/images/products/tshirts/tshirts-04.png",
  }),

  // =====================================================
  // SHIRTS - JPEG
  // =====================================================

  createProduct({
    id: "shirt-01",
    slug: "shirt-01",
    name: "Shirt 01",
    category: "shirts",
    categoryLabel: "Shirts",
    image: "/images/products/shirts/shirts-01.jpeg",
  }),

  createProduct({
    id: "shirt-02",
    slug: "shirt-02",
    name: "Shirt 02",
    category: "shirts",
    categoryLabel: "Shirts",
    image: "/images/products/shirts/shirts-02.jpeg",
  }),

  createProduct({
    id: "shirt-03",
    slug: "shirt-03",
    name: "Shirt 03",
    category: "shirts",
    categoryLabel: "Shirts",
    image: "/images/products/shirts/shirts-03.jpeg",
  }),

  createProduct({
    id: "shirt-04",
    slug: "shirt-04",
    name: "Shirt 04",
    category: "shirts",
    categoryLabel: "Shirts",
    image: "/images/products/shirts/shirts-04.jpeg",
  }),

  createProduct({
    id: "shirt-05",
    slug: "shirt-05",
    name: "Shirt 05",
    category: "shirts",
    categoryLabel: "Shirts",
    image: "/images/products/shirts/shirts-05.jpeg",
  }),

  createProduct({
    id: "shirt-06",
    slug: "shirt-06",
    name: "Shirt 06",
    category: "shirts",
    categoryLabel: "Shirts",
    image: "/images/products/shirts/shirts-06.jpeg",
  }),

  // =====================================================
  // PANTS - JPEG
  // =====================================================

  createProduct({
    id: "pants-jpg-01",
    slug: "pants-01",
    name: "Pants 01",
    category: "pants",
    categoryLabel: "Pants",
    image: "/images/products/pants/pants-01.jpeg",
  }),

  createProduct({
    id: "pants-jpg-02",
    slug: "pants-02",
    name: "Pants 02",
    category: "pants",
    categoryLabel: "Pants",
    image: "/images/products/pants/pants-02.jpeg",
  }),

  createProduct({
    id: "pants-jpg-03",
    slug: "pants-03",
    name: "Pants 03",
    category: "pants",
    categoryLabel: "Pants",
    image: "/images/products/pants/pants-03.jpeg",
  }),

  createProduct({
    id: "pants-jpg-04",
    slug: "pants-04",
    name: "Pants 04",
    category: "pants",
    categoryLabel: "Pants",
    image: "/images/products/pants/pants-04.jpeg",
  }),

  createProduct({
    id: "pants-jpg-05",
    slug: "pants-05",
    name: "Pants 05",
    category: "pants",
    categoryLabel: "Pants",
    image: "/images/products/pants/pants-05.jpeg",
  }),

  // PANTS - PNG

  createProduct({
    id: "pants-png-01",
    slug: "pants-png-01",
    name: "Pants 06",
    category: "pants",
    categoryLabel: "Pants",
    image: "/images/products/pants/pants-01.png",
  }),

  createProduct({
    id: "pants-png-02",
    slug: "pants-png-02",
    name: "Pants 07",
    category: "pants",
    categoryLabel: "Pants",
    image: "/images/products/pants/pants-02.png",
  }),

  createProduct({
    id: "pants-png-03",
    slug: "pants-png-03",
    name: "Pants 08",
    category: "pants",
    categoryLabel: "Pants",
    image: "/images/products/pants/pants-03.png",
  }),

  createProduct({
    id: "pants-png-04",
    slug: "pants-png-04",
    name: "Pants 09",
    category: "pants",
    categoryLabel: "Pants",
    image: "/images/products/pants/pants-04.png",
  }),

  // =====================================================
  // OUTERWEAR / WINDCHEATER - JPEG
  // =====================================================

  createProduct({
    id: "outerwear-01",
    slug: "outerwear-01",
    name: "Outerwear 01",
    category: "windcheater",
    categoryLabel: "Outerwear",
    image: "/images/products/windcheater/windcheater-01.jpeg",
  }),

  createProduct({
    id: "outerwear-02",
    slug: "outerwear-02",
    name: "Outerwear 02",
    category: "windcheater",
    categoryLabel: "Outerwear",
    image: "/images/products/windcheater/windcheater-02.jpeg",
  }),

  createProduct({
    id: "outerwear-03",
    slug: "outerwear-03",
    name: "Outerwear 03",
    category: "windcheater",
    categoryLabel: "Outerwear",
    image: "/images/products/windcheater/windcheater-03.jpeg",
  }),

  createProduct({
    id: "outerwear-04",
    slug: "outerwear-04",
    name: "Outerwear 04",
    category: "windcheater",
    categoryLabel: "Outerwear",
    image: "/images/products/windcheater/windcheater-04.jpeg",
  }),

  createProduct({
    id: "outerwear-05",
    slug: "outerwear-05",
    name: "Outerwear 05",
    category: "windcheater",
    categoryLabel: "Outerwear",
    image: "/images/products/windcheater/windcheater-05.jpeg",
  }),

  createProduct({
    id: "outerwear-06",
    slug: "outerwear-06",
    name: "Outerwear 06",
    category: "windcheater",
    categoryLabel: "Outerwear",
    image: "/images/products/windcheater/windcheater-06.jpeg",
  }),

  createProduct({
    id: "outerwear-07",
    slug: "outerwear-07",
    name: "Outerwear 07",
    category: "windcheater",
    categoryLabel: "Outerwear",
    image: "/images/products/windcheater/windcheater-07.jpeg",
  }),
];