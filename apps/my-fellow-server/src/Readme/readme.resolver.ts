import * as graphql from "@nestjs/graphql";
import { ReadmeService } from "./readme.service";

export class ReadmeResolver {
  constructor(protected readonly service: ReadmeService) {}
}
