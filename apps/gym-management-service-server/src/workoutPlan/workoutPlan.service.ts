import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkoutPlanServiceBase } from "./base/workoutPlan.service.base";

@Injectable()
export class WorkoutPlanService extends WorkoutPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
