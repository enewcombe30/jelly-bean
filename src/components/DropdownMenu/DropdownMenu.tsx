import { DropdownOptions } from "../../types.ts/types";

interface props {
  selectedOption: string | number;
  handleSelection: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: DropdownOptions;
}

export default function DropdownMenu({
  selectedOption,
  handleSelection,
  options,
}: props) {
  return (
    <div className="my-2">
      <select value={selectedOption} onChange={handleSelection}>
        {options.options.map((option, index) => (
          <option key={index} value={option.value}>
            <>{option.label}</>
          </option>
        ))}
      </select>
    </div>
  );
}
