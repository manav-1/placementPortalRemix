import { createStyles, Title, Text, Container, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(150),
    lineHeight: 1,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
  },
}));

export function ErrorPage({
  statusCode = 400,
  message = 'Something went wrong',
  name = 'NotFound',
}: {
  statusCode?: number;
  message?: string;
  name?: string;
}) {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>{statusCode}</div>
      <Title className={classes.title}>{name}</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        {message}
      </Text>
    </Container>
  );
}
