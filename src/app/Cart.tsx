"use client"

import React, { useContext, useRef } from "react";
import Image from "next/image";
import CartContext from "../../contexts/CartContext";
import { ItemCardProps } from "./itemCard";
import productListing from "../../data/hotSauces.json";
import Link from "next/link";
import Trash from "../../public/trash.svg";
import Banner from "./Banner";



const typedProductListing: ItemCardProps[] = productListing as ItemCardProps[];

export interface ItemReference {
  id: number;
  quantity: number;
}



const CartContent = () => {
 
  const { state, dispatch } = useContext(CartContext);

  const deleteFromCard = (id: number) => {
    dispatch({ type: "DELETE_ITEM", id: id });
  };

  const deleteAll = () => {
    dispatch({type: "DELETE_ALL"})
  }

  const totalPrice = state.reduce((acc, item: ItemReference) => {
    const listedItem = typedProductListing.find(
      (listedItem) => listedItem.id === item.id
    );
    const price = listedItem ? listedItem.price : 0;
    return acc + price * item.quantity;
  }, 0);

  const renderEmptyCart = () => (
    <div className="flex flex-col text-center">
      <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
      Your shopping cart is currently empty
      </p>
      <Link href={"/"} className="text-xl mt-5">
        Start shopping
      </Link>
    </div>
  );

  const handleClick = () => {
    (window as any).my_modal_1.showModal();
    deleteAll();
  }

  const renderCartItem = (item: ItemReference) => {
    const product = typedProductListing.find(
      (product: ItemCardProps) => product.id === item.id
    );

    if (!product) return null;

    return (
      <div
        key={item.id}
        className="flex justify-between items-center border-b p-6 pb-2"
      >
        <div className="flex items-center">
          <Image
            src={product.photo}
            alt={product.name}
            width={50}
            height={50}
            className="mr-4"
          />
          <div>
            <p className="font-bold">{product.name}</p>
            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
          </div>
        </div>
        <p className="font-bold">
          ${(product.price * item.quantity).toFixed(2)}
        </p>
        <Image
          onClick={() => deleteFromCard(item.id)}
          src={Trash}
          alt="delete this item"
          height={25}
          width={25}
        />
      </div>
    );
  };

  const cartItems = state.map(renderCartItem);

  return (
    <div>
      <Banner />

      <div className="flex flex-col md:flex-row gap-12 p-4 w-full justify-center items-start">
        <div className="overflow-auto md:max-h-[50vh] w-[32rem] border rounded-lg px-5">
          {state.length === 0 ? renderEmptyCart() : cartItems}
        </div>
        <div className="w-64 flex flex-col justify-between p-4 bg-base-200 rounded-lg">
          <div>
            <h2 className="text-lg font-bold mb-2">Total Price</h2>
            <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>

          {/* Open the modal using ID.showModal() method */}
          <button
            className="btn bg-orange-400"
            onClick={handleClick}
          >
            Checkout
          </button>
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Thank you for your order !</h3>
              <p className="py-4">
              <h1>Demo project by Marc Pollet</h1>
              <br/>
        <a rel="noopener noreferrer" target="_blank" className="font-extrabold text-transparent hover:scale-105 transition-all duration-75  bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" href="https://marc.pollet.dev/"> MP</a>
        <a rel="noopener noreferrer" target="_blank" className="font-extrabold text-transparent hover:scale-105 transition-all duration-75   bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700" href="https://github.com/Marcoded/"> Github</a>
              </p>
              <div className="modal-action">
           
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
