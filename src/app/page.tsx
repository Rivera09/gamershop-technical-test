"use client";

import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Spinner from "@/components/Spinner";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useUrlState } from "@/hooks/useUrlState";
import { GET_GAMES_DATA } from "@/store/actions/app.actions";
import { modifyCart } from "@/store/features/cartSlice";
import { GAMES_IN_CART } from "@/store/selectors/cart.selectors";
import {
  AVAILABLE_GENRES,
  GAMES_LIST,
  LOADING_GAMES_DATA,
  TOTAL_PAGES,
} from "@/store/selectors/app.selector";
import { Game } from "@/utils/endpoint";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "@/components/Button";

export default function Home() {
  const [params, setParams] = useUrlState<{ page: number; genre?: string }>(
    { page: 1 },
    ["page", "genre"]
  );
  const games = useSelector(GAMES_LIST);
  const loading = useSelector(LOADING_GAMES_DATA);
  const genres = useSelector(AVAILABLE_GENRES);
  const totalPages = useSelector(TOTAL_PAGES);
  const cart = useSelector(GAMES_IN_CART);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GET_GAMES_DATA(params));
  }, [dispatch, params]);

  if (loading || !games.length)
    return (
      <div className="flex justify-center items-center h-full">
        <Spinner />
      </div>
    );

  return (
    <>
      <header className="py-8 container pl-6 pr-[5px] flex flex-col gap-8">
        <h1 className="text-xl/xl-bold uppercase">top sellers</h1>
        <div className="">
          <Dropdown
            label="Genre"
            options={genres}
            deselectOption="All"
            value={params.genre}
            onChange={(e) => {
              setParams({ page: 1, genre: e.target.value });
            }}
          />
        </div>
      </header>
      <hr className="border-stroke-tertiary" />
      <div className="px-6 py-8 gap-x-12 gap-y-6 flex flex-wrap justify-center container">
        {games?.map((g) => (
          <Card
            game={g}
            key={g.id}
            onButtonClick={(game: Game) => {
              dispatch(modifyCart(game));
            }}
            isOnCart={cart.ids.includes(g.id)}
          />
        ))}
      </div>
      <div className="container px-6 pb-12 flex flex-col gap-2 sm:flex-row">
        {params.page > 1 && (
          <Button
            variant="outlined"
            onClick={() => {
              setParams((prev) => ({ ...prev, page: (prev?.page || 2) - 1 }));
            }}
            className="flex-1 md:max-w-[137px]"
          >
            previous page
          </Button>
        )}
        {params.page < totalPages && (
          <Button
            variant="filled"
            onClick={() => {
              setParams((prev) => ({ ...prev, page: (prev?.page || 0) + 1 }));
            }}
            className="flex-1 md:max-w-[137px]"
          >
            see more
          </Button>
        )}
      </div>
    </>
  );
}
