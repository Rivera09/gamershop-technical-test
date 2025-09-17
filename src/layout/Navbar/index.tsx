import Link from "next/link"

const Navbar = () => {
  return (
    <div className="px-6 py-5 bg-[#EEEEEE] flex justify-between">
      <Link href="/">GamerShop</Link>
      <Link href="/cart">C</Link>
    </div>
  )
}

export default Navbar
