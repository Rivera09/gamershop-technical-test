import axiosClient from "@/config/axios";
import { Game } from "@/utils/endpoint";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GET_GAMES_DATA = createAsyncThunk(
  "APP/GET_GAMES_DATA",
  async (params: { page?: number; genre?: string }) => {
    const res = await axiosClient.get<{
      games: Game[];
      totalPages: number;
      availableFilters: [];
    }>("/games", { params });

    return res.data;
  }
);
