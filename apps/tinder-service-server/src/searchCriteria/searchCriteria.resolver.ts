import * as graphql from "@nestjs/graphql";
import { SearchCriteriaResolverBase } from "./base/searchCriteria.resolver.base";
import { SearchCriteria } from "./base/SearchCriteria";
import { SearchCriteriaService } from "./searchCriteria.service";

@graphql.Resolver(() => SearchCriteria)
export class SearchCriteriaResolver extends SearchCriteriaResolverBase {
  constructor(protected readonly service: SearchCriteriaService) {
    super(service);
  }
}
