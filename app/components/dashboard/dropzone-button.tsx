import {
  Group,
  rem,
  Button,
  createStyles,
  Text,
  Flex,
  Space,
} from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconDownload, IconX, IconWorldUpload } from '@tabler/icons-react';
import { useRef, useState } from 'react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginBottom: theme.spacing.md,
  },

  dropzone: {
    borderWidth: rem(1),
  },

  icon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
    marginBottom: theme.spacing.md,
  },
  control: {
    alignSelf: 'center',
    // position: "absolute",
    // left: "50%",
    // transform: "translateX(-50%)",
  },
  dropzoneInside: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
  },
}));

interface DropzoneProps {
  title: string;
  form: any;
  fieldName: string;
  warningText: string;
}

export default function DropzoneButton({
  title,
  form,
  fieldName,
  warningText,
}: DropzoneProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);

  const handleFileUpload = async (files: File[]) => setSelectedFile(files[0]);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const data = await fetch('/user/upload?file-type=resume', {
          method: 'POST',
          body: new FormData(e.currentTarget),
        });
        const { url } = await data.json();
        form.setFieldValue(fieldName, url);
      }}
      action="/user/upload?file-type=resume"
      method="POST"
      encType="multipart/form-data"
    >
      <div className={classes.dropzone}>
        <Dropzone
          openRef={openRef}
          onDrop={handleFileUpload}
          name="resumeFile"
          className={classes.wrapper}
          radius="md"
          mt="md"
          accept={[MIME_TYPES.pdf]}
          maxSize={2 * 1024 ** 2}
        >
          <div
            className={classes.dropzoneInside}
            style={{ pointerEvents: 'none' }}
          >
            <Group position="center">
              <Dropzone.Accept>
                <IconDownload
                  className={classes.icon}
                  size={rem(50)}
                  color={theme.colors[theme.primaryColor][6]}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  className={classes.icon}
                  size={rem(50)}
                  color={theme.colors.red[6]}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconWorldUpload
                  size={rem(50)}
                  className={classes.icon}
                  color={
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[0]
                      : theme.black
                  }
                  stroke={1}
                />
              </Dropzone.Idle>
            </Group>

            <Text ta="center" fw={700} mb="xs" fz="lg">
              <Dropzone.Accept>Drop files here</Dropzone.Accept>
              <Dropzone.Reject>Pdf file less than 5mb</Dropzone.Reject>
              <Dropzone.Idle>{title}</Dropzone.Idle>
            </Text>
            <Button
              className={classes.control}
              size="xs"
              variant="outline"
              onClick={() => openRef.current?.()}
            >
              Select file
            </Button>
            <Text ta="center" fz="sm" fw="600" mt="xs">
              Drag&apos;n&apos;drop files here to upload. We can accept only{' '}
              <i>.pdf</i> files that are less than 2mb in size.
            </Text>
            {warningText && (
              <Text ta="center" size="xs">
                ** {warningText}
              </Text>
            )}
          </div>
        </Dropzone>
        <Flex justify="space-between" align="center">
          {!selectedFile && <Space w="md" />}
          {selectedFile && (
            <Flex align="center">
              <Space w="md" />
              <p>{selectedFile.name}</p>
            </Flex>
          )}
          <Button type="submit">Upload</Button>
        </Flex>
      </div>
    </form>
  );
}
