import { SearchCriteriaWhereInput } from "./SearchCriteriaWhereInput";
import { SearchCriteriaOrderByInput } from "./SearchCriteriaOrderByInput";

export type SearchCriteriaFindManyArgs = {
  where?: SearchCriteriaWhereInput;
  orderBy?: Array<SearchCriteriaOrderByInput>;
  skip?: number;
  take?: number;
};
