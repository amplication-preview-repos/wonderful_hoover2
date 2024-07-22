import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type FoodPreferenceWhereInput = {
  id?: StringFilter;
  preference?: StringNullableFilter;
  member?: MemberWhereUniqueInput;
};
