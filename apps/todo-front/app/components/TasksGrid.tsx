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
import { Task } from '../interfaces';


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

interface TableSelectionProps {
  data: { title: string;  body: string; id: string; complited: boolean }[];
}

export function ActionsGrid({ data }: TableSelectionProps) {
  const { classes, theme } = useStyles();

  const items = data.map((item) => (
    <UnstyledButton component={Link} key={item.title} href={`/tasks/${item.id}`} className={classes.item}>
      <LuBanana color={theme.colors["blue"][6]} size="2rem" />
      <Text size="xs" mt={7} weight="bolder">
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>Tasks</Text>
        <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
          + 21 other tasks
        </Anchor>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}