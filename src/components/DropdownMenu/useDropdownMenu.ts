import { useState, useEffect } from "react";
import { OPTIONS } from "../../constants/BeanConstants";
import { getBeanInfo } from "../../api-calls/jellyBeanApi";

export default function useDropdownMenu() {
  const searchOption = OPTIONS;
  const [selectedOption, setSelectedOption] = useState<string>(
    OPTIONS.Option[0].value
  );

  useEffect(() => {
    selectedOption !== "" && getBeanInfo(selectedOption, 3, 20);
  }, [selectedOption]);

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return { selectedOption, handleSelection, searchOption };
}
