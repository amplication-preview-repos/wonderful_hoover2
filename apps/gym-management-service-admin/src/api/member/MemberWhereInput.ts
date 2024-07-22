import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FoodPreferenceListRelationFilter } from "../foodPreference/FoodPreferenceListRelationFilter";

export type MemberWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  membershipStartDate?: DateTimeNullableFilter;
  membershipEndDate?: DateTimeNullableFilter;
  foodPreferences?: FoodPreferenceListRelationFilter;
};
