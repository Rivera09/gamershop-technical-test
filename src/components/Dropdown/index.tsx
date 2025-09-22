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
        name="cars"
        id={id || randomId}
        className="p-4 text-xs/xs-regular"
        {...rest}
      >
        {deselectOption && (
          <option value="" defaultChecked>
            {deselectOption}
          </option>
        )}
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
