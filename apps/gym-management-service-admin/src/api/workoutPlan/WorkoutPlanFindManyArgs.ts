import { WorkoutPlanWhereInput } from "./WorkoutPlanWhereInput";
import { WorkoutPlanOrderByInput } from "./WorkoutPlanOrderByInput";

export type WorkoutPlanFindManyArgs = {
  where?: WorkoutPlanWhereInput;
  orderBy?: Array<WorkoutPlanOrderByInput>;
  skip?: number;
  take?: number;
};
