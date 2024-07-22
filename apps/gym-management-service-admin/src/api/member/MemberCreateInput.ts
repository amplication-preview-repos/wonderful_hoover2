import { FoodPreferenceCreateNestedManyWithoutMembersInput } from "./FoodPreferenceCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  name?: string | null;
  email?: string | null;
  dateOfBirth?: Date | null;
  membershipStartDate?: Date | null;
  membershipEndDate?: Date | null;
  foodPreferences?: FoodPreferenceCreateNestedManyWithoutMembersInput;
};
