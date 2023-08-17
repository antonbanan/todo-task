import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class updateTaskDTO {
	@ApiProperty({
		example: 'Banana',
		description: 'title of task',
	})
	@IsString({ message: 'should be a string' })
	@IsNotEmpty({ message: 'can`t be empty string' })
	readonly title: string;

	@ApiProperty({
		example: 'A banana ',
		description: 'detail task information',
	})
	@IsString({ message: 'should be a string' })
	@IsNotEmpty({ message: 'can`t be empty string' })
	readonly body: string;

}