import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";

export type ConversationWhereInput = {
  id?: StringFilter;
  messages?: JsonFilter;
  patient?: PatientWhereUniqueInput;
  doctor?: DoctorWhereUniqueInput;
};
