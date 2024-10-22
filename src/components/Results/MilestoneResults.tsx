import { useEffect, useState } from "react";
import { getMilestones } from "../../api-calls/jellyBeanApi";
import { MileStones } from "../../types.ts/types";
import { defaultMilestones } from "../../constants/BeanConstants";
import Spinner from "../Spinner/Spinner";

interface props {
  selectedOption: string;
}

export default function MilestoneResults({ selectedOption }: props) {
  const [results, setResults] = useState<MileStones>(defaultMilestones);
  const [loading, setLoading] = useState<boolean>(false);
  const isMilestone = selectedOption === "milestones";

  useEffect(() => {
    setLoading(true);
    async function setData() {
      const data = await getMilestones(1, 200);
      setResults(data);
      setLoading(false);
    }

    setData();
  }, [isMilestone]);

  function renderMilestones() {
    const milestone = results.items.map((mile, index) => (
      <div key={index} className="border-b mb-2">
        <div className="font-bold italic w-fit h-[2rem] mr-2 mb-2 text-xl">
          {mile.year}
        </div>
        <div className="mb-2">{mile.description}</div>
      </div>
    ));
    return milestone;
  }

  return (
    <div>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="h-screen overflow-scroll flex flex-wrap items-center justify-center py-12 pr-24">
          <div>{renderMilestones()}</div>
        </div>
      )}
    </div>
  );
}
