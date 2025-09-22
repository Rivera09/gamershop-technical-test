import Link from "next/link";
import CartIcon from "@/assets/icons/cart.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="px-6 py-5 bg-surface-secondary ">
      <div className="container flex justify-between">
        <Link href="/" className="text-fill-primary">
          GamerShop
        </Link>
        <Link href="/cart">
          <Image priority src={CartIcon} alt="cart" className="size-6" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
