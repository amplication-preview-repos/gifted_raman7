/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TeamMemberWhereInput } from "./TeamMemberWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TeamMemberOrderByInput } from "./TeamMemberOrderByInput";

@ArgsType()
class TeamMemberFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TeamMemberWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TeamMemberWhereInput, { nullable: true })
  @Type(() => TeamMemberWhereInput)
  where?: TeamMemberWhereInput;

  @ApiProperty({
    required: false,
    type: [TeamMemberOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TeamMemberOrderByInput], { nullable: true })
  @Type(() => TeamMemberOrderByInput)
  orderBy?: Array<TeamMemberOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TeamMemberFindManyArgs as TeamMemberFindManyArgs };
