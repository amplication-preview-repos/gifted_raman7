import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DoctorListRelationFilter } from "../doctor/DoctorListRelationFilter";

export type ClinicWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  doctors?: DoctorListRelationFilter;
};
