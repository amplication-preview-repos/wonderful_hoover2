import { FoodPreference as TFoodPreference } from "../api/foodPreference/FoodPreference";

export const FOODPREFERENCE_TITLE_FIELD = "id";

export const FoodPreferenceTitle = (record: TFoodPreference): string => {
  return record.id?.toString() || String(record.id);
};
