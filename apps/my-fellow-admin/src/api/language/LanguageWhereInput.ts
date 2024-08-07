import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LanguageWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
