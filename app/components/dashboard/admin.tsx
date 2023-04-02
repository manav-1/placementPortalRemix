import { Title } from "@mantine/core";

export default function Admin() {
  return (
    <>
      <Title order={2} size="h1" mb="md" weight={900}>
        Admin Dashboard
      </Title>
      <Title order={2} size="h2" mb="md" weight={700}>
        Generate Report
      </Title>
    </>
  );
}
