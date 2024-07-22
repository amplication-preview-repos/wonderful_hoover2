import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type FoodPreferenceCreateInput = {
  preference?: string | null;
  member?: MemberWhereUniqueInput | null;
};
