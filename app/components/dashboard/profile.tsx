import {
  TextInput,
  Title,
  Button,
  Grid,
  Tooltip,
  Select,
  Badge,
  ActionIcon,
  createStyles,
  rem,
} from '@mantine/core';
import { isNotEmpty, useForm, zodResolver } from '@mantine/form';
import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileUpload,
  IconFolder,
  IconGlobe,
  IconLink,
  IconPlus,
  IconX,
} from '@tabler/icons-react';
import { Form, Link, useLoaderData, useSubmit } from '@remix-run/react';
import type { Project, Stream, UserProfile, Portfolio } from '@prisma/client';
import { LinkType } from '@prisma/client';
import { type FormEvent } from 'react';
import { PortfolioSchema, ProjectSchema } from '~/utils/user/types';
import DropzoneButton from './dropzone-button';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginBottom: theme.spacing.md,
  },

  dropzone: {
    borderWidth: rem(1),
    paddingBottom: rem(50),
  },

  icon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: 'absolute',
    width: rem(250),
    left: `calc(50% - ${rem(125)})`,
    bottom: rem(-10),
  },

  linksContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  linksInput: {
    flex: 1,
    marginRight: theme.spacing.md,
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

const iconSize = 16;
const iconStyle = { marginTop: 5 };
const icons = {
  [LinkType.GITHUB]: <IconBrandGithub style={iconStyle} size={iconSize} />,
  [LinkType.LINKEDIN]: <IconBrandLinkedin style={iconStyle} size={iconSize} />,
  [LinkType.WEBSITE]: <IconGlobe style={iconStyle} size={iconSize} />,
  [LinkType.PROJECT]: <IconFolder style={iconStyle} size={iconSize} />,
  [LinkType.BEHANCE]: <IconBrandBehance style={iconStyle} size={iconSize} />,
  [LinkType.OTHER]: <IconLink style={iconStyle} size={iconSize} />,
};

export default function Profile() {
  const { classes } = useStyles();
  const { userProfile, streams, projects, portfolios } = useLoaderData<{
    userProfile: UserProfile;
    streams: Stream[];
    projects: Project[];
    portfolios: Portfolio[];
  }>();

  const profileForm = useForm({
    initialValues: {
      firstName: userProfile?.firstName,
      lastName: userProfile?.lastName,
      streamId: userProfile?.streamId,
      marks10: userProfile?.marks10,
      marks12: userProfile?.marks12,
      marksGrad: userProfile?.marksGrad,
      marksPost: userProfile?.marksPost,
      resume: userProfile?.resume,
    },
    validate: {
      firstName: isNotEmpty('First Name is required'),
      lastName: isNotEmpty('Last Name is required'),
      streamId: isNotEmpty('Stream is required'),
      marks10: isNotEmpty('10th Marks is required'),
      marks12: isNotEmpty('12th Marks is required'),
    },
  });

  const projectTypes = Object.keys(LinkType);

  const projectForm = useForm({
    initialValues: {
      projectName: '',
      projectURL: '',
      projectType: projectTypes[0],
    },
    validate: zodResolver(ProjectSchema),
    validateInputOnChange: true,
  });
  const portfolioForm = useForm({
    initialValues: {
      portfolioURL: '',
      portfolioType: projectTypes[0],
    },
    validate: zodResolver(PortfolioSchema),
    validateInputOnChange: true,
  });
  const submit = useSubmit();

  const checkFormValidity = (form: any, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.validate();
    if (form.isValid()) {
      submit(event.currentTarget);
      event.currentTarget.reset();
    }
  };

  return (
    <Grid>
      <Grid.Col lg={10} xl={5} md={12} sm={12}>
        <form
          method="POST"
          id="profileForm"
          onSubmit={(e) => checkFormValidity(profileForm, e)}
        >
          <Title order={2} size="h1" mb="md" weight={900}>
            Your Profile
          </Title>
          <TextInput
            label="First Name"
            placeholder="First Name"
            name="firstName"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps('firstName')}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps('lastName')}
          />

          <Select
            mt="md"
            withinPortal
            data={streams.map((stream) => ({
              label: stream.name,
              value: stream.id,
            }))}
            name="streamId"
            placeholder="Pick your stream"
            label="Stream"
            variant="filled"
            {...profileForm.getInputProps('streamId')}
          />

          <TextInput
            label="10th Marks"
            placeholder="10th Marks"
            name="marks10"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps('marks10')}
          />
          <TextInput
            label="12th Marks"
            placeholder="12th Marks"
            name="marks12"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps('marks12')}
          />
          <TextInput
            label="Marks in Graduation/ CGPA"
            placeholder="Marks/ CGPA"
            name="marksGrad"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps('marksGrad')}
          />
          <TextInput
            label="Marks in Post Graduation"
            placeholder="Marks in Post Graduation"
            name="marksPost"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps('marksPost')}
          />
          <TextInput
            label="Resume URL"
            placeholder="Enter your Resume url"
            mt="md"
            name="resume"
            variant="filled"
            {...profileForm.getInputProps('resume')}
          />
        </form>

        <Form
          onSubmit={(e) => checkFormValidity(projectForm, e)}
          method="POST"
          action="/user/projects"
        >
          <div className={classes.linksContainer}>
            <TextInput
              className={classes.linksInput}
              placeholder="Enter the name"
              label="Project Name"
              name="projectName"
              mt="md"
              variant="filled"
              {...projectForm.getInputProps('projectName')}
            />
            <TextInput
              className={classes.linksInput}
              placeholder="Enter the url"
              label="Project Links"
              name="projectURL"
              mt="md"
              variant="filled"
              {...projectForm.getInputProps('projectURL')}
            />
            <TypeInput
              name="projectType"
              label="Project Type"
              data={projectTypes}
              formProps={projectForm.getInputProps('projectType')}
            />
          </div>
        </Form>

        {/* <Flex mt="md"> */}
        {projects.map((project) => (
          <CustomBadge key={project.id} data={project} />
        ))}
        {/* </Flex> */}

        <Form
          onSubmit={(e) => checkFormValidity(portfolioForm, e)}
          method="POST"
          action="/user/portfolio"
        >
          <div className={classes.linksContainer}>
            <TextInput
              className={classes.linksInput}
              placeholder="Enter the url"
              label="Portfolio Link"
              name="portfolioURL"
              mt="md"
              variant="filled"
              {...portfolioForm.getInputProps('portfolioURL')}
            />
            <TypeInput
              name="portfolioType"
              label="Portfolio Type"
              data={projectTypes}
              formProps={portfolioForm.getInputProps('portfolioType')}
            />
          </div>
        </Form>
        {portfolios.map((portfolio) => (
          <CustomBadge key={portfolio.id} data={portfolio} />
        ))}

        <DropzoneButton
          title="Upload Resume/Enter URL Above"
          form={profileForm}
          fieldName="resume"
          warningText="Remember to save your profile after uploading the resume"
        />
        <Tooltip label="Save Profile">
          <Button form="profileForm" type="submit" mt="md">
            <IconFileUpload size={18} />
            &nbsp;Save Profile
          </Button>
        </Tooltip>
      </Grid.Col>
    </Grid>
  );
}

function TypeInput({
  name,
  data,
  label,
  formProps,
}: {
  name: string;
  data: string[];
  label: string;
  formProps: any;
}) {
  const { theme } = useStyles();
  return (
    <>
      <Select
        mt="md"
        style={{ width: 150, marginRight: theme.spacing.md }}
        label={label}
        name={name}
        data={data}
        {...formProps}
      />
      <Button type="submit" mt="md">
        <IconPlus size={16} /> Add
      </Button>
    </>
  );
}

function RemoveButton({ id, type }: { id: string; type: string }) {
  const submit = useSubmit();
  return (
    <ActionIcon
      onClick={() => {
        submit(null, { action: `/user/${type}/${id}`, method: 'DELETE' });
      }}
      size="xs"
      color="blue"
      radius="xl"
      variant="transparent"
    >
      <IconX size={rem(10)} />
    </ActionIcon>
  );
}

function CustomBadge({
  data,
}: {
  data: {
    id: string;
    name?: string;
    url: string;
    type: LinkType;
  };
}) {
  const { theme } = useStyles();
  return (
    <Badge
      leftSection={icons[data.type]}
      py="sm"
      mr="sm"
      mt="xs"
      rightSection={
        <RemoveButton
          id={data.id}
          type={data.name ? 'projects' : 'portfolio'}
        />
      }
    >
      <Link
        style={{ textDecoration: 'none', color: theme.colors.blue[9] }}
        to={data.url}
        target="_blank"
      >
        {data.name || data.type}
      </Link>
    </Badge>
  );
}
