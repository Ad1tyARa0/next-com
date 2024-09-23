'use client';
import { Card, Text, Badge, Button, Group } from '@mantine/core';
import Image from 'next/image';

export const Demo = () => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Card.Section>
        <Image
          src='https://images.unsplash.com/photo-1701421047923-001f8f79bb1a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXIlMjBkZXRhaWx8ZW58MHx8MHx8fDA%3D'
          height={160}
          width={200}
          alt='Norway'
        />
      </Card.Section>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color='pink'>On Sale</Badge>
      </Group>

      <Text size='sm' c='dimmed'>
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button color='blue' fullWidth mt='md' radius='md'>
        Book classic tour now
      </Button>
    </Card>
  );
};
