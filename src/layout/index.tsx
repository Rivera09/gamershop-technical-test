import React, { PropsWithChildren } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex flex-col justify-between h-dvh">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  )
}

export default Layout
