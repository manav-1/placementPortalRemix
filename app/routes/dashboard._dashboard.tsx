import { useState } from "react";
import {
  createStyles,
  Navbar,
  Group,
  Code,
  getStylesRef,
  rem,
  AppShell,
  Header,
  Avatar,
  Burger,
  MediaQuery,
} from "@mantine/core";
import {
  IconLogout,
  IconUserCircle,
  IconClipboardList,
  IconClipboardData,
  IconServerBolt,
  IconMailForward,
  IconBrandGoogleAnalytics,
  IconClipboardText,
  IconUserBolt,
} from "@tabler/icons-react";
import { Outlet, useLoaderData, useLocation } from "@remix-run/react";
import type { UserRole } from "@prisma/client";
import Logo from "~/components/landing/logo";
import { dashboardLoader } from "~/components/dashboard/loaders/dashboard";
import user from "../../assets/user.png";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },

  height100: {
    height: "100%",
  },
}));

const USER_ROLES = Object.freeze({
  USER: "USER",
  SUB_ADMIN: "SUB_ADMIN",
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPER_ADMIN",
});

const data = [
  {
    link: "opportunities",
    label: "Opportunities",
    icon: IconClipboardList,
    roles: [
      USER_ROLES.USER,
      USER_ROLES.SUB_ADMIN,
      USER_ROLES.ADMIN,
      USER_ROLES.SUPER_ADMIN,
    ],
  },
  {
    link: "application-tracker",
    label: "Application Tracker",
    icon: IconBrandGoogleAnalytics,
    roles: [
      USER_ROLES.USER,
      USER_ROLES.SUB_ADMIN,
      USER_ROLES.ADMIN,
      USER_ROLES.SUPER_ADMIN,
    ],
  },
  {
    link: "profile",
    label: "Profile",
    icon: IconUserCircle,
    roles: [
      USER_ROLES.USER,
      USER_ROLES.SUB_ADMIN,
      USER_ROLES.ADMIN,
      USER_ROLES.SUPER_ADMIN,
    ],
  },

  {
    link: "admin",
    label: "Admin",
    icon: IconUserBolt,
    roles: [USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN],
  },
  {
    link: "add-opportunity",
    label: "Add Opportunity",
    icon: IconClipboardData,
    roles: [USER_ROLES.SUB_ADMIN, USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN],
  },
  {
    link: "contacts",
    label: "Contacts",
    icon: IconServerBolt,
    roles: [USER_ROLES.SUB_ADMIN, USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN],
  },
  {
    link: "emails",
    label: "Emails",
    icon: IconMailForward,
    roles: [USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN],
  },

  {
    link: "resume-builder",
    label: "Resume Builder",
    icon: IconClipboardText,
    roles: [
      USER_ROLES.USER,
      USER_ROLES.SUB_ADMIN,
      USER_ROLES.ADMIN,
      USER_ROLES.SUPER_ADMIN,
    ],
  },
];

export const loader = dashboardLoader;

export default function DashboardLayout() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const { role } = useLoaderData();

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint={"sm"}
      fixed
      navbar={<DashNavbar opened={[opened, setOpened]} role={role} />}
      header={
        <Header height={60} px="md">
          <Group position="apart" className={classes.height100}>
            <Group position="apart">
              <Logo />
              <Code sx={{ fontWeight: 700 }}>v1.0.0</Code>
            </Group>
            <Group>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  mr="xl"
                />
              </MediaQuery>
              <a href="/dashboard/profile">
                <Avatar size={40} src={user} radius={40} />
              </a>
            </Group>
          </Group>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}

const DashNavbar = ({
  opened: [opened, setOpened],
  role,
}: {
  opened: [boolean, (opened: boolean) => void];
  role: UserRole;
}) => {
  const { classes, cx } = useStyles();
  const location = useLocation();

  const links = data
    .filter((item) => item.roles.includes(role))
    .map((item) => (
      <a
        className={cx(classes.link, {
          [classes.linkActive]: location.pathname.includes(
            `/dashboard/${item.link}`
          ),
        })}
        href={`/dashboard/${item.link}`}
        key={item.label}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </a>
    ));
  return (
    <Navbar
      hiddenBreakpoint={"sm"}
      hidden={!opened}
      width={{ sm: 300 }}
      p="md"
      mr={10}
    >
      <Navbar.Section grow>{links}</Navbar.Section>
      <Navbar.Section className={classes.footer}>
        <a href="/logout" className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>{" "}
    </Navbar>
  );
};
