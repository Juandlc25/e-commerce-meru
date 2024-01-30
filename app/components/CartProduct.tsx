import Image from "next/image";
import { IProduct } from "../hooks/useGetProducts";
import { BiTrash } from "react-icons/bi";
import { useContext } from "react";
import { ContextApp } from "../context/ContextApi";
import { saveProductsToLocal } from "../utils/localStorage";

interface Props {
  product: IProduct;
}

const CartProduct = ({ product }: Props) => {
  const { setProductsCart, setQty, productsCart } = useContext(ContextApp);
  const deleteItem = () => {
    const deletedProducts = productsCart.filter((x) => x.id !== product?.id);
    setProductsCart(deletedProducts);
    saveProductsToLocal(deletedProducts);
    setQty((prev) => prev - product?.price * product.quantity);
  };

  const increment = () => {
    const updatedProducts = productsCart.map((x) => {
      if (x.id === product?.id) {
        return { ...x, quantity: x.quantity + 1 };
      }
      return x;
    });
    setProductsCart(updatedProducts);
    saveProductsToLocal(updatedProducts);

    setQty((prev) => prev + product?.price);
  };

  const decrement = () => {
    const updatedProducts = productsCart.map((x) => {
      if (x.id === product?.id) {
        return { ...x, quantity: x.quantity - 1 };
      }
      return x;
    });
    setProductsCart(updatedProducts);
    saveProductsToLocal(updatedProducts);
    setQty((prev) => prev - product?.price);
  };
  return (
    <div className="w-full flex flex-wrap items-center p-4 justify-between border-b border-gray-100">
      <div className="flex gap-2 items-center">
        <div className="bg-gray-100">
          <Image
            width={80}
            height={100}
            alt={`${product?.name}-no-available`}
            src={product?.image}
          />
        </div>

        <div className="truncate w-56">{product?.name}</div>
      </div>
      <div className="flex items-center gap-1">
        <div className="border border-gray-100 p-1 cursor-pointer">
          <span onClick={decrement} className="border-r border-gray-100 p-1">
            -
          </span>
          <span onClick={increment} className="p-1">
            +
          </span>
        </div>
        <span>
          qty: <strong>{product?.quantity}</strong>
        </span>
      </div>

      <div className="flex gap-2 items-center">
        <span>${product?.price}</span>
        <BiTrash onClick={deleteItem} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CartProduct;
