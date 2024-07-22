import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FoodPreferenceTitle } from "../foodPreference/FoodPreferenceTitle";

export const MemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
