"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { IProduct } from "../hooks/useGetProducts";

interface ContextProps {
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
  productsCart: IProduct[];
  setProductsCart: Dispatch<SetStateAction<IProduct[]>>;
  qty: number;
  setQty: Dispatch<SetStateAction<number>>;
}

export const ContextApp = createContext({} as ContextProps);

interface Props {
  children: ReactNode;
}

const ContextApi = ({ children }: Props) => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [qty, setQty] = useState<number>(0);
  const [productsCart, setProductsCart] = useState<IProduct[]>([]);

  const contextProps = {
    openCart,
    setOpenCart,
    productsCart,
    setProductsCart,
    qty,
    setQty,
  };
  return (
    <ContextApp.Provider value={{ ...contextProps }}>
      {children}
    </ContextApp.Provider>
  );
};

export default ContextApi;
