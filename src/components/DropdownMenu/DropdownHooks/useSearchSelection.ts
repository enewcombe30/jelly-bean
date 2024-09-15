import { useEffect, useState } from "react";
import { SEARCHOPTIONS } from "../../../constants/BeanConstants";
import { getBeanInfo } from "../../../api-calls/jellyBeanApi";

export default function useSearchSelection() {
  const searchOptions = SEARCHOPTIONS;
  const [selectedSearchOption, setSelectedSearchOption] = useState<string>("");

  useEffect(() => {
    selectedSearchOption !== "" && getBeanInfo(selectedSearchOption, 3, 20);
  }, [selectedSearchOption]);

  const handleSearchSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSearchOption(e.target.value);
  };
  return { selectedSearchOption, handleSearchSelection, searchOptions };
}
