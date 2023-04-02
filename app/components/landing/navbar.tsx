import { Header, Group, Button, Box } from "@mantine/core";
import { Link } from "@remix-run/react";
import Logo from "./logo";

export function Navbar() {
  return (
    <Box pb={120}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Logo />
          <Group>
            <Link to="/login">
              <Button variant="default">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </Group>
        </Group>
      </Header>
    </Box>
  );
}
