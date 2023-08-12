import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, Input, ActionIcon, Title } from '@mantine/core';
import { LuBanana } from 'react-icons/lu';
import React from 'react';
import { useRouter } from 'next/navigation';


interface TableSelectionProps {
  data:{title: string;  body: string; id: string; complited: boolean};
}
export const RemoveTask = ({data}:TableSelectionProps) => {
	console.log(data)
	const [opened, { open, close }] = useDisclosure(false);
	const { push } = useRouter();

	const submit = () => {
		const fetchData = async () => {
			const res = await fetch(`http://127.0.0.1:3200/tasks/${data.id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				}
			});
    };		
    fetchData();
		// close()
		push('/tasks');
  };


  return (
    <>
      <Modal opened={opened} onClose={close} centered
			>
			<Group position="center" mb="40px">
					Remove: {data.title} ?
			</Group>		
			<Group position="center">
				<Button type='submit' onClick={() => submit()}>
					<LuBanana/> Remove
				</Button>
				<Button type='button' onClick={close}>
					<LuBanana/> Return
				</Button>
			</Group>
      </Modal>

 
			<ActionIcon onClick={open} color="red">
				<LuBanana size={60}/>
			</ActionIcon>
    </>
  );
}
