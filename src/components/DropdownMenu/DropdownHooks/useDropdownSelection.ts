import { useEffect, useState } from "react";
import { DROPDOWNOPTIONS } from "../../../constants/BeanConstants";
import { getBeanInfo } from "../../../api-calls/jellyBeanApi";

export default function useSearchSelection() {
  const dropdownOptions = DROPDOWNOPTIONS;
  const [selectedOption, setSelectedOption] = useState<string>("");

  // update handle api to display selected jelly beans
  useEffect(() => {
    selectedOption !== "" && getBeanInfo(3, 20);
  }, [selectedOption]);

  const handleDropdownSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  return { selectedOption, handleDropdownSelection, dropdownOptions };
}
