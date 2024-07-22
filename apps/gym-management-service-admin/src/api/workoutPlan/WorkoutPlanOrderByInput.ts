import { SortOrder } from "../../util/SortOrder";

export type WorkoutPlanOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  durationWeeks?: SortOrder;
  description?: SortOrder;
};
