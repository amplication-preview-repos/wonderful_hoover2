import { FoodPreferenceWhereInput } from "./FoodPreferenceWhereInput";
import { FoodPreferenceOrderByInput } from "./FoodPreferenceOrderByInput";

export type FoodPreferenceFindManyArgs = {
  where?: FoodPreferenceWhereInput;
  orderBy?: Array<FoodPreferenceOrderByInput>;
  skip?: number;
  take?: number;
};
