import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  appointmentDate?: SortOrder;
  reasonForVisit?: SortOrder;
  doctorId?: SortOrder;
  clinicId?: SortOrder;
  patientId?: SortOrder;
};
