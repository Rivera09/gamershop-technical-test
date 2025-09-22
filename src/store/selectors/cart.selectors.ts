import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "..";

const getAppState = (state: TStore) => state.cart;

export const GAMES_IN_CART = createSelector(getAppState, (state) => ({
  games: state.games,
  ids: state.ids,
}));
