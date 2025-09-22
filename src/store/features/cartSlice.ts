import { Game } from "@/utils/endpoint";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCartState = {
  games: Game[];
  ids: string[];
};

const initialState: TCartState = {
  games: [],
  ids: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    modifyCart: (state, { payload }: PayloadAction<Game>) => {
      if (state.ids.includes(payload.id)) {
        state.games = state.games.filter((c) => c.id !== payload.id);
        state.ids = state.ids.filter((id) => id !== payload.id);
      } else {
        state.games = [...state.games, payload];
        state.ids = [...state.ids, payload.id];
      }
    },
  },
});

export const { modifyCart } = cartSlice.actions;
export default cartSlice.reducer;
