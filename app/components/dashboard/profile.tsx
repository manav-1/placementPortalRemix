import {
  TextInput,
  Title,
  Button,
  Grid,
  Tooltip,
  Select,
  Badge,
  Flex,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileUpload,
  IconFolder,
  IconGlobe,
  IconLink,
  IconPlus,
} from "@tabler/icons-react";
import { createStyles, rem } from "@mantine/core";
import { Form, Link, useLoaderData, useSubmit } from "@remix-run/react";
import type { Project, Stream, UserProfile, Portfolio } from "@prisma/client";
import { LinkType } from "@prisma/client";
import type { FormEvent } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginBottom: rem(30),
  },

  dropzone: {
    borderWidth: rem(1),
    paddingBottom: rem(50),
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: rem(250),
    left: `calc(50% - ${rem(125)})`,
    bottom: rem(-20),
  },

  linksContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  linksInput: {
    flex: 1,
    marginRight: theme.spacing.md,
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

const icons = {
  [LinkType.GITHUB]: <IconBrandGithub size={16} />,
  [LinkType.LINKEDIN]: <IconBrandLinkedin size={16} />,
  [LinkType.WEBSITE]: <IconGlobe size={16} />,
  [LinkType.PROJECT]: <IconFolder size={16} />,
  [LinkType.BEHANCE]: <IconBrandBehance size={16} />,
  [LinkType.OTHER]: <IconLink size={16} />,
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
      firstName: isNotEmpty("First Name is required"),
      lastName: isNotEmpty("Last Name is required"),
      streamId: isNotEmpty("Stream is required"),
    },
  });

  const projectTypes = Object.keys(LinkType);

  const projectForm = useForm({
    initialValues: {
      projectName: "",
      projectURL: "",
      projectType: projectTypes[0],
    },
    validate: {
      projectName: isNotEmpty("Project Name is required"),
      projectURL: isNotEmpty("Project Link is required"),
      projectType: isNotEmpty("Project Type is required"),
    },
    validateInputOnChange: true,
  });
  const portfolioForm = useForm({
    initialValues: {
      portfolioURL: "",
      portfolioType: projectTypes[0],
    },
    validate: {
      portfolioURL: isNotEmpty("Project Description is required"),
      portfolioType: isNotEmpty("Project Type is required"),
    },
    validateInputOnChange: true,
  });
  const submit = useSubmit();

  const checkFormValidity = (form: any, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.validate();
    if (form.isValid()) {
      submit(event.currentTarget);
    }
  };

  return (
    <Grid>
      <Grid.Col lg={10} xl={5} md={12} sm={12}>
        <form method="POST" onSubmit={(e) => checkFormValidity(profileForm, e)}>
          <Title order={2} size="h1" mb="md" weight={900}>
            Your Profile
          </Title>
          <TextInput
            label="First Name"
            placeholder="First Name"
            name="firstName"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps("firstName")}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps("lastName")}
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
            {...profileForm.getInputProps("streamId")}
          />

          <TextInput
            label="10th Marks"
            placeholder="10th Marks"
            name="marks10"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps("marks10")}
          />
          <TextInput
            label="12th Marks"
            placeholder="12th Marks"
            name="marks12"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps("marks12")}
          />
          <TextInput
            label="Marks in Graduation/ CGPA"
            placeholder="Marks/ CGPA"
            name="marksGrad"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps("marksGrad")}
          />
          <TextInput
            label="Marks in Post Graduation"
            placeholder="Marks in Post Graduation"
            name="marksPost"
            mt="md"
            variant="filled"
            {...profileForm.getInputProps("marksPost")}
          />
          <TextInput
            label="Resume URL"
            placeholder="Enter your Resume url"
            mt="md"
            name="resume"
            variant="filled"
            {...profileForm.getInputProps("resume")}
          />
          <Tooltip label="Save Profile">
            <Button type="submit" mt="md">
              <IconFileUpload size={18} />
              &nbsp;Save Profile
            </Button>
          </Tooltip>
        </form>

        <Form
          onSubmit={(e) => checkFormValidity(projectForm, e)}
          method="POST"
          action="/user/projects"
        >
          <div className={classes.linksContainer}>
            <TextInput
              className={classes.linksInput}
              placeholder={"Enter the name"}
              label={"Project Name"}
              name="projectName"
              mt="md"
              variant="filled"
              {...projectForm.getInputProps("projectName")}
            />
            <TextInput
              className={classes.linksInput}
              placeholder={"Enter the url"}
              label={"Project Links"}
              name="projectURL"
              mt="md"
              variant="filled"
              {...projectForm.getInputProps("projectURL")}
            />
            <TypeInput
              name="projectType"
              label="Project Type"
              data={projectTypes}
              formProps={projectForm.getInputProps("projectType")}
            />
          </div>
        </Form>

        <Flex mt="md">
          {projects.map((project) => (
            <CustomBadge key={project.id} data={project} />
          ))}
        </Flex>

        <Form
          onSubmit={(e) => checkFormValidity(portfolioForm, e)}
          method="POST"
          action="/user/projects"
        >
          <div className={classes.linksContainer}>
            <TextInput
              className={classes.linksInput}
              placeholder={"Enter the url"}
              label={"Portfolio Link"}
              name="portfolioURL"
              mt="md"
              variant="filled"
              {...portfolioForm.getInputProps("portfolioURL")}
            />
            <TypeInput
              name="portfolioType"
              label="Portfolio Type"
              data={projectTypes}
              formProps={portfolioForm.getInputProps("portfolioType")}
            />
          </div>
        </Form>
        <Flex mt="md">
          {portfolios.map((portfolio) => (
            <CustomBadge key={portfolio.id} data={portfolio} />
          ))}
        </Flex>
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

function CustomBadge({
  data,
}: {
  data: { url: string; name?: string; type: LinkType };
}) {
  return (
    <Link to={data.url} target="_blank">
      <Badge mr={"xs"} px="md" py="sm">
        <Flex>
          {icons[data.type]}&nbsp; {data.name || data.type}
        </Flex>
      </Badge>
    </Link>
  );
}

// export function DropzoneButton({ resumeProps, resumeFileProps, form }: any) {
//   const { classes } = useStyles();
//   // const openRef = useRef<() => void>(null);

//   return (
//     <div className={classes.wrapper}>
//       <TextInput
//         label="Resume"
//         placeholder="Enter your Resume url"
//         mt="md"
//         name="resume"
//         readOnly
//         variant="filled"
//         {...resumeProps}
//       />
//       {/* Will add support for this as remix support file upload clear */}
//       {/* <Dropzone
//         openRef={openRef}
//         onDrop={(files) => {
//           const [resumeFile] = files;
//           console.log(resumeFile);
//           form.setFieldValue("resume", resumeFile.name);
//           form.setFieldValue("resumeFile", resumeFile);
//         }}
//         name="resumeFile"
//         className={classes.dropzone}
//         radius="md"
//         mt="md"
//         accept={[MIME_TYPES.pdf]}
//         maxSize={5 * 1024 ** 2}
//         {...resumeFileProps}
//       >
//         <div style={{ pointerEvents: "none" }}>
//           <Group position="center">
//             <Dropzone.Accept>
//               <IconDownload
//                 size={rem(50)}
//                 color={theme.colors[theme.primaryColor][6]}
//                 stroke={1.5}
//               />
//             </Dropzone.Accept>
//             <Dropzone.Reject>
//               <IconX size={rem(50)} color={theme.colors.red[6]} stroke={1.5} />
//             </Dropzone.Reject>
//             <Dropzone.Idle>
//               <IconCloudUpload
//                 size={rem(50)}
//                 color={
//                   theme.colorScheme === "dark"
//                     ? theme.colors.dark[0]
//                     : theme.black
//                 }
//                 stroke={1.5}
//               />
//             </Dropzone.Idle>
//           </Group>

//           <Text ta="center" fw={700} fz="lg" mt="xl">
//             <Dropzone.Accept>Drop files here</Dropzone.Accept>
//             <Dropzone.Reject>Pdf file less than 5mb</Dropzone.Reject>
//             <Dropzone.Idle>Upload Resume/ Enter URL Above</Dropzone.Idle>
//           </Text>
//           <Text ta="center" fz="sm" mt="xs" c="dimmed">
//             Drag&apos;n&apos;drop files here to upload. We can accept only{" "}
//             <i>.pdf</i> files that are less than 2mb in size.
//           </Text>
//         </div>
//       </Dropzone>

//       <Button
//         className={classes.control}
//         size="md"
//         onClick={() => openRef.current?.()}
//       >
//         Select files
//       </Button> */}
//     </div>
//   );
// }

// export function TypeInput({ name }) {
//   const data = Object.keys(LinkType);

//   const [selected, setSelected] = useState(data[0]);
//   const items = data.map((item) => (
//     <Menu.Item onClick={() => setSelected(item)} key={item}>
//       {item}
//     </Menu.Item>
//   ));

//   return (
//     <Menu radius="md" withinPortal>
//       <Menu.Target>
//         <Button>
//           <span>{selected}</span> &nbsp;
//           <IconChevronDown size="1rem" stroke={1.5} />
//         </Button>
//       </Menu.Target>
//       <Menu.Dropdown>{items}</Menu.Dropdown>
//     </Menu>
//   );
// }

// export function LinkInput({
//   placeholder,
//   label,
//   onPress,
// }: {
//   placeholder: string;
//   label: string;
//   onPress: any;
// }) {
//   const { classes } = useStyles();

//   return (
//     <div className={classes.linksContainer}>
//       <TextInput
//         className={classes.linksInput}
//         placeholder={placeholder}
//         label={label}
//         mt="md"
//         variant="filled"
//         rightSection={<TypeInput />}
//         rightSectionWidth={92}
//       />

//       <Button onClick={onPress}>
//         <IconPlus size={16} /> Add
//       </Button>
//     </div>
//   );
// }
