import "./App.css";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import useDropdownSelection from "./components/DropdownMenu/DropdownHooks/useDropdownSelection";
import BeanResults from "./components/Results/Beans/BeanResults";
import MilestoneResults from "./components/Results/MilestoneResults";

function App() {
  const {
    handleDropdownSelection,
    handleSearchSelection,
    selectedOption,
    searchSelection,
    dropdownOptions,
    searchOptions,
  } = useDropdownSelection();
  const isBeanPage = selectedOption === "beans";

  return (
    <div className="w-full h-full">
      <div className="w-fit m-auto">Jelly Bean</div>
      <div className="flex pt-[4rem]">
        <div className="w-[20rem] h-screen">
          <div className="w-fit h-[4rem] mx-auto">
            <div>
              <DropdownMenu
                selectedOption={selectedOption}
                options={dropdownOptions}
                handleSelection={handleDropdownSelection}
              />
              {isBeanPage && (
                <div className="border rounded-lg mt-4 px-2">
                  <div className="mb-2">Filter by colour</div>
                  <DropdownMenu
                    selectedOption={searchSelection}
                    options={searchOptions}
                    handleSelection={handleSearchSelection}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          {isBeanPage ? (
            <BeanResults
              selectedOption={selectedOption}
              searchOption={searchSelection}
            />
          ) : (
            <MilestoneResults selectedOption={selectedOption} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
