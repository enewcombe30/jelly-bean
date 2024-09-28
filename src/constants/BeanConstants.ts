import {
  DropdownOptions,
  DropdownOption,
  AllData,
  Bean,
  BeanResults,
} from "../types.ts/types";
export const DEFAULT: DropdownOption = { value: "", label: "Select option" };
export const BEANS: DropdownOption = { value: "beans", label: "Beans" };
export const FACTS: DropdownOption = { value: "facts", label: "Facts" };
export const MILESTONES: DropdownOption = {
  value: "mileStones",
  label: "Milestones",
};

export const DROPDOWNOPTIONS: DropdownOptions = {
  option: [DEFAULT, BEANS, FACTS, MILESTONES],
};
export const defaultBean: Bean = {
  groupName: "",
  flavorName: "",
  description: "",
  colorGroup: "",
  backgroundColor: "",
  imageUrl: "",
  glutenFree: "",
  sugarFree: "",
  Seasonal: "",
};

export const defaultResults: BeanResults = { beans: [defaultBean] };

export const defaultData: AllData = {
  totalCount: 99,
  pageSize: 20,
  currentPage: 0,
  totalPages: 3,
  items: defaultResults,
};
