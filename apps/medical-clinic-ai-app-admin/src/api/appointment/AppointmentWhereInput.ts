import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  appointmentDate?: DateTimeNullableFilter;
  reasonForVisit?: StringNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  clinic?: ClinicWhereUniqueInput;
  patient?: PatientWhereUniqueInput;
};
