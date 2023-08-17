import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from 'class-validator';


export class createTaskDTO {
	@ApiProperty({
		example: 'Banana',
		description: 'title of task',
	})
	@IsString({ message: 'should be a string' })
	@IsNotEmpty({ message: 'can`t be empty string' })
	readonly title: string;

	@ApiProperty({
		example: 'A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] ',
		description: 'detail task information',
	})
	@IsNotEmpty({ message: 'can`t be empty string' })
	@IsString({ message: 'should be a string' })
	readonly body: string;
}