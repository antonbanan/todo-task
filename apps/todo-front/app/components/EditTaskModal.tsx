import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Modal, Group, Button, Input, Title, ActionIcon } from '@mantine/core';
import { Ballpen, FileText } from 'tabler-icons-react';
import { LuBanana } from 'react-icons/lu';
import React from 'react';

interface TableSelectionProps {
  data: { title: string;  body: string; id: string; complited: boolean };
}

export const EditTask = ({data} : TableSelectionProps) => {
	console.log(data)
  const [opened, { open, close }] = useDisclosure(false);
	const [title, setName] = useState("");
	const [body, setDesc] = useState("");

	const submit = () => {
		if(title.length) data.title = title;
		if(body.length) data.body = body;

		const fetchData = async () => {
			const res = await fetch(`http://127.0.0.1:3200/tasks/${data.id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},		
				body: JSON.stringify(data)
			});
    };		
    fetchData();
		setName("")
		setDesc("")
		close()
  };



  return (
    <>
      <Modal opened={opened} onClose={close} centered
			>
				Update: 
			<Title>{title.length? title : data.title}</Title>

			<Input m="xs" type="text"
      placeholder="Task Name"
			value={title.length? title : data.title}
			onChange={(e) => setName(e.target.value)}
      icon={<Ballpen />}
    	/>

			<Input m="xs" type="text"
      icon={<FileText/>}
      placeholder="Task Description"
			value={body.length? body : data.body}
			onChange={(e) => setDesc(e.target.value)}
    	/>

			<Group position="center">
				<Button type='submit' onClick={submit}>
				<LuBanana size="1.125rem" /> Update Task
				</Button>
			</Group>
      </Modal>

      <Group
      	align="center" position="center">
				 <ActionIcon  onClick={open} color="yellow">
					<LuBanana size={60} />
				</ActionIcon>
      </Group>
    </>
  );
}
