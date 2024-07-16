import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ConversationListRelationFilter } from "../conversation/ConversationListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type PatientWhereInput = {
  id?: StringFilter;
  fullName?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  conversations?: ConversationListRelationFilter;
  appointments?: AppointmentListRelationFilter;
};
