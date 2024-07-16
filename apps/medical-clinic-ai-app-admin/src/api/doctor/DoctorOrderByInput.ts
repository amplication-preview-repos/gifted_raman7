import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fullName?: SortOrder;
  specialization?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  clinicId?: SortOrder;
};
