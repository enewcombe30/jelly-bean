import Spinner from "../../components/Spinner/Spinner";
import { MileStone } from "../../types.ts/types";
import useMilestones from "./hooks/useMilestones";

interface props {
  selectedOption: string;
}

export default function MilestoneResults({ selectedOption }: props) {
  const { results, loading } = useMilestones(selectedOption);

  function renderMilestones() {
    const milestone = results.items.map((mile: MileStone, index: number) => (
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
