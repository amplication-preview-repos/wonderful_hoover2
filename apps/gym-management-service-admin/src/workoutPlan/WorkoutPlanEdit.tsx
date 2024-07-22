import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const WorkoutPlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="duration_weeks" source="durationWeeks" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
