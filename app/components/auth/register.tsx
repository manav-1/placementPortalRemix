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

export default function Signup() {
  return (
    <>
      <Navbar />
      <Container size={600} my={40}>
        <Title align="center" weight={900}>
          Create your Account
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{' '}
          <Anchor size="sm" href="/login">
            Login
          </Anchor>
        </Text>
        <Form method="POST">
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="Name"
              placeholder="john doe"
              name="name"
              required
              mt="md"
            />
            <TextInput
              label="Email"
              name="email"
              placeholder="johndoe@example.com"
              required
              mt="md"
            />
            <PasswordInput
              label="Password"
              placeholder="+(XX) XXXXX XXXXX"
              name="password"
              required
              mt="md"
            />
            <TextInput
              label="Mobile Number"
              placeholder="999-999-9999"
              name="mobile"
              required
              mt="md"
            />
            <Group position="left" mt="lg">
              <Checkbox />
              <Text size="sm">
                You agree to our{' '}
                <Anchor component="button" size="sm">
                  Terms and Conditions
                </Anchor>
              </Text>
            </Group>
            <Button type="submit" fullWidth mt="xl">
              Register
            </Button>
          </Paper>
        </Form>
      </Container>
    </>
  );
}
