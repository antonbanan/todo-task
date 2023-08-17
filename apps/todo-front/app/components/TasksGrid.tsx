"use client"

import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  rem,
} from '@mantine/core';
import { LuBanana } from 'react-icons/lu';
import Link from 'next/link';
import { Task } from '../services/interfaces';
import absoluteUrl from 'next-absolute-url';
import { useEffect, useState } from 'react';



const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.05)',
    },
  },

}));


export function TasksGrid() {
  const { classes, theme } = useStyles();
  const [list, setList] = useState([]);

  function getItem(item: Task) {
    return <UnstyledButton component={Link} key={item.id} href={`/tasks/${item.id}`} className={classes.item}>
            <LuBanana color={"#ffca28"} size="2rem" />
            <Text size="xs" mt={7} weight="bolder">
              {item.title}
            </Text>
          </UnstyledButton>
  }

  useEffect(() =>{
    async function getTaskFromServer(){
      try {
        const url = absoluteUrl();
        console.log(url.origin)
        console.log(url.host)
        console.log(url.protocol)
        const res = await fetch(`http://${url.host}/api/server-tasks`, {
          method: "GET",
          cache: "no-store",
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data)
        const html = data.tasks.map((item: Task) => {return getItem(item)});
        setList(html)
      } catch (error) {
        console.log(error);
      }
    }
    getTaskFromServer();
  }, [])
  
  return (
    <Card  className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>Tasks</Text>
        <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
          { list.length ? '+ 21 other tasks' : ''}
        </Anchor>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {list}
      </SimpleGrid>
    </Card>
  );
}