import BeanDetail from "./BeanDetail";
import BeanModal from "./BeanModal";
import Spinner from "../../../Spinner/Spinner";
import useBeanResults from "../hooks/useBeanResults";

interface props {
  selectedOption: string;
  searchOption: string;
}

export default function BeanResults({ selectedOption, searchOption }: props) {
  const { handleModal, openModal, setOpenModal, beans, loading, beanInfo } =
    useBeanResults(selectedOption, searchOption);

  function renderBeans() {
    const bean =
      beans &&
      beans.map((bean, index) => {
        return (
          <div onClick={() => handleModal(index)} key={index}>
            <BeanDetail index={index} bean={bean} />
          </div>
        );
      });
    return bean;
  }

  return (
    <>
      <div className="">
        {loading ? (
          <div className="h-screen flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="h-screen overflow-scroll flex flex-wrap items-center justify-center py-12">
            {renderBeans()}
          </div>
        )}
        {openModal && (
          <div className="fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
            <BeanModal bean={beanInfo} setOpen={setOpenModal} />
          </div>
        )}
      </div>
    </>
  );
}
