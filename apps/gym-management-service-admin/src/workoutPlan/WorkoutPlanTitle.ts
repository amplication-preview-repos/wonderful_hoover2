import { WorkoutPlan as TWorkoutPlan } from "../api/workoutPlan/WorkoutPlan";

export const WORKOUTPLAN_TITLE_FIELD = "name";

export const WorkoutPlanTitle = (record: TWorkoutPlan): string => {
  return record.name?.toString() || String(record.id);
};
