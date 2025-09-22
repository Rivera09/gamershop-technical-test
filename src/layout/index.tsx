"use client";

import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex flex-col justify-between h-dvh">
      <Navbar />
      <div className="flex-1">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
