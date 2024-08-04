import { SearchCriteria as TSearchCriteria } from "../api/searchCriteria/SearchCriteria";

export const SEARCHCRITERIA_TITLE_FIELD = "id";

export const SearchCriteriaTitle = (record: TSearchCriteria): string => {
  return record.id?.toString() || String(record.id);
};
