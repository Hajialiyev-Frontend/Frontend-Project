export interface Perfume {
  id: string;
  title: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  category: "male" | "female" | "unisex"; // Brendin çeşidinə uyğun
  stock: number;
}