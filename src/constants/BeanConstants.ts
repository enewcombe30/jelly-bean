import {
  DropdownOptions,
  DropdownOption,
  AllData,
  Bean,
  BeanResults,
  MileStone,
  MileStones,
} from "../types.ts/types";
export const BEANS: DropdownOption = { value: "beans", label: "Beans" };
export const FACTS: DropdownOption = { value: "facts", label: "Facts" };
export const MILESTONES: DropdownOption = {
  value: "milestones",
  label: "Milestones",
};

export const DROPDOWNOPTIONS: DropdownOptions = {
  option: [BEANS, FACTS, MILESTONES],
};
export const defaultBean: Bean = {
  groupName: "",
  flavorName: "",
  description: "",
  colorGroup: "",
  backgroundColor: "",
  imageUrl: "",
  glutenFree: false,
  sugarFree: false,
  Seasonal: false,
};

export const defaultMilestone: MileStone = {
  mileStoneId: 1,
  year: 2000,
  description: "",
};

export const defaultMilestones: MileStones = { items: [defaultMilestone] };

export const defaultResults: BeanResults = [defaultBean];

export const defaultData: AllData = {
  totalCount: 99,
  pageSize: 20,
  currentPage: 0,
  totalPages: 3,
  items: defaultResults,
};
