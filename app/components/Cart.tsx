import React, { Dispatch, SetStateAction, useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IProduct } from "../hooks/useGetProducts";
import CartProduct from "./CartProduct";
import { ContextApp } from "../context/ContextApi";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  products: IProduct[];
}

const Cart = ({ isOpen, setIsOpen, products }: Props) => {
  const { qty } = useContext(ContextApp);
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-full sm:max-w-2xl right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-full sm:max-w-2xl pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg flex w-full items-center justify-between border-b border-gray-100">
            <span>Shopping cart</span>
            <IoCloseSharp
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </header>

          <div className="flex flex-col px-4 py-1">
            {products?.length ? (
              <>
                <span>ORDER SUMMARY</span>
                {products.map((product, key) => (
                  <CartProduct key={key} product={product} />
                ))}
                <div className="flex items-center gap-1 mt-8">
                  <span>Total:</span>
                  <strong>{qty}</strong>
                </div>
              </>
            ) : (
              <span>Empty card, please add some items</span>
            )}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Cart;
