import { useContext } from "react";
import Image from "next/image";

import { IProduct } from "../hooks/useGetProducts";
import { ContextApp } from "../context/ContextApi";
import { saveProductsToLocal } from "../utils/localStorage";

interface Props {
  product: IProduct;
}

const Product = ({ product }: Props) => {
  const { setOpenCart, productsCart, setProductsCart, setQty } =
    useContext(ContextApp);
  const { name, image, price, quantity, description } = product;
  const addToCart = () => {
    const idExists = productsCart.some((x) => x.id === product.id);
    if (!idExists) {
      setOpenCart(true);
      setProductsCart((prev) => {
        const results = [...prev, product];
        saveProductsToLocal(results);
        return results;
      });
      setQty((prev) => prev + price * quantity);
    }
  };
  return (
    <div className="w-full sm:w-[250px] h-[450px] bg-gray-100 rounded-md flex flex-col justify-between">
      <div className="bg-gray-300">
        <Image
          width={80}
          height={280}
          src={image}
          alt={`${name}-no-available`}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-sm text-gray-900 pl-2">{name}</h3>
        <span className="font-light text-xs text-gray-500 pl-2 truncate">
          {description}
        </span>
        <strong className="pl-2">${price}</strong>
        <div
          onClick={addToCart}
          className="bg-green-400 p-2 rounded-sm cursor-pointer"
        >
          <span className="text-white">Add to cart</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
