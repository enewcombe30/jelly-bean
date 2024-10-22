import { Bean } from "../../../../types.ts/types";
import { FormatBoolean } from "../../../../api-calls/hooks/helpers/FormatBoolean";

interface props {
  bean: Bean;
  setOpen: (value: boolean) => void;
}

export default function BeanModal({ bean, setOpen }: props) {
  return (
    <div
      className="h-screen w-screen bg-black bg-opacity-75"
      onClick={() => setOpen(false)}
    >
      <div
        className={`w-[36rem] h-fit border-2 border-slate-200 bg-white rounded-lg p-4 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]`}
        style={{ borderColor: bean.backgroundColor }}
      >
        <div
          className="absolute right-4 top-2 font-bold cursor-pointer"
          onClick={() => setOpen(false)}
        >
          x
        </div>
        <img
          className="w-[18rem] mx-auto my-6 h-[12.75]"
          src={bean.imageUrl}
          alt="jellybeanlrg"
        />
        <div className="mx-auto w-fit font-bold mb-2 ">{bean.flavorName}</div>
        <div className="mx-auto text-center mb-2 border-b"></div>
        <div className="flex mt-2">
          <div className="w-[18rem] p-4 border-r border-dashed flex-none">
            <div className="italic text-sm">{bean.description}</div>
          </div>
          <div className="w-[18rem] px-4 py-3">
            <div className="flex">
              <div className="w-[6rem]">Colour:</div>
              <div>{bean.colorGroup}</div>
            </div>
            <div className="flex">
              <div className="w-[6rem]">Seasonal:</div>
              <div>{FormatBoolean(bean.seasonal)}</div>
            </div>
            <div className="flex">
              <div className="w-[6rem]">Gluten free:</div>
              <div>{FormatBoolean(bean.glutenFree)}</div>
            </div>
            <div className="flex">
              <div className="w-[6rem]">Sugar free:</div>
              <div>{FormatBoolean(bean.sugarFree)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
