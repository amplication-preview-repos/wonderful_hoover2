import { Module } from "@nestjs/common";
import { WorkoutPlanModuleBase } from "./base/workoutPlan.module.base";
import { WorkoutPlanService } from "./workoutPlan.service";
import { WorkoutPlanController } from "./workoutPlan.controller";
import { WorkoutPlanResolver } from "./workoutPlan.resolver";

@Module({
  imports: [WorkoutPlanModuleBase],
  controllers: [WorkoutPlanController],
  providers: [WorkoutPlanService, WorkoutPlanResolver],
  exports: [WorkoutPlanService],
})
export class WorkoutPlanModule {}
