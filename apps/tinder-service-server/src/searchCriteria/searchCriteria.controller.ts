import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SearchCriteriaService } from "./searchCriteria.service";
import { SearchCriteriaControllerBase } from "./base/searchCriteria.controller.base";

@swagger.ApiTags("searchCriteria")
@common.Controller("searchCriteria")
export class SearchCriteriaController extends SearchCriteriaControllerBase {
  constructor(protected readonly service: SearchCriteriaService) {
    super(service);
  }
}
