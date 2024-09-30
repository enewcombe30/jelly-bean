import { useEffect, useState } from "react";
import { AllData } from "../../types.ts/types";
import { defaultData } from "../../constants/BeanConstants";
import { getBeanInfo } from "../../api-calls/jellyBeanApi";

interface props {
  selectedOption: string;
}

export default function Results({ selectedOption }: props) {
  const [results, setResults] = useState<AllData>(defaultData);
  const lowerCase = results && results.items[0].backgroundColor.toLowerCase();

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

  function renderBeans() {
    const bean = results.items.map((bean, index) => (
      <div
        className={`w-[18rem] h-fit border-2 border-[${lowerCase}] rounded-lg p-4 m-4`}
        key={index}
      >
        <img
          alt="jellyBean"
          src={bean.imageUrl}
          className="h-[8.5rem] w-[12rem] m-auto"
        />
        <div className="flex mx-auto w-fit font-bold">{bean.flavorName}</div>
      </div>
    ));
    return bean;
  }

  return (
    <div>
      {results && <div className="w-full flex flex-wrap">{renderBeans()}</div>}
    </div>
  );
}