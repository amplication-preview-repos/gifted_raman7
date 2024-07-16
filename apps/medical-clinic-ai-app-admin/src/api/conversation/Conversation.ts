import { JsonValue } from "type-fest";
import { Patient } from "../patient/Patient";
import { Doctor } from "../doctor/Doctor";

export type Conversation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  messages: JsonValue;
  patient?: Patient | null;
  doctor?: Doctor | null;
};
