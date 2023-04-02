import {
  TextInput,
  Textarea,
  Group,
  Title,
  Button,
  Grid,
  Tooltip,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IconPlus } from "@tabler/icons-react";
import { useRef } from "react";
import { Text, createStyles, rem } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";

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
}));

export function DropzoneButton({ formProps }: { formProps: any }) {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);

  return (
    <div className={classes.wrapper}>
      <TextInput
        label="Job Description"
        placeholder="Enter Job Description URL"
        mt="md"
        name="subject"
        variant="filled"
        {...formProps}
      />
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        className={classes.dropzone}
        radius="md"
        mt="md"
        accept={[MIME_TYPES.pdf]}
        maxSize={2 * 1024 ** 2}
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
            <Dropzone.Reject>Pdf file less than 2mb</Dropzone.Reject>
            <Dropzone.Idle>
              Upload Job Description/ Enter URL Above
            </Dropzone.Idle>
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

export default function AddOpportunity() {
  const form = useForm({
    initialValues: {
      position: "",
      email: "",
      subject: "",
      message: "",
      company: "",
    },
    validate: {
      position: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Grid>
      <Grid.Col lg={8} xl={4} md={12} sm={12}>
        <form onSubmit={form.onSubmit(() => {})}>
          <Title order={2} size="h1" mb="md" weight={900}>
            New Opportunity
          </Title>
          <TextInput
            label="Position"
            placeholder="Position Name"
            name="position"
            mt="md"
            variant="filled"
            {...form.getInputProps("position")}
          />
          <TextInput
            label="Company"
            placeholder="Company"
            name="company"
            mt="md"
            variant="filled"
            {...form.getInputProps("company")}
          />
          <DatePickerInput
            mt="md"
            popoverProps={{ withinPortal: true }}
            label="Deadline"
            placeholder="Deadline"
            variant="filled"
            clearable={false}
            {...form.getInputProps("deadline")}
          />
          <Textarea
            label="Description"
            placeholder="Enter Basic Description"
            name="description"
            mt="md"
            variant="filled"
            autosize
            minRows={5}
            {...form.getInputProps("description")}
          />
          <TextInput
            label="Website"
            placeholder="Company Website"
            name="url"
            mt="md"
            variant="filled"
            {...form.getInputProps("url")}
          />

          <TextInput
            label="Image"
            placeholder="Company Logo/Image URL"
            name="url"
            mt="md"
            variant="filled"
            {...form.getInputProps("url")}
          />

          <TextInput
            label="LinkedIn"
            placeholder="Enter LinkedIn URL"
            mt="md"
            name="subject"
            variant="filled"
            {...form.getInputProps("linkedin")}
          />
          <DropzoneButton formProps={form.getInputProps("description")} />

          <Tooltip label="Create new opportunity">
            <Button type="submit" mt="md" size="md">
              <IconPlus />
              Add Opportunity
            </Button>
          </Tooltip>
        </form>
      </Grid.Col>
    </Grid>
  );
}
