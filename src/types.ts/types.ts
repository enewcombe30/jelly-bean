export type DropdownOptions = { option: DropdownOption[] };
export type DropdownOption = { value: string; label: string };

export type AllData = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items: BeanResults;
};

export type BeanResults = Bean[];
export type Bean = {
  groupName: string;
  flavorName: string;
  description: string;
  colorGroup: string;
  backgroundColor: string;
  imageUrl: string;
  glutenFree: boolean;
  sugarFree: boolean;
  Seasonal: boolean;
};

export type MileStones = { items: MileStone[] };

export type MileStone = {
  mileStoneId: number;
  year: number;
  description: string;
};
