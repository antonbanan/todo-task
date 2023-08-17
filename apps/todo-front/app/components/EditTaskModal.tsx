"use client"

import { useDisclosure } from '@mantine/hooks';
import { useState, SetStateAction } from 'react';
import { Modal, Group, Button, Input, Text, Title, ActionIcon, Box, Textarea } from '@mantine/core';
import { Ballpen, FileText, Tex } from 'tabler-icons-react';
import { MdEditSquare } from 'react-icons/md';
import React from 'react';
import absoluteUrl from 'next-absolute-url';
import { LuBanana } from 'react-icons/lu';
import { useRouter } from 'next/navigation';

interface Task {
	id: string
	title: string
	body: string
}
interface TableSelectionProps {
	task: Task;
}

export const EditTask = ({task}: TableSelectionProps) => {	
  const [opened, { open, close }] = useDisclosure(false);
	const [title, setName] = useState(task.title);
	const [body, setDesc] = useState(task.body);
	const router = useRouter();

	const closeModal = () => {
		setName(task.title)
		setDesc(task.body)
		close()
	}
	const openModal = () => {
		setName(task.title)
		setDesc(task.body)
		open()
	}
	const submit = () => {
		const fetchData = async () => {
			try {
				const url = absoluteUrl();
				await fetch(`http://${url.host}/api/server-tasks/${task.id}`, {
					method: "PUT",
					cache: "no-store",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify({title,body}),
				}).then(() => { 
					// location.reload()	
					router.refresh();	
				})
			} catch (error) {
				console.log(error);
			}
    };		
    fetchData();

  };

  return (
    <>
      <Modal opened={opened} size={"23%"}  onClose={closeModal} centered >
				<Box maw={300} mih={200} mx="auto">
					<form onSubmit={submit}>
						<Group position='center' mb={20}>
							<Text component="span"
								align="center"
								variant="gradient"
								gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
								size="xl"
								weight={700}
								>
								UPDATE:
							</Text>
							<Text fw={700}>{title || task.title}</Text>
						</Group>
						<Input
							type="text"
							icon={<LuBanana />}
							placeholder="Title"
							value={title}
							onChange={(e) => setName(e.target.value)}
						/>
						<Textarea
							placeholder="Body"
							value={body}
							autosize
        			minRows={7}
							onChange={(e) => setDesc(e.target.value)}
						/>
						<Group position="center" m="md">
							<Button type="submit" disabled={!title.length || !body.length}>Update</Button>
						</Group>
					</form>
				</Box>
      </Modal>

      <Group
      	align="center" position="center">
				 <ActionIcon  onClick={openModal} color="yellow">
					<MdEditSquare size={24} />
				</ActionIcon>
      </Group>
    </>
  );
}
