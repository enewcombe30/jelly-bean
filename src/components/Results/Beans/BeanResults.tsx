import { useEffect, useState } from "react";
import { AllData, Bean } from "../../../types.ts/types";
import { defaultData } from "../../../constants/BeanConstants";
import { getBeanInfo } from "../../../api-calls/jellyBeanApi";
import BeanDetail from "./BeanDetail";
import BeanModal from "./BeanModal";

interface props {
  selectedOption: string;
  searchOption: string;
}

export default function BeanResults({ selectedOption, searchOption }: props) {
  const [results, setResults] = useState<AllData>(defaultData);
  const [beans, setBeans] = useState<Bean[]>(defaultData.items);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [beanInfo, setBeanInfo] = useState<Bean>(defaultData.items[0]);

  useEffect(() => {
    async function setData() {
      try {
        const data = await getBeanInfo(selectedOption, 1, 200);
        setResults(data);
        console.log("data", data);
        setBeans(results.items);
        console.log("data beans", results.items);
      } catch (error) {
        console.error("Failed to fetch and parse data:", error);
      }
    }
    setData();
  }, [selectedOption]);

  function handleModal(index: number) {
    setBeanInfo(results.items[index]);
    setOpenModal(!openModal);
    console.log(beanInfo);
  }

  useEffect(() => {
    function renderGroups() {
      if (searchOption === "") {
        setBeans(results.items);
        return;
      }
      const groups = results.items.filter(
        (bean) => bean.colorGroup === searchOption
      );
      setBeans(groups);
    }
    renderGroups();
  }, [searchOption]);

  function renderBeans() {
    const bean = beans.map((bean, index) => {
      return (
        <div onClick={() => handleModal(index)} key={index}>
          <BeanDetail index={index} bean={bean} />
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
      {openModal && (
        <div className="fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          <BeanModal bean={beanInfo} setOpen={setOpenModal} />
        </div>
      )}
    </div>
  );
}
