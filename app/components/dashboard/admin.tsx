import {
  Button,
  Grid,
  Group,
  Menu,
  Select,
  Space,
  Title,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import type { V2_MetaFunction } from "@remix-run/node";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

export const meta: V2_MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Admin Dashboard",
    viewport: "width=device-width,initial-scale=1",
  },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: "background-color 150ms ease",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
  reportOppSelector: {
    display: "flex",
  },
}));

export default function Admin() {
  const data = [
    { label: "English" },
    { label: "German" },
    { label: "Italian" },
    { label: "French" },
    { label: "Polish" },
  ];
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item onClick={() => setSelected(item)} key={item.label}>
      {item.label}
    </Menu.Item>
  ));

  return (
    <>
      <Title order={2} size="h1" mb="md" weight={900}>
        Admin Dashboard
      </Title>

      <Grid>
        <Grid.Col lg={6} sm={12}>
          <Title order={2} size="h2" mb="md" weight={600}>
            Generate Report
          </Title>
          <div className={classes.reportOppSelector}>
            <Menu
              onOpen={() => setOpened(true)}
              onClose={() => setOpened(false)}
              radius="md"
              width="target"
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton className={classes.control}>
                  <Group spacing="xs">
                    <span className={classes.label}>{selected.label}</span>
                  </Group>
                  <IconChevronDown
                    size="1rem"
                    className={classes.icon}
                    stroke={1.5}
                  />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>{items}</Menu.Dropdown>
            </Menu>
            <Space w="md" />
            <Button> Generate Report </Button>
          </div>
        </Grid.Col>
        <Grid.Col lg={6} sm={12}>
          <Title order={2} size="h2" mb="md" weight={600}>
            Generate Report
          </Title>
        </Grid.Col>
      </Grid>
    </>
  );
}
