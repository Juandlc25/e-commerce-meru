import { useEffect, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

const useGetProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch("https://ornate-scone-f87809.netlify.app/api/products.json")
      .then((response) => response?.json())
      .then((res) => {
        setProducts(
          res?.data.map((product: IProduct) => ({ ...product, quantity: 1 }))
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return { products, loading };
};

export default useGetProducts;
