import { useEffect, useState } from "react";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import useDropdownSelection from "./components/DropdownMenu/DropdownHooks/useDropdownSelection";
import { getBeanInfo } from "./api-calls/jellyBeanApi";
import { AllData, BeanResults } from "./types.ts/types";

function App() {
  const [results, setResults] = useState<AllData>();
  const { handleDropdownSelection, selectedOption, dropdownOptions } =
    useDropdownSelection();

  // console.log("results", results);

  useEffect(() => {
    async function setData() {
      const data = await getBeanInfo(selectedOption, 0, 20);
      setResults(data);
      return;
    }
    setData();
  }, [selectedOption]);

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
