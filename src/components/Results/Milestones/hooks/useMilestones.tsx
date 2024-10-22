import { useState, useEffect } from "react";
import { MileStones } from "../../../../types.ts/types";
import { defaultMilestones } from "../../../../constants/BeanConstants";
import { getMilestones } from "../../../../api-calls/jellyBeanApi";

export default function useMilestones(selectedOption: string) {
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

  return { results, loading };
}
