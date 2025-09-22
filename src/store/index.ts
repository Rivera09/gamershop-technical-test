import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

import cartReducer, { TCartState } from "./features/cartSlice";
import appReducer, { TAppState } from "./features/appSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.NEXT_PUBLIC_PERSIST_SECRET || "default-secret",
      onError: (err) => {
        console.error("Encryption error", err);
      },
    }),
  ],
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type TStore = {
  app: TAppState;
  cart: TCartState;
};

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
