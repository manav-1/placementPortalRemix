import {
  TextInput,
  Group,
  Title,
  Button,
  Grid,
  Tooltip,
  Select,
  Menu,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandLinkedin,
  IconChevronDown,
  IconFileUpload,
  IconPlus,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Text, createStyles, rem } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import { useLoaderData } from "@remix-run/react";
import type { Stream, UserProfile } from "@prisma/client";

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
  },
  linksInput: {
    flex: 1,
    marginRight: theme.spacing.md,
  },
}));

export function DropzoneButton({ resumeProps, resumeFileProps, form }: any) {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);

  return (
    <div className={classes.wrapper}>
      <TextInput
        label="Resume"
        placeholder="Resume URL"
        mt="md"
        name="resume"
        readOnly
        variant="filled"
        {...resumeProps}
      />
      <Dropzone
        openRef={openRef}
        onDrop={(files) => {
          const [resumeFile] = files;
          form.setFieldValue("resume", resumeFile.name);

          // form.setFieldValue("resumeFile", resumeFile);
        }}
        name="resumeFile"
        className={classes.dropzone}
        radius="md"
        mt="md"
        accept={[MIME_TYPES.pdf]}
        maxSize={5 * 1024 ** 2}
        {...resumeFileProps}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group position="center">
            <Dropzone.Accept>
              <IconDownload
                size={rem(50)}
                color={theme.colors[theme.primaryColor][6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={rem(50)} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                size={rem(50)}
                color={
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black
                }
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Pdf file less than 5mb</Dropzone.Reject>
            <Dropzone.Idle>Upload Resume/ Enter URL Above</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            Drag&apos;n&apos;drop files here to upload. We can accept only{" "}
            <i>.pdf</i> files that are less than 2mb in size.
          </Text>
        </div>
      </Dropzone>

      <Button
        className={classes.control}
        size="md"
        onClick={() => openRef.current?.()}
      >
        Select files
      </Button>
    </div>
  );
}

export function TypeInput() {
  const data = [
    {
      label: "Github",
      icon: <IconBrandGithub size={16} />,
    },
    {
      label: "Linkedin",
      icon: <IconBrandLinkedin size={16} />,
    },
    {
      label: "Behance",
      icon: <IconBrandBehance size={16} />,
    },
  ];

  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      icon={item.icon}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu radius="md" withinPortal>
      <Menu.Target>
        <Button>
          {selected.icon} &nbsp;
          <span>{selected.label}</span>
          <IconChevronDown size="1rem" stroke={1.5} />
        </Button>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}

export function LinkInput({
  placeholder,
  label,
  onPress,
}: {
  placeholder: string;
  label: string;
  onPress: any;
}) {
  const { classes } = useStyles();

  return (
    <div className={classes.linksContainer}>
      <TextInput
        className={classes.linksInput}
        placeholder={placeholder}
        label={label}
        mt="md"
        variant="filled"
        rightSection={<TypeInput />}
        rightSectionWidth={92}
      />

      <Button onClick={onPress}>
        <IconPlus size={16} /> Add
      </Button>
    </div>
  );
}

export default function Profile() {
  const { userProfile, streams } = useLoaderData<{
    userProfile: UserProfile;
    streams: Stream[];
  }>();
  const form = useForm({
    initialValues: {
      firstName: userProfile?.firstName,
      lastName: userProfile?.lastName,
      streamId: userProfile?.streamId,
      marks10: userProfile?.marks10,
      marks12: userProfile?.marks12,
      marksGrad: userProfile?.marksGrad,
      marksPost: userProfile?.marksPost,
      resume: userProfile?.resume,
      resumeFile: null,
    },
    validate: {},
  });

  return (
    <Grid>
      <Grid.Col lg={10} xl={5} md={12} sm={12}>
        <form
          method="POST"
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   const elements = e.currentTarget.elements;
          //   console.log(elements);
          // }}
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
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
            mt="md"
            variant="filled"
            {...form.getInputProps("lastName")}
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
            {...form.getInputProps("streamId")}
          />

          <TextInput
            label="10th Marks"
            placeholder="10th Marks"
            name="marks10"
            mt="md"
            variant="filled"
            {...form.getInputProps("marks10")}
          />
          <TextInput
            label="12th Marks"
            placeholder="12th Marks"
            name="marks12"
            mt="md"
            variant="filled"
            {...form.getInputProps("marks12")}
          />
          <TextInput
            label="Marks in Graduation/ CGPA"
            placeholder="Marks/ CGPA"
            name="marksGrad"
            mt="md"
            variant="filled"
            {...form.getInputProps("marksGrad")}
          />
          <TextInput
            label="Marks in Post Graduation"
            placeholder="Marks in Post Graduation"
            name="marksPost"
            mt="md"
            variant="filled"
            {...form.getInputProps("marksPost")}
          />
          <LinkInput
            placeholder="Enter the url"
            label="Project Links"
            onPress={() => {}}
          />
          <LinkInput
            placeholder="Enter the url"
            label="Portfolio Links"
            onPress={() => {}}
          />

          <DropzoneButton
            resumeProps={form.getInputProps("resume")}
            resumeFileProps={form.getInputProps("resumeFile")}
            form={form}
          />

          <Tooltip label="Save Profile">
            <Button type="submit" mt="md" size="md">
              <IconFileUpload size={18} />
              &nbsp;Save Profile
            </Button>
          </Tooltip>
        </form>
      </Grid.Col>
    </Grid>
  );
}
