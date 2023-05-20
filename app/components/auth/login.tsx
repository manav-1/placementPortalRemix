import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { Form } from '@remix-run/react';
import { Navbar } from '../landing/navbar';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (
    <>
      <Navbar />
      <Container size={600} my={40}>
        <Title align="center" weight={900}>
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" href="/register">
            Create account
          </Anchor>
        </Text>
        <Form method="POST">
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="Email"
              name="email"
              placeholder="johndoe@example.com"
              required
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.currentTarget.value })
              }
            />
            <PasswordInput
              label="Password"
              name="password"
              placeholder="........."
              required
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.currentTarget.value })
              }
              mt="md"
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button type="submit" fullWidth mt="xl">
              Login
            </Button>
          </Paper>
        </Form>
      </Container>
    </>
  );
}
