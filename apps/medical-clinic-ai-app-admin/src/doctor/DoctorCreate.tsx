import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { ClinicTitle } from "../clinic/ClinicTitle";
import { ConversationTitle } from "../conversation/ConversationTitle";

export const DoctorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FullName" source="fullName" />
        <TextInput label="Specialization" source="specialization" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="clinic.id" reference="Clinic" label="Clinic">
          <SelectInput optionText={ClinicTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="conversations"
          reference="Conversation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConversationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
