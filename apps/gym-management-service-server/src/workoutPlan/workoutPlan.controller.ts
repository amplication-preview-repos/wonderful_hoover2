import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkoutPlanService } from "./workoutPlan.service";
import { WorkoutPlanControllerBase } from "./base/workoutPlan.controller.base";

@swagger.ApiTags("workoutPlans")
@common.Controller("workoutPlans")
export class WorkoutPlanController extends WorkoutPlanControllerBase {
  constructor(protected readonly service: WorkoutPlanService) {
    super(service);
  }
}
