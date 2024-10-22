import { useState, useEffect } from "react";
import { AllData, Bean } from "../../../../types.ts/types";
import { defaultData } from "../../../../constants/BeanConstants";
import { getBeanInfo } from "../../../../api-calls/jellyBeanApi";

export default function useBeanResults(
  selectedOption: string,
  searchOption: string
) {
  const [results, setResults] = useState<AllData>(defaultData);
  const [beans, setBeans] = useState<Bean[]>(defaultData.items);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [beanInfo, setBeanInfo] = useState<Bean>(defaultData.items[0]);
  const [loading, setLoading] = useState<boolean>(false);
  const beanItems = results.items;

  useEffect(() => {
    async function setData() {
      setLoading(true);
      try {
        const data = await getBeanInfo(selectedOption, 1, 200);
        setResults(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch and parse data:", error);
        setLoading(false);
      }
    }
    setData();
  }, [selectedOption]);

  function handleModal(index: number) {
    setBeanInfo(beans[index]);
    setOpenModal(!openModal);
  }

  useEffect(() => {
    function renderGroups() {
      if (searchOption === "") {
        setBeans(results.items);
        return;
      }
      const groups = beanItems.filter(
        (bean) => bean.colorGroup === searchOption
      );
      setBeans(groups);
    }
    renderGroups();
  }, [searchOption, beanItems]);

  return {
    handleModal,
    openModal,
    setOpenModal,
    beans,
    loading,
    beanInfo,
  };
}
