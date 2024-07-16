import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PATIENT_TITLE_FIELD } from "./PatientTitle";
import { DOCTOR_TITLE_FIELD } from "../doctor/DoctorTitle";
import { CLINIC_TITLE_FIELD } from "../clinic/ClinicTitle";

export const PatientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="FullName" source="fullName" />
        <TextField label="Email" source="email" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <TextField label="DateOfBirth" source="dateOfBirth" />
        <ReferenceManyField
          reference="Conversation"
          target="patientId"
          label="Conversations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Messages" source="messages" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Appointment"
          target="patientId"
          label="Appointments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="AppointmentDate" source="appointmentDate" />
            <TextField label="ReasonForVisit" source="reasonForVisit" />
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Clinic"
              source="clinic.id"
              reference="Clinic"
            >
              <TextField source={CLINIC_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
