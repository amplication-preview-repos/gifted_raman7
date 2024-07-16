import { SortOrder } from "../../util/SortOrder";

export type ClinicOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  location?: SortOrder;
  phoneNumber?: SortOrder;
};
