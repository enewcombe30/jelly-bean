import { Options, Option } from "../types.ts/types";
export const DEFAULT: Option = { value: "", label: "Select option" };
export const BEANS: Option = { value: "beans", label: "Beans" };
export const FACTS: Option = { value: "facts", label: "Facts" };
export const MILESTONES: Option = { value: "mileStones", label: "Milestones" };

export const OPTIONS: Options = { Option: [DEFAULT, BEANS, FACTS, MILESTONES] };
