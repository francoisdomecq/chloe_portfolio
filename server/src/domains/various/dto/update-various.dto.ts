import { IsOptional, IsString } from 'class-validator';

class UpdateVariousDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  date?: string;

  @IsOptional()
  fileSrc?: string;
}

export { UpdateVariousDto };
