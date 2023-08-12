import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Task {
	@Prop()
	id: string

	@Prop()
	title: string

	@Prop()
	body: string

	@Prop()
	completed: boolean

}

export const TaskSchema = SchemaFactory.createForClass(Task);