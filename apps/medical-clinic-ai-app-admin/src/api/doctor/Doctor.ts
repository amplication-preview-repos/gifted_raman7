import { Appointment } from "../appointment/Appointment";
import { Clinic } from "../clinic/Clinic";
import { Conversation } from "../conversation/Conversation";

export type Doctor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fullName: string | null;
  specialization: string | null;
  email: string | null;
  phoneNumber: string | null;
  appointments?: Array<Appointment>;
  clinic?: Clinic | null;
  conversations?: Array<Conversation>;
};
