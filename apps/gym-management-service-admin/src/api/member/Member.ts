import { FoodPreference } from "../foodPreference/FoodPreference";

export type Member = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  dateOfBirth: Date | null;
  membershipStartDate: Date | null;
  membershipEndDate: Date | null;
  foodPreferences?: Array<FoodPreference>;
};
