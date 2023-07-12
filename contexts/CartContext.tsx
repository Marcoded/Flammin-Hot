"use client";

import React, { createContext, useReducer, Dispatch, useEffect } from "react";

// Define the Item type
export interface ItemReference {
  id: number;
  quantity: number;
}

type CartState = ItemReference[];
type CartAction =
  | { type: "ADD_ITEM"; item: ItemReference }
  | { type: "REMOVE_ITEM"; id: number }
  | { type: "DELETE_ITEM"; id: number }
  | { type: "DELETE_ALL"};;

const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
}>({ state: [], dispatch: () => null });

const addItem = (state: CartState, item: ItemReference): CartState => {
  const index = state.findIndex((cartItem) => cartItem.id === item.id);

  if (index === -1) return [...state, item];

  const newState = [...state];
  newState[index].quantity += 1;
  return newState;
};

const removeItem = (state: CartState, id: number): CartState => {
  const index = state.findIndex((cartItem) => cartItem.id === id);

  if (index === -1) return state;
  const newState = [...state];

  if (newState[index].quantity === 1) {
    newState.splice(index, 1);
    return newState;
  }

  newState[index].quantity -= 1;

  return newState;
};

const deleteItem = (state: CartState, id: number): CartState => {
  const index = state.findIndex((cartItem) => cartItem.id === id);

  if (index === -1) return state;
  const newState = [...state];

  newState.splice(index, 1);
  return newState;
};

const deleteAll = (state:CartState): CartState => {
  return state = []
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      return addItem(state, action.item);
    case "REMOVE_ITEM":
      return removeItem(state, action.id);
    case "DELETE_ITEM":
      return deleteItem(state, action.id);
      case 'DELETE_ALL':
      return deleteAll(state);
    default:
      return state;
  }
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    [],
    (initialState: CartState) => {
      const localState = localStorage.getItem("cart");
      return localState ? JSON.parse(localState) : initialState;
    }
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
