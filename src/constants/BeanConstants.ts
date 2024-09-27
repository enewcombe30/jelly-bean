import { DropdownOptions, DropdownOption } from "../types.ts/types";
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
