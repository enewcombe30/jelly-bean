export type DropdownOptions = { options: DropdownOption[] };
export type DropdownOption = { value: string; label: string };

export type AllData = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items: Bean[];
};
export type Bean = {
  groupName: string;
  flavorName: string;
  description: string;
  colorGroup: string;
  backgroundColor: string;
  imageUrl: string;
  glutenFree: boolean;
  sugarFree: boolean;
  seasonal: boolean;
  kosher: boolean;
};

export type MileStones = { items: MileStone[] };

export type MileStone = {
  mileStoneId: number;
  year: number;
  description: string;
};

export type colourGroups = { options: colourGroup[] };
export type colourGroup = { label: string; value: string };
