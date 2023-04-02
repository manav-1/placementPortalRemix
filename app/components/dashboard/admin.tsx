import { Title } from "@mantine/core";

export default function Admin() {
  return (
    <>
      <Title
        order={2}
        size="h1"
        mb="md"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
      >
        Admin Dashboard
      </Title>
    </>
  );
}
