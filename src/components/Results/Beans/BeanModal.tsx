import { Bean } from "../../../types.ts/types";
import { FormatBoolean } from "../../../api-calls/hooks/helpers/FormatBoolean";

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
        className={`w-[36rem] h-fit border-2 border-slate-200 bg-white rounded-lg p-4 cursor-pointer absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]`}
        style={{ borderColor: bean.backgroundColor }}
      >
        <div
          className="absolute right-4 top-2 font-bold"
          onClick={() => setOpen(false)}
        >
          x
        </div>
        <img
          className="w-[18rem] mx-auto my-8 h-[12.75]"
          src={bean.imageUrl}
          alt="jellybeanlrg"
        />
        <div className="mx-auto w-fit font-bold mb-2 ">{bean.flavorName}</div>
        <div className="mx-auto text-center mb-2 "> {bean.description}</div>
        <div className="flex">
          <div className="w-[4rem]"></div>
          <div>
            <div>Colour: {bean.colorGroup}</div>
            <div>Seasonal: {FormatBoolean(bean.seasonal)}</div>
            <div>Gluten free: {FormatBoolean(bean.glutenFree)}</div>
            <div>Sugar free: {FormatBoolean(bean.sugarFree)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
