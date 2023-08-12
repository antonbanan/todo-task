import { ApiProperty } from "@nestjs/swagger";

export class updateTaskDTO {
	@ApiProperty({
		example: 'Banana',
		description: 'title of task',
	})
	readonly title: string;

	@ApiProperty({
		example: 'A banana ',
		description: 'detail task information',
	})
	readonly body: string;
	
	@ApiProperty({
		example: false,
		description: 'task status',
	})
	readonly completed: boolean;
}