import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SearchCriteriaServiceBase } from "./base/searchCriteria.service.base";

@Injectable()
export class SearchCriteriaService extends SearchCriteriaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
