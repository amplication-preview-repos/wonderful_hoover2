import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const WorkoutPlanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="duration_weeks" source="durationWeeks" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
