import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type WorkoutPlanWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  durationWeeks?: IntNullableFilter;
  description?: StringNullableFilter;
};
