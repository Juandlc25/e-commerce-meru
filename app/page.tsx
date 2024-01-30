"use client";
import { useContext, useEffect, useState } from "react";
import Loader from "./components/Loader";
import Product from "./components/Product";
import useGetProducts, { IProduct } from "./hooks/useGetProducts";
import Cart from "./components/Cart";
import { ContextApp } from "./context/ContextApi";
import { getProductsFromLocal } from "./utils/localStorage";

export default function Home() {
  const { products, loading } = useGetProducts();
  const { setOpenCart, openCart, productsCart, setProductsCart, setQty } =
    useContext(ContextApp);

  useEffect(() => {
    const savedProducts = getProductsFromLocal();
    setProductsCart((prev) => (savedProducts?.length ? savedProducts : prev));
    setQty((prev) =>
      savedProducts?.length
        ? (
            savedProducts.map((x: IProduct) => x.price * x.quantity) as number[]
          ).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        : prev
    );
  }, []);

  return (
    <main className="flex flex-col p-8 h-full overflow-y-auto">
      <h2 className="font-bold text-lg text-gray-900">All products</h2>
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="flex gap-4 flex-wrap">
          {products.map((product, key) => (
            <Product key={key} product={product} />
          ))}
        </div>
      )}
      {openCart && (
        <Cart
          isOpen={openCart}
          setIsOpen={setOpenCart}
          products={productsCart}
        />
      )}
    </main>
  );
}
