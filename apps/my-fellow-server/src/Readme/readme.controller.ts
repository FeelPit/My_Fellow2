import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReadmeService } from "./readme.service";

@swagger.ApiTags("readmes")
@common.Controller("readmes")
export class ReadmeController {
  constructor(protected readonly service: ReadmeService) {}
}
