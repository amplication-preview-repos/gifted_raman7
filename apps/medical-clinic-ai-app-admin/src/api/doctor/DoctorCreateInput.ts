import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { ConversationCreateNestedManyWithoutDoctorsInput } from "./ConversationCreateNestedManyWithoutDoctorsInput";

export type DoctorCreateInput = {
  fullName?: string | null;
  specialization?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
  clinic?: ClinicWhereUniqueInput | null;
  conversations?: ConversationCreateNestedManyWithoutDoctorsInput;
};
