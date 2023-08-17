"use client"

import { Card, Avatar, Text, Progress, Badge, Group, ActionIcon } from '@mantine/core';
import { LuBanana } from 'react-icons/lu';
import { RemoveTask } from './RemoveTaskModal'
import { EditTask } from './EditTaskModal';
import { useEffect, useState } from 'react';
import absoluteUrl from 'next-absolute-url';


const avatars = [
  'https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
];


export function TaskCard({id}:any) {
  const [task, setTask] = useState({body: '', title: '', id: '0'});

  useEffect(() =>{
    async function getTaskFromServer(){
      try {
        const url = absoluteUrl();
        const res = await fetch(`http://${url.host}/api/server-tasks/${id}`, {
          method: "GET",
          cache: "no-store",
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
        setTask(data.task)
      } catch (error) {
        console.log(error);
      }
    }
    getTaskFromServer();
  }, [])





  return (
    <Card withBorder padding="lg" radius="md">
      <Group position="apart">
				<LuBanana
					size={60}
					strokeWidth={2}
					color={"#ffca28"}
				/>
        <Badge>12 days left</Badge>
        <Group position='center'>
         <EditTask task={task}/>
         <RemoveTask task={task}/>
        </Group>
      </Group>

      <Text fz="lg" fw={500} mt="md">
				{task.title}
      </Text>
      <Text fz="sm" c="dimmed" mt={5}>
				{task.body}
      </Text>

      <Text c="dimmed" fz="sm" mt="md">
        Tasks completed:{' '}
        <Text
          span
          fw={500}
          sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}
        >
          23/36
        </Text>
      </Text>

      <Progress value={(23 / 36) * 100} mt={5} />

      <Group position="apart" mt="md">
        <Avatar.Group spacing="sm">
          <Avatar src={avatars[0]} radius="xl" />
          <Avatar src={avatars[1]} radius="xl" />
          <Avatar src={avatars[2]} radius="xl" />
          <Avatar radius="xl">+5</Avatar>
        </Avatar.Group>
      </Group>
    </Card>
  );
}
