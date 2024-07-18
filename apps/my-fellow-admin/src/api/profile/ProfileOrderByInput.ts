import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  location?: SortOrder;
  gender?: SortOrder;
  userId?: SortOrder;
};
