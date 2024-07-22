import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type FoodPreferenceUpdateInput = {
  preference?: string | null;
  member?: MemberWhereUniqueInput | null;
};
