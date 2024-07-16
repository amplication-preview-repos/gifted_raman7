import { ConversationUpdateManyWithoutPatientsInput } from "./ConversationUpdateManyWithoutPatientsInput";
import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  fullName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  dateOfBirth?: Date | null;
  conversations?: ConversationUpdateManyWithoutPatientsInput;
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
};
