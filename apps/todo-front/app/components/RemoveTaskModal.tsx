"use client"

import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Input, ActionIcon, Title } from '@mantine/core';
import { FaTrashAlt } from 'react-icons/fa';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Task } from '../services/interfaces';
import absoluteUrl from 'next-absolute-url';


interface serverData {
	task: Task;
}

export const RemoveTask = ({task}: serverData) => {
	const [opened, { open, close }] = useDisclosure(false);
	const router = useRouter();

	const submit = () => {
		const fetchData = async () => {
			try {
				const url = absoluteUrl();
				await fetch(`http://${url.host}/api/server-tasks/${task.id}`, {
					method: "DELETE",
					cache: "no-store",
					headers: {
						"Content-type": "application/json",
					},
				});	
				router.push('/tasks');
			} catch (error) {
				console.log(error);
			}
    };		
    fetchData();
  };


  return (
    <>
      <Modal opened={opened} onClose={close} centered
			>
			<Group position="center" mb="40px">
					Remove: {task.title} ?
			</Group>		
			<Group position="center">
				<Button type='submit' onClick={() => submit()}>
					<FaTrashAlt/> Remove
				</Button>
			</Group>
      </Modal>

 
			<ActionIcon onClick={open} color="red">
				<FaTrashAlt size={22}/>
			</ActionIcon>
    </>
  );
}
