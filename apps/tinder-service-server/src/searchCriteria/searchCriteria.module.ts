import { Module } from "@nestjs/common";
import { SearchCriteriaModuleBase } from "./base/searchCriteria.module.base";
import { SearchCriteriaService } from "./searchCriteria.service";
import { SearchCriteriaController } from "./searchCriteria.controller";
import { SearchCriteriaResolver } from "./searchCriteria.resolver";

@Module({
  imports: [SearchCriteriaModuleBase],
  controllers: [SearchCriteriaController],
  providers: [SearchCriteriaService, SearchCriteriaResolver],
  exports: [SearchCriteriaService],
})
export class SearchCriteriaModule {}
