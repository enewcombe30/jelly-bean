import { Options } from "../../types.ts/types";

interface props {
  selectedOption: string | number;
  handleSelection: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Options;
}

export default function DropdownMenu({
  selectedOption,
  handleSelection,
  options,
}: props) {
  return (
    <div>
      <select value={selectedOption} onChange={handleSelection}>
        {options.Option.map((option, index) => (
          <option key={index} value={option.value}>
            <>{option.label}</>
          </option>
        ))}
      </select>
    </div>
  );
}
