import { Bean } from "../../../types.ts/types";

interface props {
  bean: Bean;
  setOpen: (value: boolean) => void;
}

export default function BeanModal({ bean, setOpen }: props) {
  return (
    <div className="h-screen w-screen mix-blend-darken">
      <div
        className={`w-[36rem] h-fit border-2 border-slate-200 bg-white rounded-lg p-4 cursor-pointer absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]`}
        style={{ borderColor: bean.backgroundColor }}
      >
        <div className="relative right-4 top-4" onClick={() => setOpen(false)}>
          X
        </div>
        <img
          className="w-[18rem] mx-auto my-8 h-[12.75]"
          src={bean.imageUrl}
          alt="jellybeanlrg"
        />
        <div>{bean.flavorName}</div>
        <div>{bean.description}</div>
        <div>{bean.colorGroup}</div>
        <div>{bean.Seasonal}</div>
      </div>
    </div>
  );
}
