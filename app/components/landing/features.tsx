import {
  createStyles,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';
import { IconCookie, IconMailBolt, IconUserShield } from '@tabler/icons-react';

const featuresData = [
  {
    title: 'Employer Profiles',
    description:
      "Workhub's in-depth employer profiles give students valuable insights into company culture, mission, and values. This helps students make informed decisions and stand out in the application process.",
    icon: IconUserShield,
  },
  {
    title: 'Privacy focused',
    description:
      'Workhub prioritizes data privacy with industry-standard security measures, transparency, and no selling or sharing of personal data without explicit consent. Trust us with your sensitive information.',
    icon: IconCookie,
  },
  {
    title: 'Email Templates',
    description:
      "Workhub's email template builder creates custom emails with pre-designed templates that make a strong impression on employers. Save time and effort while enhancing the job search experience.",
    icon: IconMailBolt,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(20),
    fontWeight: 700,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = featuresData.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any number of students
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Workhub is the go-to placement portal for college placement cells,
        connecting students with top companies and job opportunities. Join now
        for a seamless and successful job search experience.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
