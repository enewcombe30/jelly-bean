import { useEffect, useState } from "react";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import useDropdownSelection from "./components/DropdownMenu/DropdownHooks/useDropdownSelection";
import { getBeanInfo } from "./api-calls/jellyBeanApi";
import { AllData, BeanResults, Bean } from "./types.ts/types";
import { defaultData } from "./constants/BeanConstants";

function App() {
  const [results, setResults] = useState<AllData>(defaultData);
  const { handleDropdownSelection, selectedOption, dropdownOptions } =
    useDropdownSelection();

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

  console.log(results);

  useEffect(() => {
    if (results && results.items && results.items) {
      console.log(results.items);
    }
  }, [results]);

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
          {results && (
            <div className="w-[18rem] h-[18rem] border-2 border-black p-4">
              <div className="flex">
                <div>Result:</div>
                <div className={`text-${results.items[0].backgroundColor}`}>
                  {results.items[0].backgroundColor}
                </div>
              </div>
              <div className="flex">
                <div>Result:</div>
                <div>{results.items[0].flavorName}</div>
              </div>
              <div className="flex">
                <div>Result:</div>
                <div>{results.items[0].sugarFree ? "True" : "False"}</div>
              </div>
              <div className="flex">
                <div>Result:</div>
                <div>{results.items[0].description}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
