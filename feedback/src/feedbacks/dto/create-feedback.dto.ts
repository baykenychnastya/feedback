import { IsString, Length, IsEmail, } from "class-validator";
import { Transform, TransformFnParams } from 'class-transformer';

export class CreateFeedbackDto {

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @Length(1, 100, {message: "Must be in the range from 1 to 100"})
    readonly name: string;

    @IsEmail({}, {message: "Incorect email"})
    readonly email: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @Length(1, 500, {message: "Must be in the range from 1 to 500"})
    readonly message: string;
}