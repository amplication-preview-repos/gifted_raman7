import { InputJsonValue } from "../../types";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";

export type ConversationUpdateInput = {
  messages?: InputJsonValue;
  patient?: PatientWhereUniqueInput | null;
  doctor?: DoctorWhereUniqueInput | null;
};
