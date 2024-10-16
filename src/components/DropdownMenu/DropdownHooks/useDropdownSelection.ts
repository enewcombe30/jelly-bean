import { useEffect, useState } from "react";
import {
  COLOURGROUPS,
  DROPDOWNOPTIONS,
} from "../../../constants/BeanConstants";
import { getBeanInfo } from "../../../api-calls/jellyBeanApi";

export default function useSearchSelection() {
  const dropdownOptions = DROPDOWNOPTIONS;
  const searchOptions = COLOURGROUPS;
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [searchSelection, setSearchSelection] = useState<string>("");

  // update handle api to display selected jelly beans
  useEffect(() => {
    setSelectedOption("beans");
  }, []);

  useEffect(() => {
    selectedOption !== "" && getBeanInfo(selectedOption, 3, 20);
  }, [selectedOption]);

  const handleDropdownSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSearchSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchSelection(e.target.value);
  };

  return {
    selectedOption,
    searchSelection,
    handleDropdownSelection,
    handleSearchSelection,
    dropdownOptions,
    searchOptions,
  };
}
