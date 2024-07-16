import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { ConversationUpdateManyWithoutDoctorsInput } from "./ConversationUpdateManyWithoutDoctorsInput";

export type DoctorUpdateInput = {
  fullName?: string | null;
  specialization?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
  clinic?: ClinicWhereUniqueInput | null;
  conversations?: ConversationUpdateManyWithoutDoctorsInput;
};
