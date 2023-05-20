import { IconBrandLinkedin, IconLink } from '@tabler/icons-react';
import {
  Card,
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
} from '@mantine/core';
import { Link, useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import PaginationWithSearch from './paginate';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    width: '95%',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
  },
  linkIcon: {
    ref: getStylesRef('icon'),
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],

    '&, &:hover': {
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({
          variant: 'light',
          color: theme.primaryColor,
        }).color,
      },
    },
  },
  action: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.fn.smallerThan('md')]: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
  },
}));

interface OpportunityCardProps {
  id: string;
  deadline: string;
  linkedin: string;
  url: string;
  companyImage?: string;
  company: string;
  description: string;
  jobDesc: string;
  name: string;
  type: string;
}

export function OpportunityCard({
  opportunity,
  ...others
}: {
  opportunity: OpportunityCardProps;
}) {
  const { classes, cx } = useStyles();
  const { url, description, company, deadline, jobDesc, linkedin, name, type } =
    opportunity;

  return (
    <Grid.Col xs={12} md={6} lg={4} xl={3}>
      <Card withBorder radius="md" className={cx(classes.card)} {...others}>
        <Group position="apart" align="center" mb="sm">
          <Badge variant="light">
            {dayjs(deadline).format('ddd, DD MMM YYYY, hh:mm A')}
          </Badge>
          <Badge variant="light">{type}</Badge>
        </Group>

        <Text fz="md" inline>
          {name}
          <Text fz="sm" mt="sm" inline>
            {company}
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
                </ActionIcon>{' '}
              </Link>
            </Tooltip>
          </Group>
          <Group spacing={8}>
            <Tooltip label="Job Description">
              <Link to={jobDesc} target="_blank">
                <Button variant="default">Information</Button>
              </Link>
            </Tooltip>
          </Group>
        </Group>
      </Card>
    </Grid.Col>
  );
}

export default function Opportunities() {
  const { appliedOpportunities, pagination } = useLoaderData();
  const { classes } = useStyles();

  return (
    <Grid>
      <Grid.Col span={12}>
        <Flex className={classes.headerContainer}>
          <Title order={2} size="h1" mb="md" weight={900}>
            Applied Opportunities
          </Title>
          <PaginationWithSearch pagination={pagination} />
        </Flex>
      </Grid.Col>
      {appliedOpportunities.map(
        (item: { id: string; opportunity: OpportunityCardProps }) => (
          <OpportunityCard key={item.id} opportunity={item.opportunity} />
        ),
      )}
    </Grid>
  );
}
