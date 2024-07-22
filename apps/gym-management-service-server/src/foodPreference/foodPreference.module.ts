import { Module } from "@nestjs/common";
import { FoodPreferenceModuleBase } from "./base/foodPreference.module.base";
import { FoodPreferenceService } from "./foodPreference.service";
import { FoodPreferenceController } from "./foodPreference.controller";
import { FoodPreferenceResolver } from "./foodPreference.resolver";

@Module({
  imports: [FoodPreferenceModuleBase],
  controllers: [FoodPreferenceController],
  providers: [FoodPreferenceService, FoodPreferenceResolver],
  exports: [FoodPreferenceService],
})
export class FoodPreferenceModule {}
