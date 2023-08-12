import { ApiProperty } from "@nestjs/swagger";


export class createTaskDTO {
	@ApiProperty({
		example: 'Banana',
		description: 'title of task',
	})
	readonly title: string;

	@ApiProperty({
		example: 'A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] ',
		description: 'detail task information',
	})
	readonly body: string;
}