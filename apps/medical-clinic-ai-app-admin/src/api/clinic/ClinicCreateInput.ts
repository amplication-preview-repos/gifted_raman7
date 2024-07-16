import { AppointmentCreateNestedManyWithoutClinicsInput } from "./AppointmentCreateNestedManyWithoutClinicsInput";
import { DoctorCreateNestedManyWithoutClinicsInput } from "./DoctorCreateNestedManyWithoutClinicsInput";

export type ClinicCreateInput = {
  name?: string | null;
  location?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClinicsInput;
  doctors?: DoctorCreateNestedManyWithoutClinicsInput;
};
