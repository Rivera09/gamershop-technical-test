import { Game } from "@/utils/endpoint";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GET_GAMES_DATA } from "../actions/app.actions";

export type TAppState = {
  loading: boolean;
  error: boolean;
  data: {
    games: Game[];
    availableFilters: string[];
    totalPages: number;
  };
};

const initialState: TAppState = {
  loading: false,
  error: false,
  data: {
    games: [],
    availableFilters: [],
    totalPages: 0,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GET_GAMES_DATA.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(GET_GAMES_DATA.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      error: false,
      data: { ...state.data, ...payload },
    }));
    builder.addCase(GET_GAMES_DATA.rejected, (state) => ({
      ...state,
      loading: false,
      error: true,
    }));
  },
});

export default appSlice.reducer;
