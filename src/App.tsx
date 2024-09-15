import "./App.css";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import useSearchSelection from "./components/DropdownMenu/DropdownHooks/useSearchSelection";

function App() {
  const { handleSearchSelection, selectedSearchOption, searchOptions } =
    useSearchSelection();
  return (
    <div className="w-full h-full">
      <div className="w-fit m-auto">Jelly Bean</div>
      <div className="w-[8rem] ml-4">
        <div>
          {
            <DropdownMenu
              selectedOption={selectedSearchOption}
              options={searchOptions}
              handleSelection={handleSearchSelection}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
