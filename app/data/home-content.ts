export type Product = {
  id: string;
  category: string;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  rating?: number;
  discount?: string;
  labels?: string[];
  sold?: string;
};

const upload = "https://demo.theme-sky.com/ecomall/wp-content/uploads";

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const logo =
  "https://demo.theme-sky.com/ecomall/wp-content/themes/ecomall/images/logo.png";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Laptops", href: "/shop/laptops-and-desktops" },
  { label: "Smartphone", href: "/shop/smartphone" },
  { label: "Headphones", href: "/shop/headphones" },
  { label: "Camera", href: "/shop/camera" },
];

export const categories = [
  "Smartphone",
  "Laptops & Desktops",
  "Camera",
  "Headphones",
  "PC Gaming",
  "Tablets",
  "Television",
  "Smartwatches",
  "Speakers",
  "Tech Gift",
];

export const topLinks = [
  { label: "Flash Sale", href: "/flash-sale" },
  { label: "Track Order", href: "/track-order" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export const brandLogos = [
  { name: "Panasonic", image: `${upload}/2023/12/panasonic.png` },
  { name: "Sony", image: `${upload}/2023/11/sony-1.png` },
  { name: "Asus", image: `${upload}/2023/12/asus.png` },
  { name: "Samsung", image: `${upload}/2023/12/samsung.png` },
  { name: "Sanyo", image: `${upload}/2023/11/sanyo-1.png` },
  { name: "Oppo", image: `${upload}/2022/11/oppo.png` },
  { name: "Dell", image: `${upload}/2023/12/dell.png` },
  { name: "Lenovo", image: `${upload}/2023/12/lenovo.png` },
  { name: "Apple", image: `${upload}/2023/12/apple-2.png` },
  { name: "JBL", image: `${upload}/2023/12/jbl.png` },
  { name: "Canon", image: `${upload}/2023/12/canon.png` },
  { name: "Intel", image: `${upload}/2023/12/intel-1.png` },
];

export const heroPromos = [
  {
    kicker: "Weekend Deal",
    title: "Best Offers From Games And More",
    subtitle: "Great savings & free delivery",
    image: `${upload}/2023/10/cat-game-310x264.png`,
    theme: "from-[#ffb000] to-[#ffca36]",
  },
  {
    kicker: "New Products",
    title: "Headphones At Great Low Prices",
    subtitle: "Great savings & free delivery",
    image: `${upload}/2023/10/cat-headphone-310x264.png`,
    theme: "from-[#f8d0d7] to-[#f6c6cf]",
  },
];

export const products: Product[] = [
  {
    id: "xbox",
    category: "Xbox Series",
    name: "Xbox Series S - 1TB Gaming All-Digital Console, 4K Streaming Media",
    image: `${upload}/2023/03/54-400x400.jpg`,
    price: "$279.99",
    oldPrice: "$299.99",
    rating: 5,
    discount: "-7%",
    labels: ["Hot"],
    sold: "15/99",
  },
  {
    id: "galaxy",
    category: "Samsung Galaxy",
    name: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
    image: `${upload}/2023/03/119-400x400.jpg`,
    price: "$699.99",
    oldPrice: "$949.99",
    rating: 5,
    discount: "-26%",
    sold: "70/94",
  },
  {
    id: "macbook",
    category: "Laptops",
    name: 'MacBook Pro 13.3" 16GB/512GB Silver',
    image: `${upload}/2023/03/01-400x400.jpg`,
    price: "$1,527.00",
    oldPrice: "$1,799.00",
    rating: 5,
    discount: "-15%",
  },
  {
    id: "iphone-11",
    category: "iPhone",
    name: "Apple iPhone 11 Pro Max Triple Camera",
    image: `${upload}/2023/03/111-400x400.jpg`,
    price: "$425.00 - $609.00",
    rating: 5,
  },
  {
    id: "controller",
    category: "Xbox Series",
    name: "Wired Controller For Xbox Series",
    image: `${upload}/2023/03/53-400x400.jpg`,
    price: "$78.89",
    oldPrice: "$109.00",
    rating: 5,
    discount: "-28%",
  },
  {
    id: "speaker",
    category: "Bluetooth Speakers",
    name: "Portable Bluetooth Speaker with Voice Assistant",
    image: `${upload}/2023/03/37-400x400.jpg`,
    price: "$65.55",
    oldPrice: "$69.00",
    rating: 4,
    discount: "-6%",
  },
  {
    id: "tablet",
    category: "Tablets",
    name: 'Apple 11" iPad Pro, M1 Chip WiFi 128 GB',
    image: `${upload}/2023/03/126-400x400.jpg`,
    price: "$1,465.00",
    oldPrice: "$1,799.00",
    rating: 5,
    discount: "-18%",
    labels: ["Hot"],
  },
  {
    id: "oled",
    category: "OLED TVs",
    name: "QLED TV 4K Samsung 950E85K Slim Smart",
    image: `${upload}/2023/03/136-400x400.jpg`,
    price: "$249.99",
    rating: 5,
    labels: ["Hot"],
  },
  {
    id: "jbl",
    category: "Portable Speakers",
    name: "Portable Speaker with Microphone for Travel",
    image: `${upload}/2023/03/09-400x400.jpg`,
    price: "$350.00",
    rating: 5,
    labels: ["Hot"],
  },
  {
    id: "watch",
    category: "Iwatch",
    name: "Apple Watch Series 8 45 GPS",
    image: `${upload}/2023/03/15-400x400.jpg`,
    price: "$950.00",
    rating: 5,
  },
  {
    id: "headphone",
    category: "AirPods, Gaming Headsets",
    name: "Apple AirPods Max, On-Ear Headset",
    image: `${upload}/2023/03/42-400x400.jpg`,
    price: "$632.03",
    oldPrice: "$744.00",
    rating: 5,
    discount: "-15%",
    labels: ["Hot"],
  },
  {
    id: "ps4",
    category: "PlayStation 4",
    name: "PlayStation 5 Slim Edition 1TB Black",
    image: `${upload}/2023/03/97-400x400.jpg`,
    price: "$230.00",
    rating: 5,
  },
  {
    id: "orange",
    category: "Iwatch",
    name: "Apple Watch Series 8 45 WatchOS 9",
    image: `${upload}/2023/03/33-400x400.jpg`,
    price: "$950.00",
    rating: 5,
  },
  {
    id: "tv",
    category: "Bluetooth Speakers",
    name: "Portable Bluetooth Speaker with Voice Control",
    image: `${upload}/2023/03/49-400x400.jpg`,
    price: "$65.55",
    oldPrice: "$69.00",
    rating: 5,
    labels: ["Hot"],
  },
  {
    id: "iphone-15",
    category: "iPhone",
    name: "Apple iPhone 15 Pro Max, 512GB, Unlocked",
    image: `${upload}/2023/03/21-400x400.jpg`,
    price: "$1,299.00",
    oldPrice: "$1,599.00",
    rating: 5,
  },
  {
    id: "orange-phone",
    category: "iPhone",
    name: "Apple iPhone 14 Pro Max 256 GB",
    image: `${upload}/2023/03/17-400x400.jpg`,
    price: "$519.00",
    oldPrice: "$685.00",
    rating: 5,
  },
];

export const deals = products.slice(0, 2);
export const bestSellers = products.slice(2, 9);
export const trending = [products[2], products[0], products[9]];
export const newProducts = [products[2], products[0], products[3]];
export const topRated = [products[10], products[11], products[12]];
export const recentlyViewed = [products[13], products[5], products[15], products[9], products[14], products[0]];

export const paymentImage = `${upload}/2024/01/payment.png`;

export const categoryPages = categories.map((name) => ({
  name,
  slug: slugify(name),
  products: products.filter((product) =>
    `${product.category} ${product.name}`
      .toLowerCase()
      .includes(name.split(" ")[0].toLowerCase()),
  ),
}));
