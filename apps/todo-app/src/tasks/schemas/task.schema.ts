import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Task {
	@Prop({ required: true })
	id: string

	@Prop({ required: true })
	title: string

	@Prop({ required: true })
	body: string
}

export const TaskSchema = SchemaFactory.createForClass(Task);