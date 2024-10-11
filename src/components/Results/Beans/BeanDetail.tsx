import { Bean } from "../../../types.ts/types";

interface props {
  index: number;
  bean: Bean;
}

export default function BeanDetail({ index, bean }: props) {
  return (
    <div
      className={`w-[18rem] h-fit border-2 border-slate-200 rounded-lg p-4 m-4 cursor-pointer`}
      key={index}
      style={{ borderColor: bean.backgroundColor }}
    >
      <img
        alt="jellyBean"
        src={bean.imageUrl}
        className="h-[8.5rem] w-[12rem] m-auto"
      />
      <div className={`flex mx-auto w-fit font-bold`}>{bean.flavorName}</div>
    </div>
  );
}
