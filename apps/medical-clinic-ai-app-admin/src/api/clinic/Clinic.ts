import { Appointment } from "../appointment/Appointment";
import { Doctor } from "../doctor/Doctor";

export type Clinic = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  phoneNumber: string | null;
  appointments?: Array<Appointment>;
  doctors?: Array<Doctor>;
};
