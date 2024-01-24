import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { setSiteTitle } from '../hooks/setSiteTitle';
import { useGetProductCartList } from "../hooks/useFirebase";
import CartListComponent from "../components/CartListComponent";
import CartEmptyComponent from "../components/CartEmptyComponent";

const Cart = () => {
  setSiteTitle('Carro de Compras - Wabit Store');
  
  const { itemsCart } = useContext(CartContext);
  const { productList } = useGetProductCartList(itemsCart);

  return (
    productList.length > 0 ? (
      productList[0] == 'nodata' ? (
        <CartEmptyComponent></CartEmptyComponent>
      ) : (
        <CartListComponent productsData={productList}></CartListComponent>
      )
    ) : (
      <span className={'text-black-300 rounded-md px-3 py-2 text-lg font-large'} >Cargando productos...</span>
    )
  )
}
export default Cart
