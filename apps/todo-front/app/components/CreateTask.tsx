'use client';

import { SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LuBanana} from 'react-icons/lu';
import { BsTextarea } from 'react-icons/bs';
import { Box, Button, Group, Input, Textarea, Text } from '@mantine/core';

export default function CreateTask() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const router = useRouter();

  const create = async() => {

    await fetch('http://127.0.0.1:3200/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });

    setBody('');
    setTitle('');

    router.refresh();
  }

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={create}>
        <Group position='center' m={20}>
          <Text component="span"
            align="center"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            size="xl"
            weight={700}
            >
            Create a new Task
          </Text>
        </Group>
        <Input
          type="text"
          icon={<LuBanana />}
          placeholder="Title"
          value={title}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Body"
          // icon={<FaBeer />}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Group position="right" mt="md">
          <Button type="submit">Create</Button>
        </Group>
      </form>
    </Box>
  );
}
