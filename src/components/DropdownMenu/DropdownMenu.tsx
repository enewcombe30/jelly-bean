import useDropdownMenu from "./useDropdownMenu";

export default function DropdownMenu() {
  const { selectedOption, handleSelection, searchOption } = useDropdownMenu();
  return (
    <div>
      <select value={selectedOption} onChange={handleSelection}>
        {searchOption.Option.map((option, index) => (
          <option key={index} value={option.value}>
            <>{option.label}</>
          </option>
        ))}
      </select>
    </div>
  );
}
