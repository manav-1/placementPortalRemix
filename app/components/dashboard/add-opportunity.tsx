import {
  TextInput,
  Textarea,
  Title,
  Button,
  Grid,
  Tooltip,
  MultiSelect,
  Checkbox,
  Select,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import { IconPlus } from '@tabler/icons-react';
import { useLoaderData, useSubmit } from '@remix-run/react';
import { OpportunityType, type Stream } from '@prisma/client';
import type { FormEvent } from 'react';
import { AddOpportunitySchema } from '~/utils/admin/types';

export default function AddOpportunity() {
  const { streams } = useLoaderData<{
    streams: Stream[];
  }>();
  const form = useForm({
    initialValues: {
      name: '',
      company: '',
      description: '',
      url: '',
      companyImage: '',
      linkedin: '',
      jobDesc: '',
      deadline: new Date(),
      type: '',
      streams: [],
      isActive: false,
    },
    validate: zodResolver(AddOpportunitySchema),
  });

  const submit = useSubmit();

  const checkFormValidity = (
    formHook: any,
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    formHook.validate();
    if (formHook.isValid()) {
      submit(event.currentTarget);
      event.currentTarget.reset();
    }
  };

  return (
    <Grid>
      <Grid.Col lg={10} xl={5} md={12} sm={12}>
        <form method="POST" onSubmit={(e) => checkFormValidity(form, e)}>
          <Title order={2} size="h1" mb="md" weight={900}>
            New Opportunity
          </Title>
          <TextInput
            label="Position"
            placeholder="Position Name"
            name="name"
            mt="md"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Company"
            placeholder="Company"
            name="company"
            mt="md"
            variant="filled"
            {...form.getInputProps('company')}
          />
          <DatePickerInput
            mt="md"
            popoverProps={{ withinPortal: true }}
            label="Deadline"
            name="deadline"
            placeholder="Deadline"
            variant="filled"
            clearable={false}
            {...form.getInputProps('deadline')}
          />
          <Textarea
            label="Description"
            placeholder="Enter Basic Description"
            name="description"
            mt="md"
            variant="filled"
            autosize
            minRows={5}
            {...form.getInputProps('description')}
          />
          <MultiSelect
            mt="md"
            withinPortal
            data={streams.map((stream) => ({
              label: stream.name,
              value: stream.id,
            }))}
            name="streams"
            placeholder="Pick streams that can apply for opportunity"
            label="Stream"
            variant="filled"
            {...form.getInputProps('streams')}
          />
          <Select
            mt="md"
            withinPortal
            data={Object.values(OpportunityType)}
            name="type"
            placeholder="Select the type of opportunity"
            label="Opportunity Type"
            variant="filled"
            {...form.getInputProps('type')}
          />
          <TextInput
            label="Website"
            placeholder="Company Website"
            name="url"
            mt="md"
            variant="filled"
            {...form.getInputProps('url')}
          />

          <TextInput
            label="Image"
            placeholder="Company Logo/Image URL"
            name="companyImage"
            mt="md"
            variant="filled"
            {...form.getInputProps('companyImage')}
          />

          <TextInput
            label="LinkedIn"
            placeholder="Enter LinkedIn URL"
            mt="md"
            name="linkedin"
            variant="filled"
            {...form.getInputProps('linkedin')}
          />
          <TextInput
            label="Job Description"
            placeholder="Enter Job Description URL"
            mt="md"
            name="jobDesc"
            variant="filled"
            {...form.getInputProps('jobDesc')}
          />
          <Checkbox
            mt="md"
            label="Is this job currently active?"
            name="isActive"
            {...form.getInputProps('isActive')}
          />
          {/* <DropzoneButton formProps={form.getInputProps("description")} /> */}

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

// const useStyles = createStyles((theme) => ({
//   wrapper: {
//     position: "relative",
//     marginBottom: rem(30),
//   },

//   dropzone: {
//     borderWidth: rem(1),
//     paddingBottom: rem(50),
//   },

//   icon: {
//     color:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[3]
//         : theme.colors.gray[4],
//   },

//   control: {
//     position: "absolute",
//     width: rem(250),
//     left: `calc(50% - ${rem(125)})`,
//     bottom: rem(-20),
//   },
// }));

// export function DropzoneButton({ formProps }: { formProps: any }) {
//   const { classes, theme } = useStyles();
//   const openRef = useRef<() => void>(null);

//   return (
//     <div className={classes.wrapper}>
//       <TextInput
//         label="Job Description"
//         placeholder="Enter Job Description URL"
//         mt="md"
//         name="subject"
//         variant="filled"
//         {...formProps}
//       />
//       <Dropzone
//         openRef={openRef}
//         onDrop={() => {}}
//         className={classes.dropzone}
//         radius="md"
//         mt="md"
//         accept={[MIME_TYPES.pdf]}
//         maxSize={2 * 1024 ** 2}
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
//             <Dropzone.Reject>Pdf file less than 2mb</Dropzone.Reject>
//             <Dropzone.Idle>
//               Upload Job Description/ Enter URL Above
//             </Dropzone.Idle>
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
//       </Button>
//     </div>
//   );
// }
