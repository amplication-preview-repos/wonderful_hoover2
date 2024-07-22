import { Member } from "../member/Member";

export type FoodPreference = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  preference: string | null;
  member?: Member | null;
};
