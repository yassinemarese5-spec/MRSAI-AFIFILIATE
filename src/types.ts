export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  rating: number; // Out of 5
  priceModel: string;
  link: string;
  colorScheme: {
    bg: string;
    text: string;
    border: string;
  };
}
