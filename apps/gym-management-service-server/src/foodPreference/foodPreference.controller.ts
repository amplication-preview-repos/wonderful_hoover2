import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FoodPreferenceService } from "./foodPreference.service";
import { FoodPreferenceControllerBase } from "./base/foodPreference.controller.base";

@swagger.ApiTags("foodPreferences")
@common.Controller("foodPreferences")
export class FoodPreferenceController extends FoodPreferenceControllerBase {
  constructor(protected readonly service: FoodPreferenceService) {
    super(service);
  }
}
