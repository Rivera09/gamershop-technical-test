type TConfig = {
  base: string;
  variants?: Record<string, string>;
  defaultVariant?: string;
};

const tv = ({ base, variants, defaultVariant }: TConfig) => {
  const func = (variant?: string, className?: string) => {
    let styles = base;
    if (variants && (variant || defaultVariant)) {
      styles += ` ${variants[variant! || defaultVariant!] || ""}`;
    }

    return `${styles} ${className || ""}`.trim();
  };

  return func;
};

export default tv;
