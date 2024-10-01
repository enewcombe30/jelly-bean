import { useEffect, useState } from "react";
import { AllData } from "../../types.ts/types";
import { defaultData } from "../../constants/BeanConstants";
import { getBeanInfo } from "../../api-calls/jellyBeanApi";

interface props {
  selectedOption: string;
}

export default function BeanResults({ selectedOption }: props) {
  const [results, setResults] = useState<AllData>(defaultData);
  const lowerCase = results && results.items[0].backgroundColor.toLowerCase();

  useEffect(() => {
    async function setData() {
      try {
        const data = await getBeanInfo(selectedOption, 1, 200);
        setResults(data);
        // console.log(data);
      } catch (error) {
        console.error("Failed to fetch and parse data:", error);
        // Optionally update state to show an error message to the user
      }
    }
    setData();
  }, [selectedOption]);

  // adapt to set up dropdown filter
  function renderGroups() {
    const groups = results.items.filter(
      (beans, index) => beans.colorGroup === "darkkhaki"
    );
    console.log("groups", groups);
  }

  function renderBeans() {
    const bean = results.items.map((bean, index) => {
      const bgColour = bean.backgroundColor;
      return (
        <div
          className={`w-[18rem] h-fit border-2 border-slate-200 rounded-lg p-4 m-4 cursor-pointer`}
          key={index}
          style={{ borderColor: bgColour }}
        >
          <img
            alt="jellyBean"
            src={bean.imageUrl}
            className="h-[8.5rem] w-[12rem] m-auto"
          />

          <div className={`flex mx-auto w-fit font-bold`}>
            {bean.flavorName}
          </div>
        </div>
      );
    });
    return bean;
  }

  return (
    <div className="h-screen pb-[4rem]">
      <div className="w-full h-screen overflow-scroll flex flex-wrap">
        {renderBeans()}
      </div>
    </div>
  );
}
