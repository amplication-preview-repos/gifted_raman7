import { SortOrder } from "../../util/SortOrder";

export type ConversationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  messages?: SortOrder;
  patientId?: SortOrder;
  doctorId?: SortOrder;
};
