import { useState } from "react";
import "./App.css";
import { getBeanInfo } from "./api-calls/jellyBeanApi";
import { OPTIONS } from "./constants/BeanConstants";

function App() {
  const [selectedOption, setSelectedOption] = useState<string>(
    OPTIONS.Option[0].value
  );
  getBeanInfo("facts", 3, 20);

  const renderOptions = () => {
    const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(e.target.value);
    };

    return (
      <div>
        <select value={selectedOption} onChange={handleValueChange}>
          {OPTIONS.Option.map((option, index) => (
            <option key={index} value={option.value}>
              <>{option.label}</>
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      <div className="w-fit m-auto">Jelly Bean</div>
      <div className="w-[8rem] ml-4">
        <div>{renderOptions()}</div>
      </div>
    </div>
  );
}

export default App;
