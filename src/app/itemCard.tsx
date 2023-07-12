import React, { useContext } from "react";
import Image from "next/image";
import CartContext from "../../contexts/CartContext";
import ChiliIndex from "./pepperIndex";

export interface ItemCardProps {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
  spiciness: 1 | 2 | 3 | 4 | 5;
}

const ItemCard = (props: ItemCardProps) => {
  const { state, dispatch } = useContext(CartContext);

  const itemQuantity =
    state.find((item) => item.id === props.id)?.quantity || 0;

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", item: { id: props.id, quantity: 1 } });
  };

  const removeFromCard = () => {
    dispatch({ type: "REMOVE_ITEM", id: props.id });
  };

  const buttonAndQuantity = () => {
    return (
      <div className="grid grid-cols-3">
        <button
          className="btn-xs font-bold text-2xl text-warning rounded-md hover:scale-105 transition-all duration-75"
          onClick={removeFromCard}
        >
          -
        </button>
        <h1 className="text-center pt-1 font-bold text-xl">{itemQuantity}</h1>
        <button
          className="btn-xs  font-bold text-2xl text-success rounded-md hover:scale-105 transition-all duration-75"
          onClick={addToCart}
        >
          +
        </button>
      </div>
    );
  };

  const AddToCardButton = () => {
    return (
      <button onClick={addToCart} className="btn btn-sm btn-ghost">Add to Cart</button>
    );
  };

  const computedButton = () => {
    if (itemQuantity > 0) return buttonAndQuantity();
    return AddToCardButton();
  };

  return (
    <div className="card max-w-[25rem] w-full bg-base-100 shadow-xl">
      <figure>
        <Image
          src={props.photo}
          alt="product photo"
          height={150}
          width={150}
          className="pt-3"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p className="text-sm">{props.description}</p>
        <ChiliIndex spiciness={props.spiciness} />
        <div className="flex justify-between items-center mt-5">
         {computedButton()}
          <h1 className="text-lg font-semibold">${props.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
