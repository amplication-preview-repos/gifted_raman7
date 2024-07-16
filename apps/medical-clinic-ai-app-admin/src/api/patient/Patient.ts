import { Conversation } from "../conversation/Conversation";
import { Appointment } from "../appointment/Appointment";

export type Patient = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fullName: string | null;
  email: string | null;
  phoneNumber: string | null;
  dateOfBirth: Date | null;
  conversations?: Array<Conversation>;
  appointments?: Array<Appointment>;
};
