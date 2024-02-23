import { IsDateString, IsEmail, IsString } from 'class-validator';

export class CreateDeveloperDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDateString()
  dateOfBirth: string;
}
