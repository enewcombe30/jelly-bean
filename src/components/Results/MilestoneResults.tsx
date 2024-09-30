import { useEffect, useState } from "react";
import { getMilestones } from "../../api-calls/jellyBeanApi";
import { MileStones } from "../../types.ts/types";
import { defaultMilestones } from "../../constants/BeanConstants";

interface props {
  selectedOption: string;
}

export default function MilestoneResults({ selectedOption }: props) {
  const [results, setResults] = useState<MileStones>(defaultMilestones);

  console.log("results", results);

  useEffect(() => {
    async function setData() {
      const data = await getMilestones(1, 200);
      setResults(data);
      console.log(data);
    }

    setData();
  }, [selectedOption === "milestones"]);

  function renderMilestones() {
    const milestone = results.items.map((mile, index) => (
      <div key={index} className="flex border-b mb-2">
        <div className="font-bold italic w-fit h-[2rem] mr-2">{mile.year}</div>
        <div>{mile.description}</div>
      </div>
    ));
    return milestone;
  }

  return (
    <div className="my-8 w-full pr-[14rem]">
      <div>{renderMilestones()}</div>
    </div>
  );
}
