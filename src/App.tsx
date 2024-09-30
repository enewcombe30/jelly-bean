import "./App.css";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import useDropdownSelection from "./components/DropdownMenu/DropdownHooks/useDropdownSelection";
import BeanResults from "./components/Results/BeanResults";
import MilestoneResults from "./components/Results/MilestoneResults";
import { getBeanInfo, getMilestones } from "./api-calls/jellyBeanApi";

function App() {
  const { handleDropdownSelection, selectedOption, dropdownOptions } =
    useDropdownSelection();

  console.log("info", getBeanInfo("mileStones", 1, 200));
  console.log("Gmiles", getMilestones(1, 200));

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
          {selectedOption === "beans" ? (
            <BeanResults selectedOption={selectedOption} />
          ) : (
            <MilestoneResults selectedOption={selectedOption} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
