import {
  DropdownOptions,
  DropdownOption,
  AllData,
  Bean,
  MileStone,
  MileStones,
  colourGroups,
} from "../types.ts/types";
export const BEANS: DropdownOption = { value: "beans", label: "Beans" };
export const MILESTONES: DropdownOption = {
  value: "milestones",
  label: "Milestones",
};

export const DROPDOWNOPTIONS: DropdownOptions = {
  options: [BEANS, MILESTONES],
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
  seasonal: false,
  kosher: false,
};

export const defaultMilestone: MileStone = {
  mileStoneId: 1,
  year: 2000,
  description: "",
};

export const defaultMilestones: MileStones = { items: [defaultMilestone] };

// export const defaultResults: BeanResults = [defaultBean];

export const defaultData: AllData = {
  totalCount: 99,
  pageSize: 20,
  currentPage: 0,
  totalPages: 3,
  items: [defaultBean],
};

export const COLOURGROUPS: colourGroups = {
  options: [
    { label: "All", value: "" },
    { label: "Dark Kakhi", value: "darkkhaki" },
    { label: "Khaki", value: "khaki" },
    { label: "Gainsboro", value: "gainsboro" },
    { label: "Saddle Brown", value: "saddlebrown" },
    { label: "Dark Slate Gray", value: "darkslategray" },
    { label: "Burly Wood", value: "burlywood" },
    { label: "Light Pink", value: "lightpink" },
    { label: "Steel Blue", value: "steelblue" },
    { label: "Gold", value: "gold" },
    { label: "Golden Rod", value: "goldenrod" },
    { label: "Indian Red", value: "indianred" },
    { label: "Peru", value: "peru" },
    { label: "Tan", value: "tan" },
    { label: "Brown", value: "brown" },
    { label: "Light Gray", value: "lightgray" },
    { label: "Sienna", value: "sienna" },
    { label: "Forest Green", value: "forestgreen" },
    { label: "Dim Gray", value: "dimgray" },
    { label: "Teal", value: "teal" },
    { label: "Rosy Brown", value: "rosybrown" },
    { label: "Wheat", value: "wheat" },
    { label: "Sandy Brown", value: "sandybrown" },
    { label: "Yellow Green", value: "yellowgreen" },
    { label: "Dark Sea Green", value: "darkseagreen" },
    { label: "Dark Gray", value: "darkgray" },
    { label: "Sea Green", value: "seagreen" },
    { label: "Light Salmon", value: "lightsalmon" },
    { label: "Crimson", value: "crimson" },
    { label: "Fire Brick", value: "firebrick" },
    { label: "Pink", value: "pink" },
    { label: "Dark Salmon", value: "darksalmon" },
    { label: "Coral", value: "coral" },
    { label: "Silver", value: "silver" },
    { label: "Dark Green", value: "darkgreen" },
    { label: "Black", value: "black" },
    { label: "Antique White", value: "antiquewhite" },
  ],
};
