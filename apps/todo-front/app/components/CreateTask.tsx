'use client';

import { SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LuBanana} from 'react-icons/lu';
import { Box, Button, Group, Input, Textarea, Text } from '@mantine/core';
import absoluteUrl from 'next-absolute-url';

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  const create = async() => {
    try {
      const url = absoluteUrl();
      const res = await fetch(`http://${url.host}/api/server-tasks/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({title,body}),
      });

      setBody('');
      setTitle('');
      location.reload()	
      // router.refresh();
      // router.push('/tasks');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={async e => { 
        e.preventDefault();
        await create()
        }}>
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
          <Button type="submit" disabled={!title.length || !body.length}>Create</Button>
        </Group>
      </form>
    </Box>
  );
}
