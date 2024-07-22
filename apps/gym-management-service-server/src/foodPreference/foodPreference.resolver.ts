import * as graphql from "@nestjs/graphql";
import { FoodPreferenceResolverBase } from "./base/foodPreference.resolver.base";
import { FoodPreference } from "./base/FoodPreference";
import { FoodPreferenceService } from "./foodPreference.service";

@graphql.Resolver(() => FoodPreference)
export class FoodPreferenceResolver extends FoodPreferenceResolverBase {
  constructor(protected readonly service: FoodPreferenceService) {
    super(service);
  }
}
