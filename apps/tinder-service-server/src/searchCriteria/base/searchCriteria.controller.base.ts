/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SearchCriteriaService } from "../searchCriteria.service";
import { SearchCriteriaCreateInput } from "./SearchCriteriaCreateInput";
import { SearchCriteria } from "./SearchCriteria";
import { SearchCriteriaFindManyArgs } from "./SearchCriteriaFindManyArgs";
import { SearchCriteriaWhereUniqueInput } from "./SearchCriteriaWhereUniqueInput";
import { SearchCriteriaUpdateInput } from "./SearchCriteriaUpdateInput";

export class SearchCriteriaControllerBase {
  constructor(protected readonly service: SearchCriteriaService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SearchCriteria })
  async createSearchCriteria(
    @common.Body() data: SearchCriteriaCreateInput
  ): Promise<SearchCriteria> {
    return await this.service.createSearchCriteria({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SearchCriteria] })
  @ApiNestedQuery(SearchCriteriaFindManyArgs)
  async searchCriteriaItems(
    @common.Req() request: Request
  ): Promise<SearchCriteria[]> {
    const args = plainToClass(SearchCriteriaFindManyArgs, request.query);
    return this.service.searchCriteriaItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SearchCriteria })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async searchCriteria(
    @common.Param() params: SearchCriteriaWhereUniqueInput
  ): Promise<SearchCriteria | null> {
    const result = await this.service.searchCriteria({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SearchCriteria })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSearchCriteria(
    @common.Param() params: SearchCriteriaWhereUniqueInput,
    @common.Body() data: SearchCriteriaUpdateInput
  ): Promise<SearchCriteria | null> {
    try {
      return await this.service.updateSearchCriteria({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SearchCriteria })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSearchCriteria(
    @common.Param() params: SearchCriteriaWhereUniqueInput
  ): Promise<SearchCriteria | null> {
    try {
      return await this.service.deleteSearchCriteria({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}