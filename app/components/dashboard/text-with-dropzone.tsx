import { Button, Flex, Text, TextInput } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { IconClick } from '@tabler/icons-react';
import { useRef, useState } from 'react';

export default function TextWithDropzone(props: any) {
  const openRef = useRef<() => void>(null);
  const { onChange, name = 'files' } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileDrop = async ([files]: File[]) => {
    if (!files) return;
    setSelectedFile(files);
    const formData = new FormData();
    formData.append('file', files);
    const data = await fetch(`/user/upload?file-type=${name}`, {
      method: 'POST',
      body: formData,
    });
    const { url } = await data.json();
    onChange(url);
  };

  return (
    <Dropzone
      openRef={openRef}
      onDrop={handleFileDrop}
      activateOnClick={false}
      name="files"
      styles={{ inner: { pointerEvents: 'all' } }}
      style={{ padding: 0, border: 0 }}
    >
      <Flex align="flex-end">
        <TextInput
          w="100%"
          description="Enter the url in field or upload a file"
          {...props}
        />
        <Button size="sm" onClick={() => openRef.current?.()}>
          <IconClick />
        </Button>
      </Flex>
      {selectedFile && (
        <Text size="sm">Selected File: {selectedFile.name}</Text>
      )}
    </Dropzone>
  );
}
