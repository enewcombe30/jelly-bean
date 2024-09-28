import { useEffect, useState } from "react";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import useDropdownSelection from "./components/DropdownMenu/DropdownHooks/useDropdownSelection";
import { getBeanInfo } from "./api-calls/jellyBeanApi";
import { AllData, BeanResults } from "./types.ts/types";
import { defaultData } from "./constants/BeanConstants";

function App() {
  const [results, setResults] = useState<AllData>(defaultData);
  const { handleDropdownSelection, selectedOption, dropdownOptions } =
    useDropdownSelection();

  // Causing network error, look into srtting up proxy
  useEffect(() => {
    async function setData() {
      try {
        const data = await getBeanInfo(selectedOption, 1, 200);
        setResults(data);
      } catch (error) {
        console.error("Failed to fetch and parse data:", error);
        // Optionally update state to show an error message to the user
      }
    }
    setData();
  }, [selectedOption]);

  useEffect(() => {
    console.log("Updated results:", results);
  }, [results]);

  return (
    <div className="w-full h-full">
      <div className="w-fit m-auto">Jelly Bean</div>
      <div className="w-[8rem] ml-4">
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
  );
}

export default App;
