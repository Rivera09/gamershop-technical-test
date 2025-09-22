import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-neutral-700 py-[60px] flex justify-center">
      <Link href="/">
        <Image priority src={logo} alt="Apply digital" className="w-[170px]" />
      </Link>
    </div>
  );
};

export default Footer;
