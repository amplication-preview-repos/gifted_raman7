import { Doctor } from "../doctor/Doctor";
import { Clinic } from "../clinic/Clinic";
import { Patient } from "../patient/Patient";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  appointmentDate: Date | null;
  reasonForVisit: string | null;
  doctor?: Doctor | null;
  clinic?: Clinic | null;
  patient?: Patient | null;
};
