import * as graphql from "@nestjs/graphql";
import { WorkoutPlanResolverBase } from "./base/workoutPlan.resolver.base";
import { WorkoutPlan } from "./base/WorkoutPlan";
import { WorkoutPlanService } from "./workoutPlan.service";

@graphql.Resolver(() => WorkoutPlan)
export class WorkoutPlanResolver extends WorkoutPlanResolverBase {
  constructor(protected readonly service: WorkoutPlanService) {
    super(service);
  }
}
