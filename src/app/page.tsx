"use client";

import React, { useContext } from "react";
import Image from "next/image";
import NavBar from "./navBar";
import ItemCard from "./itemCard";
import ItemsLayout from "./itemsLayout";
import ItemList from "./itemList";
import CartContext, { CartProvider } from "../../contexts/CartContext";
import Hero from "./Hero";
import Footer from "./Footer";

export default function Home() {
  return (
    <CartProvider>
      <main className="bg-base-200 pb-10">
        <NavBar />
        <Hero/>
      
        <h1 className="font-marker text-5xl text-center my-16">All our amazing hot <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">sauces</span> !</h1>
        <ItemsLayout>
       
          <ItemList />
        </ItemsLayout>
      </main>
      <Footer/>

    </CartProvider>

    
  );
}


