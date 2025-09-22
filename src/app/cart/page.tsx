"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import CartCard from "@/components/CartCard";
import LeftArrowIcon from "@/assets/icons/arrow-left.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { GAMES_IN_CART } from "@/store/selectors/cart.selectors";
import { Game } from "@/utils/endpoint";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { modifyCart } from "@/store/features/cartSlice";
import Button from "@/components/Button";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useSelector(GAMES_IN_CART);

  const total = useMemo(() => {
    return cart.games.reduce((prev, curr) => prev + curr.price, 0);
  }, [cart.games]);

  return (
    <div className="px-6 pb-8 h-full container">
      <div className="py-5">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src={LeftArrowIcon}
            width={24}
            height={24}
            alt="Back to catalog"
          />
          <span>Back to catalog</span>
        </Link>
      </div>
      <div className="container !mb-8">
        <p className="text-xl/xl-bold mb-3">Your cart</p>
        <p className="text-xs/xs-regular">{cart.games.length} items</p>
      </div>
      <div className="flex flex-col items-center container gap-12 lg:flex-row lg:items-start">
        <div className="divide-y divide-stroke-secondary w-fit flex-1">
          {cart.games.map((g) => (
            <CartCard
              key={g.id}
              game={g}
              onRemove={(game: Game) => {
                dispatch(modifyCart(game));
              }}
            />
          ))}
        </div>
        <div className="flex-1 w-full max-w-[400px] md:max-w-[678px] flex flex-col gap-10 lg:gap-8">
          <div className="border rounded-lg px-4 py-6">
            <p className="mb-3 text-xs/xs-bold">Order Summary</p>
            <p className="text-lg/lg-regular py-0.5">
              {cart.games.length} items
            </p>

            <div className="my-6 pt-5 pb-6 flex flex-col gap-3 border-b border-stroke-secondary">
              {cart.games.map((g) => (
                <div
                  className="flex justify-between gap-1"
                  key={`${g.id}-details`}
                >
                  <span className="text-lg/lg-regular">{g.name}</span>
                  <span className="text-lg/lg-regular">$ {g.price}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <span className="text-xs/xs-bold">Order total</span>
              <span className="text-xs/xs-bold">$ {total}</span>
            </div>
          </div>
          <Button variant="filled">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
