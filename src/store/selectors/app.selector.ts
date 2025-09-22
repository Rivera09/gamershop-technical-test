import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "..";

const getAppState = (state: TStore) => state.app;

export const GAMES_LIST = createSelector(
  getAppState,
  (state) => state.data.games
);
export const LOADING_GAMES_DATA = createSelector(
  getAppState,
  (state) => state.loading
);

export const AVAILABLE_GENRES = createSelector(
  getAppState,
  (state) => state.data.availableFilters
);

export const TOTAL_PAGES = createSelector(
  getAppState,
  (state) => state.data.totalPages
);
