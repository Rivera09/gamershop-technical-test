import { SelectHTMLAttributes, useId } from "react";

type TProps = {
  label: string;
  options: string[];
  deselectOption?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Dropdown = ({
  id,
  deselectOption,
  options,
  label,
  className,
  ...rest
}: TProps) => {
  const randomId = useId();

  return (
    <div className={className}>
      <label
        className="border-r border-black pr-6 mr-6 text-xs/xs-bold"
        htmlFor={id || randomId}
      >
        {label}
      </label>

      <select
        id={id || randomId}
        className="sm:pl-4 py-4 text-xs/xs-regular border-r-[16px] border-[transparent]"
        {...rest}
      >
        {deselectOption && <option value="">{deselectOption}</option>}
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
