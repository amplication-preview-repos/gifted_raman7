import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { ConversationListRelationFilter } from "../conversation/ConversationListRelationFilter";

export type DoctorWhereInput = {
  id?: StringFilter;
  fullName?: StringNullableFilter;
  specialization?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  clinic?: ClinicWhereUniqueInput;
  conversations?: ConversationListRelationFilter;
};
