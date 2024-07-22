import { FoodPreferenceUpdateManyWithoutMembersInput } from "./FoodPreferenceUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  name?: string | null;
  email?: string | null;
  dateOfBirth?: Date | null;
  membershipStartDate?: Date | null;
  membershipEndDate?: Date | null;
  foodPreferences?: FoodPreferenceUpdateManyWithoutMembersInput;
};
