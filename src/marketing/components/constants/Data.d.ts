export interface ProductItem {
  img: string;
  id: number;
  price: string;
  name: string;
  description: string;
}

declare const Data: ProductItem[];
export default Data;
