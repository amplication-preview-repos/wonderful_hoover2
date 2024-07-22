export type WorkoutPlan = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  durationWeeks: number | null;
  description: string | null;
};
