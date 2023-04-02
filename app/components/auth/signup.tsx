import { useState } from "react";
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
  Select,
} from "@mantine/core";
import { Navbar } from "../landing/navbar";

export default function Signup() {
  const [colleges, setColleges] = useState([{ name: "KMV" }, { name: "KMC" }]);
  return (
    <>
      <Navbar />
      <Container size={600} my={40}>
        <Title align="center" weight={900}>
          Create your Account
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{" "}
          <Anchor size="sm" href="/login">
            Login
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Name" placeholder="john doe" required mt="md" />
          <TextInput
            label="Email"
            placeholder="johndoe@example.com"
            required
            mt="md"
          />
          <TextInput
            label="Phone Number"
            placeholder="999-999-9999"
            required
            mt="md"
          />
          <Select
            mt="md"
            data={colleges?.map((college) => college.name) || []}
            placeholder="Pick one"
            label="College"
            required
          />
          <PasswordInput
            label="Password"
            placeholder="........"
            required
            mt="md"
          />
          <Group position="left" mt="lg">
            <Checkbox />
            <Text size={"sm"}>
              You agree to our{" "}
              <Anchor component="button" size="sm">
                Terms and Conditions
              </Anchor>
            </Text>
          </Group>
          <Button fullWidth mt="xl">
            Register
          </Button>
        </Paper>
      </Container>
    </>
  );
}
