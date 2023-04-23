import { IconBrandLinkedin, IconLink } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  createStyles,
  rem,
  getStylesRef,
  Button,
  Tooltip,
  Grid,
  Title,
  Flex,
} from "@mantine/core";
import { Link, useLoaderData } from "@remix-run/react";
import companyPlaceholder from "../../../assets/company-placeholder.png";
import type { Opportunity } from "@prisma/client";
import { DateTime } from "luxon";
import PaginationWithSearch from "./paginate";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    width: "95%",
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
  },
  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],

    "&, &:hover": {
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).color,
      },
    },
  },
  action: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

interface ArticleCardProps {
  deadline: string;
  linkedin: string;
  url: string;
  companyImage?: string;
  companyName: string;
  description: string;
  jd: string;
  name: string;
  type: string;
}

export function OpportunityCard({
  className,
  companyImage,
  url,
  title,
  description,
  companyName,
  deadline,
  jd,
  linkedin,
  name,
  type,
  ...others
}: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof ArticleCardProps>) {
  const { classes, cx } = useStyles();
  const linkProps = {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <Grid.Col xs={12} md={6} lg={4} xl={3}>
      <Card
        withBorder
        radius="md"
        className={cx(classes.card, className)}
        {...others}
      >
        <Card.Section>
          <a {...linkProps}>
            <Image src={companyImage || companyPlaceholder} height={180} />
          </a>
        </Card.Section>
        <Group position="apart" align="center" className={classes.rating}>
          <Badge variant="light">{deadline}</Badge>
          <Badge variant="light">{type}</Badge>
        </Group>
        <Text className={classes.title} fw={500} component="a" {...linkProps}>
          {title}
        </Text>

        <Text fz="md" inline>
          {name}
          <Text fz="sm" mt="sm" inline>
            {companyName}
          </Text>
        </Text>

        <Text fz="md" color="dimmed" lineClamp={4}>
          {description}
        </Text>

        <Group position="apart" className={classes.footer}>
          <Group spacing={8} mr={0}>
            <Tooltip label="LinkedIn">
              <Link target="_blank" to={linkedin}>
                <ActionIcon className={classes.action}>
                  <IconBrandLinkedin size="1rem" className={classes.linkIcon} />
                </ActionIcon>
              </Link>
            </Tooltip>
            <Tooltip label="Company URL">
              <Link target="_blank" to={url}>
                <ActionIcon className={classes.action}>
                  <IconLink size="1rem" className={classes.linkIcon} />
                </ActionIcon>{" "}
              </Link>
            </Tooltip>
          </Group>
          <Group spacing={8}>
            <Tooltip label="Job Description">
              <Link to={jd} target="_blank">
                <Button variant="default">Information</Button>
              </Link>
            </Tooltip>
            <Button>Apply</Button>
          </Group>
        </Group>
      </Card>
    </Grid.Col>
  );
}

export default function Opportunities() {
  const { opportunities, pagination } = useLoaderData();
  return (
    <Grid>
      <Grid.Col span={12}>
        <Flex justify={"space-between"}>
          <Title order={2} size="h1" mb="md" weight={900}>
            Opportunities
          </Title>
          <PaginationWithSearch pagination={pagination} />
        </Flex>
      </Grid.Col>
      {opportunities.map((item: Opportunity) => (
        <OpportunityCard
          key={item.id}
          name={item.name}
          deadline={DateTime.fromJSDate(new Date(item.deadline)).toFormat(
            "dd LLL yyyy"
          )}
          linkedin={item.linkedin}
          url={item.url}
          type={item.type}
          companyImage={item.companyImage || undefined}
          companyName={item.company}
          description={item.description}
          jd={item.jobDesc}
        />
      ))}
    </Grid>
  );
}
