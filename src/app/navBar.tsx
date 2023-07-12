"use client";

import { ItemReference } from "../../contexts/CartContext";
import Link from "next/link";
import Image from "next/image";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";
import { ItemCardProps } from "./itemCard";
const productListing = require("../../data/hotSauces.json") as ItemCardProps[];

const NavBar = () => {
  const { state } = useContext(CartContext);

  const quantityTotal = state.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const totalPrice = () => {
    const total = state.reduce((acc, cartItem) => {
      const listedItem = productListing.find(
        (listedItem) => listedItem.id === cartItem.id
      );
      const price = listedItem ? listedItem.price : 0;
      return acc + price * cartItem.quantity;
    }, 0);

    return total.toFixed(2);
  };

  return (
    <div className="navbar  sticky top-0 z-50 bg-base-100 px-7 border-b ">
      <div className="flex-1">
        <Link
          href={"/"}
          className=" font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600  normal-case text-3xl mr-4 font-marker hover:scale-105 transition-all duration-75   "
        >
          Flamin&apos; hot
        </Link>
        <div className="relative group">
          <Image
            className="opacity-100 group-hover:opacity-0"
            src="/logo.svg"
            alt="flamin hot logo"
            width={25}
            height={25}
          />
          <Image
            className="absolute top-0 opacity-0 group-hover:opacity-100 "
            src="/flameGif.gif"
            alt="flame gif"
            height={50}
            width={50}
          ></Image>
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {quantityTotal}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{quantityTotal} Items</span>
              <span className=" text-slate-700">Subtotal: ${totalPrice()}</span>
              <div className="card-actions">
                <Link href={"/cart"}>
                  <button className="btn btn-sm bg-orange-400 btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
