import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentDate?: Date | null;
  reasonForVisit?: string | null;
  doctor?: DoctorWhereUniqueInput | null;
  clinic?: ClinicWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
};
