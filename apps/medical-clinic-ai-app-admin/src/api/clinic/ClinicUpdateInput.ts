import { AppointmentUpdateManyWithoutClinicsInput } from "./AppointmentUpdateManyWithoutClinicsInput";
import { DoctorUpdateManyWithoutClinicsInput } from "./DoctorUpdateManyWithoutClinicsInput";

export type ClinicUpdateInput = {
  name?: string | null;
  location?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentUpdateManyWithoutClinicsInput;
  doctors?: DoctorUpdateManyWithoutClinicsInput;
};
