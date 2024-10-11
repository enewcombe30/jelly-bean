import { useEffect, useState } from "react";
import { AllData, Bean } from "../../../types.ts/types";
import { defaultData } from "../../../constants/BeanConstants";
import { getBeanInfo } from "../../../api-calls/jellyBeanApi";
import BeanDetail from "./BeanDetail";
import BeanModal from "./BeanModal";

interface props {
  selectedOption: string;
}

export default function BeanResults({ selectedOption }: props) {
  const [results, setResults] = useState<AllData>(defaultData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [beanInfo, setBeanInfo] = useState<Bean>(defaultData.items[0]);
  const lowerCase = results && results.items[0].backgroundColor.toLowerCase();

  useEffect(() => {
    async function setData() {
      try {
        const data = await getBeanInfo(selectedOption, 1, 200);
        setResults(data);
      } catch (error) {
        console.error("Failed to fetch and parse data:", error);
      }
    }
    setData();
  }, [selectedOption]);

  // adapt to set up dropdown filter
  function renderGroups() {
    const groups = results.items.filter(
      (beans, index) => beans.colorGroup === "darkkhaki"
    );
    console.log("groups", groups);
  }

  function handleModal(index: number) {
    setBeanInfo(results.items[index]);
    setOpenModal(!openModal);
    console.log(beanInfo);
  }

  function renderBeans() {
    const bean = results.items.map((bean, index) => {
      return (
        <div onClick={() => handleModal(index)}>
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
        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] m-auto">
          <BeanModal bean={beanInfo} setOpen={setOpenModal} />
        </div>
      )}
    </div>
  );
}
