import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ProjectContentMediaType } from '../types/project';

class ProjectContentDto {
  @IsOptional()
  @IsEnum(ProjectContentMediaType)
  type: ProjectContentMediaType;

  @IsNotEmpty()
  @IsString()
  source: string;
}

class ProjectDescriptionDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsArray()
  @IsOptional()
  subtitle?: string[];

  @IsArray()
  @IsOptional()
  content?: string[];

  @IsArray()
  @IsOptional()
  skills?: string[];

  @IsString()
  @IsOptional()
  fonts?: string;

  @IsOptional()
  @IsArray()
  coworkers?: string[];
}

class UpdateProjectDto {
  @IsString()
  @IsOptional()
  @Length(1, 30)
  title?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ProjectDescriptionDto)
  description?: ProjectDescriptionDto;

  @IsOptional()
  @IsNotEmpty()
  date?: string;

  @IsOptional()
  @IsNotEmpty()
  carouselImage?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProjectContentDto)
  content?: ProjectContentDto[];
}

export { UpdateProjectDto };
