import { ConversationCreateNestedManyWithoutPatientsInput } from "./ConversationCreateNestedManyWithoutPatientsInput";
import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  fullName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  dateOfBirth?: Date | null;
  conversations?: ConversationCreateNestedManyWithoutPatientsInput;
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
};
