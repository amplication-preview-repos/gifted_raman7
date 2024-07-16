import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fullName?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  dateOfBirth?: SortOrder;
};
