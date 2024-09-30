import "./App.css";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import useDropdownSelection from "./components/DropdownMenu/DropdownHooks/useDropdownSelection";
import Results from "./components/Results/Results";

function App() {
  const { handleDropdownSelection, selectedOption, dropdownOptions } =
    useDropdownSelection();

  return (
    <div className="w-full h-full">
      <div className="w-fit m-auto">Jelly Bean</div>
      <div className="flex pt-[4rem]">
        <div className="w-[20rem] h-screen">
          <div className="w-fit h-[4rem] mx-auto">
            <div>
              {
                <DropdownMenu
                  selectedOption={selectedOption}
                  options={dropdownOptions}
                  handleSelection={handleDropdownSelection}
                />
              }
            </div>
          </div>
        </div>
        <div className="w-full">
          <Results selectedOption={selectedOption} />
        </div>
      </div>
    </div>
  );
}

export default App;
