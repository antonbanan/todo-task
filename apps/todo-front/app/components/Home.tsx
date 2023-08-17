'use client';

import { Button, Card, Group, Image, Text } from '@mantine/core';

export function AppHomePage() {
  return (
    <Card
      shadow="sm"
      padding="md"
      mx={"auto"}
      pt={60}
      h="60%"
      w="90%"
    
      
      component="a"
      // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      // target="_blank"
    >
      <Card.Section>
        <Image
          src="https://wkrh.com.br/wp-content/uploads/2021/01/1_VEXMXDkq01cyq8GTpdcRLA.png"
          maw={500} mx="auto" radius="md"
        />
      </Card.Section>
      <Card.Section>
        <Text ta="center" weight={500} size="lg" m="xl">
          Welcome to Anton task project
        </Text>

        <Text ta="center" mt="xs" color="dimmed" size="sm">
          This is a simple todo App built with Next.js.
        </Text>
        
        <Text ta="center" mt="xs" color="dimmed" size="sm">
          Please click on Task button to start creating
        </Text>
        <Group position='center'>
          <Button component="a" href="/tasks" variant="filled"  m="xl">
            {"Get Started >>>"}
          </Button>	
        </Group>
      </Card.Section>	
    </Card>
  );
}