import { SortOrder } from "../../util/SortOrder";

export type FoodPreferenceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  preference?: SortOrder;
  memberId?: SortOrder;
};
