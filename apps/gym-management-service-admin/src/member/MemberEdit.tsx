import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FoodPreferenceTitle } from "../foodPreference/FoodPreferenceTitle";

export const MemberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="date_of_birth" source="dateOfBirth" />
        <DateTimeInput
          label="membership_start_date"
          source="membershipStartDate"
        />
        <DateTimeInput label="membership_end_date" source="membershipEndDate" />
        <ReferenceArrayInput
          source="foodPreferences"
          reference="FoodPreference"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FoodPreferenceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
