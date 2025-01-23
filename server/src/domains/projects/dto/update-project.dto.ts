import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

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
  content?: string[];
}

export { UpdateProjectDto };
