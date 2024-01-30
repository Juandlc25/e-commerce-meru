import { IProduct } from "../hooks/useGetProducts";

export const saveProductsToLocal = (products: IProduct[]): void => {
  try {
    localStorage.setItem("products", JSON.stringify(products));
  } catch (error) {
    console.error("Error saving products to local storage:", error);
  }
};

export const getProductsFromLocal = () => {
  try {
    const products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
  } catch (error) {
    console.error("Error retrieving products from local storage:", error);
    return [];
  }
};
