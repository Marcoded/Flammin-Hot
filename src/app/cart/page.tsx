"use client";

import MainContent from "../mainContentLayout";
import NavBar from "../navBar";
import CartContext, { CartProvider } from "../../../contexts/CartContext";
import CartContent from "../Cart";
import Footer from "../Footer";


const Cart = () => {
  return (
    <CartProvider>
      <NavBar />
      
      <MainContent>
      
          
          <CartContent></CartContent>
     
      </MainContent>
      <Footer/>
    </CartProvider>

  );
};

export default Cart;
