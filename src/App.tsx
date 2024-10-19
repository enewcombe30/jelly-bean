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
    <div className="w-screen h-screen">
      <div className="flex">
        <div className="w-[20rem] h-screen fixed bg-white border-r-2 mr-8 pt-12">
          <div className="w-fit mx-auto">
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
        <div className="w-full pt-12 ml-[22rem]">
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
      {/* <div className="w-full fixed bottom-0 h-[4rem] border-t bg-white"></div> */}
    </div>
  );
}

export default App;
