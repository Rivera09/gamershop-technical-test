import { type ButtonHTMLAttributes } from "react";
import tv from "@/utils/tailwindVariants";

const variants = {
  outlined: "border border-primary",
  filled: "bg-fill-primary text-white lg:text-button-desktop",
} as const;

const buttonStyles = tv({
  base: "py-5 rounded-lg text-button-mobile",
  variants,
});

type TProps = {
  variant?: keyof typeof variants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, variant, ...rest }: TProps) => {
  return (
    <button className={buttonStyles(variant, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
