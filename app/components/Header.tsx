"use client";
import Link from "next/link";
import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { ContextApp } from "../context/ContextApi";
import { FaProductHunt } from "react-icons/fa6";

const Header = () => {
  const { setOpenCart, productsCart, qty } = useContext(ContextApp);
  return (
    <nav className="flex items-center w-full justify-between p-8 border-b border-gray-100">
      <Link href="/">
        <div className="flex items-center gap-2">
          <p>PRODUCTS</p>
          <FaProductHunt className="text-green-400" />
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <div className="relative">
          <TiShoppingCart
            onClick={() => setOpenCart((prev) => !prev)}
            size={30}
            className="cursor-pointer"
          />
          <div className="absolute h-5 w-5 bg-green-400 -top-2 -right-2 flex items-center justify-center text-white text-xs rounded-full">
            {productsCart?.length}
          </div>
        </div>
        <strong>${qty}</strong>
      </div>
    </nav>
  );
};

export default Header;
