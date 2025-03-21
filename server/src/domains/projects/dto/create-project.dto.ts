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
  @IsNotEmpty()
  @IsEnum(ProjectContentMediaType)
  type: ProjectContentMediaType;

  @IsNotEmpty()
  @IsString()
  source: string;
}

class ProjectDescriptionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsNotEmpty()
  subtitle: string[];

  @IsArray()
  @IsNotEmpty()
  content: string[];

  @IsArray()
  @IsNotEmpty()
  skills: string[];

  @IsString()
  @IsNotEmpty()
  fonts: string;

  @IsOptional()
  @IsArray()
  coworkers?: string[];
}

class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  title: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProjectDescriptionDto)
  description: ProjectDescriptionDto;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  carouselImage: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProjectContentDto)
  content: ProjectContentDto[];
}

export { CreateProjectDto };
